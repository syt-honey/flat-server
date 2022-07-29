import { FilePayload } from "../../../model/cloudStorage/Types";
import { FileResourceType } from "../../../model/cloudStorage/Constants";

export type CloudStorageInfoListParamsConfig = {
    order: "ASC" | "DESC";
    page: number;
    size: number;
    directoryPath: string;
};

export type CloudStorageInfoList = {
    fileUUID: string;
    fileName: string;
    fileSize: number;
    fileURL: string;
    createAt: Date;
    payload: FilePayload;
    resourceType: FileResourceType;
};

export type CloudStorageInfoListReturn = {
    fileUUID: string;
    fileName: string;
    fileSize: number;
    fileURL: string;
    createAt: number;
    payload: FilePayload;
    resourceType: FileResourceType;
};

export type ListFilesAndTotalUsageByUserUUIDReturn = {
    totalUsage: number;
    items: CloudStorageInfoListReturn[];
    canCreateDirectory: boolean;
};

export type CloudStorageInfoFindFilesInfoReturn = Map<
    string,
    Omit<CloudStorageInfoFindFileInfoReturn, "fileUUID">
>;

export type FilesInfo = CloudStorageInfoFindFilesInfoReturn;

export type CloudStorageInfoFindFileInfoReturn = {
    fileUUID: string;
    directoryPath: string;
    fileName: string;
    fileSize: number;
    fileURL: string;
    resourceType: FileResourceType;
};