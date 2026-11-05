import * as $dara from '@darabonba/typescript';
import OpenApi from '@alicloud/openapi-core';
import { $OpenApiUtil } from '@alicloud/openapi-core';
import * as $_model from './models/model';
export * from './models/model';
export default class Client extends OpenApi {
    constructor(config: $OpenApiUtil.Config);
    getEndpoint(productId: string, regionId: string, endpointRule: string, network: string, suffix: string, endpointMap: {
        [key: string]: string;
    }, endpoint: string): string;
    /**
     * Allows over-the-air updates for cloud computers.
     *
     * @param request - ApproveFotaUpdateRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ApproveFotaUpdateResponse
     */
    approveFotaUpdateWithOptions(request: $_model.ApproveFotaUpdateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ApproveFotaUpdateResponse>;
    /**
     * Allows over-the-air updates for cloud computers.
     *
     * @param request - ApproveFotaUpdateRequest
     * @returns ApproveFotaUpdateResponse
     */
    approveFotaUpdate(request: $_model.ApproveFotaUpdateRequest): Promise<$_model.ApproveFotaUpdateResponse>;
    /**
     * Modifies the password of a user.
     *
     * @param request - ChangePasswordRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ChangePasswordResponse
     */
    changePasswordWithOptions(request: $_model.ChangePasswordRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ChangePasswordResponse>;
    /**
     * Modifies the password of a user.
     *
     * @param request - ChangePasswordRequest
     * @returns ChangePasswordResponse
     */
    changePassword(request: $_model.ChangePasswordRequest): Promise<$_model.ChangePasswordResponse>;
    /**
     * Deletes a specified fingerprint template.
     *
     * @param request - DeleteFingerPrintTemplateRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DeleteFingerPrintTemplateResponse
     */
    deleteFingerPrintTemplateWithOptions(request: $_model.DeleteFingerPrintTemplateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteFingerPrintTemplateResponse>;
    /**
     * Deletes a specified fingerprint template.
     *
     * @param request - DeleteFingerPrintTemplateRequest
     * @returns DeleteFingerPrintTemplateResponse
     */
    deleteFingerPrintTemplate(request: $_model.DeleteFingerPrintTemplateRequest): Promise<$_model.DeleteFingerPrintTemplateResponse>;
    /**
     * Queries directory details.
     *
     * @param request - DescribeDirectoriesRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeDirectoriesResponse
     */
    describeDirectoriesWithOptions(request: $_model.DescribeDirectoriesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDirectoriesResponse>;
    /**
     * Queries directory details.
     *
     * @param request - DescribeDirectoriesRequest
     * @returns DescribeDirectoriesResponse
     */
    describeDirectories(request: $_model.DescribeDirectoriesRequest): Promise<$_model.DescribeDirectoriesResponse>;
    /**
     * Queries fingerprint templates.
     *
     * @param request - DescribeFingerPrintTemplatesRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeFingerPrintTemplatesResponse
     */
    describeFingerPrintTemplatesWithOptions(request: $_model.DescribeFingerPrintTemplatesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeFingerPrintTemplatesResponse>;
    /**
     * Queries fingerprint templates.
     *
     * @param request - DescribeFingerPrintTemplatesRequest
     * @returns DescribeFingerPrintTemplatesResponse
     */
    describeFingerPrintTemplates(request: $_model.DescribeFingerPrintTemplatesRequest): Promise<$_model.DescribeFingerPrintTemplatesResponse>;
    /**
     * Queries the details of cloud computers in multiple regions. Currently, only regions in the Chinese mainland are supported.
     *
     * @remarks
     * - This API operation uses a centralized domain name. The endpoint is in Shanghai, and calls from other regions are not supported.
     * - The cloud computer status information in this API operation has a delay of 1 to 3 seconds compared to the actual value.
     *
     * @param request - DescribeGlobalDesktopsRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeGlobalDesktopsResponse
     */
    describeGlobalDesktopsWithOptions(request: $_model.DescribeGlobalDesktopsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeGlobalDesktopsResponse>;
    /**
     * Queries the details of cloud computers in multiple regions. Currently, only regions in the Chinese mainland are supported.
     *
     * @remarks
     * - This API operation uses a centralized domain name. The endpoint is in Shanghai, and calls from other regions are not supported.
     * - The cloud computer status information in this API operation has a delay of 1 to 3 seconds compared to the actual value.
     *
     * @param request - DescribeGlobalDesktopsRequest
     * @returns DescribeGlobalDesktopsResponse
     */
    describeGlobalDesktops(request: $_model.DescribeGlobalDesktopsRequest): Promise<$_model.DescribeGlobalDesktopsResponse>;
    /**
     * Query the details of an office network.
     *
     * @param request - DescribeOfficeSitesRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeOfficeSitesResponse
     */
    describeOfficeSitesWithOptions(request: $_model.DescribeOfficeSitesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeOfficeSitesResponse>;
    /**
     * Query the details of an office network.
     *
     * @param request - DescribeOfficeSitesRequest
     * @returns DescribeOfficeSitesResponse
     */
    describeOfficeSites(request: $_model.DescribeOfficeSitesRequest): Promise<$_model.DescribeOfficeSitesResponse>;
    /**
     * Queries the Alibaba Cloud region information supported by WUYING Workspace by calling DescribeRegions.
     *
     * @param request - DescribeRegionsRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeRegionsResponse
     */
    describeRegionsWithOptions(request: $_model.DescribeRegionsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeRegionsResponse>;
    /**
     * Queries the Alibaba Cloud region information supported by WUYING Workspace by calling DescribeRegions.
     *
     * @param request - DescribeRegionsRequest
     * @returns DescribeRegionsResponse
     */
    describeRegions(request: $_model.DescribeRegionsRequest): Promise<$_model.DescribeRegionsResponse>;
    /**
     * Queries the list and details of snapshots for a cloud desktop.
     *
     * @param request - DescribeSnapshotsRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeSnapshotsResponse
     */
    describeSnapshotsWithOptions(request: $_model.DescribeSnapshotsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSnapshotsResponse>;
    /**
     * Queries the list and details of snapshots for a cloud desktop.
     *
     * @param request - DescribeSnapshotsRequest
     * @returns DescribeSnapshotsResponse
     */
    describeSnapshots(request: $_model.DescribeSnapshotsRequest): Promise<$_model.DescribeSnapshotsResponse>;
    /**
     * Queries the list of user resources.
     *
     * @remarks
     * Before you call this operation, make sure that you fully understand the resource types and product types of WUYING Workspace.
     *
     * @param request - DescribeUserResourcesRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeUserResourcesResponse
     */
    describeUserResourcesWithOptions(request: $_model.DescribeUserResourcesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeUserResourcesResponse>;
    /**
     * Queries the list of user resources.
     *
     * @remarks
     * Before you call this operation, make sure that you fully understand the resource types and product types of WUYING Workspace.
     *
     * @param request - DescribeUserResourcesRequest
     * @returns DescribeUserResourcesResponse
     */
    describeUserResources(request: $_model.DescribeUserResourcesRequest): Promise<$_model.DescribeUserResourcesResponse>;
    /**
     * Encrypts a user password.
     *
     * @param request - EncryptPasswordRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns EncryptPasswordResponse
     */
    encryptPasswordWithOptions(request: $_model.EncryptPasswordRequest, runtime: $dara.RuntimeOptions): Promise<$_model.EncryptPasswordResponse>;
    /**
     * Encrypts a user password.
     *
     * @param request - EncryptPasswordRequest
     * @returns EncryptPasswordResponse
     */
    encryptPassword(request: $_model.EncryptPasswordRequest): Promise<$_model.EncryptPasswordResponse>;
    /**
     * Obtain the logon credential for Enterprise File Gateway.
     *
     * @param request - GetCloudDriveServiceMountTokenRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns GetCloudDriveServiceMountTokenResponse
     */
    getCloudDriveServiceMountTokenWithOptions(request: $_model.GetCloudDriveServiceMountTokenRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetCloudDriveServiceMountTokenResponse>;
    /**
     * Obtain the logon credential for Enterprise File Gateway.
     *
     * @param request - GetCloudDriveServiceMountTokenRequest
     * @returns GetCloudDriveServiceMountTokenResponse
     */
    getCloudDriveServiceMountToken(request: $_model.GetCloudDriveServiceMountTokenRequest): Promise<$_model.GetCloudDriveServiceMountTokenResponse>;
    /**
     * Retrieves the connection credentials for a cloud desktop.
     *
     * @remarks
     * When you call this operation for the first time, the system returns a `TaskId`. Use this `TaskId` to continue calling this operation until the value of `TaskStatus` changes to `FINISHED` or `FAILED`. When `TaskStatus` is `FINISHED`, the value of `Ticket` is the ticket that the client uses to connect to the cloud desktop.
     *
     * @param request - GetConnectionTicketRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns GetConnectionTicketResponse
     */
    getConnectionTicketWithOptions(request: $_model.GetConnectionTicketRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetConnectionTicketResponse>;
    /**
     * Retrieves the connection credentials for a cloud desktop.
     *
     * @remarks
     * When you call this operation for the first time, the system returns a `TaskId`. Use this `TaskId` to continue calling this operation until the value of `TaskStatus` changes to `FINISHED` or `FAILED`. When `TaskStatus` is `FINISHED`, the value of `Ticket` is the ticket that the client uses to connect to the cloud desktop.
     *
     * @param request - GetConnectionTicketRequest
     * @returns GetConnectionTicketResponse
     */
    getConnectionTicket(request: $_model.GetConnectionTicketRequest): Promise<$_model.GetConnectionTicketResponse>;
    /**
     * Retrieves logon credentials.
     *
     * @param tmpReq - GetLoginTokenRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns GetLoginTokenResponse
     */
    getLoginTokenWithOptions(tmpReq: $_model.GetLoginTokenRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetLoginTokenResponse>;
    /**
     * Retrieves logon credentials.
     *
     * @param request - GetLoginTokenRequest
     * @returns GetLoginTokenResponse
     */
    getLoginToken(request: $_model.GetLoginTokenRequest): Promise<$_model.GetLoginTokenResponse>;
    /**
     * 查询Agent需要上报的配置信息
     *
     * @param request - QueryEdsAgentReportConfigRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns QueryEdsAgentReportConfigResponse
     */
    queryEdsAgentReportConfigWithOptions(request: $_model.QueryEdsAgentReportConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryEdsAgentReportConfigResponse>;
    /**
     * 查询Agent需要上报的配置信息
     *
     * @param request - QueryEdsAgentReportConfigRequest
     * @returns QueryEdsAgentReportConfigResponse
     */
    queryEdsAgentReportConfig(request: $_model.QueryEdsAgentReportConfigRequest): Promise<$_model.QueryEdsAgentReportConfigResponse>;
    /**
     * You can restart one or more cloud desktops.
     *
     * @param request - RebootDesktopsRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns RebootDesktopsResponse
     */
    rebootDesktopsWithOptions(request: $_model.RebootDesktopsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RebootDesktopsResponse>;
    /**
     * You can restart one or more cloud desktops.
     *
     * @param request - RebootDesktopsRequest
     * @returns RebootDesktopsResponse
     */
    rebootDesktops(request: $_model.RebootDesktopsRequest): Promise<$_model.RebootDesktopsResponse>;
    /**
     * Refreshes the logon credential.
     *
     * @remarks
     * A logon credential (LoginToken) is valid for 8 hours. If the end user does not log off from the client within 8 hours, the client must refresh the logon credential.
     *
     * @param request - RefreshLoginTokenRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns RefreshLoginTokenResponse
     */
    refreshLoginTokenWithOptions(request: $_model.RefreshLoginTokenRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RefreshLoginTokenResponse>;
    /**
     * Refreshes the logon credential.
     *
     * @remarks
     * A logon credential (LoginToken) is valid for 8 hours. If the end user does not log off from the client within 8 hours, the client must refresh the logon credential.
     *
     * @param request - RefreshLoginTokenRequest
     * @returns RefreshLoginTokenResponse
     */
    refreshLoginToken(request: $_model.RefreshLoginTokenRequest): Promise<$_model.RefreshLoginTokenResponse>;
    /**
     * 上报edsAgent的信息
     *
     * @param request - ReportEdsAgentInfoRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ReportEdsAgentInfoResponse
     */
    reportEdsAgentInfoWithOptions(request: $_model.ReportEdsAgentInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ReportEdsAgentInfoResponse>;
    /**
     * 上报edsAgent的信息
     *
     * @param request - ReportEdsAgentInfoRequest
     * @returns ReportEdsAgentInfoResponse
     */
    reportEdsAgentInfo(request: $_model.ReportEdsAgentInfoRequest): Promise<$_model.ReportEdsAgentInfoResponse>;
    /**
     * Reports the session status.
     *
     * @param request - ReportSessionStatusRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ReportSessionStatusResponse
     */
    reportSessionStatusWithOptions(request: $_model.ReportSessionStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ReportSessionStatusResponse>;
    /**
     * Reports the session status.
     *
     * @param request - ReportSessionStatusRequest
     * @returns ReportSessionStatusResponse
     */
    reportSessionStatus(request: $_model.ReportSessionStatusRequest): Promise<$_model.ReportSessionStatusResponse>;
    /**
     * Resets a user password.
     *
     * @param request - ResetPasswordRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ResetPasswordResponse
     */
    resetPasswordWithOptions(request: $_model.ResetPasswordRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ResetPasswordResponse>;
    /**
     * Resets a user password.
     *
     * @param request - ResetPasswordRequest
     * @returns ResetPasswordResponse
     */
    resetPassword(request: $_model.ResetPasswordRequest): Promise<$_model.ResetPasswordResponse>;
    /**
     * Restores the disk data corresponding to a snapshot.
     *
     * @param request - ResetSnapshotRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ResetSnapshotResponse
     */
    resetSnapshotWithOptions(request: $_model.ResetSnapshotRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ResetSnapshotResponse>;
    /**
     * Restores the disk data corresponding to a snapshot.
     *
     * @param request - ResetSnapshotRequest
     * @returns ResetSnapshotResponse
     */
    resetSnapshot(request: $_model.ResetSnapshotRequest): Promise<$_model.ResetSnapshotResponse>;
    /**
     * Sends a logon verification code.
     *
     * @param request - SendTokenCodeRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns SendTokenCodeResponse
     */
    sendTokenCodeWithOptions(request: $_model.SendTokenCodeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SendTokenCodeResponse>;
    /**
     * Sends a logon verification code.
     *
     * @param request - SendTokenCodeRequest
     * @returns SendTokenCodeResponse
     */
    sendTokenCode(request: $_model.SendTokenCodeRequest): Promise<$_model.SendTokenCodeResponse>;
    /**
     * Sets a fingerprint template.
     *
     * @param request - SetFingerPrintTemplateRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns SetFingerPrintTemplateResponse
     */
    setFingerPrintTemplateWithOptions(request: $_model.SetFingerPrintTemplateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SetFingerPrintTemplateResponse>;
    /**
     * Sets a fingerprint template.
     *
     * @param request - SetFingerPrintTemplateRequest
     * @returns SetFingerPrintTemplateResponse
     */
    setFingerPrintTemplate(request: $_model.SetFingerPrintTemplateRequest): Promise<$_model.SetFingerPrintTemplateResponse>;
    /**
     * Sets the description of a fingerprint template.
     *
     * @param request - SetFingerPrintTemplateDescriptionRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns SetFingerPrintTemplateDescriptionResponse
     */
    setFingerPrintTemplateDescriptionWithOptions(request: $_model.SetFingerPrintTemplateDescriptionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SetFingerPrintTemplateDescriptionResponse>;
    /**
     * Sets the description of a fingerprint template.
     *
     * @param request - SetFingerPrintTemplateDescriptionRequest
     * @returns SetFingerPrintTemplateDescriptionResponse
     */
    setFingerPrintTemplateDescription(request: $_model.SetFingerPrintTemplateDescriptionRequest): Promise<$_model.SetFingerPrintTemplateDescriptionResponse>;
    /**
     * Start cloud computers.
     *
     * @remarks
     * The cloud computers that you want to start must be in the Stopped state. After you call this operation, the cloud computers enter the Running state.
     *
     * @param request - StartDesktopsRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns StartDesktopsResponse
     */
    startDesktopsWithOptions(request: $_model.StartDesktopsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.StartDesktopsResponse>;
    /**
     * Start cloud computers.
     *
     * @remarks
     * The cloud computers that you want to start must be in the Stopped state. After you call this operation, the cloud computers enter the Running state.
     *
     * @param request - StartDesktopsRequest
     * @returns StartDesktopsResponse
     */
    startDesktops(request: $_model.StartDesktopsRequest): Promise<$_model.StartDesktopsResponse>;
    /**
     * @param request - StartRecordContentRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns StartRecordContentResponse
     */
    startRecordContentWithOptions(request: $_model.StartRecordContentRequest, runtime: $dara.RuntimeOptions): Promise<$_model.StartRecordContentResponse>;
    /**
     * @param request - StartRecordContentRequest
     * @returns StartRecordContentResponse
     */
    startRecordContent(request: $_model.StartRecordContentRequest): Promise<$_model.StartRecordContentResponse>;
    /**
     * Stops one or more cloud desktops.
     *
     * @remarks
     * The cloud desktop must be in the Running state. After the API operation is called, the state of the cloud desktop changes to Stopped.
     *
     * @param request - StopDesktopsRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns StopDesktopsResponse
     */
    stopDesktopsWithOptions(request: $_model.StopDesktopsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.StopDesktopsResponse>;
    /**
     * Stops one or more cloud desktops.
     *
     * @remarks
     * The cloud desktop must be in the Running state. After the API operation is called, the state of the cloud desktop changes to Stopped.
     *
     * @param request - StopDesktopsRequest
     * @returns StopDesktopsResponse
     */
    stopDesktops(request: $_model.StopDesktopsRequest): Promise<$_model.StopDesktopsResponse>;
    /**
     * @param request - StopRecordContentRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns StopRecordContentResponse
     */
    stopRecordContentWithOptions(request: $_model.StopRecordContentRequest, runtime: $dara.RuntimeOptions): Promise<$_model.StopRecordContentResponse>;
    /**
     * @param request - StopRecordContentRequest
     * @returns StopRecordContentResponse
     */
    stopRecordContent(request: $_model.StopRecordContentRequest): Promise<$_model.StopRecordContentResponse>;
    /**
     * Disassociates a user from a cloud desktop.
     *
     * @param request - UnbindUserDesktopRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns UnbindUserDesktopResponse
     */
    unbindUserDesktopWithOptions(request: $_model.UnbindUserDesktopRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UnbindUserDesktopResponse>;
    /**
     * Disassociates a user from a cloud desktop.
     *
     * @param request - UnbindUserDesktopRequest
     * @returns UnbindUserDesktopResponse
     */
    unbindUserDesktop(request: $_model.UnbindUserDesktopRequest): Promise<$_model.UnbindUserDesktopResponse>;
    /**
     * Verifies the credential used to unlock a local session on the client.
     *
     * @param request - VerifyCredentialRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns VerifyCredentialResponse
     */
    verifyCredentialWithOptions(request: $_model.VerifyCredentialRequest, runtime: $dara.RuntimeOptions): Promise<$_model.VerifyCredentialResponse>;
    /**
     * Verifies the credential used to unlock a local session on the client.
     *
     * @param request - VerifyCredentialRequest
     * @returns VerifyCredentialResponse
     */
    verifyCredential(request: $_model.VerifyCredentialRequest): Promise<$_model.VerifyCredentialResponse>;
}
