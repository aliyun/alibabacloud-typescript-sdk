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
     * 接受并授权执行系统事件操作
     *
     * @param request - AcceptRCInquiredSystemEventRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns AcceptRCInquiredSystemEventResponse
     */
    acceptRCInquiredSystemEventWithOptions(request: $_model.AcceptRCInquiredSystemEventRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AcceptRCInquiredSystemEventResponse>;
    /**
     * 接受并授权执行系统事件操作
     *
     * @param request - AcceptRCInquiredSystemEventRequest
     * @returns AcceptRCInquiredSystemEventResponse
     */
    acceptRCInquiredSystemEvent(request: $_model.AcceptRCInquiredSystemEventRequest): Promise<$_model.AcceptRCInquiredSystemEventResponse>;
    /**
     * Performs a cloud migration switchover for an ApsaraDB RDS for PostgreSQL instance and promotes it to the primary database to provide services.
     *
     * @remarks
     * ### Supported database engines
     * - ApsaraDB RDS for PostgreSQL
     * ### Related documentation
     * >Notice: Before you call this operation, read the feature documentation carefully to ensure that you fully understand the prerequisites and the impacts of the operation.</notice>
     * [One-click cloud migration](https://help.aliyun.com/document_detail/365562.html)
     *
     * @param request - ActivateMigrationTargetInstanceRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ActivateMigrationTargetInstanceResponse
     */
    activateMigrationTargetInstanceWithOptions(request: $_model.ActivateMigrationTargetInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ActivateMigrationTargetInstanceResponse>;
    /**
     * Performs a cloud migration switchover for an ApsaraDB RDS for PostgreSQL instance and promotes it to the primary database to provide services.
     *
     * @remarks
     * ### Supported database engines
     * - ApsaraDB RDS for PostgreSQL
     * ### Related documentation
     * >Notice: Before you call this operation, read the feature documentation carefully to ensure that you fully understand the prerequisites and the impacts of the operation.</notice>
     * [One-click cloud migration](https://help.aliyun.com/document_detail/365562.html)
     *
     * @param request - ActivateMigrationTargetInstanceRequest
     * @returns ActivateMigrationTargetInstanceResponse
     */
    activateMigrationTargetInstance(request: $_model.ActivateMigrationTargetInstanceRequest): Promise<$_model.ActivateMigrationTargetInstanceResponse>;
    /**
     * Adds an instance to a deployment set.
     *
     * @remarks
     * By default, instances with local disks cannot be added to a deployment set, and the UNSUPPORTED_DBINSTANCE_OPERATEION error is returned. To add such an instance, contact the development team and ask the administrator to add the UID to the whitelist. This restriction does not apply to cloud disk instances. Forcibly adding an instance to a deployment set may cause the instance to restart. Proceed with caution.
     *
     * @param request - AddRCInstancesToDeploymentSetRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns AddRCInstancesToDeploymentSetResponse
     */
    addRCInstancesToDeploymentSetWithOptions(request: $_model.AddRCInstancesToDeploymentSetRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddRCInstancesToDeploymentSetResponse>;
    /**
     * Adds an instance to a deployment set.
     *
     * @remarks
     * By default, instances with local disks cannot be added to a deployment set, and the UNSUPPORTED_DBINSTANCE_OPERATEION error is returned. To add such an instance, contact the development team and ask the administrator to add the UID to the whitelist. This restriction does not apply to cloud disk instances. Forcibly adding an instance to a deployment set may cause the instance to restart. Proceed with caution.
     *
     * @param request - AddRCInstancesToDeploymentSetRequest
     * @returns AddRCInstancesToDeploymentSetResponse
     */
    addRCInstancesToDeploymentSet(request: $_model.AddRCInstancesToDeploymentSetRequest): Promise<$_model.AddRCInstancesToDeploymentSetResponse>;
    /**
     * Binds tags to one or more instances.
     *
     * @remarks
     * ### Applicable engines
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for PostgreSQL
     * - ApsaraDB RDS for SQL Server
     * - ApsaraDB RDS for MariaDB
     * ### Usage notes
     * * Each tag consists of a tag key (TagKey) and a tag value (TagValue). TagKey cannot be empty, but TagValue can be empty.
     * * The values of TagKey and TagValue cannot start with aliyun.
     * * TagKey and TagValue are case-insensitive.
     * * TagKey can be up to 64 characters in length, and TagValue can be up to 128 characters in length.
     * * You can bind up to 10 tags to each instance, and the TagKeys bound to an instance must be unique. If you bind a tag with a duplicate TagKey, the newly bound tag overwrites the previously bound tag.
     *
     * @param request - AddTagsToResourceRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns AddTagsToResourceResponse
     */
    addTagsToResourceWithOptions(request: $_model.AddTagsToResourceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddTagsToResourceResponse>;
    /**
     * Binds tags to one or more instances.
     *
     * @remarks
     * ### Applicable engines
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for PostgreSQL
     * - ApsaraDB RDS for SQL Server
     * - ApsaraDB RDS for MariaDB
     * ### Usage notes
     * * Each tag consists of a tag key (TagKey) and a tag value (TagValue). TagKey cannot be empty, but TagValue can be empty.
     * * The values of TagKey and TagValue cannot start with aliyun.
     * * TagKey and TagValue are case-insensitive.
     * * TagKey can be up to 64 characters in length, and TagValue can be up to 128 characters in length.
     * * You can bind up to 10 tags to each instance, and the TagKeys bound to an instance must be unique. If you bind a tag with a duplicate TagKey, the newly bound tag overwrites the previously bound tag.
     *
     * @param request - AddTagsToResourceRequest
     * @returns AddTagsToResourceResponse
     */
    addTagsToResource(request: $_model.AddTagsToResourceRequest): Promise<$_model.AddTagsToResourceResponse>;
    /**
     * Applies for a public endpoint for an ApsaraDB RDS instance.
     *
     * @remarks
     * ### Supported engines
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for PostgreSQL
     * - ApsaraDB RDS for SQL Server
     * - ApsaraDB RDS for MariaDB
     * ### Related documentation
     * >Notice: Before you call this operation, read the following documentation and make sure that you fully understand the prerequisites and impacts of this operation.
     * - [Apply for a public endpoint for an ApsaraDB RDS for MySQL instance](https://help.aliyun.com/document_detail/26128.html)
     * - [Apply for a public endpoint for an ApsaraDB RDS for PostgreSQL instance](https://help.aliyun.com/document_detail/97738.html)
     * - [Apply for a public endpoint for an ApsaraDB RDS for SQL Server instance](https://help.aliyun.com/document_detail/97736.html)
     * - [Apply for a public endpoint for an ApsaraDB RDS for MariaDB instance](https://help.aliyun.com/document_detail/97740.html)
     *
     * @param request - AllocateInstancePublicConnectionRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns AllocateInstancePublicConnectionResponse
     */
    allocateInstancePublicConnectionWithOptions(request: $_model.AllocateInstancePublicConnectionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AllocateInstancePublicConnectionResponse>;
    /**
     * Applies for a public endpoint for an ApsaraDB RDS instance.
     *
     * @remarks
     * ### Supported engines
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for PostgreSQL
     * - ApsaraDB RDS for SQL Server
     * - ApsaraDB RDS for MariaDB
     * ### Related documentation
     * >Notice: Before you call this operation, read the following documentation and make sure that you fully understand the prerequisites and impacts of this operation.
     * - [Apply for a public endpoint for an ApsaraDB RDS for MySQL instance](https://help.aliyun.com/document_detail/26128.html)
     * - [Apply for a public endpoint for an ApsaraDB RDS for PostgreSQL instance](https://help.aliyun.com/document_detail/97738.html)
     * - [Apply for a public endpoint for an ApsaraDB RDS for SQL Server instance](https://help.aliyun.com/document_detail/97736.html)
     * - [Apply for a public endpoint for an ApsaraDB RDS for MariaDB instance](https://help.aliyun.com/document_detail/97740.html)
     *
     * @param request - AllocateInstancePublicConnectionRequest
     * @returns AllocateInstancePublicConnectionResponse
     */
    allocateInstancePublicConnection(request: $_model.AllocateInstancePublicConnectionRequest): Promise<$_model.AllocateInstancePublicConnectionResponse>;
    /**
     * Applies for a read-only endpoint.
     *
     * @remarks
     * ### Applicable engines
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for SQL Server
     * ### Feature description
     * For an ApsaraDB RDS for SQL Server primary instance that has read-only instances, you can create a unified read-only endpoint. After the endpoint is created, the existing endpoints of the primary instance and read-only instances are not affected, and you can still apply for public and internal endpoints as expected.
     * ### Before you begin
     * When you invoke this operation, the instance must meet the following conditions. Otherwise, the operation is failed:
     * - The ApsaraDB RDS for MySQL instance uses a shared database proxy.
     * - The instance status is Normal.
     * - The instance has read-only instances.
     * - The instance does not have an ongoing Data Transmission Service (DTS) migration node that is being executed.
     * - The instance runs one of the following editions:
     *     - ApsaraDB RDS for SQL Server Cluster Edition.
     *     - ApsaraDB RDS for MySQL 5.7 High-availability Edition (local SSDs)
     *     - ApsaraDB RDS for MySQL 5.6
     * > To access this feature, the instance must be active and in high availability mode.
     *
     * @param request - AllocateReadWriteSplittingConnectionRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns AllocateReadWriteSplittingConnectionResponse
     */
    allocateReadWriteSplittingConnectionWithOptions(request: $_model.AllocateReadWriteSplittingConnectionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AllocateReadWriteSplittingConnectionResponse>;
    /**
     * Applies for a read-only endpoint.
     *
     * @remarks
     * ### Applicable engines
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for SQL Server
     * ### Feature description
     * For an ApsaraDB RDS for SQL Server primary instance that has read-only instances, you can create a unified read-only endpoint. After the endpoint is created, the existing endpoints of the primary instance and read-only instances are not affected, and you can still apply for public and internal endpoints as expected.
     * ### Before you begin
     * When you invoke this operation, the instance must meet the following conditions. Otherwise, the operation is failed:
     * - The ApsaraDB RDS for MySQL instance uses a shared database proxy.
     * - The instance status is Normal.
     * - The instance has read-only instances.
     * - The instance does not have an ongoing Data Transmission Service (DTS) migration node that is being executed.
     * - The instance runs one of the following editions:
     *     - ApsaraDB RDS for SQL Server Cluster Edition.
     *     - ApsaraDB RDS for MySQL 5.7 High-availability Edition (local SSDs)
     *     - ApsaraDB RDS for MySQL 5.6
     * > To access this feature, the instance must be active and in high availability mode.
     *
     * @param request - AllocateReadWriteSplittingConnectionRequest
     * @returns AllocateReadWriteSplittingConnectionResponse
     */
    allocateReadWriteSplittingConnection(request: $_model.AllocateReadWriteSplittingConnectionRequest): Promise<$_model.AllocateReadWriteSplittingConnectionResponse>;
    /**
     * Attaches an EIP to an RDS Custom instance.
     *
     * @remarks
     * ### Supported engines
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for SQL Server
     * ### Related feature documentation
     * - [Introduction to RDS Custom for MySQL](https://help.aliyun.com/document_detail/2844223.html)
     * - [Introduction to RDS Custom for SQL Server](https://help.aliyun.com/document_detail/2864363.html)
     * ### Precautions
     * If an RDS Custom instance has a public IP address enabled, the public IP address is automatically released after you attach an EIP.
     *
     * @param request - AssociateEipAddressWithRCInstanceRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns AssociateEipAddressWithRCInstanceResponse
     */
    associateEipAddressWithRCInstanceWithOptions(request: $_model.AssociateEipAddressWithRCInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AssociateEipAddressWithRCInstanceResponse>;
    /**
     * Attaches an EIP to an RDS Custom instance.
     *
     * @remarks
     * ### Supported engines
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for SQL Server
     * ### Related feature documentation
     * - [Introduction to RDS Custom for MySQL](https://help.aliyun.com/document_detail/2844223.html)
     * - [Introduction to RDS Custom for SQL Server](https://help.aliyun.com/document_detail/2864363.html)
     * ### Precautions
     * If an RDS Custom instance has a public IP address enabled, the public IP address is automatically released after you attach an EIP.
     *
     * @param request - AssociateEipAddressWithRCInstanceRequest
     * @returns AssociateEipAddressWithRCInstanceResponse
     */
    associateEipAddressWithRCInstance(request: $_model.AssociateEipAddressWithRCInstanceRequest): Promise<$_model.AssociateEipAddressWithRCInstanceResponse>;
    /**
     * Attaches a pay-as-you-go data cloud disk or a system cloud disk to an RDS Custom instance. The instance and the cloud disk must be in the same zone.
     *
     * @remarks
     * When you call this operation, take note of the following items:
     * - The cloud disk must be in the Available state.
     * - When you attach a data cloud disk:
     *   - The destination RDS Custom instance must be in the Running or Stopped state.
     *   - If the cloud disk was purchased separately, its billing method must be pay-as-you-go.
     *   - If a system cloud disk detached from an RDS Custom instance is attached as a data cloud disk, its billing method is not limited.
     *   - Once an elastic ephemeral disk is detached, it can only be reattached to its original instance.
     * - When you attach a system cloud disk:
     *   - The destination RDS Custom instance must be the source instance from which the system cloud disk was detached.
     *   - The destination RDS Custom instance must be in the Stopped state.
     *   - You must configure the instance logon credentials.
     *   - Elastic ephemeral disks cannot be attached as system cloud disks.
     *
     * @param request - AttachRCDiskRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns AttachRCDiskResponse
     */
    attachRCDiskWithOptions(request: $_model.AttachRCDiskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AttachRCDiskResponse>;
    /**
     * Attaches a pay-as-you-go data cloud disk or a system cloud disk to an RDS Custom instance. The instance and the cloud disk must be in the same zone.
     *
     * @remarks
     * When you call this operation, take note of the following items:
     * - The cloud disk must be in the Available state.
     * - When you attach a data cloud disk:
     *   - The destination RDS Custom instance must be in the Running or Stopped state.
     *   - If the cloud disk was purchased separately, its billing method must be pay-as-you-go.
     *   - If a system cloud disk detached from an RDS Custom instance is attached as a data cloud disk, its billing method is not limited.
     *   - Once an elastic ephemeral disk is detached, it can only be reattached to its original instance.
     * - When you attach a system cloud disk:
     *   - The destination RDS Custom instance must be the source instance from which the system cloud disk was detached.
     *   - The destination RDS Custom instance must be in the Stopped state.
     *   - You must configure the instance logon credentials.
     *   - Elastic ephemeral disks cannot be attached as system cloud disks.
     *
     * @param request - AttachRCDiskRequest
     * @returns AttachRCDiskResponse
     */
    attachRCDisk(request: $_model.AttachRCDiskRequest): Promise<$_model.AttachRCDiskResponse>;
    /**
     * Adds an RDS Custom instance to an ACK cluster.
     *
     * @param tmpReq - AttachRCInstancesRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns AttachRCInstancesResponse
     */
    attachRCInstancesWithOptions(tmpReq: $_model.AttachRCInstancesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AttachRCInstancesResponse>;
    /**
     * Adds an RDS Custom instance to an ACK cluster.
     *
     * @param request - AttachRCInstancesRequest
     * @returns AttachRCInstancesResponse
     */
    attachRCInstances(request: $_model.AttachRCInstancesRequest): Promise<$_model.AttachRCInstancesResponse>;
    /**
     * Associates a whitelist template with an instance.
     *
     * @remarks
     * ### Applicable engines
     * - RDS MySQL
     * - RDS PostgreSQL
     * - RDS SQL Server
     *
     * @param request - AttachWhitelistTemplateToInstanceRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns AttachWhitelistTemplateToInstanceResponse
     */
    attachWhitelistTemplateToInstanceWithOptions(request: $_model.AttachWhitelistTemplateToInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AttachWhitelistTemplateToInstanceResponse>;
    /**
     * Associates a whitelist template with an instance.
     *
     * @remarks
     * ### Applicable engines
     * - RDS MySQL
     * - RDS PostgreSQL
     * - RDS SQL Server
     *
     * @param request - AttachWhitelistTemplateToInstanceRequest
     * @returns AttachWhitelistTemplateToInstanceResponse
     */
    attachWhitelistTemplateToInstance(request: $_model.AttachWhitelistTemplateToInstanceRequest): Promise<$_model.AttachWhitelistTemplateToInstanceResponse>;
    /**
     * Creates the AliyunServiceRoleForRdsBackupEncryption service-linked role for backup encryption.
     *
     * @param request - AuthorizeBackupEncryptionRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns AuthorizeBackupEncryptionResponse
     */
    authorizeBackupEncryptionWithOptions(request: $_model.AuthorizeBackupEncryptionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AuthorizeBackupEncryptionResponse>;
    /**
     * Creates the AliyunServiceRoleForRdsBackupEncryption service-linked role for backup encryption.
     *
     * @param request - AuthorizeBackupEncryptionRequest
     * @returns AuthorizeBackupEncryptionResponse
     */
    authorizeBackupEncryption(request: $_model.AuthorizeBackupEncryptionRequest): Promise<$_model.AuthorizeBackupEncryptionResponse>;
    /**
     * Adds rules to a specified security group.
     *
     * @param tmpReq - AuthorizeRCSecurityGroupPermissionRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns AuthorizeRCSecurityGroupPermissionResponse
     */
    authorizeRCSecurityGroupPermissionWithOptions(tmpReq: $_model.AuthorizeRCSecurityGroupPermissionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AuthorizeRCSecurityGroupPermissionResponse>;
    /**
     * Adds rules to a specified security group.
     *
     * @param request - AuthorizeRCSecurityGroupPermissionRequest
     * @returns AuthorizeRCSecurityGroupPermissionResponse
     */
    authorizeRCSecurityGroupPermission(request: $_model.AuthorizeRCSecurityGroupPermissionRequest): Promise<$_model.AuthorizeRCSecurityGroupPermissionResponse>;
    /**
     * Queries the system weight allocation values.
     *
     * @remarks
     * ### Supported engines
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for SQL Server
     * ### Description
     * When [read/write splitting](https://help.aliyun.com/document_detail/51073.html) is enabled, this operation calculates the system-assigned weights. For custom read weights, refer to [DescribeDBInstanceNetInfo](https://help.aliyun.com/document_detail/610423.html).
     * ### Prerequisites
     * When you call this operation, the instance must meet the following requirements. Otherwise, the operation fails:
     * * The MySQL instance uses the shared database proxy.
     * * The instance runs one of the following engine versions:
     *     * MySQL 5.7 High-availability Edition (local SSDs)
     *     * MySQL 5.6
     *     * SQL Server Cluster Edition
     *
     * @param request - CalculateDBInstanceWeightRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns CalculateDBInstanceWeightResponse
     */
    calculateDBInstanceWeightWithOptions(request: $_model.CalculateDBInstanceWeightRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CalculateDBInstanceWeightResponse>;
    /**
     * Queries the system weight allocation values.
     *
     * @remarks
     * ### Supported engines
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for SQL Server
     * ### Description
     * When [read/write splitting](https://help.aliyun.com/document_detail/51073.html) is enabled, this operation calculates the system-assigned weights. For custom read weights, refer to [DescribeDBInstanceNetInfo](https://help.aliyun.com/document_detail/610423.html).
     * ### Prerequisites
     * When you call this operation, the instance must meet the following requirements. Otherwise, the operation fails:
     * * The MySQL instance uses the shared database proxy.
     * * The instance runs one of the following engine versions:
     *     * MySQL 5.7 High-availability Edition (local SSDs)
     *     * MySQL 5.6
     *     * SQL Server Cluster Edition
     *
     * @param request - CalculateDBInstanceWeightRequest
     * @returns CalculateDBInstanceWeightResponse
     */
    calculateDBInstanceWeight(request: $_model.CalculateDBInstanceWeightRequest): Promise<$_model.CalculateDBInstanceWeightResponse>;
    /**
     * Cancels proactive O&M tasks that have not yet started.
     *
     * @remarks
     * ### Supported engines
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for PostgreSQL
     * - ApsaraDB RDS for SQL Server
     * - ApsaraDB RDS for MariaDB
     * ### Related documentation
     * >Notice: Before you call this operation, read the feature documentation carefully to ensure that you fully understand the prerequisites and the impacts of this operation.
     * - [Scheduled events for ApsaraDB RDS for MySQL](https://help.aliyun.com/document_detail/104183.html)
     * - [Scheduled events for ApsaraDB RDS for PostgreSQL](https://help.aliyun.com/document_detail/104452.html)
     * - [Scheduled events for ApsaraDB RDS for SQL Server](https://help.aliyun.com/document_detail/104451.html)
     * - [Scheduled events for ApsaraDB RDS for MariaDB](https://help.aliyun.com/document_detail/104454.html)
     * ### Limits
     * You cannot cancel a task in the following scenarios:
     * - The allowCancel parameter is set to 0.
     * - The current time is later than the task start time.
     * - The task status is not 3 (Pending Execution).
     *
     * @param request - CancelActiveOperationTasksRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns CancelActiveOperationTasksResponse
     */
    cancelActiveOperationTasksWithOptions(request: $_model.CancelActiveOperationTasksRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CancelActiveOperationTasksResponse>;
    /**
     * Cancels proactive O&M tasks that have not yet started.
     *
     * @remarks
     * ### Supported engines
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for PostgreSQL
     * - ApsaraDB RDS for SQL Server
     * - ApsaraDB RDS for MariaDB
     * ### Related documentation
     * >Notice: Before you call this operation, read the feature documentation carefully to ensure that you fully understand the prerequisites and the impacts of this operation.
     * - [Scheduled events for ApsaraDB RDS for MySQL](https://help.aliyun.com/document_detail/104183.html)
     * - [Scheduled events for ApsaraDB RDS for PostgreSQL](https://help.aliyun.com/document_detail/104452.html)
     * - [Scheduled events for ApsaraDB RDS for SQL Server](https://help.aliyun.com/document_detail/104451.html)
     * - [Scheduled events for ApsaraDB RDS for MariaDB](https://help.aliyun.com/document_detail/104454.html)
     * ### Limits
     * You cannot cancel a task in the following scenarios:
     * - The allowCancel parameter is set to 0.
     * - The current time is later than the task start time.
     * - The task status is not 3 (Pending Execution).
     *
     * @param request - CancelActiveOperationTasksRequest
     * @returns CancelActiveOperationTasksResponse
     */
    cancelActiveOperationTasks(request: $_model.CancelActiveOperationTasksRequest): Promise<$_model.CancelActiveOperationTasksResponse>;
    /**
     * Checks whether a database account name is available for an ApsaraDB RDS instance.
     *
     * @remarks
     * ### Supported engines
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for PostgreSQL
     * - ApsaraDB RDS for SQL Server
     * - ApsaraDB RDS for MariaDB
     *
     * @param request - CheckAccountNameAvailableRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns CheckAccountNameAvailableResponse
     */
    checkAccountNameAvailableWithOptions(request: $_model.CheckAccountNameAvailableRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CheckAccountNameAvailableResponse>;
    /**
     * Checks whether a database account name is available for an ApsaraDB RDS instance.
     *
     * @remarks
     * ### Supported engines
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for PostgreSQL
     * - ApsaraDB RDS for SQL Server
     * - ApsaraDB RDS for MariaDB
     *
     * @param request - CheckAccountNameAvailableRequest
     * @returns CheckAccountNameAvailableResponse
     */
    checkAccountNameAvailable(request: $_model.CheckAccountNameAvailableRequest): Promise<$_model.CheckAccountNameAvailableResponse>;
    /**
     * Checks whether the backup encryption service-linked role AliyunServiceRoleForRdsBackupEncryption is created for the user account.
     *
     * @param request - CheckBackupEncryptionAuthorizedRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns CheckBackupEncryptionAuthorizedResponse
     */
    checkBackupEncryptionAuthorizedWithOptions(request: $_model.CheckBackupEncryptionAuthorizedRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CheckBackupEncryptionAuthorizedResponse>;
    /**
     * Checks whether the backup encryption service-linked role AliyunServiceRoleForRdsBackupEncryption is created for the user account.
     *
     * @param request - CheckBackupEncryptionAuthorizedRequest
     * @returns CheckBackupEncryptionAuthorizedResponse
     */
    checkBackupEncryptionAuthorized(request: $_model.CheckBackupEncryptionAuthorizedRequest): Promise<$_model.CheckBackupEncryptionAuthorizedResponse>;
    /**
     * Queries the authorization status of an ApsaraDB RDS instance.
     *
     * @remarks
     * ### Supported engines
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for PostgreSQL
     * - ApsaraDB RDS for SQL Server
     * - ApsaraDB RDS for MariaDB
     *
     * @param request - CheckCloudResourceAuthorizedRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns CheckCloudResourceAuthorizedResponse
     */
    checkCloudResourceAuthorizedWithOptions(request: $_model.CheckCloudResourceAuthorizedRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CheckCloudResourceAuthorizedResponse>;
    /**
     * Queries the authorization status of an ApsaraDB RDS instance.
     *
     * @remarks
     * ### Supported engines
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for PostgreSQL
     * - ApsaraDB RDS for SQL Server
     * - ApsaraDB RDS for MariaDB
     *
     * @param request - CheckCloudResourceAuthorizedRequest
     * @returns CheckCloudResourceAuthorizedResponse
     */
    checkCloudResourceAuthorized(request: $_model.CheckCloudResourceAuthorizedRequest): Promise<$_model.CheckCloudResourceAuthorizedResponse>;
    /**
     * Checks whether an ApsaraDB RDS instance can be restored across regions by using a cross-region backup set.
     *
     * @remarks
     * ### Supported engines
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for PostgreSQL
     * - ApsaraDB RDS for SQL Server
     * ### Related feature documentation
     * >Notice: Before you call this operation, read the feature documentation carefully to ensure that you fully understand the prerequisites and the impacts of this operation.</notice>
     * - [Cross-region backup for ApsaraDB RDS for MySQL](https://help.aliyun.com/document_detail/120824.html), [Cross-region restoration for ApsaraDB RDS for MySQL](https://help.aliyun.com/document_detail/120875.html)
     * - [Cross-region backup for ApsaraDB RDS for PostgreSQL](https://help.aliyun.com/document_detail/206671.html), [Cross-region restoration for ApsaraDB RDS for PostgreSQL](https://help.aliyun.com/document_detail/206662.html)
     * - [Cross-region backup for ApsaraDB RDS for SQL Server](https://help.aliyun.com/document_detail/187923.html), [Cross-region restoration for ApsaraDB RDS for SQL Server](https://help.aliyun.com/document_detail/187924.html)
     *
     * @param request - CheckCreateDdrDBInstanceRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns CheckCreateDdrDBInstanceResponse
     */
    checkCreateDdrDBInstanceWithOptions(request: $_model.CheckCreateDdrDBInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CheckCreateDdrDBInstanceResponse>;
    /**
     * Checks whether an ApsaraDB RDS instance can be restored across regions by using a cross-region backup set.
     *
     * @remarks
     * ### Supported engines
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for PostgreSQL
     * - ApsaraDB RDS for SQL Server
     * ### Related feature documentation
     * >Notice: Before you call this operation, read the feature documentation carefully to ensure that you fully understand the prerequisites and the impacts of this operation.</notice>
     * - [Cross-region backup for ApsaraDB RDS for MySQL](https://help.aliyun.com/document_detail/120824.html), [Cross-region restoration for ApsaraDB RDS for MySQL](https://help.aliyun.com/document_detail/120875.html)
     * - [Cross-region backup for ApsaraDB RDS for PostgreSQL](https://help.aliyun.com/document_detail/206671.html), [Cross-region restoration for ApsaraDB RDS for PostgreSQL](https://help.aliyun.com/document_detail/206662.html)
     * - [Cross-region backup for ApsaraDB RDS for SQL Server](https://help.aliyun.com/document_detail/187923.html), [Cross-region restoration for ApsaraDB RDS for SQL Server](https://help.aliyun.com/document_detail/187924.html)
     *
     * @param request - CheckCreateDdrDBInstanceRequest
     * @returns CheckCreateDdrDBInstanceResponse
     */
    checkCreateDdrDBInstance(request: $_model.CheckCreateDdrDBInstanceRequest): Promise<$_model.CheckCreateDdrDBInstanceResponse>;
    /**
     * Checks whether a database name is duplicate or does not comply with naming conventions.
     *
     * @remarks
     * ### Applicable engines
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for PostgreSQL
     * - ApsaraDB RDS for SQL Server
     * - ApsaraDB RDS for MariaDB
     *
     * @param request - CheckDBNameAvailableRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns CheckDBNameAvailableResponse
     */
    checkDBNameAvailableWithOptions(request: $_model.CheckDBNameAvailableRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CheckDBNameAvailableResponse>;
    /**
     * Checks whether a database name is duplicate or does not comply with naming conventions.
     *
     * @remarks
     * ### Applicable engines
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for PostgreSQL
     * - ApsaraDB RDS for SQL Server
     * - ApsaraDB RDS for MariaDB
     *
     * @param request - CheckDBNameAvailableRequest
     * @returns CheckDBNameAvailableResponse
     */
    checkDBNameAvailable(request: $_model.CheckDBNameAvailableRequest): Promise<$_model.CheckDBNameAvailableResponse>;
    /**
     * Queries whether a specified ApsaraDB RDS instance exists.
     *
     * @remarks
     * ### Supported engines
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for PostgreSQL
     * - ApsaraDB RDS for SQL Server
     * - ApsaraDB RDS for MariaDB
     *
     * @param request - CheckInstanceExistRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns CheckInstanceExistResponse
     */
    checkInstanceExistWithOptions(request: $_model.CheckInstanceExistRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CheckInstanceExistResponse>;
    /**
     * Queries whether a specified ApsaraDB RDS instance exists.
     *
     * @remarks
     * ### Supported engines
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for PostgreSQL
     * - ApsaraDB RDS for SQL Server
     * - ApsaraDB RDS for MariaDB
     *
     * @param request - CheckInstanceExistRequest
     * @returns CheckInstanceExistResponse
     */
    checkInstanceExist(request: $_model.CheckInstanceExistRequest): Promise<$_model.CheckInstanceExistResponse>;
    /**
     * 查看是否已创建服务关联角色（SLR）和是否开租
     *
     * @param request - CheckRdsCustomInitRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns CheckRdsCustomInitResponse
     */
    checkRdsCustomInitWithOptions(request: $_model.CheckRdsCustomInitRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CheckRdsCustomInitResponse>;
    /**
     * 查看是否已创建服务关联角色（SLR）和是否开租
     *
     * @param request - CheckRdsCustomInitRequest
     * @returns CheckRdsCustomInitResponse
     */
    checkRdsCustomInit(request: $_model.CheckRdsCustomInitRequest): Promise<$_model.CheckRdsCustomInitResponse>;
    /**
     * Checks whether the current region supports backup encryption.
     *
     * @param request - CheckRegionSupportBackupEncryptionRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns CheckRegionSupportBackupEncryptionResponse
     */
    checkRegionSupportBackupEncryptionWithOptions(request: $_model.CheckRegionSupportBackupEncryptionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CheckRegionSupportBackupEncryptionResponse>;
    /**
     * Checks whether the current region supports backup encryption.
     *
     * @param request - CheckRegionSupportBackupEncryptionRequest
     * @returns CheckRegionSupportBackupEncryptionResponse
     */
    checkRegionSupportBackupEncryption(request: $_model.CheckRegionSupportBackupEncryptionRequest): Promise<$_model.CheckRegionSupportBackupEncryptionResponse>;
    /**
     * Queries whether a service-linked role (SLR) has been created.
     *
     * @remarks
     * ### Applicable engine
     * - ApsaraDB RDS for PostgreSQL
     *
     * @param request - CheckServiceLinkedRoleRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns CheckServiceLinkedRoleResponse
     */
    checkServiceLinkedRoleWithOptions(request: $_model.CheckServiceLinkedRoleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CheckServiceLinkedRoleResponse>;
    /**
     * Queries whether a service-linked role (SLR) has been created.
     *
     * @remarks
     * ### Applicable engine
     * - ApsaraDB RDS for PostgreSQL
     *
     * @param request - CheckServiceLinkedRoleRequest
     * @returns CheckServiceLinkedRoleResponse
     */
    checkServiceLinkedRole(request: $_model.CheckServiceLinkedRoleRequest): Promise<$_model.CheckServiceLinkedRoleResponse>;
    /**
     * Restores historical data to a new instance, also known as a clone instance.
     *
     * @remarks
     * ### Supported engines
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for PostgreSQL
     * - ApsaraDB RDS for SQL Server
     * - ApsaraDB RDS for MariaDB
     * ### Related feature documentation
     * >Notice: Before you call this operation, carefully read the feature documentation to ensure that you fully understand the prerequisites and the impacts of the operation.
     * - [Restore data for an ApsaraDB RDS for MySQL instance](https://help.aliyun.com/document_detail/96147.html)
     * - [Restore data for an ApsaraDB RDS for PostgreSQL instance](https://help.aliyun.com/document_detail/96776.html)
     * - [Restore data for an ApsaraDB RDS for SQL Server instance](https://help.aliyun.com/document_detail/95722.html)
     * - [Restore data for an ApsaraDB RDS for MariaDB instance](https://help.aliyun.com/document_detail/97151.html)
     *
     * @param tmpReq - CloneDBInstanceRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns CloneDBInstanceResponse
     */
    cloneDBInstanceWithOptions(tmpReq: $_model.CloneDBInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CloneDBInstanceResponse>;
    /**
     * Restores historical data to a new instance, also known as a clone instance.
     *
     * @remarks
     * ### Supported engines
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for PostgreSQL
     * - ApsaraDB RDS for SQL Server
     * - ApsaraDB RDS for MariaDB
     * ### Related feature documentation
     * >Notice: Before you call this operation, carefully read the feature documentation to ensure that you fully understand the prerequisites and the impacts of the operation.
     * - [Restore data for an ApsaraDB RDS for MySQL instance](https://help.aliyun.com/document_detail/96147.html)
     * - [Restore data for an ApsaraDB RDS for PostgreSQL instance](https://help.aliyun.com/document_detail/96776.html)
     * - [Restore data for an ApsaraDB RDS for SQL Server instance](https://help.aliyun.com/document_detail/95722.html)
     * - [Restore data for an ApsaraDB RDS for MariaDB instance](https://help.aliyun.com/document_detail/97151.html)
     *
     * @param request - CloneDBInstanceRequest
     * @returns CloneDBInstanceResponse
     */
    cloneDBInstance(request: $_model.CloneDBInstanceRequest): Promise<$_model.CloneDBInstanceResponse>;
    /**
     * Copies an ApsaraDB RDS parameter template to the current region or another region.
     *
     * @remarks
     * ### Applicable engines
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for PostgreSQL
     * ### Related documentation
     * >Notice: Before you call this operation, carefully read the following documentation. Make sure that you fully understand the prerequisites and impacts of this operation.
     * - [Use a parameter template for MySQL](https://help.aliyun.com/document_detail/130565.html)
     * - [Use a parameter template for PostgreSQL](https://help.aliyun.com/document_detail/457176.html)
     *
     * @param request - CloneParameterGroupRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns CloneParameterGroupResponse
     */
    cloneParameterGroupWithOptions(request: $_model.CloneParameterGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CloneParameterGroupResponse>;
    /**
     * Copies an ApsaraDB RDS parameter template to the current region or another region.
     *
     * @remarks
     * ### Applicable engines
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for PostgreSQL
     * ### Related documentation
     * >Notice: Before you call this operation, carefully read the following documentation. Make sure that you fully understand the prerequisites and impacts of this operation.
     * - [Use a parameter template for MySQL](https://help.aliyun.com/document_detail/130565.html)
     * - [Use a parameter template for PostgreSQL](https://help.aliyun.com/document_detail/457176.html)
     *
     * @param request - CloneParameterGroupRequest
     * @returns CloneParameterGroupResponse
     */
    cloneParameterGroup(request: $_model.CloneParameterGroupRequest): Promise<$_model.CloneParameterGroupResponse>;
    /**
     * Confirms the carousel messages in the ApsaraDB RDS console for the Alibaba Cloud account.
     *
     * @remarks
     * ### Supported engines
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for PostgreSQL
     * - ApsaraDB RDS for SQL Server
     * - ApsaraDB RDS for MariaDB
     * ### Description
     * You can call [QueryNotify](https://help.aliyun.com/document_detail/610443.html) to query notifications, and then call this operation to mark a notification as confirmed, which indicates that you have acknowledged the content of the notification.
     *
     * @param tmpReq - ConfirmNotifyRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ConfirmNotifyResponse
     */
    confirmNotifyWithOptions(tmpReq: $_model.ConfirmNotifyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ConfirmNotifyResponse>;
    /**
     * Confirms the carousel messages in the ApsaraDB RDS console for the Alibaba Cloud account.
     *
     * @remarks
     * ### Supported engines
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for PostgreSQL
     * - ApsaraDB RDS for SQL Server
     * - ApsaraDB RDS for MariaDB
     * ### Description
     * You can call [QueryNotify](https://help.aliyun.com/document_detail/610443.html) to query notifications, and then call this operation to mark a notification as confirmed, which indicates that you have acknowledged the content of the notification.
     *
     * @param request - ConfirmNotifyRequest
     * @returns ConfirmNotifyResponse
     */
    confirmNotify(request: $_model.ConfirmNotifyRequest): Promise<$_model.ConfirmNotifyResponse>;
    /**
     * Copies a database for an ApsaraDB RDS for SQL Server 2008 R2 instance.
     *
     * @param request - CopyDatabaseRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns CopyDatabaseResponse
     */
    copyDatabaseWithOptions(request: $_model.CopyDatabaseRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CopyDatabaseResponse>;
    /**
     * Copies a database for an ApsaraDB RDS for SQL Server 2008 R2 instance.
     *
     * @param request - CopyDatabaseRequest
     * @returns CopyDatabaseResponse
     */
    copyDatabase(request: $_model.CopyDatabaseRequest): Promise<$_model.CopyDatabaseResponse>;
    /**
     * Copies a database between ApsaraDB RDS for SQL Server instances.
     *
     * @remarks
     * ### Supported engine
     * ApsaraDB RDS for SQL Server.
     * ### Related documentation
     * >Notice: Before you call this operation, read the related documentation to understand the prerequisites and impacts.
     * [Copy databases between ApsaraDB RDS for SQL Server instances](https://help.aliyun.com/document_detail/95702.html)
     * ### Limits
     * - The source and target instances must belong to the same Alibaba Cloud account.
     * - The target instance **must not contain** a database that has the same name as the source database to be copied.
     * - The available storage space of the target instance **must be greater than** the space occupied by the source database to be copied. If the storage space is insufficient, [scale up the storage capacity](https://help.aliyun.com/document_detail/95665.html).
     * - The source and target instances must be deployed in the same region. They can be deployed in different zones but must have the same network type.
     * - The source and target instances do not support the [serverless instance](https://help.aliyun.com/document_detail/603466.html) type. To migrate a serverless instance, [use DTS](https://help.aliyun.com/document_detail/210947.html).
     * - When you call this operation, you **must specify** either the BackupId or RestoreTime parameter. If neither is specified, an error is returned.
     *
     * @param request - CopyDatabaseBetweenInstancesRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns CopyDatabaseBetweenInstancesResponse
     */
    copyDatabaseBetweenInstancesWithOptions(request: $_model.CopyDatabaseBetweenInstancesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CopyDatabaseBetweenInstancesResponse>;
    /**
     * Copies a database between ApsaraDB RDS for SQL Server instances.
     *
     * @remarks
     * ### Supported engine
     * ApsaraDB RDS for SQL Server.
     * ### Related documentation
     * >Notice: Before you call this operation, read the related documentation to understand the prerequisites and impacts.
     * [Copy databases between ApsaraDB RDS for SQL Server instances](https://help.aliyun.com/document_detail/95702.html)
     * ### Limits
     * - The source and target instances must belong to the same Alibaba Cloud account.
     * - The target instance **must not contain** a database that has the same name as the source database to be copied.
     * - The available storage space of the target instance **must be greater than** the space occupied by the source database to be copied. If the storage space is insufficient, [scale up the storage capacity](https://help.aliyun.com/document_detail/95665.html).
     * - The source and target instances must be deployed in the same region. They can be deployed in different zones but must have the same network type.
     * - The source and target instances do not support the [serverless instance](https://help.aliyun.com/document_detail/603466.html) type. To migrate a serverless instance, [use DTS](https://help.aliyun.com/document_detail/210947.html).
     * - When you call this operation, you **must specify** either the BackupId or RestoreTime parameter. If neither is specified, an error is returned.
     *
     * @param request - CopyDatabaseBetweenInstancesRequest
     * @returns CopyDatabaseBetweenInstancesResponse
     */
    copyDatabaseBetweenInstances(request: $_model.CopyDatabaseBetweenInstancesRequest): Promise<$_model.CopyDatabaseBetweenInstancesResponse>;
    /**
     * Creates a database account.
     *
     * @remarks
     * ### Supported engines
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for PostgreSQL
     * - ApsaraDB RDS for SQL Server
     * - ApsaraDB RDS for MariaDB
     * ### Related documentation
     * >Notice: Before you call this operation, read the following documentation and make sure that you fully understand the prerequisites and impacts of this operation.
     * - [Create an account for an ApsaraDB RDS for MySQL instance](https://help.aliyun.com/document_detail/96089.html)
     * - [Create an account for an ApsaraDB RDS for PostgreSQL instance](https://help.aliyun.com/document_detail/96753.html)
     * - [Create an account for an ApsaraDB RDS for SQL Server instance](https://help.aliyun.com/document_detail/95810.html)
     * - [Create an account for an ApsaraDB RDS for MariaDB instance](https://help.aliyun.com/document_detail/97132.html)
     *
     * @param request - CreateAccountRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns CreateAccountResponse
     */
    createAccountWithOptions(request: $_model.CreateAccountRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateAccountResponse>;
    /**
     * Creates a database account.
     *
     * @remarks
     * ### Supported engines
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for PostgreSQL
     * - ApsaraDB RDS for SQL Server
     * - ApsaraDB RDS for MariaDB
     * ### Related documentation
     * >Notice: Before you call this operation, read the following documentation and make sure that you fully understand the prerequisites and impacts of this operation.
     * - [Create an account for an ApsaraDB RDS for MySQL instance](https://help.aliyun.com/document_detail/96089.html)
     * - [Create an account for an ApsaraDB RDS for PostgreSQL instance](https://help.aliyun.com/document_detail/96753.html)
     * - [Create an account for an ApsaraDB RDS for SQL Server instance](https://help.aliyun.com/document_detail/95810.html)
     * - [Create an account for an ApsaraDB RDS for MariaDB instance](https://help.aliyun.com/document_detail/97132.html)
     *
     * @param request - CreateAccountRequest
     * @returns CreateAccountResponse
     */
    createAccount(request: $_model.CreateAccountRequest): Promise<$_model.CreateAccountResponse>;
    /**
     * Creates a backup set for an ApsaraDB RDS instance.
     *
     * @remarks
     * ### Supported engines
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for PostgreSQL
     * - ApsaraDB RDS for SQL Server
     * - ApsaraDB RDS for MariaDB
     * ### Feature description
     * This operation calls the built-in backup feature of ApsaraDB RDS. You can also use Database Backup (DBS). For more information, <props="china">see [DBS API overview](https://help.aliyun.com/document_detail/2841997.html)<props="intl">see [DBS API overview](https://help.aliyun.com/document_detail/2402073.html).
     * ### Precautions
     * When you invoke this operation, the instance must meet the following conditions. Otherwise, the operation will be failed:
     * - The instance status is Running.
     * - No backup nodes are being executed.
     * - The number of backup sets that can be created for a single instance within a day does not exceed 20. For MySQL DPI engine instances, there is no limit on the number of backup sets that can be created within a day.
     * ### Related documentation
     * - [Back up data for ApsaraDB RDS for MySQL](https://help.aliyun.com/document_detail/378074.html)
     * - [Back up data for ApsaraDB RDS for PostgreSQL](https://help.aliyun.com/document_detail/96772.html)
     * - [Back up data for ApsaraDB RDS for SQL Server](https://help.aliyun.com/document_detail/95717.html)
     * - [Back up data for ApsaraDB RDS for MariaDB](https://help.aliyun.com/document_detail/97147.html)
     *
     * @param request - CreateBackupRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns CreateBackupResponse
     */
    createBackupWithOptions(request: $_model.CreateBackupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateBackupResponse>;
    /**
     * Creates a backup set for an ApsaraDB RDS instance.
     *
     * @remarks
     * ### Supported engines
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for PostgreSQL
     * - ApsaraDB RDS for SQL Server
     * - ApsaraDB RDS for MariaDB
     * ### Feature description
     * This operation calls the built-in backup feature of ApsaraDB RDS. You can also use Database Backup (DBS). For more information, <props="china">see [DBS API overview](https://help.aliyun.com/document_detail/2841997.html)<props="intl">see [DBS API overview](https://help.aliyun.com/document_detail/2402073.html).
     * ### Precautions
     * When you invoke this operation, the instance must meet the following conditions. Otherwise, the operation will be failed:
     * - The instance status is Running.
     * - No backup nodes are being executed.
     * - The number of backup sets that can be created for a single instance within a day does not exceed 20. For MySQL DPI engine instances, there is no limit on the number of backup sets that can be created within a day.
     * ### Related documentation
     * - [Back up data for ApsaraDB RDS for MySQL](https://help.aliyun.com/document_detail/378074.html)
     * - [Back up data for ApsaraDB RDS for PostgreSQL](https://help.aliyun.com/document_detail/96772.html)
     * - [Back up data for ApsaraDB RDS for SQL Server](https://help.aliyun.com/document_detail/95717.html)
     * - [Back up data for ApsaraDB RDS for MariaDB](https://help.aliyun.com/document_detail/97147.html)
     *
     * @param request - CreateBackupRequest
     * @returns CreateBackupResponse
     */
    createBackup(request: $_model.CreateBackupRequest): Promise<$_model.CreateBackupResponse>;
    /**
     * Creates a pre-check task for one-click cloud migration of an ApsaraDB RDS for PostgreSQL instance.
     *
     * @remarks
     * ### Applicable engines
     * - ApsaraDB RDS for PostgreSQL
     * ### Related feature documentation
     * >Notice: Before you call this operation, read the feature documentation carefully to fully understand the prerequisites and impacts of this operation.
     * [One-click cloud migration](https://help.aliyun.com/document_detail/365562.html)
     *
     * @param request - CreateCloudMigrationPrecheckTaskRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns CreateCloudMigrationPrecheckTaskResponse
     */
    createCloudMigrationPrecheckTaskWithOptions(request: $_model.CreateCloudMigrationPrecheckTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateCloudMigrationPrecheckTaskResponse>;
    /**
     * Creates a pre-check task for one-click cloud migration of an ApsaraDB RDS for PostgreSQL instance.
     *
     * @remarks
     * ### Applicable engines
     * - ApsaraDB RDS for PostgreSQL
     * ### Related feature documentation
     * >Notice: Before you call this operation, read the feature documentation carefully to fully understand the prerequisites and impacts of this operation.
     * [One-click cloud migration](https://help.aliyun.com/document_detail/365562.html)
     *
     * @param request - CreateCloudMigrationPrecheckTaskRequest
     * @returns CreateCloudMigrationPrecheckTaskResponse
     */
    createCloudMigrationPrecheckTask(request: $_model.CreateCloudMigrationPrecheckTaskRequest): Promise<$_model.CreateCloudMigrationPrecheckTaskResponse>;
    /**
     * Creates a cloud migration task for ApsaraDB RDS for PostgreSQL.
     *
     * @remarks
     * ### Supported engines
     * - ApsaraDB RDS for PostgreSQL
     * ### Related feature documentation
     * >Notice: Before you call this operation, read the feature documentation to understand the prerequisites and impacts.
     * [One-click cloud migration](https://help.aliyun.com/document_detail/365562.html)
     *
     * @param request - CreateCloudMigrationTaskRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns CreateCloudMigrationTaskResponse
     */
    createCloudMigrationTaskWithOptions(request: $_model.CreateCloudMigrationTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateCloudMigrationTaskResponse>;
    /**
     * Creates a cloud migration task for ApsaraDB RDS for PostgreSQL.
     *
     * @remarks
     * ### Supported engines
     * - ApsaraDB RDS for PostgreSQL
     * ### Related feature documentation
     * >Notice: Before you call this operation, read the feature documentation to understand the prerequisites and impacts.
     * [One-click cloud migration](https://help.aliyun.com/document_detail/365562.html)
     *
     * @param request - CreateCloudMigrationTaskRequest
     * @returns CreateCloudMigrationTaskResponse
     */
    createCloudMigrationTask(request: $_model.CreateCloudMigrationTaskRequest): Promise<$_model.CreateCloudMigrationTaskResponse>;
    /**
     * Creates an ApsaraDB RDS instance.
     *
     * @remarks
     * ### Supported engines
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for PostgreSQL
     * - ApsaraDB RDS for SQL Server
     * - ApsaraDB RDS for MariaDB
     * ### Related documentation
     * >Warning: This API operation incurs fees. Read the related documentation carefully before you proceed.
     * If an error occurs when you call the API operation, you can search for the error message to view the cause.
     * - [Create an ApsaraDB RDS for MySQL instance](https://help.aliyun.com/document_detail/148036.html)
     * - [Create an ApsaraDB RDS for MySQL Serverless instance](https://help.aliyun.com/document_detail/412231.html)
     * - [Create an ApsaraDB RDS for PostgreSQL instance](https://help.aliyun.com/document_detail/148038.html)
     * - [Create an ApsaraDB RDS for PostgreSQL Serverless instance](https://help.aliyun.com/document_detail/607753.html)
     * - [Create a Babelfish for ApsaraDB RDS for PostgreSQL instance](https://help.aliyun.com/document_detail/428615.html)
     * - [Create an ApsaraDB RDS for SQL Server instance](https://help.aliyun.com/document_detail/148037.html)
     * - [Create an ApsaraDB RDS for SQL Server Serverless instance](https://help.aliyun.com/document_detail/603465.html)
     * - [Create an ApsaraDB RDS for MariaDB instance](https://help.aliyun.com/document_detail/148040.html)
     *
     * @param tmpReq - CreateDBInstanceRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns CreateDBInstanceResponse
     */
    createDBInstanceWithOptions(tmpReq: $_model.CreateDBInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateDBInstanceResponse>;
    /**
     * Creates an ApsaraDB RDS instance.
     *
     * @remarks
     * ### Supported engines
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for PostgreSQL
     * - ApsaraDB RDS for SQL Server
     * - ApsaraDB RDS for MariaDB
     * ### Related documentation
     * >Warning: This API operation incurs fees. Read the related documentation carefully before you proceed.
     * If an error occurs when you call the API operation, you can search for the error message to view the cause.
     * - [Create an ApsaraDB RDS for MySQL instance](https://help.aliyun.com/document_detail/148036.html)
     * - [Create an ApsaraDB RDS for MySQL Serverless instance](https://help.aliyun.com/document_detail/412231.html)
     * - [Create an ApsaraDB RDS for PostgreSQL instance](https://help.aliyun.com/document_detail/148038.html)
     * - [Create an ApsaraDB RDS for PostgreSQL Serverless instance](https://help.aliyun.com/document_detail/607753.html)
     * - [Create a Babelfish for ApsaraDB RDS for PostgreSQL instance](https://help.aliyun.com/document_detail/428615.html)
     * - [Create an ApsaraDB RDS for SQL Server instance](https://help.aliyun.com/document_detail/148037.html)
     * - [Create an ApsaraDB RDS for SQL Server Serverless instance](https://help.aliyun.com/document_detail/603465.html)
     * - [Create an ApsaraDB RDS for MariaDB instance](https://help.aliyun.com/document_detail/148040.html)
     *
     * @param request - CreateDBInstanceRequest
     * @returns CreateDBInstanceResponse
     */
    createDBInstance(request: $_model.CreateDBInstanceRequest): Promise<$_model.CreateDBInstanceResponse>;
    /**
     * Creates an endpoint for an ApsaraDB RDS Cluster Edition instance.
     *
     * @remarks
     * ### Supported engines
     * <props="china">
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for PostgreSQL
     * <props="intl">ApsaraDB RDS for MySQL
     * ### Related documentation
     * >Notice: Before you call this operation, carefully read the documentation to fully understand the prerequisites and the impacts of the operation.</notice>
     * <props="china">
     * - ApsaraDB RDS for MySQL: [Add a cluster read-only endpoint](https://help.aliyun.com/document_detail/464132.html)
     * - ApsaraDB RDS for PostgreSQL: [Add a cluster read-only endpoint](https://help.aliyun.com/document_detail/96788.html)
     * <props="intl">
     * [Add a cluster read-only endpoint](https://help.aliyun.com/document_detail/464132.html)
     *
     * @param tmpReq - CreateDBInstanceEndpointRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns CreateDBInstanceEndpointResponse
     */
    createDBInstanceEndpointWithOptions(tmpReq: $_model.CreateDBInstanceEndpointRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateDBInstanceEndpointResponse>;
    /**
     * Creates an endpoint for an ApsaraDB RDS Cluster Edition instance.
     *
     * @remarks
     * ### Supported engines
     * <props="china">
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for PostgreSQL
     * <props="intl">ApsaraDB RDS for MySQL
     * ### Related documentation
     * >Notice: Before you call this operation, carefully read the documentation to fully understand the prerequisites and the impacts of the operation.</notice>
     * <props="china">
     * - ApsaraDB RDS for MySQL: [Add a cluster read-only endpoint](https://help.aliyun.com/document_detail/464132.html)
     * - ApsaraDB RDS for PostgreSQL: [Add a cluster read-only endpoint](https://help.aliyun.com/document_detail/96788.html)
     * <props="intl">
     * [Add a cluster read-only endpoint](https://help.aliyun.com/document_detail/464132.html)
     *
     * @param request - CreateDBInstanceEndpointRequest
     * @returns CreateDBInstanceEndpointResponse
     */
    createDBInstanceEndpoint(request: $_model.CreateDBInstanceEndpointRequest): Promise<$_model.CreateDBInstanceEndpointResponse>;
    /**
     * Creates a public endpoint for an endpoint of an ApsaraDB RDS Cluster Edition instance.
     *
     * @remarks
     * ### Supported engines
     * <props="china">
     * - RDS MySQL
     * - RDS PostgreSQL
     * <props="intl">RDS MySQL
     * ### Precautions
     * - You can create a public endpoint for an endpoint only if the endpoint does not already have a public endpoint.
     * - Configurations such as the traffic distribution weight are the same as those of the internal endpoint. Each endpoint can have only one public endpoint and one internal endpoint.
     *
     * @param request - CreateDBInstanceEndpointAddressRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns CreateDBInstanceEndpointAddressResponse
     */
    createDBInstanceEndpointAddressWithOptions(request: $_model.CreateDBInstanceEndpointAddressRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateDBInstanceEndpointAddressResponse>;
    /**
     * Creates a public endpoint for an endpoint of an ApsaraDB RDS Cluster Edition instance.
     *
     * @remarks
     * ### Supported engines
     * <props="china">
     * - RDS MySQL
     * - RDS PostgreSQL
     * <props="intl">RDS MySQL
     * ### Precautions
     * - You can create a public endpoint for an endpoint only if the endpoint does not already have a public endpoint.
     * - Configurations such as the traffic distribution weight are the same as those of the internal endpoint. Each endpoint can have only one public endpoint and one internal endpoint.
     *
     * @param request - CreateDBInstanceEndpointAddressRequest
     * @returns CreateDBInstanceEndpointAddressResponse
     */
    createDBInstanceEndpointAddress(request: $_model.CreateDBInstanceEndpointAddressRequest): Promise<$_model.CreateDBInstanceEndpointAddressResponse>;
    /**
     * Rebuilds an instance that has been moved to the recycle bin.
     *
     * @remarks
     * ### Supported engines
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for PostgreSQL
     * - ApsaraDB RDS for SQL Server
     * - ApsaraDB RDS for MariaDB
     * ### Related feature documentation
     * >Warning: This API operation incurs fees. Read the related feature documentation carefully before you call this operation.
     * - [Rebuild an ApsaraDB RDS for MySQL instance from the recycle bin](https://help.aliyun.com/document_detail/96065.html)
     * - [Rebuild an ApsaraDB RDS for PostgreSQL instance from the recycle bin](https://help.aliyun.com/document_detail/96752.html)
     * - [Rebuild an ApsaraDB RDS for SQL Server instance from the recycle bin](https://help.aliyun.com/document_detail/95669.html)
     * - [Rebuild an ApsaraDB RDS for MariaDB instance from the recycle bin](https://help.aliyun.com/document_detail/97131.html)
     *
     * @param request - CreateDBInstanceForRebuildRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns CreateDBInstanceForRebuildResponse
     */
    createDBInstanceForRebuildWithOptions(request: $_model.CreateDBInstanceForRebuildRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateDBInstanceForRebuildResponse>;
    /**
     * Rebuilds an instance that has been moved to the recycle bin.
     *
     * @remarks
     * ### Supported engines
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for PostgreSQL
     * - ApsaraDB RDS for SQL Server
     * - ApsaraDB RDS for MariaDB
     * ### Related feature documentation
     * >Warning: This API operation incurs fees. Read the related feature documentation carefully before you call this operation.
     * - [Rebuild an ApsaraDB RDS for MySQL instance from the recycle bin](https://help.aliyun.com/document_detail/96065.html)
     * - [Rebuild an ApsaraDB RDS for PostgreSQL instance from the recycle bin](https://help.aliyun.com/document_detail/96752.html)
     * - [Rebuild an ApsaraDB RDS for SQL Server instance from the recycle bin](https://help.aliyun.com/document_detail/95669.html)
     * - [Rebuild an ApsaraDB RDS for MariaDB instance from the recycle bin](https://help.aliyun.com/document_detail/97131.html)
     *
     * @param request - CreateDBInstanceForRebuildRequest
     * @returns CreateDBInstanceForRebuildResponse
     */
    createDBInstanceForRebuild(request: $_model.CreateDBInstanceForRebuildRequest): Promise<$_model.CreateDBInstanceForRebuildResponse>;
    /**
     * Creates a replication task for a native replication instance.
     *
     * @param request - CreateDBInstanceReplicationRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns CreateDBInstanceReplicationResponse
     */
    createDBInstanceReplicationWithOptions(request: $_model.CreateDBInstanceReplicationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateDBInstanceReplicationResponse>;
    /**
     * Creates a replication task for a native replication instance.
     *
     * @param request - CreateDBInstanceReplicationRequest
     * @returns CreateDBInstanceReplicationResponse
     */
    createDBInstanceReplication(request: $_model.CreateDBInstanceReplicationRequest): Promise<$_model.CreateDBInstanceReplicationResponse>;
    /**
     * Adds a security group rule to an ApsaraDB RDS for SQL Server instance.
     *
     * @remarks
     * ### Supported engines
     * ApsaraDB RDS for SQL Server
     * ### Related documentation
     * [Configure security group rules for ApsaraDB RDS for SQL Server](https://help.aliyun.com/document_detail/2392322.html)
     *
     * @param request - CreateDBInstanceSecurityGroupRuleRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns CreateDBInstanceSecurityGroupRuleResponse
     */
    createDBInstanceSecurityGroupRuleWithOptions(request: $_model.CreateDBInstanceSecurityGroupRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateDBInstanceSecurityGroupRuleResponse>;
    /**
     * Adds a security group rule to an ApsaraDB RDS for SQL Server instance.
     *
     * @remarks
     * ### Supported engines
     * ApsaraDB RDS for SQL Server
     * ### Related documentation
     * [Configure security group rules for ApsaraDB RDS for SQL Server](https://help.aliyun.com/document_detail/2392322.html)
     *
     * @param request - CreateDBInstanceSecurityGroupRuleRequest
     * @returns CreateDBInstanceSecurityGroupRuleResponse
     */
    createDBInstanceSecurityGroupRule(request: $_model.CreateDBInstanceSecurityGroupRuleRequest): Promise<$_model.CreateDBInstanceSecurityGroupRuleResponse>;
    /**
     * Adds a node to an ApsaraDB RDS Cluster Edition instance.
     *
     * @remarks
     * ### Supported engines
     * <props="china">
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for PostgreSQL
     * <props="intl">ApsaraDB RDS for MySQL
     * ### Related documentation
     * >Notice: Before you call this operation, carefully read the feature documentation to ensure that you fully understand the prerequisites and impacts.
     * <props="china">
     * - ApsaraDB RDS for MySQL: [Add nodes to an ApsaraDB RDS for MySQL Cluster Edition instance](https://help.aliyun.com/document_detail/464129.html)
     * - ApsaraDB RDS for PostgreSQL: [Add nodes to an ApsaraDB RDS for PostgreSQL Cluster Edition instance](https://help.aliyun.com/document_detail/2778876.html)
     * <props="intl">
     * [Add nodes to an ApsaraDB RDS for MySQL Cluster Edition instance](https://help.aliyun.com/document_detail/464129.html)
     *
     * @param tmpReq - CreateDBNodesRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns CreateDBNodesResponse
     */
    createDBNodesWithOptions(tmpReq: $_model.CreateDBNodesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateDBNodesResponse>;
    /**
     * Adds a node to an ApsaraDB RDS Cluster Edition instance.
     *
     * @remarks
     * ### Supported engines
     * <props="china">
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for PostgreSQL
     * <props="intl">ApsaraDB RDS for MySQL
     * ### Related documentation
     * >Notice: Before you call this operation, carefully read the feature documentation to ensure that you fully understand the prerequisites and impacts.
     * <props="china">
     * - ApsaraDB RDS for MySQL: [Add nodes to an ApsaraDB RDS for MySQL Cluster Edition instance](https://help.aliyun.com/document_detail/464129.html)
     * - ApsaraDB RDS for PostgreSQL: [Add nodes to an ApsaraDB RDS for PostgreSQL Cluster Edition instance](https://help.aliyun.com/document_detail/2778876.html)
     * <props="intl">
     * [Add nodes to an ApsaraDB RDS for MySQL Cluster Edition instance](https://help.aliyun.com/document_detail/464129.html)
     *
     * @param request - CreateDBNodesRequest
     * @returns CreateDBNodesResponse
     */
    createDBNodes(request: $_model.CreateDBNodesRequest): Promise<$_model.CreateDBNodesResponse>;
    /**
     * Creates a database proxy endpoint for an ApsaraDB RDS instance.
     *
     * @remarks
     * ### Supported DPI engines
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for PostgreSQL
     * ### Related feature documentation
     * >Notice: Before you invoke this operation, carefully read the feature documentation to ensure that you fully understand the prerequisites and impacts of the operation.</notice>
     * - [Create internal and public database proxy endpoints for an ApsaraDB RDS for MySQL instance](https://help.aliyun.com/document_detail/184921.html)
     * - [Create internal and public database proxy endpoints for an ApsaraDB RDS for PostgreSQL instance](https://help.aliyun.com/document_detail/418274.html)
     *
     * @param request - CreateDBProxyEndpointAddressRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns CreateDBProxyEndpointAddressResponse
     */
    createDBProxyEndpointAddressWithOptions(request: $_model.CreateDBProxyEndpointAddressRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateDBProxyEndpointAddressResponse>;
    /**
     * Creates a database proxy endpoint for an ApsaraDB RDS instance.
     *
     * @remarks
     * ### Supported DPI engines
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for PostgreSQL
     * ### Related feature documentation
     * >Notice: Before you invoke this operation, carefully read the feature documentation to ensure that you fully understand the prerequisites and impacts of the operation.</notice>
     * - [Create internal and public database proxy endpoints for an ApsaraDB RDS for MySQL instance](https://help.aliyun.com/document_detail/184921.html)
     * - [Create internal and public database proxy endpoints for an ApsaraDB RDS for PostgreSQL instance](https://help.aliyun.com/document_detail/418274.html)
     *
     * @param request - CreateDBProxyEndpointAddressRequest
     * @returns CreateDBProxyEndpointAddressResponse
     */
    createDBProxyEndpointAddress(request: $_model.CreateDBProxyEndpointAddressRequest): Promise<$_model.CreateDBProxyEndpointAddressResponse>;
    /**
     * Creates a database on an ApsaraDB RDS instance.
     *
     * @remarks
     * ### Supported database engines
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for PostgreSQL
     * - ApsaraDB RDS for SQL Server
     * - ApsaraDB RDS for MariaDB
     * ### Related documentation
     * >Notice: Before you call this operation, read the documentation carefully to fully understand the prerequisites and impacts.
     * - [Create a database on an ApsaraDB RDS for MySQL instance](https://help.aliyun.com/document_detail/96105.html)
     * - [Create a database on an ApsaraDB RDS for PostgreSQL instance](https://help.aliyun.com/document_detail/96758.html)
     * - [Create a database on an ApsaraDB RDS for SQL Server instance](https://help.aliyun.com/document_detail/95698.html)
     * - [Create a database on an ApsaraDB RDS for MariaDB instance](https://help.aliyun.com/document_detail/97136.html)
     *
     * @param request - CreateDatabaseRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns CreateDatabaseResponse
     */
    createDatabaseWithOptions(request: $_model.CreateDatabaseRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateDatabaseResponse>;
    /**
     * Creates a database on an ApsaraDB RDS instance.
     *
     * @remarks
     * ### Supported database engines
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for PostgreSQL
     * - ApsaraDB RDS for SQL Server
     * - ApsaraDB RDS for MariaDB
     * ### Related documentation
     * >Notice: Before you call this operation, read the documentation carefully to fully understand the prerequisites and impacts.
     * - [Create a database on an ApsaraDB RDS for MySQL instance](https://help.aliyun.com/document_detail/96105.html)
     * - [Create a database on an ApsaraDB RDS for PostgreSQL instance](https://help.aliyun.com/document_detail/96758.html)
     * - [Create a database on an ApsaraDB RDS for SQL Server instance](https://help.aliyun.com/document_detail/95698.html)
     * - [Create a database on an ApsaraDB RDS for MariaDB instance](https://help.aliyun.com/document_detail/97136.html)
     *
     * @param request - CreateDatabaseRequest
     * @returns CreateDatabaseResponse
     */
    createDatabase(request: $_model.CreateDatabaseRequest): Promise<$_model.CreateDatabaseResponse>;
    /**
     * Restores data across regions to a new instance.
     *
     * @remarks
     * ### Recommendations
     * Before restoration, call the CheckCreateDdrDBInstance operation to check whether the cross-region backup set of the destination ApsaraDB RDS instance can be used for cross-region restoration.
     * ### Supported engines
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for PostgreSQL
     * - ApsaraDB RDS for SQL Server
     * ### Related documentation
     * >Notice: Before you use this operation, carefully read the feature documentation to ensure that you fully understand the prerequisites and the impacts of using this operation.
     * - [Cross-region backup for ApsaraDB RDS for MySQL](https://help.aliyun.com/document_detail/120824.html)
     * - [Cross-region backup for ApsaraDB RDS for PostgreSQL](https://help.aliyun.com/document_detail/206671.html)
     * - [Cross-region backup for ApsaraDB RDS for SQL Server](https://help.aliyun.com/document_detail/187923.html)
     *
     * @param request - CreateDdrInstanceRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns CreateDdrInstanceResponse
     */
    createDdrInstanceWithOptions(request: $_model.CreateDdrInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateDdrInstanceResponse>;
    /**
     * Restores data across regions to a new instance.
     *
     * @remarks
     * ### Recommendations
     * Before restoration, call the CheckCreateDdrDBInstance operation to check whether the cross-region backup set of the destination ApsaraDB RDS instance can be used for cross-region restoration.
     * ### Supported engines
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for PostgreSQL
     * - ApsaraDB RDS for SQL Server
     * ### Related documentation
     * >Notice: Before you use this operation, carefully read the feature documentation to ensure that you fully understand the prerequisites and the impacts of using this operation.
     * - [Cross-region backup for ApsaraDB RDS for MySQL](https://help.aliyun.com/document_detail/120824.html)
     * - [Cross-region backup for ApsaraDB RDS for PostgreSQL](https://help.aliyun.com/document_detail/206671.html)
     * - [Cross-region backup for ApsaraDB RDS for SQL Server](https://help.aliyun.com/document_detail/187923.html)
     *
     * @param request - CreateDdrInstanceRequest
     * @returns CreateDdrInstanceResponse
     */
    createDdrInstance(request: $_model.CreateDdrInstanceRequest): Promise<$_model.CreateDdrInstanceResponse>;
    /**
     * Creates an ApsaraDB RDS global active database cluster.
     *
     * @remarks
     * ### Supported engines
     * - ApsaraDB RDS for MySQL
     * <props="china">
     * ### Related documentation
     * >Notice: Before you call this operation, read the documentation to fully understand the prerequisites and impacts.
     * [Create and release a global active database cluster](https://help.aliyun.com/document_detail/328592.html)
     *
     * @param request - CreateGADInstanceRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns CreateGADInstanceResponse
     */
    createGADInstanceWithOptions(request: $_model.CreateGADInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateGADInstanceResponse>;
    /**
     * Creates an ApsaraDB RDS global active database cluster.
     *
     * @remarks
     * ### Supported engines
     * - ApsaraDB RDS for MySQL
     * <props="china">
     * ### Related documentation
     * >Notice: Before you call this operation, read the documentation to fully understand the prerequisites and impacts.
     * [Create and release a global active database cluster](https://help.aliyun.com/document_detail/328592.html)
     *
     * @param request - CreateGADInstanceRequest
     * @returns CreateGADInstanceResponse
     */
    createGADInstance(request: $_model.CreateGADInstanceRequest): Promise<$_model.CreateGADInstanceResponse>;
    /**
     * Adds a node to an ApsaraDB RDS global active database cluster.
     *
     * @remarks
     * ### Supported engines
     * - ApsaraDB RDS for MySQL
     * ### Related documentation
     * >Notice: Before you call this operation, read the documentation to fully understand the prerequisites and impacts.</notice>
     * <props="china">[Add or remove unit nodes](https://help.aliyun.com/document_detail/331851.html)
     *
     * @param request - CreateGadInstanceMemberRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns CreateGadInstanceMemberResponse
     */
    createGadInstanceMemberWithOptions(request: $_model.CreateGadInstanceMemberRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateGadInstanceMemberResponse>;
    /**
     * Adds a node to an ApsaraDB RDS global active database cluster.
     *
     * @remarks
     * ### Supported engines
     * - ApsaraDB RDS for MySQL
     * ### Related documentation
     * >Notice: Before you call this operation, read the documentation to fully understand the prerequisites and impacts.</notice>
     * <props="china">[Add or remove unit nodes](https://help.aliyun.com/document_detail/331851.html)
     *
     * @param request - CreateGadInstanceMemberRequest
     * @returns CreateGadInstanceMemberResponse
     */
    createGadInstanceMember(request: $_model.CreateGadInstanceMemberRequest): Promise<$_model.CreateGadInstanceMemberResponse>;
    /**
     * Creates a data import task.
     *
     * @remarks
     * Creates a data import task to import data into an ApsaraDB RDS for MySQL instance that uses native replication.
     *
     * @param request - CreateImportTaskRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns CreateImportTaskResponse
     */
    createImportTaskWithOptions(request: $_model.CreateImportTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateImportTaskResponse>;
    /**
     * Creates a data import task.
     *
     * @remarks
     * Creates a data import task to import data into an ApsaraDB RDS for MySQL instance that uses native replication.
     *
     * @param request - CreateImportTaskRequest
     * @returns CreateImportTaskResponse
     */
    createImportTask(request: $_model.CreateImportTaskRequest): Promise<$_model.CreateImportTaskResponse>;
    /**
     * Creates a new encryption or masking rule for a specified instance.
     *
     * @remarks
     * ## Request description
     * - Before you invoke this operation, make sure that column encryption is activated in the DAS Security Center.
     * - If you receive the ColumnEncryptionErrorCode.NOT_PURCHASED error message when invoking this operation, go to the Database Autonomy Service (DAS) Security Center to purchase and activate column encryption.
     *
     * @param tmpReq - CreateMaskingRulesRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns CreateMaskingRulesResponse
     */
    createMaskingRulesWithOptions(tmpReq: $_model.CreateMaskingRulesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateMaskingRulesResponse>;
    /**
     * Creates a new encryption or masking rule for a specified instance.
     *
     * @remarks
     * ## Request description
     * - Before you invoke this operation, make sure that column encryption is activated in the DAS Security Center.
     * - If you receive the ColumnEncryptionErrorCode.NOT_PURCHASED error message when invoking this operation, go to the Database Autonomy Service (DAS) Security Center to purchase and activate column encryption.
     *
     * @param request - CreateMaskingRulesRequest
     * @returns CreateMaskingRulesResponse
     */
    createMaskingRules(request: $_model.CreateMaskingRulesRequest): Promise<$_model.CreateMaskingRulesResponse>;
    /**
     * Restores self-managed SQL Server backup files from Object Storage Service (OSS) to an ApsaraDB RDS for SQL Server instance to migrate data to the cloud.
     *
     * @remarks
     * ### Supported DPI engines
     * ApsaraDB RDS for SQL Server
     * ### Before you begin
     * [Upload self-managed SQL Server backup data to OSS](https://help.aliyun.com/document_detail/100019.html).
     * ### Limits
     * - Cross-account data migration is not supported. For example, you cannot migrate backup files from OSS under Alibaba Cloud Account A to an ApsaraDB RDS for SQL Server instance under Alibaba Cloud Account B.
     * - To migrate data across accounts, first [perform data replication to transfer the OSS data from source Account A to the OSS bucket of destination Account B](https://help.aliyun.com/document_detail/2401486.html). Make sure that the OSS data and the ApsaraDB RDS for SQL Server instance belong to the same Alibaba Cloud account before you use the API operation in this topic to create a migration task.
     * ### Related documentation
     * >Notice: Before you call this operation, carefully read the feature documentation to ensure that you fully understand the **prerequisites**, **preparations**, and impacts of the operation.
     * [Migrate data at the instance level to the cloud](https://help.aliyun.com/document_detail/100019.html)
     *
     * @param request - CreateMigrateTaskRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns CreateMigrateTaskResponse
     */
    createMigrateTaskWithOptions(request: $_model.CreateMigrateTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateMigrateTaskResponse>;
    /**
     * Restores self-managed SQL Server backup files from Object Storage Service (OSS) to an ApsaraDB RDS for SQL Server instance to migrate data to the cloud.
     *
     * @remarks
     * ### Supported DPI engines
     * ApsaraDB RDS for SQL Server
     * ### Before you begin
     * [Upload self-managed SQL Server backup data to OSS](https://help.aliyun.com/document_detail/100019.html).
     * ### Limits
     * - Cross-account data migration is not supported. For example, you cannot migrate backup files from OSS under Alibaba Cloud Account A to an ApsaraDB RDS for SQL Server instance under Alibaba Cloud Account B.
     * - To migrate data across accounts, first [perform data replication to transfer the OSS data from source Account A to the OSS bucket of destination Account B](https://help.aliyun.com/document_detail/2401486.html). Make sure that the OSS data and the ApsaraDB RDS for SQL Server instance belong to the same Alibaba Cloud account before you use the API operation in this topic to create a migration task.
     * ### Related documentation
     * >Notice: Before you call this operation, carefully read the feature documentation to ensure that you fully understand the **prerequisites**, **preparations**, and impacts of the operation.
     * [Migrate data at the instance level to the cloud](https://help.aliyun.com/document_detail/100019.html)
     *
     * @param request - CreateMigrateTaskRequest
     * @returns CreateMigrateTaskResponse
     */
    createMigrateTask(request: $_model.CreateMigrateTaskRequest): Promise<$_model.CreateMigrateTaskResponse>;
    /**
     * Opens the database for a backup data migration task in ApsaraDB RDS for SQL Server.
     *
     * @remarks
     * ### Supported database engines
     * - ApsaraDB RDS for SQL Server
     * ### Related documentation
     * >Notice: Before you call this operation, read the documentation to fully understand the prerequisites and impacts.
     * This operation migrates backup data to the cloud. Read the following documents before you call this operation:
     * - [Migrate full backup data to the cloud (SQL Server 2008 R2)](https://help.aliyun.com/document_detail/95737.html)
     * - [Migrate full backup data to the cloud (SQL Server 2012, 2014, 2016, 2017, and 2019)](https://help.aliyun.com/document_detail/95738.html)
     * - [Migrate incremental backup data to the cloud (SQL Server 2012, 2014, 2016, 2017, and 2019)](https://help.aliyun.com/document_detail/95736.html)
     *
     * @param request - CreateOnlineDatabaseTaskRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns CreateOnlineDatabaseTaskResponse
     */
    createOnlineDatabaseTaskWithOptions(request: $_model.CreateOnlineDatabaseTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateOnlineDatabaseTaskResponse>;
    /**
     * Opens the database for a backup data migration task in ApsaraDB RDS for SQL Server.
     *
     * @remarks
     * ### Supported database engines
     * - ApsaraDB RDS for SQL Server
     * ### Related documentation
     * >Notice: Before you call this operation, read the documentation to fully understand the prerequisites and impacts.
     * This operation migrates backup data to the cloud. Read the following documents before you call this operation:
     * - [Migrate full backup data to the cloud (SQL Server 2008 R2)](https://help.aliyun.com/document_detail/95737.html)
     * - [Migrate full backup data to the cloud (SQL Server 2012, 2014, 2016, 2017, and 2019)](https://help.aliyun.com/document_detail/95738.html)
     * - [Migrate incremental backup data to the cloud (SQL Server 2012, 2014, 2016, 2017, and 2019)](https://help.aliyun.com/document_detail/95736.html)
     *
     * @param request - CreateOnlineDatabaseTaskRequest
     * @returns CreateOnlineDatabaseTaskResponse
     */
    createOnlineDatabaseTask(request: $_model.CreateOnlineDatabaseTaskRequest): Promise<$_model.CreateOnlineDatabaseTaskResponse>;
    /**
     * Deletes nodes from an ApsaraDB RDS for MySQL Cluster Edition instance.
     *
     * @remarks
     * ### Supported engine
     * ApsaraDB RDS for MySQL
     * ### Related documentation
     * >Notice: Before you call this operation, carefully read the feature documentation to ensure that you fully understand the prerequisites and the impacts of this operation.
     * [Delete nodes from an ApsaraDB RDS for MySQL Cluster Edition instance](https://help.aliyun.com/document_detail/464130.html)
     *
     * @param tmpReq - CreateOrderForDeleteDBNodesRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns CreateOrderForDeleteDBNodesResponse
     */
    createOrderForDeleteDBNodesWithOptions(tmpReq: $_model.CreateOrderForDeleteDBNodesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateOrderForDeleteDBNodesResponse>;
    /**
     * Deletes nodes from an ApsaraDB RDS for MySQL Cluster Edition instance.
     *
     * @remarks
     * ### Supported engine
     * ApsaraDB RDS for MySQL
     * ### Related documentation
     * >Notice: Before you call this operation, carefully read the feature documentation to ensure that you fully understand the prerequisites and the impacts of this operation.
     * [Delete nodes from an ApsaraDB RDS for MySQL Cluster Edition instance](https://help.aliyun.com/document_detail/464130.html)
     *
     * @param request - CreateOrderForDeleteDBNodesRequest
     * @returns CreateOrderForDeleteDBNodesResponse
     */
    createOrderForDeleteDBNodes(request: $_model.CreateOrderForDeleteDBNodesRequest): Promise<$_model.CreateOrderForDeleteDBNodesResponse>;
    /**
     * Creates a parameter template for ApsaraDB RDS.
     *
     * @remarks
     * ### Applicable engines
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for PostgreSQL
     * ### Related documentation
     * >Notice: Before you call this operation, read the following documentation and make sure that you fully understand the prerequisites and impacts of this operation.
     * - [Use a parameter template for ApsaraDB RDS for MySQL instances](https://help.aliyun.com/document_detail/130565.html)
     * - [Use a parameter template for ApsaraDB RDS for PostgreSQL instances](https://help.aliyun.com/document_detail/457176.html)
     *
     * @param request - CreateParameterGroupRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns CreateParameterGroupResponse
     */
    createParameterGroupWithOptions(request: $_model.CreateParameterGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateParameterGroupResponse>;
    /**
     * Creates a parameter template for ApsaraDB RDS.
     *
     * @remarks
     * ### Applicable engines
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for PostgreSQL
     * ### Related documentation
     * >Notice: Before you call this operation, read the following documentation and make sure that you fully understand the prerequisites and impacts of this operation.
     * - [Use a parameter template for ApsaraDB RDS for MySQL instances](https://help.aliyun.com/document_detail/130565.html)
     * - [Use a parameter template for ApsaraDB RDS for PostgreSQL instances](https://help.aliyun.com/document_detail/457176.html)
     *
     * @param request - CreateParameterGroupRequest
     * @returns CreateParameterGroupResponse
     */
    createParameterGroup(request: $_model.CreateParameterGroupRequest): Promise<$_model.CreateParameterGroupResponse>;
    /**
     * Installs a specified plug-in in a destination database.
     *
     * @remarks
     * <props="china">You can join the RDS PostgreSQL plug-in communication DingTalk group (103525002795) for consultation, communication, and feedback to obtain more information about plug-ins.
     * ### Supported engines
     * ApsaraDB RDS for PostgreSQL
     * ### Related documentation
     * >Notice: Before you call this operation, carefully read the feature documentation to ensure that you fully understand the prerequisites and the impact of this operation.
     * [Manage plug-ins](https://help.aliyun.com/document_detail/2402409.html)
     * ### Precautions
     * You can only install plug-ins that are supported by the major engine version of the instance. Otherwise, the installation fails.
     * - For information about supported plug-ins, see [Supported plug-ins](https://help.aliyun.com/document_detail/142340.html).
     * - You can call the [DescribeDBInstanceAttribute](https://help.aliyun.com/document_detail/610394.html) operation to query the major engine version of the instance.
     *
     * @param request - CreatePostgresExtensionsRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns CreatePostgresExtensionsResponse
     */
    createPostgresExtensionsWithOptions(request: $_model.CreatePostgresExtensionsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreatePostgresExtensionsResponse>;
    /**
     * Installs a specified plug-in in a destination database.
     *
     * @remarks
     * <props="china">You can join the RDS PostgreSQL plug-in communication DingTalk group (103525002795) for consultation, communication, and feedback to obtain more information about plug-ins.
     * ### Supported engines
     * ApsaraDB RDS for PostgreSQL
     * ### Related documentation
     * >Notice: Before you call this operation, carefully read the feature documentation to ensure that you fully understand the prerequisites and the impact of this operation.
     * [Manage plug-ins](https://help.aliyun.com/document_detail/2402409.html)
     * ### Precautions
     * You can only install plug-ins that are supported by the major engine version of the instance. Otherwise, the installation fails.
     * - For information about supported plug-ins, see [Supported plug-ins](https://help.aliyun.com/document_detail/142340.html).
     * - You can call the [DescribeDBInstanceAttribute](https://help.aliyun.com/document_detail/610394.html) operation to query the major engine version of the instance.
     *
     * @param request - CreatePostgresExtensionsRequest
     * @returns CreatePostgresExtensionsResponse
     */
    createPostgresExtensions(request: $_model.CreatePostgresExtensionsRequest): Promise<$_model.CreatePostgresExtensionsResponse>;
    /**
     * 创建RDS CUSTOM部署集
     *
     * @param request - CreateRCDeploymentSetRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns CreateRCDeploymentSetResponse
     */
    createRCDeploymentSetWithOptions(request: $_model.CreateRCDeploymentSetRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateRCDeploymentSetResponse>;
    /**
     * 创建RDS CUSTOM部署集
     *
     * @param request - CreateRCDeploymentSetRequest
     * @returns CreateRCDeploymentSetResponse
     */
    createRCDeploymentSet(request: $_model.CreateRCDeploymentSetRequest): Promise<$_model.CreateRCDeploymentSetResponse>;
    /**
     * Creates an RDS Custom data cloud disk.
     *
     * @remarks
     * - Supported cloud disk types: ultra disk, standard SSD, ESSD, and premium performance disk (default).
     * - When the billing method of the cloud disk is subscription (**Prepaid**), you must specify the instance ID (**InstanceId**) of a subscription instance to which this cloud disk is mounted. The expiration time of the cloud disk is the same as that of the mounted instance.
     * - You can create a pay-as-you-go (**Postpaid**) cloud disk separately without mounting it to an instance. You can also mount it to an instance of any billing method during creation as needed.
     * - The supported cloud disk types and the maximum number of cloud disks that can be mounted vary based on the instance type.
     *
     * @param request - CreateRCDiskRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns CreateRCDiskResponse
     */
    createRCDiskWithOptions(request: $_model.CreateRCDiskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateRCDiskResponse>;
    /**
     * Creates an RDS Custom data cloud disk.
     *
     * @remarks
     * - Supported cloud disk types: ultra disk, standard SSD, ESSD, and premium performance disk (default).
     * - When the billing method of the cloud disk is subscription (**Prepaid**), you must specify the instance ID (**InstanceId**) of a subscription instance to which this cloud disk is mounted. The expiration time of the cloud disk is the same as that of the mounted instance.
     * - You can create a pay-as-you-go (**Postpaid**) cloud disk separately without mounting it to an instance. You can also mount it to an instance of any billing method during creation as needed.
     * - The supported cloud disk types and the maximum number of cloud disks that can be mounted vary based on the instance type.
     *
     * @param request - CreateRCDiskRequest
     * @returns CreateRCDiskResponse
     */
    createRCDisk(request: $_model.CreateRCDiskRequest): Promise<$_model.CreateRCDiskResponse>;
    /**
     * Creates a custom image for an RDS Custom instance.
     *
     * @remarks
     * ### Supported engines
     * - RDS MySQL
     * - RDS SQL Server
     * ### Related documentation
     * - [Introduction to RDS Custom for MySQL](https://help.aliyun.com/document_detail/2844223.html)
     * - [Introduction to RDS Custom for SQL Server](https://help.aliyun.com/document_detail/2864363.html)
     * ### Usage
     * - Method 1: Create a custom image from a snapshot generated from a **system cloud disk**. When passing values, use SnapshotId and ImageName together.
     * - Method 2: Create a custom image from an RDS Custom instance. When passing values, use InstanceId and ImageName together.
     *
     * @param request - CreateRCImageRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns CreateRCImageResponse
     */
    createRCImageWithOptions(request: $_model.CreateRCImageRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateRCImageResponse>;
    /**
     * Creates a custom image for an RDS Custom instance.
     *
     * @remarks
     * ### Supported engines
     * - RDS MySQL
     * - RDS SQL Server
     * ### Related documentation
     * - [Introduction to RDS Custom for MySQL](https://help.aliyun.com/document_detail/2844223.html)
     * - [Introduction to RDS Custom for SQL Server](https://help.aliyun.com/document_detail/2864363.html)
     * ### Usage
     * - Method 1: Create a custom image from a snapshot generated from a **system cloud disk**. When passing values, use SnapshotId and ImageName together.
     * - Method 2: Create a custom image from an RDS Custom instance. When passing values, use InstanceId and ImageName together.
     *
     * @param request - CreateRCImageRequest
     * @returns CreateRCImageResponse
     */
    createRCImage(request: $_model.CreateRCImageRequest): Promise<$_model.CreateRCImageResponse>;
    /**
     * Creates an edge node pool in an ACK Edge cluster for RDS Custom.
     *
     * @param tmpReq - CreateRCNodePoolRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns CreateRCNodePoolResponse
     */
    createRCNodePoolWithOptions(tmpReq: $_model.CreateRCNodePoolRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateRCNodePoolResponse>;
    /**
     * Creates an edge node pool in an ACK Edge cluster for RDS Custom.
     *
     * @param request - CreateRCNodePoolRequest
     * @returns CreateRCNodePoolResponse
     */
    createRCNodePool(request: $_model.CreateRCNodePoolRequest): Promise<$_model.CreateRCNodePoolResponse>;
    /**
     * Creates a snapshot for a cloud disk.
     *
     * @remarks
     * You cannot create a snapshot for a specified cloud disk in the following scenarios:
     * - The cloud disk has reached the limit of 256 manual snapshots.
     * - The previous snapshot is still being created.
     * - The instance on which the cloud disk is mounted has never been started.
     * - The instance on which the cloud disk is mounted is not in the **Stopped** or **Running** state.
     * Note the following when you create a snapshot:
     * - If the snapshot is still being created, you cannot use it to create a custom image by calling the CreateImage operation.
     * - If the cloud disk is mounted on an RDS Custom instance, do not change the instance status during snapshot creation.
     * - You can create snapshots for cloud disks in the **Expired** state. If a cloud disk reaches its expiration and release time exactly when a snapshot is being created, the snapshot in the **Creating** state is deleted along with the cloud disk.
     *
     * @param request - CreateRCSnapshotRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns CreateRCSnapshotResponse
     */
    createRCSnapshotWithOptions(request: $_model.CreateRCSnapshotRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateRCSnapshotResponse>;
    /**
     * Creates a snapshot for a cloud disk.
     *
     * @remarks
     * You cannot create a snapshot for a specified cloud disk in the following scenarios:
     * - The cloud disk has reached the limit of 256 manual snapshots.
     * - The previous snapshot is still being created.
     * - The instance on which the cloud disk is mounted has never been started.
     * - The instance on which the cloud disk is mounted is not in the **Stopped** or **Running** state.
     * Note the following when you create a snapshot:
     * - If the snapshot is still being created, you cannot use it to create a custom image by calling the CreateImage operation.
     * - If the cloud disk is mounted on an RDS Custom instance, do not change the instance status during snapshot creation.
     * - You can create snapshots for cloud disks in the **Expired** state. If a cloud disk reaches its expiration and release time exactly when a snapshot is being created, the snapshot in the **Creating** state is deleted along with the cloud disk.
     *
     * @param request - CreateRCSnapshotRequest
     * @returns CreateRCSnapshotResponse
     */
    createRCSnapshot(request: $_model.CreateRCSnapshotRequest): Promise<$_model.CreateRCSnapshotResponse>;
    /**
     * Creates a read-only instance for an ApsaraDB RDS instance.
     *
     * @remarks
     * ### Supported engines
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for PostgreSQL
     * - ApsaraDB RDS for SQL Server
     * ### Related feature documentation
     * >Notice: Before you call this operation, carefully read the following documentation to fully understand the prerequisites and impacts of this operation.
     * - [Create a read-only ApsaraDB RDS for MySQL instance](https://help.aliyun.com/document_detail/56991.html)
     * - [Create a DuckDB-based analytical instance for ApsaraDB RDS for MySQL](https://help.aliyun.com/document_detail/2950002.html)
     * - [Create a read-only ApsaraDB RDS for PostgreSQL instance](https://help.aliyun.com/document_detail/108959.html)
     * - [Create a DuckDB-based analytical instance for ApsaraDB RDS for PostgreSQL](https://help.aliyun.com/document_detail/2977241.html)
     * - [Create a read-only ApsaraDB RDS for SQL Server instance](https://help.aliyun.com/document_detail/99005.html)
     *
     * @param request - CreateReadOnlyDBInstanceRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns CreateReadOnlyDBInstanceResponse
     */
    createReadOnlyDBInstanceWithOptions(request: $_model.CreateReadOnlyDBInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateReadOnlyDBInstanceResponse>;
    /**
     * Creates a read-only instance for an ApsaraDB RDS instance.
     *
     * @remarks
     * ### Supported engines
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for PostgreSQL
     * - ApsaraDB RDS for SQL Server
     * ### Related feature documentation
     * >Notice: Before you call this operation, carefully read the following documentation to fully understand the prerequisites and impacts of this operation.
     * - [Create a read-only ApsaraDB RDS for MySQL instance](https://help.aliyun.com/document_detail/56991.html)
     * - [Create a DuckDB-based analytical instance for ApsaraDB RDS for MySQL](https://help.aliyun.com/document_detail/2950002.html)
     * - [Create a read-only ApsaraDB RDS for PostgreSQL instance](https://help.aliyun.com/document_detail/108959.html)
     * - [Create a DuckDB-based analytical instance for ApsaraDB RDS for PostgreSQL](https://help.aliyun.com/document_detail/2977241.html)
     * - [Create a read-only ApsaraDB RDS for SQL Server instance](https://help.aliyun.com/document_detail/99005.html)
     *
     * @param request - CreateReadOnlyDBInstanceRequest
     * @returns CreateReadOnlyDBInstanceResponse
     */
    createReadOnlyDBInstance(request: $_model.CreateReadOnlyDBInstanceRequest): Promise<$_model.CreateReadOnlyDBInstanceResponse>;
    /**
     * Creates a data synchronization link for an RDS disaster recovery instance.
     *
     * @remarks
     * ### Supported engines
     * - RDS PostgreSQL
     * - RDS SQL Server
     * > The parameter requirements vary by engine. Specify parameters based on the engine type.
     *
     * @param request - CreateReplicationLinkRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns CreateReplicationLinkResponse
     */
    createReplicationLinkWithOptions(request: $_model.CreateReplicationLinkRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateReplicationLinkResponse>;
    /**
     * Creates a data synchronization link for an RDS disaster recovery instance.
     *
     * @remarks
     * ### Supported engines
     * - RDS PostgreSQL
     * - RDS SQL Server
     * > The parameter requirements vary by engine. Specify parameters based on the engine type.
     *
     * @param request - CreateReplicationLinkRequest
     * @returns CreateReplicationLinkResponse
     */
    createReplicationLink(request: $_model.CreateReplicationLinkRequest): Promise<$_model.CreateReplicationLinkResponse>;
    /**
     * Creates a Data API user credential.
     *
     * @remarks
     * ### Supported engines
     * - ApsaraDB RDS for MySQL
     *
     * @param request - CreateSecretRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns CreateSecretResponse
     */
    createSecretWithOptions(request: $_model.CreateSecretRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateSecretResponse>;
    /**
     * Creates a Data API user credential.
     *
     * @remarks
     * ### Supported engines
     * - ApsaraDB RDS for MySQL
     *
     * @param request - CreateSecretRequest
     * @returns CreateSecretResponse
     */
    createSecret(request: $_model.CreateSecretRequest): Promise<$_model.CreateSecretResponse>;
    /**
     * Creates a service-linked role (SLR).
     *
     * @remarks
     * ### Applicable engines
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for PostgreSQL
     * ### Related documentation
     * >Notice: Before you call this operation, read the following documentation and make sure that you fully understand the prerequisites and impacts of this operation.
     * [Service-linked role](https://help.aliyun.com/document_detail/342840.html)
     *
     * @param request - CreateServiceLinkedRoleRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns CreateServiceLinkedRoleResponse
     */
    createServiceLinkedRoleWithOptions(request: $_model.CreateServiceLinkedRoleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateServiceLinkedRoleResponse>;
    /**
     * Creates a service-linked role (SLR).
     *
     * @remarks
     * ### Applicable engines
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for PostgreSQL
     * ### Related documentation
     * >Notice: Before you call this operation, read the following documentation and make sure that you fully understand the prerequisites and impacts of this operation.
     * [Service-linked role](https://help.aliyun.com/document_detail/342840.html)
     *
     * @param request - CreateServiceLinkedRoleRequest
     * @returns CreateServiceLinkedRoleResponse
     */
    createServiceLinkedRole(request: $_model.CreateServiceLinkedRoleRequest): Promise<$_model.CreateServiceLinkedRoleResponse>;
    /**
     * Creates a temporary instance for an ApsaraDB RDS for SQL Server 2008 R2 instance with Premium Local SSDs.
     *
     * @remarks
     * ### Applicable engine
     * ApsaraDB RDS for SQL Server 2008 R2 (with Premium Local SSDs)
     * ### Related documentation
     * >Notice: Before you call this operation, read the following documentation and make sure that you fully understand the prerequisites and impacts of this operation.
     * [Restore SQL Server data by using a temporary instance](https://help.aliyun.com/document_detail/95724.html)
     *
     * @param request - CreateTempDBInstanceRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns CreateTempDBInstanceResponse
     */
    createTempDBInstanceWithOptions(request: $_model.CreateTempDBInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateTempDBInstanceResponse>;
    /**
     * Creates a temporary instance for an ApsaraDB RDS for SQL Server 2008 R2 instance with Premium Local SSDs.
     *
     * @remarks
     * ### Applicable engine
     * ApsaraDB RDS for SQL Server 2008 R2 (with Premium Local SSDs)
     * ### Related documentation
     * >Notice: Before you call this operation, read the following documentation and make sure that you fully understand the prerequisites and impacts of this operation.
     * [Restore SQL Server data by using a temporary instance](https://help.aliyun.com/document_detail/95724.html)
     *
     * @param request - CreateTempDBInstanceRequest
     * @returns CreateTempDBInstanceResponse
     */
    createTempDBInstance(request: $_model.CreateTempDBInstanceRequest): Promise<$_model.CreateTempDBInstanceResponse>;
    /**
     * Redeems a coupon.
     *
     * @param request - CreateYouhuiForOrderRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns CreateYouhuiForOrderResponse
     */
    createYouhuiForOrderWithOptions(request: $_model.CreateYouhuiForOrderRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateYouhuiForOrderResponse>;
    /**
     * Redeems a coupon.
     *
     * @param request - CreateYouhuiForOrderRequest
     * @returns CreateYouhuiForOrderResponse
     */
    createYouhuiForOrder(request: $_model.CreateYouhuiForOrderRequest): Promise<$_model.CreateYouhuiForOrderResponse>;
    /**
     * Removes the current ApsaraDB RDS for SQL Server instance from its domain.
     *
     * @remarks
     * ### Supported engines
     * - ApsaraDB RDS for SQL Server
     *
     * @param request - DeleteADSettingRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DeleteADSettingResponse
     */
    deleteADSettingWithOptions(request: $_model.DeleteADSettingRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteADSettingResponse>;
    /**
     * Removes the current ApsaraDB RDS for SQL Server instance from its domain.
     *
     * @remarks
     * ### Supported engines
     * - ApsaraDB RDS for SQL Server
     *
     * @param request - DeleteADSettingRequest
     * @returns DeleteADSettingResponse
     */
    deleteADSetting(request: $_model.DeleteADSettingRequest): Promise<$_model.DeleteADSettingResponse>;
    /**
     * Deletes a database account.
     *
     * @remarks
     * ### Supported engines
     * - RDS MySQL
     * - RDS PostgreSQL
     * - RDS SQL Server
     * - RDS MariaDB
     * ### Related documentation
     * >Notice: Before you call this operation, read the following documentation and make sure that you fully understand the prerequisites and impacts of this operation.
     * - [Delete a database account from an ApsaraDB RDS for MySQL instance](https://help.aliyun.com/document_detail/96104.html)
     * - [Delete a database account from an ApsaraDB RDS for PostgreSQL instance](https://help.aliyun.com/document_detail/147649.html)
     * - [Delete a database account from an ApsaraDB RDS for SQL Server instance](https://help.aliyun.com/document_detail/95694.html)
     * - [Delete a database account from an ApsaraDB RDS for MariaDB instance](https://help.aliyun.com/document_detail/97135.html)
     *
     * @param request - DeleteAccountRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DeleteAccountResponse
     */
    deleteAccountWithOptions(request: $_model.DeleteAccountRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteAccountResponse>;
    /**
     * Deletes a database account.
     *
     * @remarks
     * ### Supported engines
     * - RDS MySQL
     * - RDS PostgreSQL
     * - RDS SQL Server
     * - RDS MariaDB
     * ### Related documentation
     * >Notice: Before you call this operation, read the following documentation and make sure that you fully understand the prerequisites and impacts of this operation.
     * - [Delete a database account from an ApsaraDB RDS for MySQL instance](https://help.aliyun.com/document_detail/96104.html)
     * - [Delete a database account from an ApsaraDB RDS for PostgreSQL instance](https://help.aliyun.com/document_detail/147649.html)
     * - [Delete a database account from an ApsaraDB RDS for SQL Server instance](https://help.aliyun.com/document_detail/95694.html)
     * - [Delete a database account from an ApsaraDB RDS for MariaDB instance](https://help.aliyun.com/document_detail/97135.html)
     *
     * @param request - DeleteAccountRequest
     * @returns DeleteAccountResponse
     */
    deleteAccount(request: $_model.DeleteAccountRequest): Promise<$_model.DeleteAccountResponse>;
    /**
     * Deletes data backup files of an ApsaraDB RDS instance.
     *
     * @remarks
     * ### Supported engines
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for PostgreSQL
     * > Only High-availability Edition instances are supported.
     * ### Description
     * When you invoke this operation to delete data backup files, only the backup sets of the instance itself are deleted. The backup sets of associated instances, such as read-only instances, disaster recovery instances, and clone instances, are not deleted.
     * ### Precautions
     * When you invoke this operation, the instance must meet the following conditions. Otherwise, the operation is failed:
     * - The instance status is active (Running).
     * - If log backup is shutdown, the ApsaraDB RDS instance does not support the point-in-time restoration feature. In this case, you can delete any data backup files that were generated more than seven days ago.
     * - If log backup is enabled and the log backup retention period is shorter than the data backup retention period, data backup files that have exceeded the log backup retention period can be deleted.
     *
     * @param request - DeleteBackupRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DeleteBackupResponse
     */
    deleteBackupWithOptions(request: $_model.DeleteBackupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteBackupResponse>;
    /**
     * Deletes data backup files of an ApsaraDB RDS instance.
     *
     * @remarks
     * ### Supported engines
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for PostgreSQL
     * > Only High-availability Edition instances are supported.
     * ### Description
     * When you invoke this operation to delete data backup files, only the backup sets of the instance itself are deleted. The backup sets of associated instances, such as read-only instances, disaster recovery instances, and clone instances, are not deleted.
     * ### Precautions
     * When you invoke this operation, the instance must meet the following conditions. Otherwise, the operation is failed:
     * - The instance status is active (Running).
     * - If log backup is shutdown, the ApsaraDB RDS instance does not support the point-in-time restoration feature. In this case, you can delete any data backup files that were generated more than seven days ago.
     * - If log backup is enabled and the log backup retention period is shorter than the data backup retention period, data backup files that have exceeded the log backup retention period can be deleted.
     *
     * @param request - DeleteBackupRequest
     * @returns DeleteBackupResponse
     */
    deleteBackup(request: $_model.DeleteBackupRequest): Promise<$_model.DeleteBackupResponse>;
    /**
     * Deletes backup files of an ApsaraDB RDS for SQL Server instance. This operation is not available to new users. Users who were previously added to the whitelist can still use this operation.
     *
     * @remarks
     * ### Supported engine
     * ApsaraDB RDS for SQL Server
     * > **This operation is not available to new users.** You can use other methods to [reduce or save backup storage costs](https://help.aliyun.com/document_detail/95718.html). Users who were previously added to the whitelist can still use this operation normally. Before you delete backup sets, confirm the availability of the backup sets. Deleted backup sets cannot be recovered.
     *
     * @param request - DeleteBackupFileRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DeleteBackupFileResponse
     */
    deleteBackupFileWithOptions(request: $_model.DeleteBackupFileRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteBackupFileResponse>;
    /**
     * Deletes backup files of an ApsaraDB RDS for SQL Server instance. This operation is not available to new users. Users who were previously added to the whitelist can still use this operation.
     *
     * @remarks
     * ### Supported engine
     * ApsaraDB RDS for SQL Server
     * > **This operation is not available to new users.** You can use other methods to [reduce or save backup storage costs](https://help.aliyun.com/document_detail/95718.html). Users who were previously added to the whitelist can still use this operation normally. Before you delete backup sets, confirm the availability of the backup sets. Deleted backup sets cannot be recovered.
     *
     * @param request - DeleteBackupFileRequest
     * @returns DeleteBackupFileResponse
     */
    deleteBackupFile(request: $_model.DeleteBackupFileRequest): Promise<$_model.DeleteBackupFileResponse>;
    /**
     * Releases an ApsaraDB RDS instance.
     *
     * @remarks
     * ### Supported engines
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for PostgreSQL
     * - ApsaraDB RDS for SQL Server
     * - ApsaraDB RDS for MariaDB
     * ### Related documentation
     * >Notice: Before you call this operation, read the following documentation and make sure that you fully understand the prerequisites and impacts of this operation.
     * - [Release an ApsaraDB RDS for MySQL instance](https://help.aliyun.com/document_detail/96057.html)
     * - [Release an ApsaraDB RDS for PostgreSQL instance](https://help.aliyun.com/document_detail/96749.html)
     * - [Release an ApsaraDB RDS for SQL Server instance](https://help.aliyun.com/document_detail/95662.html)
     * - [Release an ApsaraDB RDS for MariaDB instance](https://help.aliyun.com/document_detail/97128.html)
     *
     * @param request - DeleteDBInstanceRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DeleteDBInstanceResponse
     */
    deleteDBInstanceWithOptions(request: $_model.DeleteDBInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteDBInstanceResponse>;
    /**
     * Releases an ApsaraDB RDS instance.
     *
     * @remarks
     * ### Supported engines
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for PostgreSQL
     * - ApsaraDB RDS for SQL Server
     * - ApsaraDB RDS for MariaDB
     * ### Related documentation
     * >Notice: Before you call this operation, read the following documentation and make sure that you fully understand the prerequisites and impacts of this operation.
     * - [Release an ApsaraDB RDS for MySQL instance](https://help.aliyun.com/document_detail/96057.html)
     * - [Release an ApsaraDB RDS for PostgreSQL instance](https://help.aliyun.com/document_detail/96749.html)
     * - [Release an ApsaraDB RDS for SQL Server instance](https://help.aliyun.com/document_detail/95662.html)
     * - [Release an ApsaraDB RDS for MariaDB instance](https://help.aliyun.com/document_detail/97128.html)
     *
     * @param request - DeleteDBInstanceRequest
     * @returns DeleteDBInstanceResponse
     */
    deleteDBInstance(request: $_model.DeleteDBInstanceRequest): Promise<$_model.DeleteDBInstanceResponse>;
    /**
     * Deletes the endpoint of an ApsaraDB RDS Cluster Edition instance.
     *
     * @remarks
     * ### Supported engines
     * <props="china">
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for PostgreSQL
     * <props="intl">ApsaraDB RDS for MySQL
     * ### Related documentation
     * >Notice: Before you call this operation, carefully read the feature documentation to ensure that you fully understand the prerequisites and the impacts of this operation.</notice>
     * <props="china">
     * - ApsaraDB RDS for MySQL: [Delete the read-only routing endpoint of a cluster](https://help.aliyun.com/document_detail/464133.html)
     * - ApsaraDB RDS for PostgreSQL: [Delete the read-only routing endpoint of a cluster](https://help.aliyun.com/document_detail/96788.html)
     * <props="intl">
     * ApsaraDB RDS for MySQL: [Delete the read-only routing endpoint of a cluster](https://help.aliyun.com/document_detail/464133.html)
     *
     * @param request - DeleteDBInstanceEndpointRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DeleteDBInstanceEndpointResponse
     */
    deleteDBInstanceEndpointWithOptions(request: $_model.DeleteDBInstanceEndpointRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteDBInstanceEndpointResponse>;
    /**
     * Deletes the endpoint of an ApsaraDB RDS Cluster Edition instance.
     *
     * @remarks
     * ### Supported engines
     * <props="china">
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for PostgreSQL
     * <props="intl">ApsaraDB RDS for MySQL
     * ### Related documentation
     * >Notice: Before you call this operation, carefully read the feature documentation to ensure that you fully understand the prerequisites and the impacts of this operation.</notice>
     * <props="china">
     * - ApsaraDB RDS for MySQL: [Delete the read-only routing endpoint of a cluster](https://help.aliyun.com/document_detail/464133.html)
     * - ApsaraDB RDS for PostgreSQL: [Delete the read-only routing endpoint of a cluster](https://help.aliyun.com/document_detail/96788.html)
     * <props="intl">
     * ApsaraDB RDS for MySQL: [Delete the read-only routing endpoint of a cluster](https://help.aliyun.com/document_detail/464133.html)
     *
     * @param request - DeleteDBInstanceEndpointRequest
     * @returns DeleteDBInstanceEndpointResponse
     */
    deleteDBInstanceEndpoint(request: $_model.DeleteDBInstanceEndpointRequest): Promise<$_model.DeleteDBInstanceEndpointResponse>;
    /**
     * Releases the public endpoint of an endpoint for an ApsaraDB RDS Cluster Edition instance.
     *
     * @remarks
     * ### Applicable engines
     * <props="china">
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for PostgreSQL
     * <props="intl">ApsaraDB RDS for MySQL
     * ### Precautions
     * Currently, you can only release the public address of an endpoint. To release the internal address, delete the endpoint directly.
     *
     * @param request - DeleteDBInstanceEndpointAddressRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DeleteDBInstanceEndpointAddressResponse
     */
    deleteDBInstanceEndpointAddressWithOptions(request: $_model.DeleteDBInstanceEndpointAddressRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteDBInstanceEndpointAddressResponse>;
    /**
     * Releases the public endpoint of an endpoint for an ApsaraDB RDS Cluster Edition instance.
     *
     * @remarks
     * ### Applicable engines
     * <props="china">
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for PostgreSQL
     * <props="intl">ApsaraDB RDS for MySQL
     * ### Precautions
     * Currently, you can only release the public address of an endpoint. To release the internal address, delete the endpoint directly.
     *
     * @param request - DeleteDBInstanceEndpointAddressRequest
     * @returns DeleteDBInstanceEndpointAddressResponse
     */
    deleteDBInstanceEndpointAddress(request: $_model.DeleteDBInstanceEndpointAddressRequest): Promise<$_model.DeleteDBInstanceEndpointAddressResponse>;
    /**
     * Deletes the native replication task of an instance.
     *
     * @param request - DeleteDBInstanceReplicationRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DeleteDBInstanceReplicationResponse
     */
    deleteDBInstanceReplicationWithOptions(request: $_model.DeleteDBInstanceReplicationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteDBInstanceReplicationResponse>;
    /**
     * Deletes the native replication task of an instance.
     *
     * @param request - DeleteDBInstanceReplicationRequest
     * @returns DeleteDBInstanceReplicationResponse
     */
    deleteDBInstanceReplication(request: $_model.DeleteDBInstanceReplicationRequest): Promise<$_model.DeleteDBInstanceReplicationResponse>;
    /**
     * Deletes security group rules that are configured for an ApsaraDB RDS for SQL Server instance.
     *
     * @remarks
     * ### Applicable engine
     * RDS SQL Server
     * ### Related documentation
     * [Configure security group rules for an ApsaraDB RDS for SQL Server instance](https://help.aliyun.com/document_detail/2392322.html)
     *
     * @param request - DeleteDBInstanceSecurityGroupRuleRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DeleteDBInstanceSecurityGroupRuleResponse
     */
    deleteDBInstanceSecurityGroupRuleWithOptions(request: $_model.DeleteDBInstanceSecurityGroupRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteDBInstanceSecurityGroupRuleResponse>;
    /**
     * Deletes security group rules that are configured for an ApsaraDB RDS for SQL Server instance.
     *
     * @remarks
     * ### Applicable engine
     * RDS SQL Server
     * ### Related documentation
     * [Configure security group rules for an ApsaraDB RDS for SQL Server instance](https://help.aliyun.com/document_detail/2392322.html)
     *
     * @param request - DeleteDBInstanceSecurityGroupRuleRequest
     * @returns DeleteDBInstanceSecurityGroupRuleResponse
     */
    deleteDBInstanceSecurityGroupRule(request: $_model.DeleteDBInstanceSecurityGroupRuleRequest): Promise<$_model.DeleteDBInstanceSecurityGroupRuleResponse>;
    /**
     * Deletes nodes from an ApsaraDB RDS Cluster Edition instance.
     *
     * @remarks
     * ### Supported engines
     * <props="china">
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for PostgreSQL
     * <props="intl">ApsaraDB RDS for MySQL
     * ### Related documentation
     * >Notice: Before you call this operation, carefully read the feature documentation to ensure that you fully understand the prerequisites and the impacts of this operation.
     * <props="china">
     * - ApsaraDB RDS for MySQL: [Delete nodes from an ApsaraDB RDS for MySQL Cluster Edition instance](https://help.aliyun.com/document_detail/464130.html)
     * - ApsaraDB RDS for PostgreSQL: [Delete nodes from an ApsaraDB RDS for PostgreSQL Cluster Edition instance](https://help.aliyun.com/document_detail/2778876.html)
     * <props="intl">
     * [Delete nodes from an ApsaraDB RDS for MySQL Cluster Edition instance](https://help.aliyun.com/document_detail/464130.html)
     *
     * @param tmpReq - DeleteDBNodesRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DeleteDBNodesResponse
     */
    deleteDBNodesWithOptions(tmpReq: $_model.DeleteDBNodesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteDBNodesResponse>;
    /**
     * Deletes nodes from an ApsaraDB RDS Cluster Edition instance.
     *
     * @remarks
     * ### Supported engines
     * <props="china">
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for PostgreSQL
     * <props="intl">ApsaraDB RDS for MySQL
     * ### Related documentation
     * >Notice: Before you call this operation, carefully read the feature documentation to ensure that you fully understand the prerequisites and the impacts of this operation.
     * <props="china">
     * - ApsaraDB RDS for MySQL: [Delete nodes from an ApsaraDB RDS for MySQL Cluster Edition instance](https://help.aliyun.com/document_detail/464130.html)
     * - ApsaraDB RDS for PostgreSQL: [Delete nodes from an ApsaraDB RDS for PostgreSQL Cluster Edition instance](https://help.aliyun.com/document_detail/2778876.html)
     * <props="intl">
     * [Delete nodes from an ApsaraDB RDS for MySQL Cluster Edition instance](https://help.aliyun.com/document_detail/464130.html)
     *
     * @param request - DeleteDBNodesRequest
     * @returns DeleteDBNodesResponse
     */
    deleteDBNodes(request: $_model.DeleteDBNodesRequest): Promise<$_model.DeleteDBNodesResponse>;
    /**
     * Deletes the database proxy endpoint of an ApsaraDB RDS instance.
     *
     * @remarks
     * ### Supported database engines
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for PostgreSQL
     * ### Related feature documentation
     * >Notice: Before you call this operation, read the feature documentation carefully to fully understand the prerequisites and impacts.</notice>
     * - [Configure the database proxy endpoint for an ApsaraDB RDS for MySQL instance](https://help.aliyun.com/document_detail/184921.html)
     * - [Configure the database proxy endpoint for an ApsaraDB RDS for PostgreSQL instance](https://help.aliyun.com/document_detail/418274.html)
     *
     * @param request - DeleteDBProxyEndpointAddressRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DeleteDBProxyEndpointAddressResponse
     */
    deleteDBProxyEndpointAddressWithOptions(request: $_model.DeleteDBProxyEndpointAddressRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteDBProxyEndpointAddressResponse>;
    /**
     * Deletes the database proxy endpoint of an ApsaraDB RDS instance.
     *
     * @remarks
     * ### Supported database engines
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for PostgreSQL
     * ### Related feature documentation
     * >Notice: Before you call this operation, read the feature documentation carefully to fully understand the prerequisites and impacts.</notice>
     * - [Configure the database proxy endpoint for an ApsaraDB RDS for MySQL instance](https://help.aliyun.com/document_detail/184921.html)
     * - [Configure the database proxy endpoint for an ApsaraDB RDS for PostgreSQL instance](https://help.aliyun.com/document_detail/418274.html)
     *
     * @param request - DeleteDBProxyEndpointAddressRequest
     * @returns DeleteDBProxyEndpointAddressResponse
     */
    deleteDBProxyEndpointAddress(request: $_model.DeleteDBProxyEndpointAddressRequest): Promise<$_model.DeleteDBProxyEndpointAddressResponse>;
    /**
     * Deletes a specified database from an ApsaraDB RDS instance.
     *
     * @remarks
     * ### Supported engines
     * - RDS MySQL
     * - RDS PostgreSQL
     * - RDS SQL Server
     * - RDS MariaDB
     * ### Related documentation
     * >Notice: Before you call this operation, read the following documentation and make sure that you fully understand the prerequisites and impacts of this operation.
     * - [Delete a database from an ApsaraDB RDS for MySQL instance](https://help.aliyun.com/document_detail/96106.html)
     * - [Delete a database from an ApsaraDB RDS for PostgreSQL instance](https://help.aliyun.com/document_detail/96759.html)
     * - [Delete a database from an ApsaraDB RDS for SQL Server instance](https://help.aliyun.com/document_detail/95699.html)
     * - [Delete a database from an ApsaraDB RDS for MariaDB instance](https://help.aliyun.com/document_detail/97137.html)
     *
     * @param request - DeleteDatabaseRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DeleteDatabaseResponse
     */
    deleteDatabaseWithOptions(request: $_model.DeleteDatabaseRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteDatabaseResponse>;
    /**
     * Deletes a specified database from an ApsaraDB RDS instance.
     *
     * @remarks
     * ### Supported engines
     * - RDS MySQL
     * - RDS PostgreSQL
     * - RDS SQL Server
     * - RDS MariaDB
     * ### Related documentation
     * >Notice: Before you call this operation, read the following documentation and make sure that you fully understand the prerequisites and impacts of this operation.
     * - [Delete a database from an ApsaraDB RDS for MySQL instance](https://help.aliyun.com/document_detail/96106.html)
     * - [Delete a database from an ApsaraDB RDS for PostgreSQL instance](https://help.aliyun.com/document_detail/96759.html)
     * - [Delete a database from an ApsaraDB RDS for SQL Server instance](https://help.aliyun.com/document_detail/95699.html)
     * - [Delete a database from an ApsaraDB RDS for MariaDB instance](https://help.aliyun.com/document_detail/97137.html)
     *
     * @param request - DeleteDatabaseRequest
     * @returns DeleteDatabaseResponse
     */
    deleteDatabase(request: $_model.DeleteDatabaseRequest): Promise<$_model.DeleteDatabaseResponse>;
    /**
     * Deletes an ApsaraDB RDS global active database cluster.
     *
     * @remarks
     * ### Applicable engine
     * - RDS MySQL
     * ### Precautions
     * * A deleted ApsaraDB RDS global active database cluster cannot be recovered. Proceed with caution.
     * * Deleting an ApsaraDB RDS global active database cluster removes all nodes and DTS synchronization tasks in the cluster but does not release the corresponding ApsaraDB RDS for MySQL instances. If you no longer need these instances, invoke [DeleteDBInstance](https://help.aliyun.com/document_detail/26229.html) to manually release them.
     *
     * @param request - DeleteGadInstanceRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DeleteGadInstanceResponse
     */
    deleteGadInstanceWithOptions(request: $_model.DeleteGadInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteGadInstanceResponse>;
    /**
     * Deletes an ApsaraDB RDS global active database cluster.
     *
     * @remarks
     * ### Applicable engine
     * - RDS MySQL
     * ### Precautions
     * * A deleted ApsaraDB RDS global active database cluster cannot be recovered. Proceed with caution.
     * * Deleting an ApsaraDB RDS global active database cluster removes all nodes and DTS synchronization tasks in the cluster but does not release the corresponding ApsaraDB RDS for MySQL instances. If you no longer need these instances, invoke [DeleteDBInstance](https://help.aliyun.com/document_detail/26229.html) to manually release them.
     *
     * @param request - DeleteGadInstanceRequest
     * @returns DeleteGadInstanceResponse
     */
    deleteGadInstance(request: $_model.DeleteGadInstanceRequest): Promise<$_model.DeleteGadInstanceResponse>;
    /**
     * Deletes the encryption or data masking rule for a specified instance.
     *
     * @remarks
     * ## Request description
     * - Before you invoke this operation, make sure that the column encryption service is enabled in the DAS Security Center.
     * - If you receive the ColumnEncryptionErrorCode.NOT_PURCHASED error message when you invoke this operation, go to the Database Autonomy Service (DAS) Security Center to purchase and enable the column encryption service.
     *
     * @param request - DeleteMaskingRulesRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DeleteMaskingRulesResponse
     */
    deleteMaskingRulesWithOptions(request: $_model.DeleteMaskingRulesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteMaskingRulesResponse>;
    /**
     * Deletes the encryption or data masking rule for a specified instance.
     *
     * @remarks
     * ## Request description
     * - Before you invoke this operation, make sure that the column encryption service is enabled in the DAS Security Center.
     * - If you receive the ColumnEncryptionErrorCode.NOT_PURCHASED error message when you invoke this operation, go to the Database Autonomy Service (DAS) Security Center to purchase and enable the column encryption service.
     *
     * @param request - DeleteMaskingRulesRequest
     * @returns DeleteMaskingRulesResponse
     */
    deleteMaskingRules(request: $_model.DeleteMaskingRulesRequest): Promise<$_model.DeleteMaskingRulesResponse>;
    /**
     * Deletes an ApsaraDB RDS parameter template.
     *
     * @remarks
     * ### Supported engines
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for PostgreSQL
     * ### Related documentation
     * >Notice: Before you call this operation, read the following documentation and make sure that you fully understand the prerequisites and impacts of this operation.
     * - [Use a parameter template for MySQL instances](https://help.aliyun.com/document_detail/130565.html)
     * - [Use a parameter template for PostgreSQL instances](https://help.aliyun.com/document_detail/457176.html)
     *
     * @param request - DeleteParameterGroupRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DeleteParameterGroupResponse
     */
    deleteParameterGroupWithOptions(request: $_model.DeleteParameterGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteParameterGroupResponse>;
    /**
     * Deletes an ApsaraDB RDS parameter template.
     *
     * @remarks
     * ### Supported engines
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for PostgreSQL
     * ### Related documentation
     * >Notice: Before you call this operation, read the following documentation and make sure that you fully understand the prerequisites and impacts of this operation.
     * - [Use a parameter template for MySQL instances](https://help.aliyun.com/document_detail/130565.html)
     * - [Use a parameter template for PostgreSQL instances](https://help.aliyun.com/document_detail/457176.html)
     *
     * @param request - DeleteParameterGroupRequest
     * @returns DeleteParameterGroupResponse
     */
    deleteParameterGroup(request: $_model.DeleteParameterGroupRequest): Promise<$_model.DeleteParameterGroupResponse>;
    /**
     * Deletes the scheduled task for modifying instance parameters.
     *
     * @remarks
     * ### Applicable engines
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for PostgreSQL
     * ### Related feature documentation
     * <notice>Before you use this operation, read the feature documentation to fully understand the prerequisites and the impacts of using this operation.</notice>
     * - [Set the parameters of an ApsaraDB RDS for MySQL instance](https://help.aliyun.com/document_detail/96063.html)
     * - [Set the parameters of an ApsaraDB RDS for PostgreSQL instance](https://help.aliyun.com/document_detail/96751.html)
     *
     * @param request - DeleteParameterTimedScheduleTaskRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DeleteParameterTimedScheduleTaskResponse
     */
    deleteParameterTimedScheduleTaskWithOptions(request: $_model.DeleteParameterTimedScheduleTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteParameterTimedScheduleTaskResponse>;
    /**
     * Deletes the scheduled task for modifying instance parameters.
     *
     * @remarks
     * ### Applicable engines
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for PostgreSQL
     * ### Related feature documentation
     * <notice>Before you use this operation, read the feature documentation to fully understand the prerequisites and the impacts of using this operation.</notice>
     * - [Set the parameters of an ApsaraDB RDS for MySQL instance](https://help.aliyun.com/document_detail/96063.html)
     * - [Set the parameters of an ApsaraDB RDS for PostgreSQL instance](https://help.aliyun.com/document_detail/96751.html)
     *
     * @param request - DeleteParameterTimedScheduleTaskRequest
     * @returns DeleteParameterTimedScheduleTaskResponse
     */
    deleteParameterTimedScheduleTask(request: $_model.DeleteParameterTimedScheduleTaskRequest): Promise<$_model.DeleteParameterTimedScheduleTaskResponse>;
    /**
     * Deletes a specified extension from the target database of an instance.
     *
     * @remarks
     * <props="china">You can join the RDS PostgreSQL extension communication DingTalk group (103525002795) for consultation, communication, and feedback to obtain more information about extensions.
     * ### Supported engines
     * ApsaraDB RDS for PostgreSQL
     * ### Related documentation
     * >Notice: Before you call this operation, carefully read the feature documentation to ensure that you fully understand the prerequisites and the impacts of the operation.
     * [Manage extensions](https://help.aliyun.com/document_detail/2402409.html)
     *
     * @param request - DeletePostgresExtensionsRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DeletePostgresExtensionsResponse
     */
    deletePostgresExtensionsWithOptions(request: $_model.DeletePostgresExtensionsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeletePostgresExtensionsResponse>;
    /**
     * Deletes a specified extension from the target database of an instance.
     *
     * @remarks
     * <props="china">You can join the RDS PostgreSQL extension communication DingTalk group (103525002795) for consultation, communication, and feedback to obtain more information about extensions.
     * ### Supported engines
     * ApsaraDB RDS for PostgreSQL
     * ### Related documentation
     * >Notice: Before you call this operation, carefully read the feature documentation to ensure that you fully understand the prerequisites and the impacts of the operation.
     * [Manage extensions](https://help.aliyun.com/document_detail/2402409.html)
     *
     * @param request - DeletePostgresExtensionsRequest
     * @returns DeletePostgresExtensionsResponse
     */
    deletePostgresExtensions(request: $_model.DeletePostgresExtensionsRequest): Promise<$_model.DeletePostgresExtensionsResponse>;
    /**
     * Deletes RDS Custom nodes from an ACK cluster.
     *
     * @param tmpReq - DeleteRCClusterNodesRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DeleteRCClusterNodesResponse
     */
    deleteRCClusterNodesWithOptions(tmpReq: $_model.DeleteRCClusterNodesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteRCClusterNodesResponse>;
    /**
     * Deletes RDS Custom nodes from an ACK cluster.
     *
     * @param request - DeleteRCClusterNodesRequest
     * @returns DeleteRCClusterNodesResponse
     */
    deleteRCClusterNodes(request: $_model.DeleteRCClusterNodesRequest): Promise<$_model.DeleteRCClusterNodesResponse>;
    /**
     * Deletes an RDS Custom deployment set.
     *
     * @param request - DeleteRCDeploymentSetRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DeleteRCDeploymentSetResponse
     */
    deleteRCDeploymentSetWithOptions(request: $_model.DeleteRCDeploymentSetRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteRCDeploymentSetResponse>;
    /**
     * Deletes an RDS Custom deployment set.
     *
     * @param request - DeleteRCDeploymentSetRequest
     * @returns DeleteRCDeploymentSetResponse
     */
    deleteRCDeploymentSet(request: $_model.DeleteRCDeploymentSetRequest): Promise<$_model.DeleteRCDeploymentSetResponse>;
    /**
     * Releases a pay-as-you-go data cloud disk. Supported disk types include basic cloud disks, ultra cloud disks, standard SSDs, and ESSDs.
     *
     * @remarks
     * When you call this operation, note the following items:
     * - Manual snapshots of the disk are retained.
     * - The disk must be in the Available state when it is released.
     * - If the disk with the specified ID does not exist, the request is ignored.
     *
     * @param request - DeleteRCDiskRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DeleteRCDiskResponse
     */
    deleteRCDiskWithOptions(request: $_model.DeleteRCDiskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteRCDiskResponse>;
    /**
     * Releases a pay-as-you-go data cloud disk. Supported disk types include basic cloud disks, ultra cloud disks, standard SSDs, and ESSDs.
     *
     * @remarks
     * When you call this operation, note the following items:
     * - Manual snapshots of the disk are retained.
     * - The disk must be in the Available state when it is released.
     * - If the disk with the specified ID does not exist, the request is ignored.
     *
     * @param request - DeleteRCDiskRequest
     * @returns DeleteRCDiskResponse
     */
    deleteRCDisk(request: $_model.DeleteRCDiskRequest): Promise<$_model.DeleteRCDiskResponse>;
    /**
     * 删除RDS用户专属主机实例
     *
     * @param request - DeleteRCInstanceRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DeleteRCInstanceResponse
     */
    deleteRCInstanceWithOptions(request: $_model.DeleteRCInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteRCInstanceResponse>;
    /**
     * 删除RDS用户专属主机实例
     *
     * @param request - DeleteRCInstanceRequest
     * @returns DeleteRCInstanceResponse
     */
    deleteRCInstance(request: $_model.DeleteRCInstanceRequest): Promise<$_model.DeleteRCInstanceResponse>;
    /**
     * Releases one or more subscription RDS Custom instances.
     *
     * @remarks
     * After the instances are released, the physical resources used by the instances are reclaimed, and all related data is lost and cannot be recovered.
     *
     * @param tmpReq - DeleteRCInstancesRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DeleteRCInstancesResponse
     */
    deleteRCInstancesWithOptions(tmpReq: $_model.DeleteRCInstancesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteRCInstancesResponse>;
    /**
     * Releases one or more subscription RDS Custom instances.
     *
     * @remarks
     * After the instances are released, the physical resources used by the instances are reclaimed, and all related data is lost and cannot be recovered.
     *
     * @param request - DeleteRCInstancesRequest
     * @returns DeleteRCInstancesResponse
     */
    deleteRCInstances(request: $_model.DeleteRCInstancesRequest): Promise<$_model.DeleteRCInstancesResponse>;
    /**
     * 删除RC模版
     *
     * @param request - DeleteRCNodePoolRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DeleteRCNodePoolResponse
     */
    deleteRCNodePoolWithOptions(request: $_model.DeleteRCNodePoolRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteRCNodePoolResponse>;
    /**
     * 删除RC模版
     *
     * @param request - DeleteRCNodePoolRequest
     * @returns DeleteRCNodePoolResponse
     */
    deleteRCNodePool(request: $_model.DeleteRCNodePoolRequest): Promise<$_model.DeleteRCNodePoolResponse>;
    /**
     * Deletes a specified cloud disk snapshot.
     *
     * @remarks
     * When you invoke this operation, take note of the following items:
     * - If the specified snapshot ID does not exist, the request is ignored.
     * - If the snapshot has been used to create a custom image, the snapshot cannot be deleted. You must delete the custom image before you can delete the snapshot.
     * - If the snapshot has been used to create a cloud disk and the Force parameter is not specified or is set to false, the snapshot cannot be directly deleted. If you want to delete the snapshot, set Force to true to force delete it. After the snapshot is force deleted, the corresponding cloud disk cannot perform initialization again.
     *
     * @param request - DeleteRCSnapshotRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DeleteRCSnapshotResponse
     */
    deleteRCSnapshotWithOptions(request: $_model.DeleteRCSnapshotRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteRCSnapshotResponse>;
    /**
     * Deletes a specified cloud disk snapshot.
     *
     * @remarks
     * When you invoke this operation, take note of the following items:
     * - If the specified snapshot ID does not exist, the request is ignored.
     * - If the snapshot has been used to create a custom image, the snapshot cannot be deleted. You must delete the custom image before you can delete the snapshot.
     * - If the snapshot has been used to create a cloud disk and the Force parameter is not specified or is set to false, the snapshot cannot be directly deleted. If you want to delete the snapshot, set Force to true to force delete it. After the snapshot is force deleted, the corresponding cloud disk cannot perform initialization again.
     *
     * @param request - DeleteRCSnapshotRequest
     * @returns DeleteRCSnapshotResponse
     */
    deleteRCSnapshot(request: $_model.DeleteRCSnapshotRequest): Promise<$_model.DeleteRCSnapshotResponse>;
    /**
     * RCVCluster删除接口
     *
     * @param request - DeleteRCVClusterRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DeleteRCVClusterResponse
     */
    deleteRCVClusterWithOptions(request: $_model.DeleteRCVClusterRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteRCVClusterResponse>;
    /**
     * RCVCluster删除接口
     *
     * @param request - DeleteRCVClusterRequest
     * @returns DeleteRCVClusterResponse
     */
    deleteRCVCluster(request: $_model.DeleteRCVClusterRequest): Promise<$_model.DeleteRCVClusterResponse>;
    /**
     * Deletes the data synchronization link of a disaster recovery instance and promotes the disaster recovery instance to a primary instance.
     *
     * @remarks
     * ### Supported engines
     * - ApsaraDB RDS for PostgreSQL
     * - ApsaraDB RDS for SQL Server
     *
     * @param request - DeleteReplicationLinkRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DeleteReplicationLinkResponse
     */
    deleteReplicationLinkWithOptions(request: $_model.DeleteReplicationLinkRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteReplicationLinkResponse>;
    /**
     * Deletes the data synchronization link of a disaster recovery instance and promotes the disaster recovery instance to a primary instance.
     *
     * @remarks
     * ### Supported engines
     * - ApsaraDB RDS for PostgreSQL
     * - ApsaraDB RDS for SQL Server
     *
     * @param request - DeleteReplicationLinkRequest
     * @returns DeleteReplicationLinkResponse
     */
    deleteReplicationLink(request: $_model.DeleteReplicationLinkRequest): Promise<$_model.DeleteReplicationLinkResponse>;
    /**
     * Deletes a Data API user credential by calling the DeleteSecret operation.
     *
     * @param request - DeleteSecretRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DeleteSecretResponse
     */
    deleteSecretWithOptions(request: $_model.DeleteSecretRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteSecretResponse>;
    /**
     * Deletes a Data API user credential by calling the DeleteSecret operation.
     *
     * @param request - DeleteSecretRequest
     * @returns DeleteSecretResponse
     */
    deleteSecret(request: $_model.DeleteSecretRequest): Promise<$_model.DeleteSecretResponse>;
    /**
     * Deletes a specified replication slot of an instance.
     *
     * @remarks
     * ### Applicable engines
     * - ApsaraDB RDS for PostgreSQL
     * ### Precautions
     * A replication slot can be deleted only when its status (SlotStatus) is **INACTIVE**. You can call the DescribeSlots operation to query the status of the replication slot.
     *
     * @param request - DeleteSlotRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DeleteSlotResponse
     */
    deleteSlotWithOptions(request: $_model.DeleteSlotRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteSlotResponse>;
    /**
     * Deletes a specified replication slot of an instance.
     *
     * @remarks
     * ### Applicable engines
     * - ApsaraDB RDS for PostgreSQL
     * ### Precautions
     * A replication slot can be deleted only when its status (SlotStatus) is **INACTIVE**. You can call the DescribeSlots operation to query the status of the replication slot.
     *
     * @param request - DeleteSlotRequest
     * @returns DeleteSlotResponse
     */
    deleteSlot(request: $_model.DeleteSlotRequest): Promise<$_model.DeleteSlotResponse>;
    /**
     * Deletes a specified user backup of an ApsaraDB RDS for MySQL instance.
     *
     * @remarks
     * ### Supported database engines
     * - ApsaraDB RDS for MySQL
     * ### Features
     * * A user backup is a full backup of a self-managed MySQL database. You can restore the user backup to the cloud. For more information, see [Migrate full data from a self-managed MySQL 5.7 database to the cloud](https://help.aliyun.com/document_detail/251779.html).
     * * This operation only deletes the specified user backup from the ApsaraDB RDS console and does not affect the original backup file in OSS. After the deletion, you can call the ImportUserBackupFile operation to re-import the user backup.
     *
     * @param request - DeleteUserBackupFileRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DeleteUserBackupFileResponse
     */
    deleteUserBackupFileWithOptions(request: $_model.DeleteUserBackupFileRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteUserBackupFileResponse>;
    /**
     * Deletes a specified user backup of an ApsaraDB RDS for MySQL instance.
     *
     * @remarks
     * ### Supported database engines
     * - ApsaraDB RDS for MySQL
     * ### Features
     * * A user backup is a full backup of a self-managed MySQL database. You can restore the user backup to the cloud. For more information, see [Migrate full data from a self-managed MySQL 5.7 database to the cloud](https://help.aliyun.com/document_detail/251779.html).
     * * This operation only deletes the specified user backup from the ApsaraDB RDS console and does not affect the original backup file in OSS. After the deletion, you can call the ImportUserBackupFile operation to re-import the user backup.
     *
     * @param request - DeleteUserBackupFileRequest
     * @returns DeleteUserBackupFileResponse
     */
    deleteUserBackupFile(request: $_model.DeleteUserBackupFileRequest): Promise<$_model.DeleteUserBackupFileResponse>;
    /**
     * Queries the instance migration status list.
     *
     * @remarks
     * ### Applicable engine
     * - RDS MySQL
     *
     * @param request - DescibeImportsFromDatabaseRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescibeImportsFromDatabaseResponse
     */
    descibeImportsFromDatabaseWithOptions(request: $_model.DescibeImportsFromDatabaseRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescibeImportsFromDatabaseResponse>;
    /**
     * Queries the instance migration status list.
     *
     * @remarks
     * ### Applicable engine
     * - RDS MySQL
     *
     * @param request - DescibeImportsFromDatabaseRequest
     * @returns DescibeImportsFromDatabaseResponse
     */
    descibeImportsFromDatabase(request: $_model.DescibeImportsFromDatabaseRequest): Promise<$_model.DescibeImportsFromDatabaseResponse>;
    /**
     * Queries the Active Directory (AD) domain information of the current instance, including the domain join status, domain name, and associated account.
     *
     * @remarks
     * ### Supported engines
     * - ApsaraDB RDS for SQL Server
     *
     * @param request - DescribeADInfoRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeADInfoResponse
     */
    describeADInfoWithOptions(request: $_model.DescribeADInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeADInfoResponse>;
    /**
     * Queries the Active Directory (AD) domain information of the current instance, including the domain join status, domain name, and associated account.
     *
     * @remarks
     * ### Supported engines
     * - ApsaraDB RDS for SQL Server
     *
     * @param request - DescribeADInfoRequest
     * @returns DescribeADInfoResponse
     */
    describeADInfo(request: $_model.DescribeADInfoRequest): Promise<$_model.DescribeADInfoResponse>;
    /**
     * Queries the encryption or masking permission configurations for accounts in a specified instance.
     *
     * @remarks
     * ## Request description
     * - Before you call this operation, make sure that you have activated the column encryption service in the DAS Security Center.
     * - If you receive the error message ColumnEncryptionErrorCode.NOT_PURCHASED when calling this operation, go to the Database Autonomy Service (DAS) Security Center to purchase and activate the column encryption service before you proceed.
     *
     * @param request - DescribeAccountMaskingPrivilegeRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeAccountMaskingPrivilegeResponse
     */
    describeAccountMaskingPrivilegeWithOptions(request: $_model.DescribeAccountMaskingPrivilegeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeAccountMaskingPrivilegeResponse>;
    /**
     * Queries the encryption or masking permission configurations for accounts in a specified instance.
     *
     * @remarks
     * ## Request description
     * - Before you call this operation, make sure that you have activated the column encryption service in the DAS Security Center.
     * - If you receive the error message ColumnEncryptionErrorCode.NOT_PURCHASED when calling this operation, go to the Database Autonomy Service (DAS) Security Center to purchase and activate the column encryption service before you proceed.
     *
     * @param request - DescribeAccountMaskingPrivilegeRequest
     * @returns DescribeAccountMaskingPrivilegeResponse
     */
    describeAccountMaskingPrivilege(request: $_model.DescribeAccountMaskingPrivilegeRequest): Promise<$_model.DescribeAccountMaskingPrivilegeResponse>;
    /**
     * Queries the account information of an ApsaraDB RDS instance.
     *
     * @remarks
     * ### Supported engines
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for PostgreSQL
     * - ApsaraDB RDS for SQL Server
     * - ApsaraDB RDS for MariaDB
     *
     * @param request - DescribeAccountsRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeAccountsResponse
     */
    describeAccountsWithOptions(request: $_model.DescribeAccountsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeAccountsResponse>;
    /**
     * Queries the account information of an ApsaraDB RDS instance.
     *
     * @remarks
     * ### Supported engines
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for PostgreSQL
     * - ApsaraDB RDS for SQL Server
     * - ApsaraDB RDS for MariaDB
     *
     * @param request - DescribeAccountsRequest
     * @returns DescribeAccountsResponse
     */
    describeAccounts(request: $_model.DescribeAccountsRequest): Promise<$_model.DescribeAccountsResponse>;
    /**
     * Queries whether the historical events feature is enabled for ApsaraDB RDS.
     *
     * @remarks
     * ### Applicable engines
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for PostgreSQL
     * - ApsaraDB RDS for SQL Server
     * - ApsaraDB RDS for MariaDB
     *
     * @param request - DescribeActionEventPolicyRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeActionEventPolicyResponse
     */
    describeActionEventPolicyWithOptions(request: $_model.DescribeActionEventPolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeActionEventPolicyResponse>;
    /**
     * Queries whether the historical events feature is enabled for ApsaraDB RDS.
     *
     * @remarks
     * ### Applicable engines
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for PostgreSQL
     * - ApsaraDB RDS for SQL Server
     * - ApsaraDB RDS for MariaDB
     *
     * @param request - DescribeActionEventPolicyRequest
     * @returns DescribeActionEventPolicyResponse
     */
    describeActionEventPolicy(request: $_model.DescribeActionEventPolicyRequest): Promise<$_model.DescribeActionEventPolicyResponse>;
    /**
     * Retrieves the O&M configuration information of a user, which currently includes the cycle window information for scheduled events.
     *
     * @param request - DescribeActiveOperationMaintainConfRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeActiveOperationMaintainConfResponse
     */
    describeActiveOperationMaintainConfWithOptions(request: $_model.DescribeActiveOperationMaintainConfRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeActiveOperationMaintainConfResponse>;
    /**
     * Retrieves the O&M configuration information of a user, which currently includes the cycle window information for scheduled events.
     *
     * @param request - DescribeActiveOperationMaintainConfRequest
     * @returns DescribeActiveOperationMaintainConfResponse
     */
    describeActiveOperationMaintainConf(request: $_model.DescribeActiveOperationMaintainConfRequest): Promise<$_model.DescribeActiveOperationMaintainConfResponse>;
    /**
     * Queries the details of scheduled O&M tasks for an ApsaraDB RDS instance.
     *
     * @remarks
     * ### Supported engines
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for PostgreSQL
     * - ApsaraDB RDS for SQL Server
     * - ApsaraDB RDS for MariaDB
     * ### Related feature documentation
     * >Notice: Before you call this operation, carefully read the feature documentation to fully understand the prerequisites and impacts.
     * - [Scheduled events for ApsaraDB RDS for MySQL](https://help.aliyun.com/document_detail/104183.html)
     * - [Scheduled events for ApsaraDB RDS for PostgreSQL](https://help.aliyun.com/document_detail/104452.html)
     * - [Scheduled events for ApsaraDB RDS for SQL Server](https://help.aliyun.com/document_detail/104451.html)
     * - [Scheduled events for ApsaraDB RDS for MariaDB](https://help.aliyun.com/document_detail/104454.html)
     *
     * @param request - DescribeActiveOperationTasksRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeActiveOperationTasksResponse
     */
    describeActiveOperationTasksWithOptions(request: $_model.DescribeActiveOperationTasksRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeActiveOperationTasksResponse>;
    /**
     * Queries the details of scheduled O&M tasks for an ApsaraDB RDS instance.
     *
     * @remarks
     * ### Supported engines
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for PostgreSQL
     * - ApsaraDB RDS for SQL Server
     * - ApsaraDB RDS for MariaDB
     * ### Related feature documentation
     * >Notice: Before you call this operation, carefully read the feature documentation to fully understand the prerequisites and impacts.
     * - [Scheduled events for ApsaraDB RDS for MySQL](https://help.aliyun.com/document_detail/104183.html)
     * - [Scheduled events for ApsaraDB RDS for PostgreSQL](https://help.aliyun.com/document_detail/104452.html)
     * - [Scheduled events for ApsaraDB RDS for SQL Server](https://help.aliyun.com/document_detail/104451.html)
     * - [Scheduled events for ApsaraDB RDS for MariaDB](https://help.aliyun.com/document_detail/104454.html)
     *
     * @param request - DescribeActiveOperationTasksRequest
     * @returns DescribeActiveOperationTasksResponse
     */
    describeActiveOperationTasks(request: $_model.DescribeActiveOperationTasksRequest): Promise<$_model.DescribeActiveOperationTasksResponse>;
    /**
     * Queries whitelist templates in batches and supports fuzzy match.
     *
     * @remarks
     * ### Supported engines
     * - RDS MySQL
     * - RDS PostgreSQL
     * - RDS SQL Server
     *
     * @param request - DescribeAllWhitelistTemplateRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeAllWhitelistTemplateResponse
     */
    describeAllWhitelistTemplateWithOptions(request: $_model.DescribeAllWhitelistTemplateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeAllWhitelistTemplateResponse>;
    /**
     * Queries whitelist templates in batches and supports fuzzy match.
     *
     * @remarks
     * ### Supported engines
     * - RDS MySQL
     * - RDS PostgreSQL
     * - RDS SQL Server
     *
     * @param request - DescribeAllWhitelistTemplateRequest
     * @returns DescribeAllWhitelistTemplateResponse
     */
    describeAllWhitelistTemplate(request: $_model.DescribeAllWhitelistTemplateRequest): Promise<$_model.DescribeAllWhitelistTemplateResponse>;
    /**
     * Queries the number of analytical instances associated with an ApsaraDB RDS for MySQL instance.
     *
     * @remarks
     * ### Supported engine
     * RDS MySQL
     * ### Related documentation
     * <props="china">[Create and view MySQL analytical instances](https://help.aliyun.com/document_detail/155180.html)
     *
     * @param request - DescribeAnalyticdbByPrimaryDBInstanceRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeAnalyticdbByPrimaryDBInstanceResponse
     */
    describeAnalyticdbByPrimaryDBInstanceWithOptions(request: $_model.DescribeAnalyticdbByPrimaryDBInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeAnalyticdbByPrimaryDBInstanceResponse>;
    /**
     * Queries the number of analytical instances associated with an ApsaraDB RDS for MySQL instance.
     *
     * @remarks
     * ### Supported engine
     * RDS MySQL
     * ### Related documentation
     * <props="china">[Create and view MySQL analytical instances](https://help.aliyun.com/document_detail/155180.html)
     *
     * @param request - DescribeAnalyticdbByPrimaryDBInstanceRequest
     * @returns DescribeAnalyticdbByPrimaryDBInstanceResponse
     */
    describeAnalyticdbByPrimaryDBInstance(request: $_model.DescribeAnalyticdbByPrimaryDBInstanceRequest): Promise<$_model.DescribeAnalyticdbByPrimaryDBInstanceResponse>;
    /**
     * Queries the available specifications and storage space of an ApsaraDB RDS instance.
     *
     * @remarks
     * ### Supported engines
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for PostgreSQL
     * - ApsaraDB RDS for SQL Server
     * - ApsaraDB RDS for MariaDB
     *
     * @param request - DescribeAvailableClassesRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeAvailableClassesResponse
     */
    describeAvailableClassesWithOptions(request: $_model.DescribeAvailableClassesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeAvailableClassesResponse>;
    /**
     * Queries the available specifications and storage space of an ApsaraDB RDS instance.
     *
     * @remarks
     * ### Supported engines
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for PostgreSQL
     * - ApsaraDB RDS for SQL Server
     * - ApsaraDB RDS for MariaDB
     *
     * @param request - DescribeAvailableClassesRequest
     * @returns DescribeAvailableClassesResponse
     */
    describeAvailableClasses(request: $_model.DescribeAvailableClassesRequest): Promise<$_model.DescribeAvailableClassesResponse>;
    /**
     * Queries the destination regions to which cross-region backups can be performed for a specified region.
     *
     * @remarks
     * ### Supported engines
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for PostgreSQL
     * - ApsaraDB RDS for SQL Server
     * ### Related documentation
     * >Notice: Before you call this operation, carefully read the following documentation. Make sure that you fully understand the prerequisites and impacts of this operation.
     * - [Cross-region backup for ApsaraDB RDS for MySQL](https://help.aliyun.com/document_detail/120824.html)
     * - [Cross-region backup for ApsaraDB RDS for PostgreSQL](https://help.aliyun.com/document_detail/206671.html)
     * - [Cross-region backup for ApsaraDB RDS for SQL Server](https://help.aliyun.com/document_detail/187923.html)
     *
     * @param request - DescribeAvailableCrossRegionRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeAvailableCrossRegionResponse
     */
    describeAvailableCrossRegionWithOptions(request: $_model.DescribeAvailableCrossRegionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeAvailableCrossRegionResponse>;
    /**
     * Queries the destination regions to which cross-region backups can be performed for a specified region.
     *
     * @remarks
     * ### Supported engines
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for PostgreSQL
     * - ApsaraDB RDS for SQL Server
     * ### Related documentation
     * >Notice: Before you call this operation, carefully read the following documentation. Make sure that you fully understand the prerequisites and impacts of this operation.
     * - [Cross-region backup for ApsaraDB RDS for MySQL](https://help.aliyun.com/document_detail/120824.html)
     * - [Cross-region backup for ApsaraDB RDS for PostgreSQL](https://help.aliyun.com/document_detail/206671.html)
     * - [Cross-region backup for ApsaraDB RDS for SQL Server](https://help.aliyun.com/document_detail/187923.html)
     *
     * @param request - DescribeAvailableCrossRegionRequest
     * @returns DescribeAvailableCrossRegionResponse
     */
    describeAvailableCrossRegion(request: $_model.DescribeAvailableCrossRegionRequest): Promise<$_model.DescribeAvailableCrossRegionResponse>;
    /**
     * Retrieves all enhanced monitoring metrics supported by an ApsaraDB RDS for PostgreSQL instance.
     *
     * @remarks
     * ### Applicable engines
     * - ApsaraDB RDS for PostgreSQL
     * ### Related feature documentation
     * >Notice: Before you call this operation, read the feature documentation carefully to fully understand the prerequisites and impacts of this operation.</notice>
     * [View enhanced monitoring](https://help.aliyun.com/document_detail/299200.html).
     *
     * @param request - DescribeAvailableMetricsRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeAvailableMetricsResponse
     */
    describeAvailableMetricsWithOptions(request: $_model.DescribeAvailableMetricsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeAvailableMetricsResponse>;
    /**
     * Retrieves all enhanced monitoring metrics supported by an ApsaraDB RDS for PostgreSQL instance.
     *
     * @remarks
     * ### Applicable engines
     * - ApsaraDB RDS for PostgreSQL
     * ### Related feature documentation
     * >Notice: Before you call this operation, read the feature documentation carefully to fully understand the prerequisites and impacts of this operation.</notice>
     * [View enhanced monitoring](https://help.aliyun.com/document_detail/299200.html).
     *
     * @param request - DescribeAvailableMetricsRequest
     * @returns DescribeAvailableMetricsResponse
     */
    describeAvailableMetrics(request: $_model.DescribeAvailableMetricsRequest): Promise<$_model.DescribeAvailableMetricsResponse>;
    /**
     * Queries the time range to which data can be restored from a specified cross-region backup file.
     *
     * @remarks
     * > To view the time range to which data can be restored from a regular backup file, see DescribeBackups.
     * ### Supported engines
     * ApsaraDB RDS for MySQL (instances with Premium Local SSDs)
     * ### Related feature documentation
     * >Notice: Before you call this operation, carefully read the feature documentation to ensure that you fully understand the prerequisites and the impacts of this operation.
     * [Cross-region backup for ApsaraDB RDS for MySQL](https://help.aliyun.com/document_detail/120824.html)
     *
     * @param request - DescribeAvailableRecoveryTimeRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeAvailableRecoveryTimeResponse
     */
    describeAvailableRecoveryTimeWithOptions(request: $_model.DescribeAvailableRecoveryTimeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeAvailableRecoveryTimeResponse>;
    /**
     * Queries the time range to which data can be restored from a specified cross-region backup file.
     *
     * @remarks
     * > To view the time range to which data can be restored from a regular backup file, see DescribeBackups.
     * ### Supported engines
     * ApsaraDB RDS for MySQL (instances with Premium Local SSDs)
     * ### Related feature documentation
     * >Notice: Before you call this operation, carefully read the feature documentation to ensure that you fully understand the prerequisites and the impacts of this operation.
     * [Cross-region backup for ApsaraDB RDS for MySQL](https://help.aliyun.com/document_detail/120824.html)
     *
     * @param request - DescribeAvailableRecoveryTimeRequest
     * @returns DescribeAvailableRecoveryTimeResponse
     */
    describeAvailableRecoveryTime(request: $_model.DescribeAvailableRecoveryTimeRequest): Promise<$_model.DescribeAvailableRecoveryTimeResponse>;
    /**
     * Queries the available zone resources for ApsaraDB RDS.
     *
     * @remarks
     * ### Supported engines
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for PostgreSQL
     *   > This operation is only used to query available zone resources and is not used for the sales of ApsaraDB RDS for PostgreSQL in the console. The purchase page may have slightly different parameter values based on actual sales strategies. When you make a purchase, refer to the [purchase page](https://rdsbuy.console.aliyun.com/create/rds/PostgreSQL).
     * - ApsaraDB RDS for SQL Server
     * - ApsaraDB RDS for MariaDB
     *
     * @param request - DescribeAvailableZonesRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeAvailableZonesResponse
     */
    describeAvailableZonesWithOptions(request: $_model.DescribeAvailableZonesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeAvailableZonesResponse>;
    /**
     * Queries the available zone resources for ApsaraDB RDS.
     *
     * @remarks
     * ### Supported engines
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for PostgreSQL
     *   > This operation is only used to query available zone resources and is not used for the sales of ApsaraDB RDS for PostgreSQL in the console. The purchase page may have slightly different parameter values based on actual sales strategies. When you make a purchase, refer to the [purchase page](https://rdsbuy.console.aliyun.com/create/rds/PostgreSQL).
     * - ApsaraDB RDS for SQL Server
     * - ApsaraDB RDS for MariaDB
     *
     * @param request - DescribeAvailableZonesRequest
     * @returns DescribeAvailableZonesResponse
     */
    describeAvailableZones(request: $_model.DescribeAvailableZonesRequest): Promise<$_model.DescribeAvailableZonesResponse>;
    /**
     * Queries the list of databases in a backup set.
     *
     * @param request - DescribeBackupDatabaseRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeBackupDatabaseResponse
     */
    describeBackupDatabaseWithOptions(request: $_model.DescribeBackupDatabaseRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeBackupDatabaseResponse>;
    /**
     * Queries the list of databases in a backup set.
     *
     * @param request - DescribeBackupDatabaseRequest
     * @returns DescribeBackupDatabaseResponse
     */
    describeBackupDatabase(request: $_model.DescribeBackupDatabaseRequest): Promise<$_model.DescribeBackupDatabaseResponse>;
    /**
     * Queries the backup settings of an ApsaraDB RDS instance.
     *
     * @remarks
     * ### Applicable engines
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for PostgreSQL
     * - ApsaraDB RDS for SQL Server
     * - ApsaraDB RDS for MariaDB
     *
     * @param request - DescribeBackupPolicyRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeBackupPolicyResponse
     */
    describeBackupPolicyWithOptions(request: $_model.DescribeBackupPolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeBackupPolicyResponse>;
    /**
     * Queries the backup settings of an ApsaraDB RDS instance.
     *
     * @remarks
     * ### Applicable engines
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for PostgreSQL
     * - ApsaraDB RDS for SQL Server
     * - ApsaraDB RDS for MariaDB
     *
     * @param request - DescribeBackupPolicyRequest
     * @returns DescribeBackupPolicyResponse
     */
    describeBackupPolicy(request: $_model.DescribeBackupPolicyRequest): Promise<$_model.DescribeBackupPolicyResponse>;
    /**
     * Queries the backup tasks of an ApsaraDB RDS instance.
     *
     * @remarks
     * ### Supported engines
     * - RDS MySQL
     * - RDS PostgreSQL
     * - RDS SQL Server
     * - RDS MariaDB
     *
     * @param request - DescribeBackupTasksRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeBackupTasksResponse
     */
    describeBackupTasksWithOptions(request: $_model.DescribeBackupTasksRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeBackupTasksResponse>;
    /**
     * Queries the backup tasks of an ApsaraDB RDS instance.
     *
     * @remarks
     * ### Supported engines
     * - RDS MySQL
     * - RDS PostgreSQL
     * - RDS SQL Server
     * - RDS MariaDB
     *
     * @param request - DescribeBackupTasksRequest
     * @returns DescribeBackupTasksResponse
     */
    describeBackupTasks(request: $_model.DescribeBackupTasksRequest): Promise<$_model.DescribeBackupTasksResponse>;
    /**
     * Queries the backup sets of an ApsaraDB RDS instance.
     *
     * @remarks
     * ### Applicable engines
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for PostgreSQL
     * - ApsaraDB RDS for SQL Server
     * - ApsaraDB RDS for MariaDB
     *
     * @param request - DescribeBackupsRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeBackupsResponse
     */
    describeBackupsWithOptions(request: $_model.DescribeBackupsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeBackupsResponse>;
    /**
     * Queries the backup sets of an ApsaraDB RDS instance.
     *
     * @remarks
     * ### Applicable engines
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for PostgreSQL
     * - ApsaraDB RDS for SQL Server
     * - ApsaraDB RDS for MariaDB
     *
     * @param request - DescribeBackupsRequest
     * @returns DescribeBackupsResponse
     */
    describeBackups(request: $_model.DescribeBackupsRequest): Promise<$_model.DescribeBackupsResponse>;
    /**
     * Queries the binary logs of an ApsaraDB RDS for MySQL or ApsaraDB RDS for MariaDB instance, or the WAL logs of an ApsaraDB RDS for PostgreSQL instance.
     *
     * @remarks
     * ### Applicable engines
     * - RDS MySQL
     * - RDS PostgreSQL
     * - RDS MariaDB
     * ### Precautions
     * - If **DownloadLink** is NULL, ApsaraDB RDS does not provide a download URL.
     * - If **DownloadLink** is not NULL, you can use this URL to download the backup file. The URL has an expiration time specified by **LinkExpiredTime**. Download the file before the expiration time.
     * - To download backup files by using Resource Access Management (RAM) users, grant authorization to the RAM users. For details, see [Grant a read-only RAM user the permissions to download backup files](https://help.aliyun.com/document_detail/100043.html).
     * - The returned log list contains all log records whose log record end time is later than the query start time and whose log record start time is earlier than the query end time.
     *
     * @param request - DescribeBinlogFilesRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeBinlogFilesResponse
     */
    describeBinlogFilesWithOptions(request: $_model.DescribeBinlogFilesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeBinlogFilesResponse>;
    /**
     * Queries the binary logs of an ApsaraDB RDS for MySQL or ApsaraDB RDS for MariaDB instance, or the WAL logs of an ApsaraDB RDS for PostgreSQL instance.
     *
     * @remarks
     * ### Applicable engines
     * - RDS MySQL
     * - RDS PostgreSQL
     * - RDS MariaDB
     * ### Precautions
     * - If **DownloadLink** is NULL, ApsaraDB RDS does not provide a download URL.
     * - If **DownloadLink** is not NULL, you can use this URL to download the backup file. The URL has an expiration time specified by **LinkExpiredTime**. Download the file before the expiration time.
     * - To download backup files by using Resource Access Management (RAM) users, grant authorization to the RAM users. For details, see [Grant a read-only RAM user the permissions to download backup files](https://help.aliyun.com/document_detail/100043.html).
     * - The returned log list contains all log records whose log record end time is later than the query start time and whose log record start time is earlier than the query end time.
     *
     * @param request - DescribeBinlogFilesRequest
     * @returns DescribeBinlogFilesResponse
     */
    describeBinlogFiles(request: $_model.DescribeBinlogFilesRequest): Promise<$_model.DescribeBinlogFilesResponse>;
    /**
     * Queries the character sets supported by an ApsaraDB RDS instance.
     *
     * @remarks
     * ### Applicable engines
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for PostgreSQL
     * - ApsaraDB RDS for SQL Server
     * - ApsaraDB RDS for MariaDB
     *
     * @param request - DescribeCharacterSetNameRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeCharacterSetNameResponse
     */
    describeCharacterSetNameWithOptions(request: $_model.DescribeCharacterSetNameRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeCharacterSetNameResponse>;
    /**
     * Queries the character sets supported by an ApsaraDB RDS instance.
     *
     * @remarks
     * ### Applicable engines
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for PostgreSQL
     * - ApsaraDB RDS for SQL Server
     * - ApsaraDB RDS for MariaDB
     *
     * @param request - DescribeCharacterSetNameRequest
     * @returns DescribeCharacterSetNameResponse
     */
    describeCharacterSetName(request: $_model.DescribeCharacterSetNameRequest): Promise<$_model.DescribeCharacterSetNameResponse>;
    /**
     * Queries the details of an instance type by using the instance type code.
     *
     * @remarks
     * ### Supported engines
     * - RDS MySQL
     * - RDS PostgreSQL
     * - RDS SQL Server
     * - RDS MariaDB
     *
     * @param request - DescribeClassDetailsRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeClassDetailsResponse
     */
    describeClassDetailsWithOptions(request: $_model.DescribeClassDetailsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeClassDetailsResponse>;
    /**
     * Queries the details of an instance type by using the instance type code.
     *
     * @remarks
     * ### Supported engines
     * - RDS MySQL
     * - RDS PostgreSQL
     * - RDS SQL Server
     * - RDS MariaDB
     *
     * @param request - DescribeClassDetailsRequest
     * @returns DescribeClassDetailsResponse
     */
    describeClassDetails(request: $_model.DescribeClassDetailsRequest): Promise<$_model.DescribeClassDetailsResponse>;
    /**
     * Queries the details of the pre-check report for one-click cloud migration.
     *
     * @remarks
     * ### Applicable engines
     * - ApsaraDB RDS for PostgreSQL
     *
     * @param request - DescribeCloudMigrationPrecheckResultRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeCloudMigrationPrecheckResultResponse
     */
    describeCloudMigrationPrecheckResultWithOptions(request: $_model.DescribeCloudMigrationPrecheckResultRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeCloudMigrationPrecheckResultResponse>;
    /**
     * Queries the details of the pre-check report for one-click cloud migration.
     *
     * @remarks
     * ### Applicable engines
     * - ApsaraDB RDS for PostgreSQL
     *
     * @param request - DescribeCloudMigrationPrecheckResultRequest
     * @returns DescribeCloudMigrationPrecheckResultResponse
     */
    describeCloudMigrationPrecheckResult(request: $_model.DescribeCloudMigrationPrecheckResultRequest): Promise<$_model.DescribeCloudMigrationPrecheckResultResponse>;
    /**
     * Queries the details of an ApsaraDB RDS for PostgreSQL cloud migration task.
     *
     * @remarks
     * ### Supported engines
     * - ApsaraDB RDS for PostgreSQL
     *
     * @param request - DescribeCloudMigrationResultRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeCloudMigrationResultResponse
     */
    describeCloudMigrationResultWithOptions(request: $_model.DescribeCloudMigrationResultRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeCloudMigrationResultResponse>;
    /**
     * Queries the details of an ApsaraDB RDS for PostgreSQL cloud migration task.
     *
     * @remarks
     * ### Supported engines
     * - ApsaraDB RDS for PostgreSQL
     *
     * @param request - DescribeCloudMigrationResultRequest
     * @returns DescribeCloudMigrationResultResponse
     */
    describeCloudMigrationResult(request: $_model.DescribeCloudMigrationResultRequest): Promise<$_model.DescribeCloudMigrationResultResponse>;
    /**
     * Queries the character set collations and time zones supported by ApsaraDB RDS for SQL Server.
     *
     * @remarks
     * ### Applicable engine
     * ApsaraDB RDS for SQL Server.
     *
     * @param request - DescribeCollationTimeZonesRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeCollationTimeZonesResponse
     */
    describeCollationTimeZonesWithOptions(request: $_model.DescribeCollationTimeZonesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeCollationTimeZonesResponse>;
    /**
     * Queries the character set collations and time zones supported by ApsaraDB RDS for SQL Server.
     *
     * @remarks
     * ### Applicable engine
     * ApsaraDB RDS for SQL Server.
     *
     * @param request - DescribeCollationTimeZonesRequest
     * @returns DescribeCollationTimeZonesResponse
     */
    describeCollationTimeZones(request: $_model.DescribeCollationTimeZonesRequest): Promise<$_model.DescribeCollationTimeZonesResponse>;
    /**
     * Queries the configuration of the committed Serverless feature.
     *
     * @remarks
     * ### Supported engines
     * ApsaraDB RDS for PostgreSQL
     * ### Related feature documentation
     * [Committed Serverless](https://help.aliyun.com/document_detail/2928780.html)
     *
     * @param request - DescribeComputeBurstConfigRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeComputeBurstConfigResponse
     */
    describeComputeBurstConfigWithOptions(request: $_model.DescribeComputeBurstConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeComputeBurstConfigResponse>;
    /**
     * Queries the configuration of the committed Serverless feature.
     *
     * @remarks
     * ### Supported engines
     * ApsaraDB RDS for PostgreSQL
     * ### Related feature documentation
     * [Committed Serverless](https://help.aliyun.com/document_detail/2928780.html)
     *
     * @param request - DescribeComputeBurstConfigRequest
     * @returns DescribeComputeBurstConfigResponse
     */
    describeComputeBurstConfig(request: $_model.DescribeComputeBurstConfigRequest): Promise<$_model.DescribeComputeBurstConfigResponse>;
    /**
     * Queries the database and table information of cross-region backups for an ApsaraDB RDS instance.
     *
     * @remarks
     * ### Supported engines
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for PostgreSQL
     * - ApsaraDB RDS for SQL Server
     * ### Related documentation
     * >Notice: Before you call this operation, read the documentation to fully understand the prerequisites and impacts of the operation.
     * - [Cross-region backups for ApsaraDB RDS for MySQL](https://help.aliyun.com/document_detail/120824.html)
     * - [Cross-region backups for ApsaraDB RDS for PostgreSQL](https://help.aliyun.com/document_detail/206671.html)
     * - [Cross-region backups for ApsaraDB RDS for SQL Server](https://help.aliyun.com/document_detail/187923.html)
     *
     * @param request - DescribeCrossBackupMetaListRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeCrossBackupMetaListResponse
     */
    describeCrossBackupMetaListWithOptions(request: $_model.DescribeCrossBackupMetaListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeCrossBackupMetaListResponse>;
    /**
     * Queries the database and table information of cross-region backups for an ApsaraDB RDS instance.
     *
     * @remarks
     * ### Supported engines
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for PostgreSQL
     * - ApsaraDB RDS for SQL Server
     * ### Related documentation
     * >Notice: Before you call this operation, read the documentation to fully understand the prerequisites and impacts of the operation.
     * - [Cross-region backups for ApsaraDB RDS for MySQL](https://help.aliyun.com/document_detail/120824.html)
     * - [Cross-region backups for ApsaraDB RDS for PostgreSQL](https://help.aliyun.com/document_detail/206671.html)
     * - [Cross-region backups for ApsaraDB RDS for SQL Server](https://help.aliyun.com/document_detail/187923.html)
     *
     * @param request - DescribeCrossBackupMetaListRequest
     * @returns DescribeCrossBackupMetaListResponse
     */
    describeCrossBackupMetaList(request: $_model.DescribeCrossBackupMetaListRequest): Promise<$_model.DescribeCrossBackupMetaListResponse>;
    /**
     * Queries the instances that have cross-region backup enabled in a specified region and the cross-region backup settings of these instances.
     *
     * @remarks
     * ### Supported engines
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for PostgreSQL
     * - ApsaraDB RDS for SQL Server
     * ### Related documentation
     * >Notice: Before you call this operation, read the documentation carefully to fully understand the prerequisites and impacts.</notice>
     * - [Cross-region backup for ApsaraDB RDS for MySQL](https://help.aliyun.com/document_detail/120824.html)
     * - [Cross-region backup for ApsaraDB RDS for PostgreSQL](https://help.aliyun.com/document_detail/206671.html)
     * - [Cross-region backup for ApsaraDB RDS for SQL Server](https://help.aliyun.com/document_detail/187923.html)
     *
     * @param request - DescribeCrossRegionBackupDBInstanceRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeCrossRegionBackupDBInstanceResponse
     */
    describeCrossRegionBackupDBInstanceWithOptions(request: $_model.DescribeCrossRegionBackupDBInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeCrossRegionBackupDBInstanceResponse>;
    /**
     * Queries the instances that have cross-region backup enabled in a specified region and the cross-region backup settings of these instances.
     *
     * @remarks
     * ### Supported engines
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for PostgreSQL
     * - ApsaraDB RDS for SQL Server
     * ### Related documentation
     * >Notice: Before you call this operation, read the documentation carefully to fully understand the prerequisites and impacts.</notice>
     * - [Cross-region backup for ApsaraDB RDS for MySQL](https://help.aliyun.com/document_detail/120824.html)
     * - [Cross-region backup for ApsaraDB RDS for PostgreSQL](https://help.aliyun.com/document_detail/206671.html)
     * - [Cross-region backup for ApsaraDB RDS for SQL Server](https://help.aliyun.com/document_detail/187923.html)
     *
     * @param request - DescribeCrossRegionBackupDBInstanceRequest
     * @returns DescribeCrossRegionBackupDBInstanceResponse
     */
    describeCrossRegionBackupDBInstance(request: $_model.DescribeCrossRegionBackupDBInstanceRequest): Promise<$_model.DescribeCrossRegionBackupDBInstanceResponse>;
    /**
     * Queries the cross-region data backup files of an ApsaraDB RDS instance.
     *
     * @remarks
     * ### Supported engines
     * - ApsaraDB RDS for MySQL (The [storage type](https://help.aliyun.com/document_detail/69795.html) must be **Premium Local SSDs**. Cloud disks are not supported.)
     * - ApsaraDB RDS for PostgreSQL
     * - ApsaraDB RDS for SQL Server
     * ### Related feature documentation
     * >Notice: Before you call this operation, carefully read the feature documentation to ensure that you fully understand the prerequisites and the impacts of the operation.
     * - [Cross-region backup for ApsaraDB RDS for MySQL](https://help.aliyun.com/document_detail/120824.html)
     * - [Cross-region backup for ApsaraDB RDS for SQL Server](https://help.aliyun.com/document_detail/187923.html)
     * - [Cross-region backup for ApsaraDB RDS for PostgreSQL](https://help.aliyun.com/document_detail/206671.html)
     * > To query cross-region log backup files, see DescribeCrossRegionLogBackupFiles.
     *
     * @param request - DescribeCrossRegionBackupsRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeCrossRegionBackupsResponse
     */
    describeCrossRegionBackupsWithOptions(request: $_model.DescribeCrossRegionBackupsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeCrossRegionBackupsResponse>;
    /**
     * Queries the cross-region data backup files of an ApsaraDB RDS instance.
     *
     * @remarks
     * ### Supported engines
     * - ApsaraDB RDS for MySQL (The [storage type](https://help.aliyun.com/document_detail/69795.html) must be **Premium Local SSDs**. Cloud disks are not supported.)
     * - ApsaraDB RDS for PostgreSQL
     * - ApsaraDB RDS for SQL Server
     * ### Related feature documentation
     * >Notice: Before you call this operation, carefully read the feature documentation to ensure that you fully understand the prerequisites and the impacts of the operation.
     * - [Cross-region backup for ApsaraDB RDS for MySQL](https://help.aliyun.com/document_detail/120824.html)
     * - [Cross-region backup for ApsaraDB RDS for SQL Server](https://help.aliyun.com/document_detail/187923.html)
     * - [Cross-region backup for ApsaraDB RDS for PostgreSQL](https://help.aliyun.com/document_detail/206671.html)
     * > To query cross-region log backup files, see DescribeCrossRegionLogBackupFiles.
     *
     * @param request - DescribeCrossRegionBackupsRequest
     * @returns DescribeCrossRegionBackupsResponse
     */
    describeCrossRegionBackups(request: $_model.DescribeCrossRegionBackupsRequest): Promise<$_model.DescribeCrossRegionBackupsResponse>;
    /**
     * Queries the list of cross-region log backup files.
     *
     * @remarks
     * ### Applicable engines
     * - ApsaraDB RDS for MySQL (the [storage type](https://help.aliyun.com/document_detail/69795.html) must be **Premium Local SSDs**. Cloud disks are not supported.)
     * - ApsaraDB RDS for PostgreSQL
     * - ApsaraDB RDS for SQL Server
     * ### Related documentation
     * >Notice: Before you call this operation, read the following documentation and make sure that you fully understand the prerequisites and impacts of this operation.
     * - [Cross-region backup for ApsaraDB RDS for MySQL](https://help.aliyun.com/document_detail/120824.html)
     * - [Cross-region backup for ApsaraDB RDS for SQL Server](https://help.aliyun.com/document_detail/187923.html)
     * - [Cross-region backup for ApsaraDB RDS for PostgreSQL](https://help.aliyun.com/document_detail/206671.html)
     * > To query cross-region data backup files, refer to DescribeCrossRegionBackups.
     *
     * @param request - DescribeCrossRegionLogBackupFilesRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeCrossRegionLogBackupFilesResponse
     */
    describeCrossRegionLogBackupFilesWithOptions(request: $_model.DescribeCrossRegionLogBackupFilesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeCrossRegionLogBackupFilesResponse>;
    /**
     * Queries the list of cross-region log backup files.
     *
     * @remarks
     * ### Applicable engines
     * - ApsaraDB RDS for MySQL (the [storage type](https://help.aliyun.com/document_detail/69795.html) must be **Premium Local SSDs**. Cloud disks are not supported.)
     * - ApsaraDB RDS for PostgreSQL
     * - ApsaraDB RDS for SQL Server
     * ### Related documentation
     * >Notice: Before you call this operation, read the following documentation and make sure that you fully understand the prerequisites and impacts of this operation.
     * - [Cross-region backup for ApsaraDB RDS for MySQL](https://help.aliyun.com/document_detail/120824.html)
     * - [Cross-region backup for ApsaraDB RDS for SQL Server](https://help.aliyun.com/document_detail/187923.html)
     * - [Cross-region backup for ApsaraDB RDS for PostgreSQL](https://help.aliyun.com/document_detail/206671.html)
     * > To query cross-region data backup files, refer to DescribeCrossRegionBackups.
     *
     * @param request - DescribeCrossRegionLogBackupFilesRequest
     * @returns DescribeCrossRegionLogBackupFilesResponse
     */
    describeCrossRegionLogBackupFiles(request: $_model.DescribeCrossRegionLogBackupFilesRequest): Promise<$_model.DescribeCrossRegionLogBackupFilesResponse>;
    /**
     * Queries the latest specification change order of an instance.
     *
     * @param request - DescribeCurrentModifyOrderRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeCurrentModifyOrderResponse
     */
    describeCurrentModifyOrderWithOptions(request: $_model.DescribeCurrentModifyOrderRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeCurrentModifyOrderResponse>;
    /**
     * Queries the latest specification change order of an instance.
     *
     * @param request - DescribeCurrentModifyOrderRequest
     * @returns DescribeCurrentModifyOrderResponse
     */
    describeCurrentModifyOrder(request: $_model.DescribeCurrentModifyOrderRequest): Promise<$_model.DescribeCurrentModifyOrderResponse>;
    /**
     * Queries the resource usage of instances.
     *
     * @param request - DescribeCustinsResourceInfoRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeCustinsResourceInfoResponse
     */
    describeCustinsResourceInfoWithOptions(request: $_model.DescribeCustinsResourceInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeCustinsResourceInfoResponse>;
    /**
     * Queries the resource usage of instances.
     *
     * @param request - DescribeCustinsResourceInfoRequest
     * @returns DescribeCustinsResourceInfoResponse
     */
    describeCustinsResourceInfo(request: $_model.DescribeCustinsResourceInfoRequest): Promise<$_model.DescribeCustinsResourceInfoResponse>;
    /**
     * Queries the details of an ApsaraDB RDS instance.
     *
     * @remarks
     * ### Applicable engines
     * - RDS MySQL
     * - RDS PostgreSQL
     * - RDS SQL Server
     * - RDS MariaDB
     *
     * @param request - DescribeDBInstanceAttributeRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeDBInstanceAttributeResponse
     */
    describeDBInstanceAttributeWithOptions(request: $_model.DescribeDBInstanceAttributeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDBInstanceAttributeResponse>;
    /**
     * Queries the details of an ApsaraDB RDS instance.
     *
     * @remarks
     * ### Applicable engines
     * - RDS MySQL
     * - RDS PostgreSQL
     * - RDS SQL Server
     * - RDS MariaDB
     *
     * @param request - DescribeDBInstanceAttributeRequest
     * @returns DescribeDBInstanceAttributeResponse
     */
    describeDBInstanceAttribute(request: $_model.DescribeDBInstanceAttributeRequest): Promise<$_model.DescribeDBInstanceAttributeResponse>;
    /**
     * Retrieves the tags bound to an instance.
     *
     * @remarks
     * ### Supported engines
     * - RDS MySQL
     * - RDS PostgreSQL
     * - RDS SQL Server
     * - RDS MariaDB
     *
     * @param request - DescribeDBInstanceByTagsRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeDBInstanceByTagsResponse
     */
    describeDBInstanceByTagsWithOptions(request: $_model.DescribeDBInstanceByTagsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDBInstanceByTagsResponse>;
    /**
     * Retrieves the tags bound to an instance.
     *
     * @remarks
     * ### Supported engines
     * - RDS MySQL
     * - RDS PostgreSQL
     * - RDS SQL Server
     * - RDS MariaDB
     *
     * @param request - DescribeDBInstanceByTagsRequest
     * @returns DescribeDBInstanceByTagsResponse
     */
    describeDBInstanceByTags(request: $_model.DescribeDBInstanceByTagsRequest): Promise<$_model.DescribeDBInstanceByTagsResponse>;
    /**
     * Queries the column encryption algorithm configuration of a specified instance.
     *
     * @remarks
     * ## Request description
     * - Before you use this operation, make sure that the column encryption service is enabled in the DAS Security Center.
     * - If you receive the error message ColumnEncryptionErrorCode.NOT_PURCHASED when you call this operation, go to the Database Autonomy Service (DAS) Security Center to purchase and enable the column encryption service.
     *
     * @param request - DescribeDBInstanceCLSRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeDBInstanceCLSResponse
     */
    describeDBInstanceCLSWithOptions(request: $_model.DescribeDBInstanceCLSRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDBInstanceCLSResponse>;
    /**
     * Queries the column encryption algorithm configuration of a specified instance.
     *
     * @remarks
     * ## Request description
     * - Before you use this operation, make sure that the column encryption service is enabled in the DAS Security Center.
     * - If you receive the error message ColumnEncryptionErrorCode.NOT_PURCHASED when you call this operation, go to the Database Autonomy Service (DAS) Security Center to purchase and enable the column encryption service.
     *
     * @param request - DescribeDBInstanceCLSRequest
     * @returns DescribeDBInstanceCLSResponse
     */
    describeDBInstanceCLS(request: $_model.DescribeDBInstanceCLSRequest): Promise<$_model.DescribeDBInstanceCLSResponse>;
    /**
     * Retrieves the connectivity diagnostics information for an instance.
     *
     * @param request - DescribeDBInstanceConnectivityRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeDBInstanceConnectivityResponse
     */
    describeDBInstanceConnectivityWithOptions(request: $_model.DescribeDBInstanceConnectivityRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDBInstanceConnectivityResponse>;
    /**
     * Retrieves the connectivity diagnostics information for an instance.
     *
     * @param request - DescribeDBInstanceConnectivityRequest
     * @returns DescribeDBInstanceConnectivityResponse
     */
    describeDBInstanceConnectivity(request: $_model.DescribeDBInstanceConnectivityRequest): Promise<$_model.DescribeDBInstanceConnectivityResponse>;
    /**
     * Queries the details of an ApsaraDB RDS for SQL Server instance.
     *
     * @remarks
     * ### Applicable engine
     * ApsaraDB RDS for SQL Server.
     *
     * @param request - DescribeDBInstanceDetailRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeDBInstanceDetailResponse
     */
    describeDBInstanceDetailWithOptions(request: $_model.DescribeDBInstanceDetailRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDBInstanceDetailResponse>;
    /**
     * Queries the details of an ApsaraDB RDS for SQL Server instance.
     *
     * @remarks
     * ### Applicable engine
     * ApsaraDB RDS for SQL Server.
     *
     * @param request - DescribeDBInstanceDetailRequest
     * @returns DescribeDBInstanceDetailResponse
     */
    describeDBInstanceDetail(request: $_model.DescribeDBInstanceDetailRequest): Promise<$_model.DescribeDBInstanceDetailResponse>;
    /**
     * Queries whether cloud disk encryption is enabled for an ApsaraDB RDS instance and retrieves the key details.
     *
     * @remarks
     * ### Supported engines
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for PostgreSQL
     * - ApsaraDB RDS for SQL Server
     *
     * @param request - DescribeDBInstanceEncryptionKeyRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeDBInstanceEncryptionKeyResponse
     */
    describeDBInstanceEncryptionKeyWithOptions(request: $_model.DescribeDBInstanceEncryptionKeyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDBInstanceEncryptionKeyResponse>;
    /**
     * Queries whether cloud disk encryption is enabled for an ApsaraDB RDS instance and retrieves the key details.
     *
     * @remarks
     * ### Supported engines
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for PostgreSQL
     * - ApsaraDB RDS for SQL Server
     *
     * @param request - DescribeDBInstanceEncryptionKeyRequest
     * @returns DescribeDBInstanceEncryptionKeyResponse
     */
    describeDBInstanceEncryptionKey(request: $_model.DescribeDBInstanceEncryptionKeyRequest): Promise<$_model.DescribeDBInstanceEncryptionKeyResponse>;
    /**
     * Queries the endpoint information of an ApsaraDB RDS instance in the Cluster Edition.
     *
     * @remarks
     * ### Applicable engines
     * <props="china">
     * - RDS MySQL
     * - RDS PostgreSQL
     * <props="intl">RDS MySQL
     *
     * @param request - DescribeDBInstanceEndpointsRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeDBInstanceEndpointsResponse
     */
    describeDBInstanceEndpointsWithOptions(request: $_model.DescribeDBInstanceEndpointsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDBInstanceEndpointsResponse>;
    /**
     * Queries the endpoint information of an ApsaraDB RDS instance in the Cluster Edition.
     *
     * @remarks
     * ### Applicable engines
     * <props="china">
     * - RDS MySQL
     * - RDS PostgreSQL
     * <props="intl">RDS MySQL
     *
     * @param request - DescribeDBInstanceEndpointsRequest
     * @returns DescribeDBInstanceEndpointsResponse
     */
    describeDBInstanceEndpoints(request: $_model.DescribeDBInstanceEndpointsRequest): Promise<$_model.DescribeDBInstanceEndpointsResponse>;
    /**
     * Queries the high-availability mode and data replication mode of an ApsaraDB RDS instance.
     *
     * @remarks
     * ### Supported engines
     * - RDS MySQL
     * - RDS PostgreSQL
     * - RDS SQL Server
     * ### Related documentation
     * >Notice: Before you call this operation, read the feature documentation to understand the prerequisites and impacts.</notice>
     * - [Query the data replication mode of an ApsaraDB RDS for MySQL instance](https://help.aliyun.com/document_detail/96055.html)
     * - [Query the data replication mode of an ApsaraDB RDS for PostgreSQL instance](https://help.aliyun.com/document_detail/151265.html)
     * - [Query the data replication mode of an ApsaraDB RDS for SQL Server instance](https://help.aliyun.com/document_detail/415433.html)
     *
     * @param request - DescribeDBInstanceHAConfigRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeDBInstanceHAConfigResponse
     */
    describeDBInstanceHAConfigWithOptions(request: $_model.DescribeDBInstanceHAConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDBInstanceHAConfigResponse>;
    /**
     * Queries the high-availability mode and data replication mode of an ApsaraDB RDS instance.
     *
     * @remarks
     * ### Supported engines
     * - RDS MySQL
     * - RDS PostgreSQL
     * - RDS SQL Server
     * ### Related documentation
     * >Notice: Before you call this operation, read the feature documentation to understand the prerequisites and impacts.</notice>
     * - [Query the data replication mode of an ApsaraDB RDS for MySQL instance](https://help.aliyun.com/document_detail/96055.html)
     * - [Query the data replication mode of an ApsaraDB RDS for PostgreSQL instance](https://help.aliyun.com/document_detail/151265.html)
     * - [Query the data replication mode of an ApsaraDB RDS for SQL Server instance](https://help.aliyun.com/document_detail/415433.html)
     *
     * @param request - DescribeDBInstanceHAConfigRequest
     * @returns DescribeDBInstanceHAConfigResponse
     */
    describeDBInstanceHAConfig(request: $_model.DescribeDBInstanceHAConfigRequest): Promise<$_model.DescribeDBInstanceHAConfigResponse>;
    /**
     * Queries the IP address whitelists of an ApsaraDB RDS instance.
     *
     * @remarks
     * ### Supported engines
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for PostgreSQL
     * - ApsaraDB RDS for SQL Server
     * - ApsaraDB RDS for MariaDB
     *
     * @param request - DescribeDBInstanceIPArrayListRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeDBInstanceIPArrayListResponse
     */
    describeDBInstanceIPArrayListWithOptions(request: $_model.DescribeDBInstanceIPArrayListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDBInstanceIPArrayListResponse>;
    /**
     * Queries the IP address whitelists of an ApsaraDB RDS instance.
     *
     * @remarks
     * ### Supported engines
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for PostgreSQL
     * - ApsaraDB RDS for SQL Server
     * - ApsaraDB RDS for MariaDB
     *
     * @param request - DescribeDBInstanceIPArrayListRequest
     * @returns DescribeDBInstanceIPArrayListResponse
     */
    describeDBInstanceIPArrayList(request: $_model.DescribeDBInstanceIPArrayListRequest): Promise<$_model.DescribeDBInstanceIPArrayListResponse>;
    /**
     * Queries the internal IP addresses and hostnames of the underlying ECS instances for an ApsaraDB RDS for SQL Server instance.
     *
     * @remarks
     * ### Applicable engine
     * RDS SQL Server
     * ### Before you begin
     * - Instance edition: Basic Edition, High-availability Edition (SQL Server 2012 or later), or Cluster Edition
     * - Instance type: general-purpose or dedicated (shared instance types are not supported)
     * - Instance creation time: Basic Edition instances must be created on or after September 2, 2022. You can view the instance creation time in the Running Status section on the Basic Information page.
     * ### Related documentation
     * >Notice: Before you call this operation, carefully read the following documentation to fully understand the prerequisites and impacts of this operation.
     * - [Configure a distributed transaction whitelist](https://help.aliyun.com/document_detail/124321.html)
     * - [Migrate Kingdee K/3 WISE to Alibaba Cloud: Best practices for distributed transactions between ECS and RDS SQL Server](https://help.aliyun.com/document_detail/124188.html)
     *
     * @param request - DescribeDBInstanceIpHostnameRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeDBInstanceIpHostnameResponse
     */
    describeDBInstanceIpHostnameWithOptions(request: $_model.DescribeDBInstanceIpHostnameRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDBInstanceIpHostnameResponse>;
    /**
     * Queries the internal IP addresses and hostnames of the underlying ECS instances for an ApsaraDB RDS for SQL Server instance.
     *
     * @remarks
     * ### Applicable engine
     * RDS SQL Server
     * ### Before you begin
     * - Instance edition: Basic Edition, High-availability Edition (SQL Server 2012 or later), or Cluster Edition
     * - Instance type: general-purpose or dedicated (shared instance types are not supported)
     * - Instance creation time: Basic Edition instances must be created on or after September 2, 2022. You can view the instance creation time in the Running Status section on the Basic Information page.
     * ### Related documentation
     * >Notice: Before you call this operation, carefully read the following documentation to fully understand the prerequisites and impacts of this operation.
     * - [Configure a distributed transaction whitelist](https://help.aliyun.com/document_detail/124321.html)
     * - [Migrate Kingdee K/3 WISE to Alibaba Cloud: Best practices for distributed transactions between ECS and RDS SQL Server](https://help.aliyun.com/document_detail/124188.html)
     *
     * @param request - DescribeDBInstanceIpHostnameRequest
     * @returns DescribeDBInstanceIpHostnameResponse
     */
    describeDBInstanceIpHostname(request: $_model.DescribeDBInstanceIpHostnameRequest): Promise<$_model.DescribeDBInstanceIpHostnameResponse>;
    /**
     * Queries the enhanced metrics that are enabled and displayed for an ApsaraDB RDS for PostgreSQL instance.
     *
     * @remarks
     * ### Supported engines
     * - ApsaraDB RDS for PostgreSQL
     * ### Related documentation
     * >Notice: Before you use this operation, read the feature documentation carefully to ensure that you fully understand the prerequisites and the impacts of using this operation.</notice>
     * [View enhanced monitoring](https://help.aliyun.com/document_detail/299200.html).
     *
     * @param request - DescribeDBInstanceMetricsRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeDBInstanceMetricsResponse
     */
    describeDBInstanceMetricsWithOptions(request: $_model.DescribeDBInstanceMetricsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDBInstanceMetricsResponse>;
    /**
     * Queries the enhanced metrics that are enabled and displayed for an ApsaraDB RDS for PostgreSQL instance.
     *
     * @remarks
     * ### Supported engines
     * - ApsaraDB RDS for PostgreSQL
     * ### Related documentation
     * >Notice: Before you use this operation, read the feature documentation carefully to ensure that you fully understand the prerequisites and the impacts of using this operation.</notice>
     * [View enhanced monitoring](https://help.aliyun.com/document_detail/299200.html).
     *
     * @param request - DescribeDBInstanceMetricsRequest
     * @returns DescribeDBInstanceMetricsResponse
     */
    describeDBInstanceMetrics(request: $_model.DescribeDBInstanceMetricsRequest): Promise<$_model.DescribeDBInstanceMetricsResponse>;
    /**
     * Queries the monitoring frequency of an instance.
     *
     * @remarks
     * ### Applicable engines
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for SQL Server
     * - ApsaraDB RDS for MariaDB
     *
     * @param request - DescribeDBInstanceMonitorRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeDBInstanceMonitorResponse
     */
    describeDBInstanceMonitorWithOptions(request: $_model.DescribeDBInstanceMonitorRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDBInstanceMonitorResponse>;
    /**
     * Queries the monitoring frequency of an instance.
     *
     * @remarks
     * ### Applicable engines
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for SQL Server
     * - ApsaraDB RDS for MariaDB
     *
     * @param request - DescribeDBInstanceMonitorRequest
     * @returns DescribeDBInstanceMonitorResponse
     */
    describeDBInstanceMonitor(request: $_model.DescribeDBInstanceMonitorRequest): Promise<$_model.DescribeDBInstanceMonitorResponse>;
    /**
     * Queries all endpoint information of an ApsaraDB RDS instance.
     *
     * @remarks
     * ### Supported engines
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for PostgreSQL
     * - ApsaraDB RDS for SQL Server
     * - ApsaraDB RDS for MariaDB
     *
     * @param request - DescribeDBInstanceNetInfoRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeDBInstanceNetInfoResponse
     */
    describeDBInstanceNetInfoWithOptions(request: $_model.DescribeDBInstanceNetInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDBInstanceNetInfoResponse>;
    /**
     * Queries all endpoint information of an ApsaraDB RDS instance.
     *
     * @remarks
     * ### Supported engines
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for PostgreSQL
     * - ApsaraDB RDS for SQL Server
     * - ApsaraDB RDS for MariaDB
     *
     * @param request - DescribeDBInstanceNetInfoRequest
     * @returns DescribeDBInstanceNetInfoResponse
     */
    describeDBInstanceNetInfo(request: $_model.DescribeDBInstanceNetInfoRequest): Promise<$_model.DescribeDBInstanceNetInfoResponse>;
    /**
     * Queries all endpoint information of an ApsaraDB RDS instance.
     *
     * @remarks
     * ### Supported engines
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for PostgreSQL
     * - ApsaraDB RDS for SQL Server
     * - ApsaraDB RDS for MariaDB
     *
     * @param request - DescribeDBInstanceNetInfoForChannelRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeDBInstanceNetInfoForChannelResponse
     */
    describeDBInstanceNetInfoForChannelWithOptions(request: $_model.DescribeDBInstanceNetInfoForChannelRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDBInstanceNetInfoForChannelResponse>;
    /**
     * Queries all endpoint information of an ApsaraDB RDS instance.
     *
     * @remarks
     * ### Supported engines
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for PostgreSQL
     * - ApsaraDB RDS for SQL Server
     * - ApsaraDB RDS for MariaDB
     *
     * @param request - DescribeDBInstanceNetInfoForChannelRequest
     * @returns DescribeDBInstanceNetInfoForChannelResponse
     */
    describeDBInstanceNetInfoForChannel(request: $_model.DescribeDBInstanceNetInfoForChannelRequest): Promise<$_model.DescribeDBInstanceNetInfoForChannelResponse>;
    /**
     * Queries the performance data of an instance.
     *
     * @remarks
     * ### Supported engines
     * - RDS MySQL
     * - RDS PostgreSQL
     * - RDS SQL Server
     * - RDS MariaDB
     *
     * @param request - DescribeDBInstancePerformanceRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeDBInstancePerformanceResponse
     */
    describeDBInstancePerformanceWithOptions(request: $_model.DescribeDBInstancePerformanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDBInstancePerformanceResponse>;
    /**
     * Queries the performance data of an instance.
     *
     * @remarks
     * ### Supported engines
     * - RDS MySQL
     * - RDS PostgreSQL
     * - RDS SQL Server
     * - RDS MariaDB
     *
     * @param request - DescribeDBInstancePerformanceRequest
     * @returns DescribeDBInstancePerformanceResponse
     */
    describeDBInstancePerformance(request: $_model.DescribeDBInstancePerformanceRequest): Promise<$_model.DescribeDBInstancePerformanceResponse>;
    /**
     * Queries the promotional activities applied to an instance. This operation is deprecated and no longer maintained, but remains callable.
     *
     * @remarks
     * This operation is deprecated: **you can still call this operation, but Alibaba Cloud no longer maintains it**.
     *
     * @deprecated OpenAPI DescribeDBInstancePromoteActivity is deprecated
     *
     * @param request - DescribeDBInstancePromoteActivityRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeDBInstancePromoteActivityResponse
     */
    describeDBInstancePromoteActivityWithOptions(request: $_model.DescribeDBInstancePromoteActivityRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDBInstancePromoteActivityResponse>;
    /**
     * Queries the promotional activities applied to an instance. This operation is deprecated and no longer maintained, but remains callable.
     *
     * @remarks
     * This operation is deprecated: **you can still call this operation, but Alibaba Cloud no longer maintains it**.
     *
     * @deprecated OpenAPI DescribeDBInstancePromoteActivity is deprecated
     *
     * @param request - DescribeDBInstancePromoteActivityRequest
     * @returns DescribeDBInstancePromoteActivityResponse
     */
    describeDBInstancePromoteActivity(request: $_model.DescribeDBInstancePromoteActivityRequest): Promise<$_model.DescribeDBInstancePromoteActivityResponse>;
    /**
     * Queries the database proxy settings of an ApsaraDB RDS for MySQL instance.
     *
     * @remarks
     * ### Applicable engine
     * RDS MySQL
     * ### Description
     * This operation queries the MySQL shared database proxy. To query the dedicated dedicated proxy of an ApsaraDB RDS for MySQL instance, see [DescribeDBProxy](https://help.aliyun.com/document_detail/610506.html).
     * ### Before you begin
     * Before you call this operation, make sure that the ApsaraDB RDS for MySQL instance uses a **shared database proxy**. Otherwise, the operation fails.
     *
     * @param request - DescribeDBInstanceProxyConfigurationRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeDBInstanceProxyConfigurationResponse
     */
    describeDBInstanceProxyConfigurationWithOptions(request: $_model.DescribeDBInstanceProxyConfigurationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDBInstanceProxyConfigurationResponse>;
    /**
     * Queries the database proxy settings of an ApsaraDB RDS for MySQL instance.
     *
     * @remarks
     * ### Applicable engine
     * RDS MySQL
     * ### Description
     * This operation queries the MySQL shared database proxy. To query the dedicated dedicated proxy of an ApsaraDB RDS for MySQL instance, see [DescribeDBProxy](https://help.aliyun.com/document_detail/610506.html).
     * ### Before you begin
     * Before you call this operation, make sure that the ApsaraDB RDS for MySQL instance uses a **shared database proxy**. Otherwise, the operation fails.
     *
     * @param request - DescribeDBInstanceProxyConfigurationRequest
     * @returns DescribeDBInstanceProxyConfigurationResponse
     */
    describeDBInstanceProxyConfiguration(request: $_model.DescribeDBInstanceProxyConfigurationRequest): Promise<$_model.DescribeDBInstanceProxyConfigurationResponse>;
    /**
     * Queries the status and configuration of a native replication instance.
     *
     * @remarks
     * ### Supported engines
     * ApsaraDB RDS for MySQL
     * ### Related feature documentation
     * >Notice: Before you call this operation, carefully read the feature documentation to ensure that you fully understand the prerequisites and the impacts of the operation.
     * [Native replication instances of ApsaraDB RDS for MySQL](https://help.aliyun.com/document_detail/2856487.html)
     *
     * @param request - DescribeDBInstanceReplicationRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeDBInstanceReplicationResponse
     */
    describeDBInstanceReplicationWithOptions(request: $_model.DescribeDBInstanceReplicationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDBInstanceReplicationResponse>;
    /**
     * Queries the status and configuration of a native replication instance.
     *
     * @remarks
     * ### Supported engines
     * ApsaraDB RDS for MySQL
     * ### Related feature documentation
     * >Notice: Before you call this operation, carefully read the feature documentation to ensure that you fully understand the prerequisites and the impacts of the operation.
     * [Native replication instances of ApsaraDB RDS for MySQL](https://help.aliyun.com/document_detail/2856487.html)
     *
     * @param request - DescribeDBInstanceReplicationRequest
     * @returns DescribeDBInstanceReplicationResponse
     */
    describeDBInstanceReplication(request: $_model.DescribeDBInstanceReplicationRequest): Promise<$_model.DescribeDBInstanceReplicationResponse>;
    /**
     * Queries the SSL configuration of an ApsaraDB RDS instance.
     *
     * @remarks
     * ### Supported DPI engines
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for PostgreSQL
     * - ApsaraDB RDS for SQL Server
     * ### Related feature documentation
     * - [Settings for Secure Sockets Layer (SSL) encryption for an ApsaraDB RDS for MySQL instance](https://help.aliyun.com/document_detail/96120.html)
     * - [Settings for Secure Sockets Layer (SSL) encryption for an ApsaraDB RDS for PostgreSQL instance](https://help.aliyun.com/document_detail/229518.html)
     * - [Settings for Secure Sockets Layer (SSL) encryption for an ApsaraDB RDS for SQL Server instance](https://help.aliyun.com/document_detail/95715.html)
     *
     * @param request - DescribeDBInstanceSSLRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeDBInstanceSSLResponse
     */
    describeDBInstanceSSLWithOptions(request: $_model.DescribeDBInstanceSSLRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDBInstanceSSLResponse>;
    /**
     * Queries the SSL configuration of an ApsaraDB RDS instance.
     *
     * @remarks
     * ### Supported DPI engines
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for PostgreSQL
     * - ApsaraDB RDS for SQL Server
     * ### Related feature documentation
     * - [Settings for Secure Sockets Layer (SSL) encryption for an ApsaraDB RDS for MySQL instance](https://help.aliyun.com/document_detail/96120.html)
     * - [Settings for Secure Sockets Layer (SSL) encryption for an ApsaraDB RDS for PostgreSQL instance](https://help.aliyun.com/document_detail/229518.html)
     * - [Settings for Secure Sockets Layer (SSL) encryption for an ApsaraDB RDS for SQL Server instance](https://help.aliyun.com/document_detail/95715.html)
     *
     * @param request - DescribeDBInstanceSSLRequest
     * @returns DescribeDBInstanceSSLResponse
     */
    describeDBInstanceSSL(request: $_model.DescribeDBInstanceSSLRequest): Promise<$_model.DescribeDBInstanceSSLResponse>;
    /**
     * Queries the security group rules of an ApsaraDB RDS for SQL Server instance.
     *
     * @remarks
     * ### Applicable engine
     * ApsaraDB RDS for SQL Server
     * ### Related documentation
     * [Configure security group rules for an ApsaraDB RDS for SQL Server instance](https://help.aliyun.com/document_detail/2392322.html)
     *
     * @param request - DescribeDBInstanceSecurityGroupRuleRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeDBInstanceSecurityGroupRuleResponse
     */
    describeDBInstanceSecurityGroupRuleWithOptions(request: $_model.DescribeDBInstanceSecurityGroupRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDBInstanceSecurityGroupRuleResponse>;
    /**
     * Queries the security group rules of an ApsaraDB RDS for SQL Server instance.
     *
     * @remarks
     * ### Applicable engine
     * ApsaraDB RDS for SQL Server
     * ### Related documentation
     * [Configure security group rules for an ApsaraDB RDS for SQL Server instance](https://help.aliyun.com/document_detail/2392322.html)
     *
     * @param request - DescribeDBInstanceSecurityGroupRuleRequest
     * @returns DescribeDBInstanceSecurityGroupRuleResponse
     */
    describeDBInstanceSecurityGroupRule(request: $_model.DescribeDBInstanceSecurityGroupRuleRequest): Promise<$_model.DescribeDBInstanceSecurityGroupRuleResponse>;
    /**
     * Queries the primary/secondary switchover logs of an instance.
     *
     * @remarks
     * This operation is used to query the primary/secondary switchover logs of an instance. This operation is applicable to ApsaraDB RDS for MySQL High-availability Edition instances, ApsaraDB RDS for MySQL RDS Enterprise Edition Enterprise instances, ApsaraDB RDS for SQL Server instances, ApsaraDB RDS for PostgreSQL instances, and PPAS instances.
     *
     * @param request - DescribeDBInstanceSwitchLogRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeDBInstanceSwitchLogResponse
     */
    describeDBInstanceSwitchLogWithOptions(request: $_model.DescribeDBInstanceSwitchLogRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDBInstanceSwitchLogResponse>;
    /**
     * Queries the primary/secondary switchover logs of an instance.
     *
     * @remarks
     * This operation is used to query the primary/secondary switchover logs of an instance. This operation is applicable to ApsaraDB RDS for MySQL High-availability Edition instances, ApsaraDB RDS for MySQL RDS Enterprise Edition Enterprise instances, ApsaraDB RDS for SQL Server instances, ApsaraDB RDS for PostgreSQL instances, and PPAS instances.
     *
     * @param request - DescribeDBInstanceSwitchLogRequest
     * @returns DescribeDBInstanceSwitchLogResponse
     */
    describeDBInstanceSwitchLog(request: $_model.DescribeDBInstanceSwitchLogRequest): Promise<$_model.DescribeDBInstanceSwitchLogResponse>;
    /**
     * Queries the Transparent Data Encryption (TDE) status of an ApsaraDB RDS instance.
     *
     * @remarks
     * ### Supported engines
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for PostgreSQL
     * - ApsaraDB RDS for SQL Server
     *
     * @param request - DescribeDBInstanceTDERequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeDBInstanceTDEResponse
     */
    describeDBInstanceTDEWithOptions(request: $_model.DescribeDBInstanceTDERequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDBInstanceTDEResponse>;
    /**
     * Queries the Transparent Data Encryption (TDE) status of an ApsaraDB RDS instance.
     *
     * @remarks
     * ### Supported engines
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for PostgreSQL
     * - ApsaraDB RDS for SQL Server
     *
     * @param request - DescribeDBInstanceTDERequest
     * @returns DescribeDBInstanceTDEResponse
     */
    describeDBInstanceTDE(request: $_model.DescribeDBInstanceTDERequest): Promise<$_model.DescribeDBInstanceTDEResponse>;
    /**
     * Queries ApsaraDB RDS instances.
     *
     * @remarks
     * ### Supported engines
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for PostgreSQL
     * - ApsaraDB RDS for SQL Server
     * - ApsaraDB RDS for MariaDB
     *
     * @param request - DescribeDBInstancesRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeDBInstancesResponse
     */
    describeDBInstancesWithOptions(request: $_model.DescribeDBInstancesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDBInstancesResponse>;
    /**
     * Queries ApsaraDB RDS instances.
     *
     * @remarks
     * ### Supported engines
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for PostgreSQL
     * - ApsaraDB RDS for SQL Server
     * - ApsaraDB RDS for MariaDB
     *
     * @param request - DescribeDBInstancesRequest
     * @returns DescribeDBInstancesResponse
     */
    describeDBInstances(request: $_model.DescribeDBInstancesRequest): Promise<$_model.DescribeDBInstancesResponse>;
    /**
     * Queries a list of instances. This operation is deprecated and no longer maintained, but can still be called.
     *
     * @remarks
     * This operation is deprecated: **You can still call this operation, but Alibaba Cloud no longer maintains it**. Use the **DescribeDBInstances** operation instead.
     *
     * @deprecated OpenAPI DescribeDBInstancesAsCsv is deprecated, please use Rds::2014-08-15::DescribeDBInstances instead.
     *
     * @param request - DescribeDBInstancesAsCsvRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeDBInstancesAsCsvResponse
     */
    describeDBInstancesAsCsvWithOptions(request: $_model.DescribeDBInstancesAsCsvRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDBInstancesAsCsvResponse>;
    /**
     * Queries a list of instances. This operation is deprecated and no longer maintained, but can still be called.
     *
     * @remarks
     * This operation is deprecated: **You can still call this operation, but Alibaba Cloud no longer maintains it**. Use the **DescribeDBInstances** operation instead.
     *
     * @deprecated OpenAPI DescribeDBInstancesAsCsv is deprecated, please use Rds::2014-08-15::DescribeDBInstances instead.
     *
     * @param request - DescribeDBInstancesAsCsvRequest
     * @returns DescribeDBInstancesAsCsvResponse
     */
    describeDBInstancesAsCsv(request: $_model.DescribeDBInstancesAsCsvRequest): Promise<$_model.DescribeDBInstancesAsCsvResponse>;
    /**
     * Queries the details of ApsaraDB RDS instances based on the remaining available time of subscription instances.
     *
     * @remarks
     * ### Supported engines
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for PostgreSQL
     * - ApsaraDB RDS for SQL Server
     * - ApsaraDB RDS for MariaDB
     *
     * @param request - DescribeDBInstancesByExpireTimeRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeDBInstancesByExpireTimeResponse
     */
    describeDBInstancesByExpireTimeWithOptions(request: $_model.DescribeDBInstancesByExpireTimeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDBInstancesByExpireTimeResponse>;
    /**
     * Queries the details of ApsaraDB RDS instances based on the remaining available time of subscription instances.
     *
     * @remarks
     * ### Supported engines
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for PostgreSQL
     * - ApsaraDB RDS for SQL Server
     * - ApsaraDB RDS for MariaDB
     *
     * @param request - DescribeDBInstancesByExpireTimeRequest
     * @returns DescribeDBInstancesByExpireTimeResponse
     */
    describeDBInstancesByExpireTime(request: $_model.DescribeDBInstancesByExpireTimeRequest): Promise<$_model.DescribeDBInstancesByExpireTimeResponse>;
    /**
     * Queries database instances by performance.
     *
     * @param request - DescribeDBInstancesByPerformanceRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeDBInstancesByPerformanceResponse
     */
    describeDBInstancesByPerformanceWithOptions(request: $_model.DescribeDBInstancesByPerformanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDBInstancesByPerformanceResponse>;
    /**
     * Queries database instances by performance.
     *
     * @param request - DescribeDBInstancesByPerformanceRequest
     * @returns DescribeDBInstancesByPerformanceResponse
     */
    describeDBInstancesByPerformance(request: $_model.DescribeDBInstancesByPerformanceRequest): Promise<$_model.DescribeDBInstancesByPerformanceResponse>;
    /**
     * Queries cloned database instances. **[Deprecated]** This operation can still be called, but it is no longer maintained.
     *
     * @remarks
     * This operation is no longer maintained: **the operation can still be called, but Alibaba Cloud no longer maintains it**. Use the [DescribeDBInstances](https://help.aliyun.com/document_detail/610396.html) operation to query the details of new instances.
     *
     * @deprecated OpenAPI DescribeDBInstancesForClone is deprecated, please use Rds::2014-08-15::DescribeDBInstances instead.
     *
     * @param request - DescribeDBInstancesForCloneRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeDBInstancesForCloneResponse
     */
    describeDBInstancesForCloneWithOptions(request: $_model.DescribeDBInstancesForCloneRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDBInstancesForCloneResponse>;
    /**
     * Queries cloned database instances. **[Deprecated]** This operation can still be called, but it is no longer maintained.
     *
     * @remarks
     * This operation is no longer maintained: **the operation can still be called, but Alibaba Cloud no longer maintains it**. Use the [DescribeDBInstances](https://help.aliyun.com/document_detail/610396.html) operation to query the details of new instances.
     *
     * @deprecated OpenAPI DescribeDBInstancesForClone is deprecated, please use Rds::2014-08-15::DescribeDBInstances instead.
     *
     * @param request - DescribeDBInstancesForCloneRequest
     * @returns DescribeDBInstancesForCloneResponse
     */
    describeDBInstancesForClone(request: $_model.DescribeDBInstancesForCloneRequest): Promise<$_model.DescribeDBInstancesForCloneResponse>;
    /**
     * Queries the list of available minor engine versions for MySQL or PostgreSQL.
     *
     * @remarks
     * ### Applicable engines
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for PostgreSQL
     * ### Feature description
     * This operation queries the details of minor engine versions before you purchase or upgrade an ApsaraDB RDS for MySQL or ApsaraDB RDS for PostgreSQL instance. This helps you select a minor engine version based on your business requirements.
     *
     * @param request - DescribeDBMiniEngineVersionsRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeDBMiniEngineVersionsResponse
     */
    describeDBMiniEngineVersionsWithOptions(request: $_model.DescribeDBMiniEngineVersionsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDBMiniEngineVersionsResponse>;
    /**
     * Queries the list of available minor engine versions for MySQL or PostgreSQL.
     *
     * @remarks
     * ### Applicable engines
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for PostgreSQL
     * ### Feature description
     * This operation queries the details of minor engine versions before you purchase or upgrade an ApsaraDB RDS for MySQL or ApsaraDB RDS for PostgreSQL instance. This helps you select a minor engine version based on your business requirements.
     *
     * @param request - DescribeDBMiniEngineVersionsRequest
     * @returns DescribeDBMiniEngineVersionsResponse
     */
    describeDBMiniEngineVersions(request: $_model.DescribeDBMiniEngineVersionsRequest): Promise<$_model.DescribeDBMiniEngineVersionsResponse>;
    /**
     * Queries the details of the database proxy settings for an ApsaraDB RDS instance.
     *
     * @remarks
     * ### Supported engines
     * - RDS MySQL
     * - RDS PostgreSQL
     *
     * @param request - DescribeDBProxyRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeDBProxyResponse
     */
    describeDBProxyWithOptions(request: $_model.DescribeDBProxyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDBProxyResponse>;
    /**
     * Queries the details of the database proxy settings for an ApsaraDB RDS instance.
     *
     * @remarks
     * ### Supported engines
     * - RDS MySQL
     * - RDS PostgreSQL
     *
     * @param request - DescribeDBProxyRequest
     * @returns DescribeDBProxyResponse
     */
    describeDBProxy(request: $_model.DescribeDBProxyRequest): Promise<$_model.DescribeDBProxyResponse>;
    /**
     * Queries the endpoint information of the database proxy for an ApsaraDB RDS instance.
     *
     * @remarks
     * ### Supported engines
     * - RDS MySQL
     * - RDS PostgreSQL
     *
     * @param request - DescribeDBProxyEndpointRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeDBProxyEndpointResponse
     */
    describeDBProxyEndpointWithOptions(request: $_model.DescribeDBProxyEndpointRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDBProxyEndpointResponse>;
    /**
     * Queries the endpoint information of the database proxy for an ApsaraDB RDS instance.
     *
     * @remarks
     * ### Supported engines
     * - RDS MySQL
     * - RDS PostgreSQL
     *
     * @param request - DescribeDBProxyEndpointRequest
     * @returns DescribeDBProxyEndpointResponse
     */
    describeDBProxyEndpoint(request: $_model.DescribeDBProxyEndpointRequest): Promise<$_model.DescribeDBProxyEndpointResponse>;
    /**
     * Queries the performance data of the database proxy for an ApsaraDB RDS instance.
     *
     * @remarks
     * ### Supported engines
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for PostgreSQL
     * > Starting from October 17, 2023, ApsaraDB RDS for MySQL Cluster Edition gradually provides a free dedicated dedicated proxy with one proxy node in each unit. For more information, see [Free dedicated dedicated proxy with one proxy node for ApsaraDB RDS for MySQL Cluster Edition](https://help.aliyun.com/document_detail/2555466.html).
     * ### Related documentation
     * >Notice: Before you call this operation, read the documentation carefully to fully understand the prerequisites and the impacts of this operation.
     * - [View monitoring data for ApsaraDB RDS for MySQL](https://help.aliyun.com/document_detail/194241.html)
     * - [View monitoring data for ApsaraDB RDS for PostgreSQL](https://help.aliyun.com/document_detail/418275.html)
     *
     * @param request - DescribeDBProxyPerformanceRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeDBProxyPerformanceResponse
     */
    describeDBProxyPerformanceWithOptions(request: $_model.DescribeDBProxyPerformanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDBProxyPerformanceResponse>;
    /**
     * Queries the performance data of the database proxy for an ApsaraDB RDS instance.
     *
     * @remarks
     * ### Supported engines
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for PostgreSQL
     * > Starting from October 17, 2023, ApsaraDB RDS for MySQL Cluster Edition gradually provides a free dedicated dedicated proxy with one proxy node in each unit. For more information, see [Free dedicated dedicated proxy with one proxy node for ApsaraDB RDS for MySQL Cluster Edition](https://help.aliyun.com/document_detail/2555466.html).
     * ### Related documentation
     * >Notice: Before you call this operation, read the documentation carefully to fully understand the prerequisites and the impacts of this operation.
     * - [View monitoring data for ApsaraDB RDS for MySQL](https://help.aliyun.com/document_detail/194241.html)
     * - [View monitoring data for ApsaraDB RDS for PostgreSQL](https://help.aliyun.com/document_detail/418275.html)
     *
     * @param request - DescribeDBProxyPerformanceRequest
     * @returns DescribeDBProxyPerformanceResponse
     */
    describeDBProxyPerformance(request: $_model.DescribeDBProxyPerformanceRequest): Promise<$_model.DescribeDBProxyPerformanceResponse>;
    /**
     * Queries the distributed transaction whitelist information of an ApsaraDB RDS for SQL Server instance.
     *
     * @remarks
     * ### Supported engine
     * ApsaraDB RDS for SQL Server
     * ### Related documentation
     * >Notice: Before you call this operation, carefully read the feature documentation to ensure that you fully understand the prerequisites and the impacts of this operation.
     * [Configure a distributed transaction whitelist for SQL Server](https://help.aliyun.com/document_detail/124321.html)
     *
     * @param request - DescribeDTCSecurityIpHostsForSQLServerRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeDTCSecurityIpHostsForSQLServerResponse
     */
    describeDTCSecurityIpHostsForSQLServerWithOptions(request: $_model.DescribeDTCSecurityIpHostsForSQLServerRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDTCSecurityIpHostsForSQLServerResponse>;
    /**
     * Queries the distributed transaction whitelist information of an ApsaraDB RDS for SQL Server instance.
     *
     * @remarks
     * ### Supported engine
     * ApsaraDB RDS for SQL Server
     * ### Related documentation
     * >Notice: Before you call this operation, carefully read the feature documentation to ensure that you fully understand the prerequisites and the impacts of this operation.
     * [Configure a distributed transaction whitelist for SQL Server](https://help.aliyun.com/document_detail/124321.html)
     *
     * @param request - DescribeDTCSecurityIpHostsForSQLServerRequest
     * @returns DescribeDTCSecurityIpHostsForSQLServerResponse
     */
    describeDTCSecurityIpHostsForSQLServer(request: $_model.DescribeDTCSecurityIpHostsForSQLServerRequest): Promise<$_model.DescribeDTCSecurityIpHostsForSQLServerResponse>;
    /**
     * Queries the database information of an ApsaraDB RDS instance.
     *
     * @remarks
     * ### Supported engines
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for PostgreSQL
     * - ApsaraDB RDS for SQL Server
     * - ApsaraDB RDS for MariaDB
     *
     * @param request - DescribeDatabasesRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeDatabasesResponse
     */
    describeDatabasesWithOptions(request: $_model.DescribeDatabasesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDatabasesResponse>;
    /**
     * Queries the database information of an ApsaraDB RDS instance.
     *
     * @remarks
     * ### Supported engines
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for PostgreSQL
     * - ApsaraDB RDS for SQL Server
     * - ApsaraDB RDS for MariaDB
     *
     * @param request - DescribeDatabasesRequest
     * @returns DescribeDatabasesResponse
     */
    describeDatabases(request: $_model.DescribeDatabasesRequest): Promise<$_model.DescribeDatabasesResponse>;
    /**
     * Queries the details of ApsaraDB RDS dedicated clusters.
     *
     * @remarks
     * The dedicated cluster feature allows you to manage instances in batches as clusters. You can create multiple dedicated clusters in a region. Each dedicated cluster contains multiple hosts, and each host contains multiple instances. For more information, see [Overview of dedicated clusters](https://help.aliyun.com/document_detail/141455.html).
     *
     * @param request - DescribeDedicatedHostGroupsRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeDedicatedHostGroupsResponse
     */
    describeDedicatedHostGroupsWithOptions(request: $_model.DescribeDedicatedHostGroupsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDedicatedHostGroupsResponse>;
    /**
     * Queries the details of ApsaraDB RDS dedicated clusters.
     *
     * @remarks
     * The dedicated cluster feature allows you to manage instances in batches as clusters. You can create multiple dedicated clusters in a region. Each dedicated cluster contains multiple hosts, and each host contains multiple instances. For more information, see [Overview of dedicated clusters](https://help.aliyun.com/document_detail/141455.html).
     *
     * @param request - DescribeDedicatedHostGroupsRequest
     * @returns DescribeDedicatedHostGroupsResponse
     */
    describeDedicatedHostGroups(request: $_model.DescribeDedicatedHostGroupsRequest): Promise<$_model.DescribeDedicatedHostGroupsResponse>;
    /**
     * Queries the host information in a dedicated cluster.
     *
     * @remarks
     * The dedicated cluster feature manages instances in batches in the form of clusters. You can create multiple dedicated clusters in a region. A dedicated cluster contains multiple hosts, and a host contains multiple instances. For more information, see [Overview of dedicated clusters](https://help.aliyun.com/document_detail/141455.html).
     *
     * @param request - DescribeDedicatedHostsRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeDedicatedHostsResponse
     */
    describeDedicatedHostsWithOptions(request: $_model.DescribeDedicatedHostsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDedicatedHostsResponse>;
    /**
     * Queries the host information in a dedicated cluster.
     *
     * @remarks
     * The dedicated cluster feature manages instances in batches in the form of clusters. You can create multiple dedicated clusters in a region. A dedicated cluster contains multiple hosts, and a host contains multiple instances. For more information, see [Overview of dedicated clusters](https://help.aliyun.com/document_detail/141455.html).
     *
     * @param request - DescribeDedicatedHostsRequest
     * @returns DescribeDedicatedHostsResponse
     */
    describeDedicatedHosts(request: $_model.DescribeDedicatedHostsRequest): Promise<$_model.DescribeDedicatedHostsResponse>;
    /**
     * Queries the backup sets of a released ApsaraDB RDS for MySQL instance.
     *
     * @remarks
     * ### Supported database engine
     * ApsaraDB RDS for MySQL
     * ### Related feature documentation
     * >Notice: Before you call this operation, read the feature documentation carefully to fully understand the prerequisites and impacts of this operation.
     * [Configure the backup retention policy for a released instance](https://help.aliyun.com/document_detail/2836955.html)
     *
     * @param request - DescribeDetachedBackupsRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeDetachedBackupsResponse
     */
    describeDetachedBackupsWithOptions(request: $_model.DescribeDetachedBackupsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDetachedBackupsResponse>;
    /**
     * Queries the backup sets of a released ApsaraDB RDS for MySQL instance.
     *
     * @remarks
     * ### Supported database engine
     * ApsaraDB RDS for MySQL
     * ### Related feature documentation
     * >Notice: Before you call this operation, read the feature documentation carefully to fully understand the prerequisites and impacts of this operation.
     * [Configure the backup retention policy for a released instance](https://help.aliyun.com/document_detail/2836955.html)
     *
     * @param request - DescribeDetachedBackupsRequest
     * @returns DescribeDetachedBackupsResponse
     */
    describeDetachedBackups(request: $_model.DescribeDetachedBackupsRequest): Promise<$_model.DescribeDetachedBackupsResponse>;
    /**
     * Queries the error logs of an instance within a specified time period.
     *
     * @remarks
     * ### Supported engines
     * - RDS MySQL
     * - RDS PostgreSQL
     * - RDS SQL Server
     * - RDS MariaDB
     *
     * @param request - DescribeErrorLogsRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeErrorLogsResponse
     */
    describeErrorLogsWithOptions(request: $_model.DescribeErrorLogsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeErrorLogsResponse>;
    /**
     * Queries the error logs of an instance within a specified time period.
     *
     * @remarks
     * ### Supported engines
     * - RDS MySQL
     * - RDS PostgreSQL
     * - RDS SQL Server
     * - RDS MariaDB
     *
     * @param request - DescribeErrorLogsRequest
     * @returns DescribeErrorLogsResponse
     */
    describeErrorLogs(request: $_model.DescribeErrorLogsRequest): Promise<$_model.DescribeErrorLogsResponse>;
    /**
     * Queries a list of historical event records for ApsaraDB RDS.
     *
     * @remarks
     * ### Supported engines
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for PostgreSQL
     * - ApsaraDB RDS for SQL Server
     * - ApsaraDB RDS for MariaDB
     * ### Related documentation
     * >Notice: Before you call this operation, read the documentation carefully to fully understand the prerequisites and the impact of this operation.
     * - [Historical events for ApsaraDB RDS for MySQL](https://help.aliyun.com/document_detail/468953.html)
     * - [Historical events for ApsaraDB RDS for PostgreSQL](https://help.aliyun.com/document_detail/2569306.html)
     * - [Historical events for ApsaraDB RDS for SQL Server](https://help.aliyun.com/document_detail/2571444.html)
     * - [Historical events for ApsaraDB RDS for MariaDB](https://help.aliyun.com/document_detail/2571339.html)
     *
     * @param request - DescribeEventsRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeEventsResponse
     */
    describeEventsWithOptions(request: $_model.DescribeEventsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeEventsResponse>;
    /**
     * Queries a list of historical event records for ApsaraDB RDS.
     *
     * @remarks
     * ### Supported engines
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for PostgreSQL
     * - ApsaraDB RDS for SQL Server
     * - ApsaraDB RDS for MariaDB
     * ### Related documentation
     * >Notice: Before you call this operation, read the documentation carefully to fully understand the prerequisites and the impact of this operation.
     * - [Historical events for ApsaraDB RDS for MySQL](https://help.aliyun.com/document_detail/468953.html)
     * - [Historical events for ApsaraDB RDS for PostgreSQL](https://help.aliyun.com/document_detail/2569306.html)
     * - [Historical events for ApsaraDB RDS for SQL Server](https://help.aliyun.com/document_detail/2571444.html)
     * - [Historical events for ApsaraDB RDS for MariaDB](https://help.aliyun.com/document_detail/2571339.html)
     *
     * @param request - DescribeEventsRequest
     * @returns DescribeEventsResponse
     */
    describeEvents(request: $_model.DescribeEventsRequest): Promise<$_model.DescribeEventsResponse>;
    /**
     * Queries a list of ApsaraDB RDS for MySQL global active database (GAD) clusters or the details of a specified cluster.
     *
     * @remarks
     * ### Supported engines
     * - ApsaraDB RDS for MySQL
     *
     * @param request - DescribeGadInstancesRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeGadInstancesResponse
     */
    describeGadInstancesWithOptions(request: $_model.DescribeGadInstancesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeGadInstancesResponse>;
    /**
     * Queries a list of ApsaraDB RDS for MySQL global active database (GAD) clusters or the details of a specified cluster.
     *
     * @remarks
     * ### Supported engines
     * - ApsaraDB RDS for MySQL
     *
     * @param request - DescribeGadInstancesRequest
     * @returns DescribeGadInstancesResponse
     */
    describeGadInstances(request: $_model.DescribeGadInstancesRequest): Promise<$_model.DescribeGadInstancesResponse>;
    /**
     * Queries the availability detection method of an ApsaraDB RDS instance.
     *
     * @remarks
     * ### Supported engines
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for PostgreSQL
     * - ApsaraDB RDS for SQL Server
     * - ApsaraDB RDS for MariaDB
     * ### Related documentation
     * [What is the availability detection method?](https://help.aliyun.com/document_detail/207467.html)
     *
     * @param request - DescribeHADiagnoseConfigRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeHADiagnoseConfigResponse
     */
    describeHADiagnoseConfigWithOptions(request: $_model.DescribeHADiagnoseConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeHADiagnoseConfigResponse>;
    /**
     * Queries the availability detection method of an ApsaraDB RDS instance.
     *
     * @remarks
     * ### Supported engines
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for PostgreSQL
     * - ApsaraDB RDS for SQL Server
     * - ApsaraDB RDS for MariaDB
     * ### Related documentation
     * [What is the availability detection method?](https://help.aliyun.com/document_detail/207467.html)
     *
     * @param request - DescribeHADiagnoseConfigRequest
     * @returns DescribeHADiagnoseConfigResponse
     */
    describeHADiagnoseConfig(request: $_model.DescribeHADiagnoseConfigRequest): Promise<$_model.DescribeHADiagnoseConfigResponse>;
    /**
     * Queries the automatic switchover settings of the primary and secondary instances of an ApsaraDB RDS instance.
     *
     * @remarks
     * ### Supported engines
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for PostgreSQL
     * - ApsaraDB RDS for SQL Server
     * - ApsaraDB RDS for MariaDB
     *
     * @param request - DescribeHASwitchConfigRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeHASwitchConfigResponse
     */
    describeHASwitchConfigWithOptions(request: $_model.DescribeHASwitchConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeHASwitchConfigResponse>;
    /**
     * Queries the automatic switchover settings of the primary and secondary instances of an ApsaraDB RDS instance.
     *
     * @remarks
     * ### Supported engines
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for PostgreSQL
     * - ApsaraDB RDS for SQL Server
     * - ApsaraDB RDS for MariaDB
     *
     * @param request - DescribeHASwitchConfigRequest
     * @returns DescribeHASwitchConfigResponse
     */
    describeHASwitchConfig(request: $_model.DescribeHASwitchConfigRequest): Promise<$_model.DescribeHASwitchConfigResponse>;
    /**
     * Queries the events in the Event Center.
     *
     * @param request - DescribeHistoryEventsRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeHistoryEventsResponse
     */
    describeHistoryEventsWithOptions(request: $_model.DescribeHistoryEventsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeHistoryEventsResponse>;
    /**
     * Queries the events in the Event Center.
     *
     * @param request - DescribeHistoryEventsRequest
     * @returns DescribeHistoryEventsResponse
     */
    describeHistoryEvents(request: $_model.DescribeHistoryEventsRequest): Promise<$_model.DescribeHistoryEventsResponse>;
    /**
     * Counts historical events in the event center.
     *
     * @param request - DescribeHistoryEventsStatRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeHistoryEventsStatResponse
     */
    describeHistoryEventsStatWithOptions(request: $_model.DescribeHistoryEventsStatRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeHistoryEventsStatResponse>;
    /**
     * Counts historical events in the event center.
     *
     * @param request - DescribeHistoryEventsStatRequest
     * @returns DescribeHistoryEventsStatResponse
     */
    describeHistoryEventsStat(request: $_model.DescribeHistoryEventsStatRequest): Promise<$_model.DescribeHistoryEventsStatResponse>;
    /**
     * Queries historical task records created within the last 30 days.
     *
     * @remarks
     * ### Supported engines
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for PostgreSQL
     * - ApsaraDB RDS for SQL Server
     * ### Related feature documentation
     * >Notice: Before you call this operation, carefully read the feature documentation to ensure that you fully understand the prerequisites and impacts.
     * - [ApsaraDB RDS for MySQL task list](https://help.aliyun.com/document_detail/474275.html)
     * - [ApsaraDB RDS for PostgreSQL task list](https://help.aliyun.com/document_detail/474537.html)
     * - [ApsaraDB RDS for SQL Server task list](https://help.aliyun.com/document_detail/614826.html)
     *
     * @param request - DescribeHistoryTasksRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeHistoryTasksResponse
     */
    describeHistoryTasksWithOptions(request: $_model.DescribeHistoryTasksRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeHistoryTasksResponse>;
    /**
     * Queries historical task records created within the last 30 days.
     *
     * @remarks
     * ### Supported engines
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for PostgreSQL
     * - ApsaraDB RDS for SQL Server
     * ### Related feature documentation
     * >Notice: Before you call this operation, carefully read the feature documentation to ensure that you fully understand the prerequisites and impacts.
     * - [ApsaraDB RDS for MySQL task list](https://help.aliyun.com/document_detail/474275.html)
     * - [ApsaraDB RDS for PostgreSQL task list](https://help.aliyun.com/document_detail/474537.html)
     * - [ApsaraDB RDS for SQL Server task list](https://help.aliyun.com/document_detail/614826.html)
     *
     * @param request - DescribeHistoryTasksRequest
     * @returns DescribeHistoryTasksResponse
     */
    describeHistoryTasks(request: $_model.DescribeHistoryTasksRequest): Promise<$_model.DescribeHistoryTasksResponse>;
    /**
     * Queries the statistics of tasks in the task center.
     *
     * @param request - DescribeHistoryTasksStatRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeHistoryTasksStatResponse
     */
    describeHistoryTasksStatWithOptions(request: $_model.DescribeHistoryTasksStatRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeHistoryTasksStatResponse>;
    /**
     * Queries the statistics of tasks in the task center.
     *
     * @param request - DescribeHistoryTasksStatRequest
     * @returns DescribeHistoryTasksStatResponse
     */
    describeHistoryTasksStat(request: $_model.DescribeHistoryTasksStatRequest): Promise<$_model.DescribeHistoryTasksStatResponse>;
    /**
     * Queries the elastic policy parameters of a host group.
     *
     * @param request - DescribeHostGroupElasticStrategyParametersRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeHostGroupElasticStrategyParametersResponse
     */
    describeHostGroupElasticStrategyParametersWithOptions(request: $_model.DescribeHostGroupElasticStrategyParametersRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeHostGroupElasticStrategyParametersResponse>;
    /**
     * Queries the elastic policy parameters of a host group.
     *
     * @param request - DescribeHostGroupElasticStrategyParametersRequest
     * @returns DescribeHostGroupElasticStrategyParametersResponse
     */
    describeHostGroupElasticStrategyParameters(request: $_model.DescribeHostGroupElasticStrategyParametersRequest): Promise<$_model.DescribeHostGroupElasticStrategyParametersResponse>;
    /**
     * Queries the host WebShell logon information of an ApsaraDB RDS for SQL Server instance.
     *
     * @remarks
     * ### Supported engines
     * - ApsaraDB RDS for SQL Server
     * ### Before you begin
     * - The ApsaraDB RDS instance must meet the following requirements:
     *   - Region: This feature is supported in all regions except China (Zhangjiakou).
     *   - Instance edition: Basic Edition, High Availability Edition (SQL Server 2012 or later), and Cluster Edition.
     *   - Instance type: General-purpose and dedicated instance types. Shared instance types are not supported.
     *   - Network type: VPC. To change the network type, see [Change the network type](https://help.aliyun.com/document_detail/95707.html).
     *   - Creation time: High Availability Edition and Cluster Edition instances must be created on or after January 1, 2021. Basic Edition instances must be created on or after September 2, 2022. You can view the **creation time** of an instance in the **Running Status** section of the **Basic Information** page.
     * - The logon account must be an **Alibaba Cloud account**.
     * ### Related documentation
     * >Notice: Before you call this operation, read the documentation to fully understand the prerequisites and impacts.
     * [Create a host account and log on](https://help.aliyun.com/document_detail/354862.html)
     *
     * @param request - DescribeHostWebShellRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeHostWebShellResponse
     */
    describeHostWebShellWithOptions(request: $_model.DescribeHostWebShellRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeHostWebShellResponse>;
    /**
     * Queries the host WebShell logon information of an ApsaraDB RDS for SQL Server instance.
     *
     * @remarks
     * ### Supported engines
     * - ApsaraDB RDS for SQL Server
     * ### Before you begin
     * - The ApsaraDB RDS instance must meet the following requirements:
     *   - Region: This feature is supported in all regions except China (Zhangjiakou).
     *   - Instance edition: Basic Edition, High Availability Edition (SQL Server 2012 or later), and Cluster Edition.
     *   - Instance type: General-purpose and dedicated instance types. Shared instance types are not supported.
     *   - Network type: VPC. To change the network type, see [Change the network type](https://help.aliyun.com/document_detail/95707.html).
     *   - Creation time: High Availability Edition and Cluster Edition instances must be created on or after January 1, 2021. Basic Edition instances must be created on or after September 2, 2022. You can view the **creation time** of an instance in the **Running Status** section of the **Basic Information** page.
     * - The logon account must be an **Alibaba Cloud account**.
     * ### Related documentation
     * >Notice: Before you call this operation, read the documentation to fully understand the prerequisites and impacts.
     * [Create a host account and log on](https://help.aliyun.com/document_detail/354862.html)
     *
     * @param request - DescribeHostWebShellRequest
     * @returns DescribeHostWebShellResponse
     */
    describeHostWebShell(request: $_model.DescribeHostWebShellRequest): Promise<$_model.DescribeHostWebShellResponse>;
    /**
     * Queries the details of a data import task for an ApsaraDB RDS instance that uses native replication.
     *
     * @remarks
     * Queries the details of an import task.
     *
     * @param request - DescribeImportTaskRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeImportTaskResponse
     */
    describeImportTaskWithOptions(request: $_model.DescribeImportTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeImportTaskResponse>;
    /**
     * Queries the details of a data import task for an ApsaraDB RDS instance that uses native replication.
     *
     * @remarks
     * Queries the details of an import task.
     *
     * @param request - DescribeImportTaskRequest
     * @returns DescribeImportTaskResponse
     */
    describeImportTask(request: $_model.DescribeImportTaskRequest): Promise<$_model.DescribeImportTaskResponse>;
    /**
     * Queries the precheck details of an import task, including specific precheck items and check results.
     *
     * @remarks
     * Queries the precheck details of an import task.
     *
     * @param request - DescribeImportTaskValidationRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeImportTaskValidationResponse
     */
    describeImportTaskValidationWithOptions(request: $_model.DescribeImportTaskValidationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeImportTaskValidationResponse>;
    /**
     * Queries the precheck details of an import task, including specific precheck items and check results.
     *
     * @remarks
     * Queries the precheck details of an import task.
     *
     * @param request - DescribeImportTaskValidationRequest
     * @returns DescribeImportTaskValidationResponse
     */
    describeImportTaskValidation(request: $_model.DescribeImportTaskValidationRequest): Promise<$_model.DescribeImportTaskValidationResponse>;
    /**
     * Queries the auto-renewal status of an ApsaraDB RDS instance.
     *
     * @remarks
     * ### Supported engines
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for PostgreSQL
     * - ApsaraDB RDS for SQL Server
     * - ApsaraDB RDS for MariaDB
     *
     * @param request - DescribeInstanceAutoRenewalAttributeRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeInstanceAutoRenewalAttributeResponse
     */
    describeInstanceAutoRenewalAttributeWithOptions(request: $_model.DescribeInstanceAutoRenewalAttributeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeInstanceAutoRenewalAttributeResponse>;
    /**
     * Queries the auto-renewal status of an ApsaraDB RDS instance.
     *
     * @remarks
     * ### Supported engines
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for PostgreSQL
     * - ApsaraDB RDS for SQL Server
     * - ApsaraDB RDS for MariaDB
     *
     * @param request - DescribeInstanceAutoRenewalAttributeRequest
     * @returns DescribeInstanceAutoRenewalAttributeResponse
     */
    describeInstanceAutoRenewalAttribute(request: $_model.DescribeInstanceAutoRenewalAttributeRequest): Promise<$_model.DescribeInstanceAutoRenewalAttributeResponse>;
    /**
     * Queries the cross-region backup settings of an instance.
     *
     * @remarks
     * ### Supported engines
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for PostgreSQL
     * - ApsaraDB RDS for SQL Server
     * ### Related documentation
     * >Notice: Before you call this operation, read the following documentation and make sure that you fully understand the prerequisites and impacts of this operation.
     * - [Cross-region backup for ApsaraDB RDS for MySQL](https://help.aliyun.com/document_detail/120824.html)
     * - [Cross-region backup for ApsaraDB RDS for PostgreSQL](https://help.aliyun.com/document_detail/206671.html)
     * - [Cross-region backup for ApsaraDB RDS for SQL Server](https://help.aliyun.com/document_detail/187923.html)
     *
     * @param request - DescribeInstanceCrossBackupPolicyRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeInstanceCrossBackupPolicyResponse
     */
    describeInstanceCrossBackupPolicyWithOptions(request: $_model.DescribeInstanceCrossBackupPolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeInstanceCrossBackupPolicyResponse>;
    /**
     * Queries the cross-region backup settings of an instance.
     *
     * @remarks
     * ### Supported engines
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for PostgreSQL
     * - ApsaraDB RDS for SQL Server
     * ### Related documentation
     * >Notice: Before you call this operation, read the following documentation and make sure that you fully understand the prerequisites and impacts of this operation.
     * - [Cross-region backup for ApsaraDB RDS for MySQL](https://help.aliyun.com/document_detail/120824.html)
     * - [Cross-region backup for ApsaraDB RDS for PostgreSQL](https://help.aliyun.com/document_detail/206671.html)
     * - [Cross-region backup for ApsaraDB RDS for SQL Server](https://help.aliyun.com/document_detail/187923.html)
     *
     * @param request - DescribeInstanceCrossBackupPolicyRequest
     * @returns DescribeInstanceCrossBackupPolicyResponse
     */
    describeInstanceCrossBackupPolicy(request: $_model.DescribeInstanceCrossBackupPolicyRequest): Promise<$_model.DescribeInstanceCrossBackupPolicyResponse>;
    /**
     * Queries the reserved keywords of an ApsaraDB RDS instance, which are prohibited from being used as database or account names.
     *
     * @remarks
     * ### Supported engines
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for PostgreSQL
     * - ApsaraDB RDS for SQL Server
     * - ApsaraDB RDS for MariaDB
     *
     * @param request - DescribeInstanceKeywordsRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeInstanceKeywordsResponse
     */
    describeInstanceKeywordsWithOptions(request: $_model.DescribeInstanceKeywordsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeInstanceKeywordsResponse>;
    /**
     * Queries the reserved keywords of an ApsaraDB RDS instance, which are prohibited from being used as database or account names.
     *
     * @remarks
     * ### Supported engines
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for PostgreSQL
     * - ApsaraDB RDS for SQL Server
     * - ApsaraDB RDS for MariaDB
     *
     * @param request - DescribeInstanceKeywordsRequest
     * @returns DescribeInstanceKeywordsResponse
     */
    describeInstanceKeywords(request: $_model.DescribeInstanceKeywordsRequest): Promise<$_model.DescribeInstanceKeywordsResponse>;
    /**
     * Queries the whitelist templates associated with an instance based on the instance name.
     *
     * @remarks
     * ### Applicable engines
     * - RDS MySQL
     * - RDS PostgreSQL
     * - RDS SQL Server
     *
     * @param request - DescribeInstanceLinkedWhitelistTemplateRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeInstanceLinkedWhitelistTemplateResponse
     */
    describeInstanceLinkedWhitelistTemplateWithOptions(request: $_model.DescribeInstanceLinkedWhitelistTemplateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeInstanceLinkedWhitelistTemplateResponse>;
    /**
     * Queries the whitelist templates associated with an instance based on the instance name.
     *
     * @remarks
     * ### Applicable engines
     * - RDS MySQL
     * - RDS PostgreSQL
     * - RDS SQL Server
     *
     * @param request - DescribeInstanceLinkedWhitelistTemplateRequest
     * @returns DescribeInstanceLinkedWhitelistTemplateResponse
     */
    describeInstanceLinkedWhitelistTemplate(request: $_model.DescribeInstanceLinkedWhitelistTemplateRequest): Promise<$_model.DescribeInstanceLinkedWhitelistTemplateResponse>;
    /**
     * Queries whether a specified Key Management Service (KMS) resource is associated with an ApsaraDB RDS instance.
     *
     * @remarks
     * ### Supported engines
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for PostgreSQL
     * - ApsaraDB RDS for SQL Server
     *
     * @param request - DescribeKmsAssociateResourcesRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeKmsAssociateResourcesResponse
     */
    describeKmsAssociateResourcesWithOptions(request: $_model.DescribeKmsAssociateResourcesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeKmsAssociateResourcesResponse>;
    /**
     * Queries whether a specified Key Management Service (KMS) resource is associated with an ApsaraDB RDS instance.
     *
     * @remarks
     * ### Supported engines
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for PostgreSQL
     * - ApsaraDB RDS for SQL Server
     *
     * @param request - DescribeKmsAssociateResourcesRequest
     * @returns DescribeKmsAssociateResourcesResponse
     */
    describeKmsAssociateResources(request: $_model.DescribeKmsAssociateResourcesRequest): Promise<$_model.DescribeKmsAssociateResourcesResponse>;
    /**
     * Queries the restorable time range for backups of an ApsaraDB RDS instance.
     *
     * @remarks
     * ### Applicable engines
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for PostgreSQL
     * - ApsaraDB RDS for MariaDB
     *
     * @param request - DescribeLocalAvailableRecoveryTimeRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeLocalAvailableRecoveryTimeResponse
     */
    describeLocalAvailableRecoveryTimeWithOptions(request: $_model.DescribeLocalAvailableRecoveryTimeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeLocalAvailableRecoveryTimeResponse>;
    /**
     * Queries the restorable time range for backups of an ApsaraDB RDS instance.
     *
     * @remarks
     * ### Applicable engines
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for PostgreSQL
     * - ApsaraDB RDS for MariaDB
     *
     * @param request - DescribeLocalAvailableRecoveryTimeRequest
     * @returns DescribeLocalAvailableRecoveryTimeResponse
     */
    describeLocalAvailableRecoveryTime(request: $_model.DescribeLocalAvailableRecoveryTimeRequest): Promise<$_model.DescribeLocalAvailableRecoveryTimeResponse>;
    /**
     * Queries the log backup files of an ApsaraDB RDS for SQL Server instance.
     *
     * @remarks
     * ### Applicable engine
     * ApsaraDB RDS for SQL Server
     * > To view log files of other engines, call DescribeBinlogFiles.
     *
     * @param request - DescribeLogBackupFilesRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeLogBackupFilesResponse
     */
    describeLogBackupFilesWithOptions(request: $_model.DescribeLogBackupFilesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeLogBackupFilesResponse>;
    /**
     * Queries the log backup files of an ApsaraDB RDS for SQL Server instance.
     *
     * @remarks
     * ### Applicable engine
     * ApsaraDB RDS for SQL Server
     * > To view log files of other engines, call DescribeBinlogFiles.
     *
     * @param request - DescribeLogBackupFilesRequest
     * @returns DescribeLogBackupFilesResponse
     */
    describeLogBackupFiles(request: $_model.DescribeLogBackupFilesRequest): Promise<$_model.DescribeLogBackupFilesResponse>;
    /**
     * Retrieves information about instances pending upgrade in RDS marketing campaigns.
     *
     * @param request - DescribeMarketingActivityRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeMarketingActivityResponse
     */
    describeMarketingActivityWithOptions(request: $_model.DescribeMarketingActivityRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeMarketingActivityResponse>;
    /**
     * Retrieves information about instances pending upgrade in RDS marketing campaigns.
     *
     * @param request - DescribeMarketingActivityRequest
     * @returns DescribeMarketingActivityResponse
     */
    describeMarketingActivity(request: $_model.DescribeMarketingActivityRequest): Promise<$_model.DescribeMarketingActivityResponse>;
    /**
     * Queries a list of encryption or masking rules for a specified instance.
     *
     * @remarks
     * ## Request notes
     * - Before you invoke this operation, make sure that column encryption is enabled in the DAS Security Center.
     * - If you receive the ColumnEncryptionErrorCode.NOT_PURCHASED error message when invoking this operation, go to the Database Autonomy Service (DAS) Security Center to purchase and enable column encryption.
     *
     * @param request - DescribeMaskingRulesRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeMaskingRulesResponse
     */
    describeMaskingRulesWithOptions(request: $_model.DescribeMaskingRulesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeMaskingRulesResponse>;
    /**
     * Queries a list of encryption or masking rules for a specified instance.
     *
     * @remarks
     * ## Request notes
     * - Before you invoke this operation, make sure that column encryption is enabled in the DAS Security Center.
     * - If you receive the ColumnEncryptionErrorCode.NOT_PURCHASED error message when invoking this operation, go to the Database Autonomy Service (DAS) Security Center to purchase and enable column encryption.
     *
     * @param request - DescribeMaskingRulesRequest
     * @returns DescribeMaskingRulesResponse
     */
    describeMaskingRules(request: $_model.DescribeMaskingRulesRequest): Promise<$_model.DescribeMaskingRulesResponse>;
    /**
     * Queries the information about databases and tables that can be restored from a specified backup set.
     *
     * @remarks
     * ### Applicable engines
     * ApsaraDB RDS for MySQL
     * > Only MySQL 8.0, 5.7, and 5.6 High-availability Edition instances with local SSDs are supported.
     * ### Feature description
     * Before you call the [RestoreTable](https://help.aliyun.com/document_detail/131510.html) operation to [restore an individual database and table of an ApsaraDB RDS for MySQL instance](https://help.aliyun.com/document_detail/103175.html), you can call this operation to query the information about databases and tables that can be restored.
     *
     * @param request - DescribeMetaListRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeMetaListResponse
     */
    describeMetaListWithOptions(request: $_model.DescribeMetaListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeMetaListResponse>;
    /**
     * Queries the information about databases and tables that can be restored from a specified backup set.
     *
     * @remarks
     * ### Applicable engines
     * ApsaraDB RDS for MySQL
     * > Only MySQL 8.0, 5.7, and 5.6 High-availability Edition instances with local SSDs are supported.
     * ### Feature description
     * Before you call the [RestoreTable](https://help.aliyun.com/document_detail/131510.html) operation to [restore an individual database and table of an ApsaraDB RDS for MySQL instance](https://help.aliyun.com/document_detail/103175.html), you can call this operation to query the information about databases and tables that can be restored.
     *
     * @param request - DescribeMetaListRequest
     * @returns DescribeMetaListResponse
     */
    describeMetaList(request: $_model.DescribeMetaListRequest): Promise<$_model.DescribeMetaListResponse>;
    /**
     * Queries the details of an OSS backup migration task for an ApsaraDB RDS for SQL Server instance.
     *
     * @remarks
     * ### Supported engines
     * - ApsaraDB RDS for SQL Server
     *
     * @param request - DescribeMigrateTaskByIdRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeMigrateTaskByIdResponse
     */
    describeMigrateTaskByIdWithOptions(request: $_model.DescribeMigrateTaskByIdRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeMigrateTaskByIdResponse>;
    /**
     * Queries the details of an OSS backup migration task for an ApsaraDB RDS for SQL Server instance.
     *
     * @remarks
     * ### Supported engines
     * - ApsaraDB RDS for SQL Server
     *
     * @param request - DescribeMigrateTaskByIdRequest
     * @returns DescribeMigrateTaskByIdResponse
     */
    describeMigrateTaskById(request: $_model.DescribeMigrateTaskByIdRequest): Promise<$_model.DescribeMigrateTaskByIdResponse>;
    /**
     * Queries the backup data migration tasks of an ApsaraDB RDS for SQL Server instance.
     *
     * @remarks
     * ### Applicable engines
     * - ApsaraDB RDS for SQL Server
     * ### Description
     * This operation queries the backup data migration tasks of an instance within the last week.
     * ### Precautions
     * * The source backup file for a backup data migration task must be a full backup file.
     * * ApsaraDB RDS for SQL Server 2017 Cluster Edition instances are not supported.
     *
     * @param request - DescribeMigrateTasksRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeMigrateTasksResponse
     */
    describeMigrateTasksWithOptions(request: $_model.DescribeMigrateTasksRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeMigrateTasksResponse>;
    /**
     * Queries the backup data migration tasks of an ApsaraDB RDS for SQL Server instance.
     *
     * @remarks
     * ### Applicable engines
     * - ApsaraDB RDS for SQL Server
     * ### Description
     * This operation queries the backup data migration tasks of an instance within the last week.
     * ### Precautions
     * * The source backup file for a backup data migration task must be a full backup file.
     * * ApsaraDB RDS for SQL Server 2017 Cluster Edition instances are not supported.
     *
     * @param request - DescribeMigrateTasksRequest
     * @returns DescribeMigrateTasksResponse
     */
    describeMigrateTasks(request: $_model.DescribeMigrateTasksRequest): Promise<$_model.DescribeMigrateTasksResponse>;
    /**
     * 查询PostgreSQL实例Hba配置变更日志
     *
     * @param request - DescribeModifyPGHbaConfigLogRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeModifyPGHbaConfigLogResponse
     */
    describeModifyPGHbaConfigLogWithOptions(request: $_model.DescribeModifyPGHbaConfigLogRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeModifyPGHbaConfigLogResponse>;
    /**
     * 查询PostgreSQL实例Hba配置变更日志
     *
     * @param request - DescribeModifyPGHbaConfigLogRequest
     * @returns DescribeModifyPGHbaConfigLogResponse
     */
    describeModifyPGHbaConfigLog(request: $_model.DescribeModifyPGHbaConfigLogRequest): Promise<$_model.DescribeModifyPGHbaConfigLogResponse>;
    /**
     * Queries the parameter modification logs of an ApsaraDB RDS instance.
     *
     * @remarks
     * ### Supported engines
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for PostgreSQL
     * - ApsaraDB RDS for SQL Server
     * - ApsaraDB RDS for MariaDB
     *
     * @param request - DescribeModifyParameterLogRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeModifyParameterLogResponse
     */
    describeModifyParameterLogWithOptions(request: $_model.DescribeModifyParameterLogRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeModifyParameterLogResponse>;
    /**
     * Queries the parameter modification logs of an ApsaraDB RDS instance.
     *
     * @remarks
     * ### Supported engines
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for PostgreSQL
     * - ApsaraDB RDS for SQL Server
     * - ApsaraDB RDS for MariaDB
     *
     * @param request - DescribeModifyParameterLogRequest
     * @returns DescribeModifyParameterLogResponse
     */
    describeModifyParameterLog(request: $_model.DescribeModifyParameterLogRequest): Promise<$_model.DescribeModifyParameterLogResponse>;
    /**
     * Queries the authorization information of a service account.
     *
     * @remarks
     * ### Supported engines
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for PostgreSQL
     * - ApsaraDB RDS for SQL Server
     * ### Related documentation
     * >Notice: Before you call this operation, read the related documentation carefully to fully understand the prerequisites and impacts of this operation.
     * - [Grant permissions to a service account for ApsaraDB RDS for MySQL](https://help.aliyun.com/document_detail/96102.html)
     * - [Grant permissions to a service account for ApsaraDB RDS for PostgreSQL](https://help.aliyun.com/document_detail/146887.html)
     * - [Grant permissions to a service account for ApsaraDB RDS for SQL Server](https://help.aliyun.com/document_detail/95693.html)
     *
     * @param request - DescribeOperatorPermissionRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeOperatorPermissionResponse
     */
    describeOperatorPermissionWithOptions(request: $_model.DescribeOperatorPermissionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeOperatorPermissionResponse>;
    /**
     * Queries the authorization information of a service account.
     *
     * @remarks
     * ### Supported engines
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for PostgreSQL
     * - ApsaraDB RDS for SQL Server
     * ### Related documentation
     * >Notice: Before you call this operation, read the related documentation carefully to fully understand the prerequisites and impacts of this operation.
     * - [Grant permissions to a service account for ApsaraDB RDS for MySQL](https://help.aliyun.com/document_detail/96102.html)
     * - [Grant permissions to a service account for ApsaraDB RDS for PostgreSQL](https://help.aliyun.com/document_detail/146887.html)
     * - [Grant permissions to a service account for ApsaraDB RDS for SQL Server](https://help.aliyun.com/document_detail/95693.html)
     *
     * @param request - DescribeOperatorPermissionRequest
     * @returns DescribeOperatorPermissionResponse
     */
    describeOperatorPermission(request: $_model.DescribeOperatorPermissionRequest): Promise<$_model.DescribeOperatorPermissionResponse>;
    /**
     * Queries the file details of a backup data migration task for an ApsaraDB RDS for SQL Server instance.
     *
     * @remarks
     * ### Supported engines
     * - ApsaraDB RDS for SQL Server
     * ### Precautions
     * This operation does not support ApsaraDB RDS for SQL Server 2017 Enterprise Edition and 2019 Enterprise Edition instances.
     *
     * @param request - DescribeOssDownloadsRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeOssDownloadsResponse
     */
    describeOssDownloadsWithOptions(request: $_model.DescribeOssDownloadsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeOssDownloadsResponse>;
    /**
     * Queries the file details of a backup data migration task for an ApsaraDB RDS for SQL Server instance.
     *
     * @remarks
     * ### Supported engines
     * - ApsaraDB RDS for SQL Server
     * ### Precautions
     * This operation does not support ApsaraDB RDS for SQL Server 2017 Enterprise Edition and 2019 Enterprise Edition instances.
     *
     * @param request - DescribeOssDownloadsRequest
     * @returns DescribeOssDownloadsResponse
     */
    describeOssDownloads(request: $_model.DescribeOssDownloadsRequest): Promise<$_model.DescribeOssDownloadsResponse>;
    /**
     * 查询PostgreSQL实例HBA配置
     *
     * @param request - DescribePGHbaConfigRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribePGHbaConfigResponse
     */
    describePGHbaConfigWithOptions(request: $_model.DescribePGHbaConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribePGHbaConfigResponse>;
    /**
     * 查询PostgreSQL实例HBA配置
     *
     * @param request - DescribePGHbaConfigRequest
     * @returns DescribePGHbaConfigResponse
     */
    describePGHbaConfig(request: $_model.DescribePGHbaConfigRequest): Promise<$_model.DescribePGHbaConfigResponse>;
    /**
     * Queries the information about a specified ApsaraDB RDS parameter template.
     *
     * @remarks
     * ### Supported engines
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for PostgreSQL
     * ### Related documentation
     * >Notice: Before you call this operation, carefully read the following documentation. Make sure that you fully understand the prerequisites and impacts of this operation.
     * - [Use a parameter template for MySQL instances](https://help.aliyun.com/document_detail/130565.html)
     * - [Use a parameter template for PostgreSQL instances](https://help.aliyun.com/document_detail/457176.html)
     *
     * @param request - DescribeParameterGroupRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeParameterGroupResponse
     */
    describeParameterGroupWithOptions(request: $_model.DescribeParameterGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeParameterGroupResponse>;
    /**
     * Queries the information about a specified ApsaraDB RDS parameter template.
     *
     * @remarks
     * ### Supported engines
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for PostgreSQL
     * ### Related documentation
     * >Notice: Before you call this operation, carefully read the following documentation. Make sure that you fully understand the prerequisites and impacts of this operation.
     * - [Use a parameter template for MySQL instances](https://help.aliyun.com/document_detail/130565.html)
     * - [Use a parameter template for PostgreSQL instances](https://help.aliyun.com/document_detail/457176.html)
     *
     * @param request - DescribeParameterGroupRequest
     * @returns DescribeParameterGroupResponse
     */
    describeParameterGroup(request: $_model.DescribeParameterGroupRequest): Promise<$_model.DescribeParameterGroupResponse>;
    /**
     * Queries the list of parameter templates in a specified region.
     *
     * @remarks
     * ### Supported engines
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for PostgreSQL
     * ### Related documentation
     * >Notice: Before you call this operation, carefully read the following documentation. Make sure that you fully understand the prerequisites and impacts of this operation.
     * - [Use a parameter template for MySQL](https://help.aliyun.com/document_detail/130565.html)
     * - [Use a parameter template for PostgreSQL](https://help.aliyun.com/document_detail/457176.html)
     *
     * @param request - DescribeParameterGroupsRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeParameterGroupsResponse
     */
    describeParameterGroupsWithOptions(request: $_model.DescribeParameterGroupsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeParameterGroupsResponse>;
    /**
     * Queries the list of parameter templates in a specified region.
     *
     * @remarks
     * ### Supported engines
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for PostgreSQL
     * ### Related documentation
     * >Notice: Before you call this operation, carefully read the following documentation. Make sure that you fully understand the prerequisites and impacts of this operation.
     * - [Use a parameter template for MySQL](https://help.aliyun.com/document_detail/130565.html)
     * - [Use a parameter template for PostgreSQL](https://help.aliyun.com/document_detail/457176.html)
     *
     * @param request - DescribeParameterGroupsRequest
     * @returns DescribeParameterGroupsResponse
     */
    describeParameterGroups(request: $_model.DescribeParameterGroupsRequest): Promise<$_model.DescribeParameterGroupsResponse>;
    /**
     * Queries database parameter templates.
     *
     * @remarks
     * ### Applicable engines
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for PostgreSQL
     * - ApsaraDB RDS for SQL Server
     * - ApsaraDB RDS for MariaDB
     *
     * @param request - DescribeParameterTemplatesRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeParameterTemplatesResponse
     */
    describeParameterTemplatesWithOptions(request: $_model.DescribeParameterTemplatesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeParameterTemplatesResponse>;
    /**
     * Queries database parameter templates.
     *
     * @remarks
     * ### Applicable engines
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for PostgreSQL
     * - ApsaraDB RDS for SQL Server
     * - ApsaraDB RDS for MariaDB
     *
     * @param request - DescribeParameterTemplatesRequest
     * @returns DescribeParameterTemplatesResponse
     */
    describeParameterTemplates(request: $_model.DescribeParameterTemplatesRequest): Promise<$_model.DescribeParameterTemplatesResponse>;
    /**
     * Queries the details of a scheduled task for modifying instance parameters.
     *
     * @remarks
     * ### Applicable engines
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for PostgreSQL
     * ### Related feature documentation
     * >Notice: Before you call this operation, read the feature documentation to ensure that you fully understand the prerequisites and impacts.
     * - [Set the parameters of an ApsaraDB RDS for MySQL instance](https://help.aliyun.com/document_detail/96063.html)
     * - [Set the parameters of an ApsaraDB RDS for PostgreSQL instance](https://help.aliyun.com/document_detail/96751.html)
     *
     * @param request - DescribeParameterTimedScheduleTaskRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeParameterTimedScheduleTaskResponse
     */
    describeParameterTimedScheduleTaskWithOptions(request: $_model.DescribeParameterTimedScheduleTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeParameterTimedScheduleTaskResponse>;
    /**
     * Queries the details of a scheduled task for modifying instance parameters.
     *
     * @remarks
     * ### Applicable engines
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for PostgreSQL
     * ### Related feature documentation
     * >Notice: Before you call this operation, read the feature documentation to ensure that you fully understand the prerequisites and impacts.
     * - [Set the parameters of an ApsaraDB RDS for MySQL instance](https://help.aliyun.com/document_detail/96063.html)
     * - [Set the parameters of an ApsaraDB RDS for PostgreSQL instance](https://help.aliyun.com/document_detail/96751.html)
     *
     * @param request - DescribeParameterTimedScheduleTaskRequest
     * @returns DescribeParameterTimedScheduleTaskResponse
     */
    describeParameterTimedScheduleTask(request: $_model.DescribeParameterTimedScheduleTaskRequest): Promise<$_model.DescribeParameterTimedScheduleTaskResponse>;
    /**
     * Queries the current parameter settings of an instance.
     *
     * @remarks
     * ### Supported database engines
     * - RDS MySQL
     * - RDS PostgreSQL
     * - RDS SQL Server
     * - RDS MariaDB
     *
     * @param request - DescribeParametersRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeParametersResponse
     */
    describeParametersWithOptions(request: $_model.DescribeParametersRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeParametersResponse>;
    /**
     * Queries the current parameter settings of an instance.
     *
     * @remarks
     * ### Supported database engines
     * - RDS MySQL
     * - RDS PostgreSQL
     * - RDS SQL Server
     * - RDS MariaDB
     *
     * @param request - DescribeParametersRequest
     * @returns DescribeParametersResponse
     */
    describeParameters(request: $_model.DescribeParametersRequest): Promise<$_model.DescribeParametersResponse>;
    /**
     * Retrieves information about all extensions in the specified database of an instance.
     *
     * @remarks
     * <props="china">You can join the RDS PostgreSQL extension communication DingTalk group (103525002795) for consultation, communication, and feedback to obtain more information about extensions.
     * ### Supported engines
     * ApsaraDB RDS for PostgreSQL
     * ### Related documentation
     * >Notice: Before you call this operation, carefully read the feature documentation to ensure that you fully understand the prerequisites and the impacts of the operation.
     * [Manage extensions](https://help.aliyun.com/document_detail/2402409.html)
     *
     * @param request - DescribePostgresExtensionsRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribePostgresExtensionsResponse
     */
    describePostgresExtensionsWithOptions(request: $_model.DescribePostgresExtensionsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribePostgresExtensionsResponse>;
    /**
     * Retrieves information about all extensions in the specified database of an instance.
     *
     * @remarks
     * <props="china">You can join the RDS PostgreSQL extension communication DingTalk group (103525002795) for consultation, communication, and feedback to obtain more information about extensions.
     * ### Supported engines
     * ApsaraDB RDS for PostgreSQL
     * ### Related documentation
     * >Notice: Before you call this operation, carefully read the feature documentation to ensure that you fully understand the prerequisites and the impacts of the operation.
     * [Manage extensions](https://help.aliyun.com/document_detail/2402409.html)
     *
     * @param request - DescribePostgresExtensionsRequest
     * @returns DescribePostgresExtensionsResponse
     */
    describePostgresExtensions(request: $_model.DescribePostgresExtensionsRequest): Promise<$_model.DescribePostgresExtensionsResponse>;
    /**
     * Queries the pricing information of an ApsaraDB RDS instance.
     *
     * @remarks
     * ### Supported engines
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for PostgreSQL
     * - ApsaraDB RDS for SQL Server
     * - ApsaraDB RDS for MariaDB
     *
     * @param tmpReq - DescribePriceRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribePriceResponse
     */
    describePriceWithOptions(tmpReq: $_model.DescribePriceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribePriceResponse>;
    /**
     * Queries the pricing information of an ApsaraDB RDS instance.
     *
     * @remarks
     * ### Supported engines
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for PostgreSQL
     * - ApsaraDB RDS for SQL Server
     * - ApsaraDB RDS for MariaDB
     *
     * @param request - DescribePriceRequest
     * @returns DescribePriceResponse
     */
    describePrice(request: $_model.DescribePriceRequest): Promise<$_model.DescribePriceResponse>;
    /**
     * Queries the quick purchase configurations for ApsaraDB RDS.
     *
     * @param request - DescribeQuickSaleConfigRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeQuickSaleConfigResponse
     */
    describeQuickSaleConfigWithOptions(request: $_model.DescribeQuickSaleConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeQuickSaleConfigResponse>;
    /**
     * Queries the quick purchase configurations for ApsaraDB RDS.
     *
     * @param request - DescribeQuickSaleConfigRequest
     * @returns DescribeQuickSaleConfigResponse
     */
    describeQuickSaleConfig(request: $_model.DescribeQuickSaleConfigRequest): Promise<$_model.DescribeQuickSaleConfigResponse>;
    /**
     * 查询可用区的资源库存
     *
     * @param request - DescribeRCAvailableResourceRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeRCAvailableResourceResponse
     */
    describeRCAvailableResourceWithOptions(request: $_model.DescribeRCAvailableResourceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeRCAvailableResourceResponse>;
    /**
     * 查询可用区的资源库存
     *
     * @param request - DescribeRCAvailableResourceRequest
     * @returns DescribeRCAvailableResourceResponse
     */
    describeRCAvailableResource(request: $_model.DescribeRCAvailableResourceRequest): Promise<$_model.DescribeRCAvailableResourceResponse>;
    /**
     * 查询云助手安装状态
     *
     * @param tmpReq - DescribeRCCloudAssistantStatusRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeRCCloudAssistantStatusResponse
     */
    describeRCCloudAssistantStatusWithOptions(tmpReq: $_model.DescribeRCCloudAssistantStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeRCCloudAssistantStatusResponse>;
    /**
     * 查询云助手安装状态
     *
     * @param request - DescribeRCCloudAssistantStatusRequest
     * @returns DescribeRCCloudAssistantStatusResponse
     */
    describeRCCloudAssistantStatus(request: $_model.DescribeRCCloudAssistantStatusRequest): Promise<$_model.DescribeRCCloudAssistantStatusResponse>;
    /**
     * Queries the KubeConfig of an RDS Custom ACK cluster.
     *
     * @remarks
     * KubeConfig is used to configure access credentials for an ACK cluster on the client side. It contains information such as the identity and authentication data for accessing the target cluster. When you use kubectl for cluster management, you must connect to the cluster by using KubeConfig. Properly manage the KubeConfig credentials of the cluster and revoke them promptly when they are no longer needed to prevent security risks such as data leaks caused by KubeConfig leaks.
     *
     * @param request - DescribeRCClusterConfigRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeRCClusterConfigResponse
     */
    describeRCClusterConfigWithOptions(request: $_model.DescribeRCClusterConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeRCClusterConfigResponse>;
    /**
     * Queries the KubeConfig of an RDS Custom ACK cluster.
     *
     * @remarks
     * KubeConfig is used to configure access credentials for an ACK cluster on the client side. It contains information such as the identity and authentication data for accessing the target cluster. When you use kubectl for cluster management, you must connect to the cluster by using KubeConfig. Properly manage the KubeConfig credentials of the cluster and revoke them promptly when they are no longer needed to prevent security risks such as data leaks caused by KubeConfig leaks.
     *
     * @param request - DescribeRCClusterConfigRequest
     * @returns DescribeRCClusterConfigResponse
     */
    describeRCClusterConfig(request: $_model.DescribeRCClusterConfigRequest): Promise<$_model.DescribeRCClusterConfigResponse>;
    /**
     * 查询RDS用户专属集群节点
     *
     * @param request - DescribeRCClusterNodesRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeRCClusterNodesResponse
     */
    describeRCClusterNodesWithOptions(request: $_model.DescribeRCClusterNodesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeRCClusterNodesResponse>;
    /**
     * 查询RDS用户专属集群节点
     *
     * @param request - DescribeRCClusterNodesRequest
     * @returns DescribeRCClusterNodesResponse
     */
    describeRCClusterNodes(request: $_model.DescribeRCClusterNodesRequest): Promise<$_model.DescribeRCClusterNodesResponse>;
    /**
     * 查询RDS Custom集群列表
     *
     * @param request - DescribeRCClustersRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeRCClustersResponse
     */
    describeRCClustersWithOptions(request: $_model.DescribeRCClustersRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeRCClustersResponse>;
    /**
     * 查询RDS Custom集群列表
     *
     * @param request - DescribeRCClustersRequest
     * @returns DescribeRCClustersResponse
     */
    describeRCClusters(request: $_model.DescribeRCClustersRequest): Promise<$_model.DescribeRCClustersResponse>;
    /**
     * 描述RDS CUSTOM部署集
     *
     * @param request - DescribeRCDeploymentSetsRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeRCDeploymentSetsResponse
     */
    describeRCDeploymentSetsWithOptions(request: $_model.DescribeRCDeploymentSetsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeRCDeploymentSetsResponse>;
    /**
     * 描述RDS CUSTOM部署集
     *
     * @param request - DescribeRCDeploymentSetsRequest
     * @returns DescribeRCDeploymentSetsResponse
     */
    describeRCDeploymentSets(request: $_model.DescribeRCDeploymentSetsRequest): Promise<$_model.DescribeRCDeploymentSetsResponse>;
    /**
     * Queries the disk information of an RDS Custom instance.
     *
     * @param request - DescribeRCDisksRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeRCDisksResponse
     */
    describeRCDisksWithOptions(request: $_model.DescribeRCDisksRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeRCDisksResponse>;
    /**
     * Queries the disk information of an RDS Custom instance.
     *
     * @param request - DescribeRCDisksRequest
     * @returns DescribeRCDisksResponse
     */
    describeRCDisks(request: $_model.DescribeRCDisksRequest): Promise<$_model.DescribeRCDisksResponse>;
    /**
     * 查询RDS用户专属主机实例
     *
     * @param request - DescribeRCElasticScalingRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeRCElasticScalingResponse
     */
    describeRCElasticScalingWithOptions(request: $_model.DescribeRCElasticScalingRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeRCElasticScalingResponse>;
    /**
     * 查询RDS用户专属主机实例
     *
     * @param request - DescribeRCElasticScalingRequest
     * @returns DescribeRCElasticScalingResponse
     */
    describeRCElasticScaling(request: $_model.DescribeRCElasticScalingRequest): Promise<$_model.DescribeRCElasticScalingResponse>;
    /**
     * Queries a list of custom images available for creating RDS Custom instances.
     *
     * @param request - DescribeRCImageListRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeRCImageListResponse
     */
    describeRCImageListWithOptions(request: $_model.DescribeRCImageListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeRCImageListResponse>;
    /**
     * Queries a list of custom images available for creating RDS Custom instances.
     *
     * @param request - DescribeRCImageListRequest
     * @returns DescribeRCImageListResponse
     */
    describeRCImageList(request: $_model.DescribeRCImageListRequest): Promise<$_model.DescribeRCImageListResponse>;
    /**
     * Queries the details of a single RDS Custom instance.
     *
     * @param request - DescribeRCInstanceAttributeRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeRCInstanceAttributeResponse
     */
    describeRCInstanceAttributeWithOptions(request: $_model.DescribeRCInstanceAttributeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeRCInstanceAttributeResponse>;
    /**
     * Queries the details of a single RDS Custom instance.
     *
     * @param request - DescribeRCInstanceAttributeRequest
     * @returns DescribeRCInstanceAttributeResponse
     */
    describeRCInstanceAttribute(request: $_model.DescribeRCInstanceAttributeRequest): Promise<$_model.DescribeRCInstanceAttributeResponse>;
    /**
     * Queries the number of DDoS attacks on RDS Custom for SQL Server instances and monitors the security status of database instances in real time to evaluate potential security risks.
     *
     * @remarks
     * ### Supported engine
     * ApsaraDB RDS for SQL Server
     * ### Related feature documentation
     * [RDS Custom overview](https://help.aliyun.com/document_detail/2864363.html)
     * <props="china">
     * > A distributed denial-of-service (DDoS) attack is a common network security attack method. This type of attack primarily consumes network or network device resources with malicious traffic, causing websites or online services to become unavailable. For more information about the causes, common DDoS attack types, and methods to identify and mitigate DDoS attacks, see [DDoS attacks](https://www.aliyun.com/getting-started/what-is/what-is-ddos).
     *
     * @param request - DescribeRCInstanceDdosCountRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeRCInstanceDdosCountResponse
     */
    describeRCInstanceDdosCountWithOptions(request: $_model.DescribeRCInstanceDdosCountRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeRCInstanceDdosCountResponse>;
    /**
     * Queries the number of DDoS attacks on RDS Custom for SQL Server instances and monitors the security status of database instances in real time to evaluate potential security risks.
     *
     * @remarks
     * ### Supported engine
     * ApsaraDB RDS for SQL Server
     * ### Related feature documentation
     * [RDS Custom overview](https://help.aliyun.com/document_detail/2864363.html)
     * <props="china">
     * > A distributed denial-of-service (DDoS) attack is a common network security attack method. This type of attack primarily consumes network or network device resources with malicious traffic, causing websites or online services to become unavailable. For more information about the causes, common DDoS attack types, and methods to identify and mitigate DDoS attacks, see [DDoS attacks](https://www.aliyun.com/getting-started/what-is/what-is-ddos).
     *
     * @param request - DescribeRCInstanceDdosCountRequest
     * @returns DescribeRCInstanceDdosCountResponse
     */
    describeRCInstanceDdosCount(request: $_model.DescribeRCInstanceDdosCountRequest): Promise<$_model.DescribeRCInstanceDdosCountResponse>;
    /**
     * 查询指定实例系统事件信息
     *
     * @param request - DescribeRCInstanceHistoryEventsRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeRCInstanceHistoryEventsResponse
     */
    describeRCInstanceHistoryEventsWithOptions(request: $_model.DescribeRCInstanceHistoryEventsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeRCInstanceHistoryEventsResponse>;
    /**
     * 查询指定实例系统事件信息
     *
     * @param request - DescribeRCInstanceHistoryEventsRequest
     * @returns DescribeRCInstanceHistoryEventsResponse
     */
    describeRCInstanceHistoryEvents(request: $_model.DescribeRCInstanceHistoryEventsRequest): Promise<$_model.DescribeRCInstanceHistoryEventsResponse>;
    /**
     * Queries the DDoS mitigation information of an ApsaraDB RDS Custom for SQL Server instance and the details of the associated Anti-DDoS Origin instance.
     *
     * @remarks
     * ### Supported engine
     * ApsaraDB RDS for SQL Server
     * ### Related feature documentation
     * [Introduction to RDS Custom](https://help.aliyun.com/document_detail/2864363.html)
     * > If an [Anti-DDoS Origin](https://help.aliyun.com/document_detail/63643.html) instance protects one or more assets that are assigned public IP addresses, you can call this operation to query the DDoS mitigation information of ApsaraDB RDS Custom for SQL Server instances and the details of the associated Anti-DDoS Origin instances within the current Alibaba Cloud account. The information includes the basic Mitigation Threshold, traffic scrubbing threshold, DDoS mitigation status of the assets that are assigned public IP addresses, instance IDs, and instance mitigation status.
     *
     * @param request - DescribeRCInstanceIpAddressRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeRCInstanceIpAddressResponse
     */
    describeRCInstanceIpAddressWithOptions(request: $_model.DescribeRCInstanceIpAddressRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeRCInstanceIpAddressResponse>;
    /**
     * Queries the DDoS mitigation information of an ApsaraDB RDS Custom for SQL Server instance and the details of the associated Anti-DDoS Origin instance.
     *
     * @remarks
     * ### Supported engine
     * ApsaraDB RDS for SQL Server
     * ### Related feature documentation
     * [Introduction to RDS Custom](https://help.aliyun.com/document_detail/2864363.html)
     * > If an [Anti-DDoS Origin](https://help.aliyun.com/document_detail/63643.html) instance protects one or more assets that are assigned public IP addresses, you can call this operation to query the DDoS mitigation information of ApsaraDB RDS Custom for SQL Server instances and the details of the associated Anti-DDoS Origin instances within the current Alibaba Cloud account. The information includes the basic Mitigation Threshold, traffic scrubbing threshold, DDoS mitigation status of the assets that are assigned public IP addresses, instance IDs, and instance mitigation status.
     *
     * @param request - DescribeRCInstanceIpAddressRequest
     * @returns DescribeRCInstanceIpAddressResponse
     */
    describeRCInstanceIpAddress(request: $_model.DescribeRCInstanceIpAddressRequest): Promise<$_model.DescribeRCInstanceIpAddressResponse>;
    /**
     * 查询rds_custom实例规格族列表
     *
     * @param request - DescribeRCInstanceTypeFamiliesRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeRCInstanceTypeFamiliesResponse
     */
    describeRCInstanceTypeFamiliesWithOptions(request: $_model.DescribeRCInstanceTypeFamiliesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeRCInstanceTypeFamiliesResponse>;
    /**
     * 查询rds_custom实例规格族列表
     *
     * @param request - DescribeRCInstanceTypeFamiliesRequest
     * @returns DescribeRCInstanceTypeFamiliesResponse
     */
    describeRCInstanceTypeFamilies(request: $_model.DescribeRCInstanceTypeFamiliesRequest): Promise<$_model.DescribeRCInstanceTypeFamiliesResponse>;
    /**
     * 查询RDS Custom规格信息
     *
     * @param tmpReq - DescribeRCInstanceTypesRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeRCInstanceTypesResponse
     */
    describeRCInstanceTypesWithOptions(tmpReq: $_model.DescribeRCInstanceTypesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeRCInstanceTypesResponse>;
    /**
     * 查询RDS Custom规格信息
     *
     * @param request - DescribeRCInstanceTypesRequest
     * @returns DescribeRCInstanceTypesResponse
     */
    describeRCInstanceTypes(request: $_model.DescribeRCInstanceTypesRequest): Promise<$_model.DescribeRCInstanceTypesResponse>;
    /**
     * Queries the VNC logon URL of an RDS Custom instance.
     *
     * @remarks
     * The VNC logon URL is time-sensitive and valid for 15 seconds. If the URL is not used within 15 seconds after a successful API call, it automatically expires. You must call the API operation again to obtain a new URL.
     *
     * @param request - DescribeRCInstanceVncUrlRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeRCInstanceVncUrlResponse
     */
    describeRCInstanceVncUrlWithOptions(request: $_model.DescribeRCInstanceVncUrlRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeRCInstanceVncUrlResponse>;
    /**
     * Queries the VNC logon URL of an RDS Custom instance.
     *
     * @remarks
     * The VNC logon URL is time-sensitive and valid for 15 seconds. If the URL is not used within 15 seconds after a successful API call, it automatically expires. You must call the API operation again to obtain a new URL.
     *
     * @param request - DescribeRCInstanceVncUrlRequest
     * @returns DescribeRCInstanceVncUrlResponse
     */
    describeRCInstanceVncUrl(request: $_model.DescribeRCInstanceVncUrlRequest): Promise<$_model.DescribeRCInstanceVncUrlResponse>;
    /**
     * Queries a list of RDS Custom instances. If no instance ID is specified, this operation returns a list of all RDS Custom instances in the specified region.
     *
     * @param request - DescribeRCInstancesRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeRCInstancesResponse
     */
    describeRCInstancesWithOptions(request: $_model.DescribeRCInstancesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeRCInstancesResponse>;
    /**
     * Queries a list of RDS Custom instances. If no instance ID is specified, this operation returns a list of all RDS Custom instances in the specified region.
     *
     * @param request - DescribeRCInstancesRequest
     * @returns DescribeRCInstancesResponse
     */
    describeRCInstances(request: $_model.DescribeRCInstancesRequest): Promise<$_model.DescribeRCInstancesResponse>;
    /**
     * 查询云助手命令执行结果
     *
     * @param tmpReq - DescribeRCInvocationResultsRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeRCInvocationResultsResponse
     */
    describeRCInvocationResultsWithOptions(tmpReq: $_model.DescribeRCInvocationResultsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeRCInvocationResultsResponse>;
    /**
     * 查询云助手命令执行结果
     *
     * @param request - DescribeRCInvocationResultsRequest
     * @returns DescribeRCInvocationResultsResponse
     */
    describeRCInvocationResults(request: $_model.DescribeRCInvocationResultsRequest): Promise<$_model.DescribeRCInvocationResultsResponse>;
    /**
     * Queries the monitoring data of specified monitoring metrics for an RDS Custom instance.
     *
     * @param request - DescribeRCMetricListRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeRCMetricListResponse
     */
    describeRCMetricListWithOptions(request: $_model.DescribeRCMetricListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeRCMetricListResponse>;
    /**
     * Queries the monitoring data of specified monitoring metrics for an RDS Custom instance.
     *
     * @param request - DescribeRCMetricListRequest
     * @returns DescribeRCMetricListResponse
     */
    describeRCMetricList(request: $_model.DescribeRCMetricListRequest): Promise<$_model.DescribeRCMetricListResponse>;
    /**
     * DescribeRCNetworkInterfaces
     *
     * @param request - DescribeRCNetworkInterfacesRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeRCNetworkInterfacesResponse
     */
    describeRCNetworkInterfacesWithOptions(request: $_model.DescribeRCNetworkInterfacesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeRCNetworkInterfacesResponse>;
    /**
     * DescribeRCNetworkInterfaces
     *
     * @param request - DescribeRCNetworkInterfacesRequest
     * @returns DescribeRCNetworkInterfacesResponse
     */
    describeRCNetworkInterfaces(request: $_model.DescribeRCNetworkInterfacesRequest): Promise<$_model.DescribeRCNetworkInterfacesResponse>;
    /**
     * Queries the configuration information of an RDS Custom edge node pool.
     *
     * @param request - DescribeRCNodePoolRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeRCNodePoolResponse
     */
    describeRCNodePoolWithOptions(request: $_model.DescribeRCNodePoolRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeRCNodePoolResponse>;
    /**
     * Queries the configuration information of an RDS Custom edge node pool.
     *
     * @param request - DescribeRCNodePoolRequest
     * @returns DescribeRCNodePoolResponse
     */
    describeRCNodePool(request: $_model.DescribeRCNodePoolRequest): Promise<$_model.DescribeRCNodePoolResponse>;
    /**
     * 变更实例规格或系统盘类型之前，查询某一可用区下实例规格或系统盘的库存情况
     *
     * @param tmpReq - DescribeRCResourcesModificationRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeRCResourcesModificationResponse
     */
    describeRCResourcesModificationWithOptions(tmpReq: $_model.DescribeRCResourcesModificationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeRCResourcesModificationResponse>;
    /**
     * 变更实例规格或系统盘类型之前，查询某一可用区下实例规格或系统盘的库存情况
     *
     * @param request - DescribeRCResourcesModificationRequest
     * @returns DescribeRCResourcesModificationResponse
     */
    describeRCResourcesModification(request: $_model.DescribeRCResourcesModificationRequest): Promise<$_model.DescribeRCResourcesModificationResponse>;
    /**
     * 查询RC安全组
     *
     * @param request - DescribeRCSecurityGroupListRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeRCSecurityGroupListResponse
     */
    describeRCSecurityGroupListWithOptions(request: $_model.DescribeRCSecurityGroupListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeRCSecurityGroupListResponse>;
    /**
     * 查询RC安全组
     *
     * @param request - DescribeRCSecurityGroupListRequest
     * @returns DescribeRCSecurityGroupListResponse
     */
    describeRCSecurityGroupList(request: $_model.DescribeRCSecurityGroupListRequest): Promise<$_model.DescribeRCSecurityGroupListResponse>;
    /**
     * 描述RC安全组规则
     *
     * @param request - DescribeRCSecurityGroupPermissionRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeRCSecurityGroupPermissionResponse
     */
    describeRCSecurityGroupPermissionWithOptions(request: $_model.DescribeRCSecurityGroupPermissionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeRCSecurityGroupPermissionResponse>;
    /**
     * 描述RC安全组规则
     *
     * @param request - DescribeRCSecurityGroupPermissionRequest
     * @returns DescribeRCSecurityGroupPermissionResponse
     */
    describeRCSecurityGroupPermission(request: $_model.DescribeRCSecurityGroupPermissionRequest): Promise<$_model.DescribeRCSecurityGroupPermissionResponse>;
    /**
     * Queries the details of a list of snapshots, such as the snapshot status, the remaining time for snapshot creation, and the retention period of automatic snapshots.
     *
     * @param request - DescribeRCSnapshotsRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeRCSnapshotsResponse
     */
    describeRCSnapshotsWithOptions(request: $_model.DescribeRCSnapshotsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeRCSnapshotsResponse>;
    /**
     * Queries the details of a list of snapshots, such as the snapshot status, the remaining time for snapshot creation, and the retention period of automatic snapshots.
     *
     * @param request - DescribeRCSnapshotsRequest
     * @returns DescribeRCSnapshotsResponse
     */
    describeRCSnapshots(request: $_model.DescribeRCSnapshotsRequest): Promise<$_model.DescribeRCSnapshotsResponse>;
    /**
     * 描述vCluster
     *
     * @param request - DescribeRCVClusterRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeRCVClusterResponse
     */
    describeRCVClusterWithOptions(request: $_model.DescribeRCVClusterRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeRCVClusterResponse>;
    /**
     * 描述vCluster
     *
     * @param request - DescribeRCVClusterRequest
     * @returns DescribeRCVClusterResponse
     */
    describeRCVCluster(request: $_model.DescribeRCVClusterRequest): Promise<$_model.DescribeRCVClusterResponse>;
    /**
     * Retrieves the notification settings for instance resources. This API operation is deprecated: it can still be called, but is no longer maintained.
     *
     * @remarks
     * This API operation is deprecated: it can still be called normally, but Alibaba Cloud no longer maintains it.
     *
     * @deprecated OpenAPI DescribeRdsResourceSettings is deprecated
     *
     * @param request - DescribeRdsResourceSettingsRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeRdsResourceSettingsResponse
     */
    describeRdsResourceSettingsWithOptions(request: $_model.DescribeRdsResourceSettingsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeRdsResourceSettingsResponse>;
    /**
     * Retrieves the notification settings for instance resources. This API operation is deprecated: it can still be called, but is no longer maintained.
     *
     * @remarks
     * This API operation is deprecated: it can still be called normally, but Alibaba Cloud no longer maintains it.
     *
     * @deprecated OpenAPI DescribeRdsResourceSettings is deprecated
     *
     * @param request - DescribeRdsResourceSettingsRequest
     * @returns DescribeRdsResourceSettingsResponse
     */
    describeRdsResourceSettings(request: $_model.DescribeRdsResourceSettingsRequest): Promise<$_model.DescribeRdsResourceSettingsResponse>;
    /**
     * Queries the latency information of an ApsaraDB RDS read-only instance.
     *
     * @remarks
     * ### Applicable engines
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for PostgreSQL
     *
     * @param request - DescribeReadDBInstanceDelayRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeReadDBInstanceDelayResponse
     */
    describeReadDBInstanceDelayWithOptions(request: $_model.DescribeReadDBInstanceDelayRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeReadDBInstanceDelayResponse>;
    /**
     * Queries the latency information of an ApsaraDB RDS read-only instance.
     *
     * @remarks
     * ### Applicable engines
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for PostgreSQL
     *
     * @param request - DescribeReadDBInstanceDelayRequest
     * @returns DescribeReadDBInstanceDelayResponse
     */
    describeReadDBInstanceDelay(request: $_model.DescribeReadDBInstanceDelayRequest): Promise<$_model.DescribeReadDBInstanceDelayResponse>;
    /**
     * Retrieves the list of available regions.
     *
     * @remarks
     * ### Supported engines
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for PostgreSQL
     * - ApsaraDB RDS for SQL Server
     * - ApsaraDB RDS for MariaDB
     *
     * @param request - DescribeRegionInfosRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeRegionInfosResponse
     */
    describeRegionInfosWithOptions(request: $_model.DescribeRegionInfosRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeRegionInfosResponse>;
    /**
     * Retrieves the list of available regions.
     *
     * @remarks
     * ### Supported engines
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for PostgreSQL
     * - ApsaraDB RDS for SQL Server
     * - ApsaraDB RDS for MariaDB
     *
     * @param request - DescribeRegionInfosRequest
     * @returns DescribeRegionInfosResponse
     */
    describeRegionInfos(request: $_model.DescribeRegionInfosRequest): Promise<$_model.DescribeRegionInfosResponse>;
    /**
     * Queries the details of all ApsaraDB RDS regions and zones, including decommissioned regions. Use with caution.
     *
     * @remarks
     * ### Supported engines
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for PostgreSQL
     * - ApsaraDB RDS for SQL Server
     * - ApsaraDB RDS for MariaDB
     *
     * @param request - DescribeRegionsRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeRegionsResponse
     */
    describeRegionsWithOptions(request: $_model.DescribeRegionsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeRegionsResponse>;
    /**
     * Queries the details of all ApsaraDB RDS regions and zones, including decommissioned regions. Use with caution.
     *
     * @remarks
     * ### Supported engines
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for PostgreSQL
     * - ApsaraDB RDS for SQL Server
     * - ApsaraDB RDS for MariaDB
     *
     * @param request - DescribeRegionsRequest
     * @returns DescribeRegionsResponse
     */
    describeRegions(request: $_model.DescribeRegionsRequest): Promise<$_model.DescribeRegionsResponse>;
    /**
     * Queries the renewal fee for a subscription ApsaraDB RDS instance.
     *
     * @remarks
     * ### Applicable engines
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for PostgreSQL
     * - ApsaraDB RDS for SQL Server
     * - ApsaraDB RDS for MariaDB
     *
     * @param request - DescribeRenewalPriceRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeRenewalPriceResponse
     */
    describeRenewalPriceWithOptions(request: $_model.DescribeRenewalPriceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeRenewalPriceResponse>;
    /**
     * Queries the renewal fee for a subscription ApsaraDB RDS instance.
     *
     * @remarks
     * ### Applicable engines
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for PostgreSQL
     * - ApsaraDB RDS for SQL Server
     * - ApsaraDB RDS for MariaDB
     *
     * @param request - DescribeRenewalPriceRequest
     * @returns DescribeRenewalPriceResponse
     */
    describeRenewalPrice(request: $_model.DescribeRenewalPriceRequest): Promise<$_model.DescribeRenewalPriceResponse>;
    /**
     * Queries the operation logs of the data synchronization link for a specified ApsaraDB RDS instance.
     *
     * @remarks
     * ### Supported engines
     * - RDS PostgreSQL
     *
     * @param request - DescribeReplicationLinkLogsRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeReplicationLinkLogsResponse
     */
    describeReplicationLinkLogsWithOptions(request: $_model.DescribeReplicationLinkLogsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeReplicationLinkLogsResponse>;
    /**
     * Queries the operation logs of the data synchronization link for a specified ApsaraDB RDS instance.
     *
     * @remarks
     * ### Supported engines
     * - RDS PostgreSQL
     *
     * @param request - DescribeReplicationLinkLogsRequest
     * @returns DescribeReplicationLinkLogsResponse
     */
    describeReplicationLinkLogs(request: $_model.DescribeReplicationLinkLogsRequest): Promise<$_model.DescribeReplicationLinkLogsResponse>;
    /**
     * Retrieves the resource details on the overview page.
     *
     * @param request - DescribeResourceDetailsRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeResourceDetailsResponse
     */
    describeResourceDetailsWithOptions(request: $_model.DescribeResourceDetailsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeResourceDetailsResponse>;
    /**
     * Retrieves the resource details on the overview page.
     *
     * @param request - DescribeResourceDetailsRequest
     * @returns DescribeResourceDetailsResponse
     */
    describeResourceDetails(request: $_model.DescribeResourceDetailsRequest): Promise<$_model.DescribeResourceDetailsResponse>;
    /**
     * Queries the storage usage information of an ApsaraDB RDS instance.
     *
     * @remarks
     * ### Applicable engines
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for PostgreSQL
     * - ApsaraDB RDS for SQL Server
     * - ApsaraDB RDS for MariaDB
     *
     * @param request - DescribeResourceUsageRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeResourceUsageResponse
     */
    describeResourceUsageWithOptions(request: $_model.DescribeResourceUsageRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeResourceUsageResponse>;
    /**
     * Queries the storage usage information of an ApsaraDB RDS instance.
     *
     * @remarks
     * ### Applicable engines
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for PostgreSQL
     * - ApsaraDB RDS for SQL Server
     * - ApsaraDB RDS for MariaDB
     *
     * @param request - DescribeResourceUsageRequest
     * @returns DescribeResourceUsageResponse
     */
    describeResourceUsage(request: $_model.DescribeResourceUsageRequest): Promise<$_model.DescribeResourceUsageResponse>;
    /**
     * *[Deprecated]** This operation can still be called but is no longer maintained. Queries whether the SQL Explorer (SQL Audit) feature is enabled for an ApsaraDB RDS instance.
     *
     * @remarks
     * This operation is deprecated. You can still call this operation, but Alibaba Cloud no longer maintains it. Use the [DescribeSqlLogConfig](https://help.aliyun.com/document_detail/2778837.html) operation instead.
     *
     * @param request - DescribeSQLCollectorPolicyRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeSQLCollectorPolicyResponse
     */
    describeSQLCollectorPolicyWithOptions(request: $_model.DescribeSQLCollectorPolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSQLCollectorPolicyResponse>;
    /**
     * *[Deprecated]** This operation can still be called but is no longer maintained. Queries whether the SQL Explorer (SQL Audit) feature is enabled for an ApsaraDB RDS instance.
     *
     * @remarks
     * This operation is deprecated. You can still call this operation, but Alibaba Cloud no longer maintains it. Use the [DescribeSqlLogConfig](https://help.aliyun.com/document_detail/2778837.html) operation instead.
     *
     * @param request - DescribeSQLCollectorPolicyRequest
     * @returns DescribeSQLCollectorPolicyResponse
     */
    describeSQLCollectorPolicy(request: $_model.DescribeSQLCollectorPolicyRequest): Promise<$_model.DescribeSQLCollectorPolicyResponse>;
    /**
     * Queries the SQL Explorer log retention period for an ApsaraDB RDS instance. This operation is deprecated and no longer maintained, but can still be called.
     *
     * @remarks
     * This operation is deprecated. It can still be called normally, but Alibaba Cloud no longer maintains it. Use the [DescribeSqlLogConfig](https://help.aliyun.com/document_detail/2778837.html) operation instead.
     *
     * @param request - DescribeSQLCollectorRetentionRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeSQLCollectorRetentionResponse
     */
    describeSQLCollectorRetentionWithOptions(request: $_model.DescribeSQLCollectorRetentionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSQLCollectorRetentionResponse>;
    /**
     * Queries the SQL Explorer log retention period for an ApsaraDB RDS instance. This operation is deprecated and no longer maintained, but can still be called.
     *
     * @remarks
     * This operation is deprecated. It can still be called normally, but Alibaba Cloud no longer maintains it. Use the [DescribeSqlLogConfig](https://help.aliyun.com/document_detail/2778837.html) operation instead.
     *
     * @param request - DescribeSQLCollectorRetentionRequest
     * @returns DescribeSQLCollectorRetentionResponse
     */
    describeSQLCollectorRetention(request: $_model.DescribeSQLCollectorRetentionRequest): Promise<$_model.DescribeSQLCollectorRetentionResponse>;
    /**
     * Queries the list of exported files for SQL Explorer (SQL Audit). This operation does not support querying SQL Explorer log files that are manually exported from the console. It only supports querying SQL Explorer files generated by calling the DescribeSQLLogRecords operation with the Form request parameter set to File.
     *
     * @remarks
     * ### Applicable engines
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for PostgreSQL
     * - ApsaraDB RDS for SQL Server
     *   > Only SQL Server 2008 R2 is supported.
     * ### Precautions
     * - This operation does not support querying the SQL Explorer list for the SQL Explorer Trial Edition of MySQL instances.
     * - This operation does not support querying SQL Explorer log files that are manually exported from the console. It only supports querying SQL Explorer files generated by calling the [DescribeSQLLogRecords](https://help.aliyun.com/document_detail/610533.html) operation with the **Form** request parameter set to **File**.
     * - Files exported by using this operation are retained for only 2 days.
     *   > If DAS Enterprise Edition V2 or V3 is activated and its SQL Explorer and Audit feature is used, the exported files are retained for 7 days. You can call the [DescribeSqlLogConfig](https://help.aliyun.com/document_detail/2778837.html) operation to query the activated Enterprise Edition information.
     *
     * @param request - DescribeSQLLogFilesRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeSQLLogFilesResponse
     */
    describeSQLLogFilesWithOptions(request: $_model.DescribeSQLLogFilesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSQLLogFilesResponse>;
    /**
     * Queries the list of exported files for SQL Explorer (SQL Audit). This operation does not support querying SQL Explorer log files that are manually exported from the console. It only supports querying SQL Explorer files generated by calling the DescribeSQLLogRecords operation with the Form request parameter set to File.
     *
     * @remarks
     * ### Applicable engines
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for PostgreSQL
     * - ApsaraDB RDS for SQL Server
     *   > Only SQL Server 2008 R2 is supported.
     * ### Precautions
     * - This operation does not support querying the SQL Explorer list for the SQL Explorer Trial Edition of MySQL instances.
     * - This operation does not support querying SQL Explorer log files that are manually exported from the console. It only supports querying SQL Explorer files generated by calling the [DescribeSQLLogRecords](https://help.aliyun.com/document_detail/610533.html) operation with the **Form** request parameter set to **File**.
     * - Files exported by using this operation are retained for only 2 days.
     *   > If DAS Enterprise Edition V2 or V3 is activated and its SQL Explorer and Audit feature is used, the exported files are retained for 7 days. You can call the [DescribeSqlLogConfig](https://help.aliyun.com/document_detail/2778837.html) operation to query the activated Enterprise Edition information.
     *
     * @param request - DescribeSQLLogFilesRequest
     * @returns DescribeSQLLogFilesResponse
     */
    describeSQLLogFiles(request: $_model.DescribeSQLLogFilesRequest): Promise<$_model.DescribeSQLLogFilesResponse>;
    /**
     * *[Deprecated]** Queries the SQL Explorer (SQL Audit) logs of an ApsaraDB RDS instance. This API operation is no longer maintained but remains callable.
     *
     * @remarks
     * This API operation is deprecated. It can still be invoked normally, but Alibaba Cloud no longer provides maintenance for it. Use the [GetDasSQLLogHotData](https://help.aliyun.com/document_detail/2360999.html) operation instead.
     * ### Precautions
     * - Each user (including the Alibaba Cloud account and Resource Access Management (RAM) users) can invoke this API operation up to 1,000 times per minute, regardless of whether the invocation succeeded or failed.
     * - This API operation does not support querying SQL Explorer logs for the SQL Explorer trial edition of ApsaraDB RDS for MySQL instances.
     * - When this API operation generates an audit file (the **Form** request parameter is set to **File**), it records up to 1 million log entries and does not support filtering logs by keyword.
     *
     * @param request - DescribeSQLLogRecordsRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeSQLLogRecordsResponse
     */
    describeSQLLogRecordsWithOptions(request: $_model.DescribeSQLLogRecordsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSQLLogRecordsResponse>;
    /**
     * *[Deprecated]** Queries the SQL Explorer (SQL Audit) logs of an ApsaraDB RDS instance. This API operation is no longer maintained but remains callable.
     *
     * @remarks
     * This API operation is deprecated. It can still be invoked normally, but Alibaba Cloud no longer provides maintenance for it. Use the [GetDasSQLLogHotData](https://help.aliyun.com/document_detail/2360999.html) operation instead.
     * ### Precautions
     * - Each user (including the Alibaba Cloud account and Resource Access Management (RAM) users) can invoke this API operation up to 1,000 times per minute, regardless of whether the invocation succeeded or failed.
     * - This API operation does not support querying SQL Explorer logs for the SQL Explorer trial edition of ApsaraDB RDS for MySQL instances.
     * - When this API operation generates an audit file (the **Form** request parameter is set to **File**), it records up to 1 million log entries and does not support filtering logs by keyword.
     *
     * @param request - DescribeSQLLogRecordsRequest
     * @returns DescribeSQLLogRecordsResponse
     */
    describeSQLLogRecords(request: $_model.DescribeSQLLogRecordsRequest): Promise<$_model.DescribeSQLLogRecordsResponse>;
    /**
     * Queries the list of SQL log running reports.
     *
     * @remarks
     * ### Applicable engines
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for PostgreSQL
     * - ApsaraDB RDS for SQL Server
     * - ApsaraDB RDS for MariaDB
     *
     * @param request - DescribeSQLLogReportListRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeSQLLogReportListResponse
     */
    describeSQLLogReportListWithOptions(request: $_model.DescribeSQLLogReportListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSQLLogReportListResponse>;
    /**
     * Queries the list of SQL log running reports.
     *
     * @remarks
     * ### Applicable engines
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for PostgreSQL
     * - ApsaraDB RDS for SQL Server
     * - ApsaraDB RDS for MariaDB
     *
     * @param request - DescribeSQLLogReportListRequest
     * @returns DescribeSQLLogReportListResponse
     */
    describeSQLLogReportList(request: $_model.DescribeSQLLogReportListRequest): Promise<$_model.DescribeSQLLogReportListResponse>;
    /**
     * Queries the target versions to which an ApsaraDB RDS for SQL Server instance or a specified SQL Server version can be upgraded.
     *
     * @remarks
     * Supported engine:
     * * SQL Server (only SQL Server 2016 and earlier versions are supported)
     *
     * @param request - DescribeSQLServerUpgradeVersionsRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeSQLServerUpgradeVersionsResponse
     */
    describeSQLServerUpgradeVersionsWithOptions(request: $_model.DescribeSQLServerUpgradeVersionsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSQLServerUpgradeVersionsResponse>;
    /**
     * Queries the target versions to which an ApsaraDB RDS for SQL Server instance or a specified SQL Server version can be upgraded.
     *
     * @remarks
     * Supported engine:
     * * SQL Server (only SQL Server 2016 and earlier versions are supported)
     *
     * @param request - DescribeSQLServerUpgradeVersionsRequest
     * @returns DescribeSQLServerUpgradeVersionsResponse
     */
    describeSQLServerUpgradeVersions(request: $_model.DescribeSQLServerUpgradeVersionsRequest): Promise<$_model.DescribeSQLServerUpgradeVersionsResponse>;
    /**
     * Queries Data API user credentials.
     *
     * @remarks
     * ### Supported engines
     * - RDS MySQL
     *
     * @param request - DescribeSecretsRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeSecretsResponse
     */
    describeSecretsWithOptions(request: $_model.DescribeSecretsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSecretsResponse>;
    /**
     * Queries Data API user credentials.
     *
     * @remarks
     * ### Supported engines
     * - RDS MySQL
     *
     * @param request - DescribeSecretsRequest
     * @returns DescribeSecretsResponse
     */
    describeSecrets(request: $_model.DescribeSecretsRequest): Promise<$_model.DescribeSecretsResponse>;
    /**
     * Queries the association between a specified ApsaraDB RDS instance and ECS security groups.
     *
     * @remarks
     * ### Supported engines
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for PostgreSQL
     * - ApsaraDB RDS for SQL Server
     * ### Related documentation
     * >Notice: Before you call this operation, read the following documentation and make sure that you fully understand the prerequisites and impacts of this operation.
     * - [Configure a security group for an ApsaraDB RDS for MySQL instance](https://help.aliyun.com/document_detail/201042.html)
     * - [Configure a security group for an ApsaraDB RDS for PostgreSQL instance](https://help.aliyun.com/document_detail/206310.html)
     * - [Configure a security group for an ApsaraDB RDS for SQL Server instance](https://help.aliyun.com/document_detail/2392322.html)
     *
     * @param request - DescribeSecurityGroupConfigurationRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeSecurityGroupConfigurationResponse
     */
    describeSecurityGroupConfigurationWithOptions(request: $_model.DescribeSecurityGroupConfigurationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSecurityGroupConfigurationResponse>;
    /**
     * Queries the association between a specified ApsaraDB RDS instance and ECS security groups.
     *
     * @remarks
     * ### Supported engines
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for PostgreSQL
     * - ApsaraDB RDS for SQL Server
     * ### Related documentation
     * >Notice: Before you call this operation, read the following documentation and make sure that you fully understand the prerequisites and impacts of this operation.
     * - [Configure a security group for an ApsaraDB RDS for MySQL instance](https://help.aliyun.com/document_detail/201042.html)
     * - [Configure a security group for an ApsaraDB RDS for PostgreSQL instance](https://help.aliyun.com/document_detail/206310.html)
     * - [Configure a security group for an ApsaraDB RDS for SQL Server instance](https://help.aliyun.com/document_detail/2392322.html)
     *
     * @param request - DescribeSecurityGroupConfigurationRequest
     * @returns DescribeSecurityGroupConfigurationResponse
     */
    describeSecurityGroupConfiguration(request: $_model.DescribeSecurityGroupConfigurationRequest): Promise<$_model.DescribeSecurityGroupConfigurationResponse>;
    /**
     * Queries all replication slots of an instance.
     *
     * @remarks
     * ### Supported engines
     * - ApsaraDB RDS for PostgreSQL
     *
     * @param request - DescribeSlotsRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeSlotsResponse
     */
    describeSlotsWithOptions(request: $_model.DescribeSlotsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSlotsResponse>;
    /**
     * Queries all replication slots of an instance.
     *
     * @remarks
     * ### Supported engines
     * - ApsaraDB RDS for PostgreSQL
     *
     * @param request - DescribeSlotsRequest
     * @returns DescribeSlotsResponse
     */
    describeSlots(request: $_model.DescribeSlotsRequest): Promise<$_model.DescribeSlotsResponse>;
    /**
     * Queries the slow query log details of an instance.
     *
     * @remarks
     * ### Supported engines
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for PostgreSQL
     * - ApsaraDB RDS for SQL Server
     * - ApsaraDB RDS for MariaDB
     * ### Precautions
     * - The response parameters of this API operation are updated every minute.
     * - There may be a delay when you call this API operation to retrieve data. Wait for the response.
     * - Starting September 1, 2024, due to the optimization of the SQL template algorithm, the value of the SQLHash field will change when you call this operation. For more information, see [Notice: Optimization of the SQL template algorithm for slow SQL queries](https://help.aliyun.com/document_detail/2845725.html).
     *
     * @param request - DescribeSlowLogRecordsRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeSlowLogRecordsResponse
     */
    describeSlowLogRecordsWithOptions(request: $_model.DescribeSlowLogRecordsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSlowLogRecordsResponse>;
    /**
     * Queries the slow query log details of an instance.
     *
     * @remarks
     * ### Supported engines
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for PostgreSQL
     * - ApsaraDB RDS for SQL Server
     * - ApsaraDB RDS for MariaDB
     * ### Precautions
     * - The response parameters of this API operation are updated every minute.
     * - There may be a delay when you call this API operation to retrieve data. Wait for the response.
     * - Starting September 1, 2024, due to the optimization of the SQL template algorithm, the value of the SQLHash field will change when you call this operation. For more information, see [Notice: Optimization of the SQL template algorithm for slow SQL queries](https://help.aliyun.com/document_detail/2845725.html).
     *
     * @param request - DescribeSlowLogRecordsRequest
     * @returns DescribeSlowLogRecordsResponse
     */
    describeSlowLogRecords(request: $_model.DescribeSlowLogRecordsRequest): Promise<$_model.DescribeSlowLogRecordsResponse>;
    /**
     * Queries slow query log statistics.
     *
     * @remarks
     * ### Supported engines
     * - ApsaraDB RDS for MySQL
     *   > MySQL 5.7 Basic Edition is not supported.
     * - ApsaraDB RDS for SQL Server
     *   > Only SQL Server 2008 R2 is supported.
     * - ApsaraDB RDS for MariaDB
     * ### Precautions
     * - Slow query log statistics are not collected in real time. A delay of 6 to 8 hours may occur.
     * - If the response is empty, check whether the StartTime and EndTime parameters meet the UTC format requirements. If they do, no slow query logs exist within the specified time range.
     * - Starting September 1, 2024, the value of the **SQLHash** field will change when you call this operation due to the optimization of the SQL template algorithm. For more information, see [Notice: Optimization of the SQL template algorithm](https://help.aliyun.com/document_detail/2845725.html).
     *
     * @param request - DescribeSlowLogsRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeSlowLogsResponse
     */
    describeSlowLogsWithOptions(request: $_model.DescribeSlowLogsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSlowLogsResponse>;
    /**
     * Queries slow query log statistics.
     *
     * @remarks
     * ### Supported engines
     * - ApsaraDB RDS for MySQL
     *   > MySQL 5.7 Basic Edition is not supported.
     * - ApsaraDB RDS for SQL Server
     *   > Only SQL Server 2008 R2 is supported.
     * - ApsaraDB RDS for MariaDB
     * ### Precautions
     * - Slow query log statistics are not collected in real time. A delay of 6 to 8 hours may occur.
     * - If the response is empty, check whether the StartTime and EndTime parameters meet the UTC format requirements. If they do, no slow query logs exist within the specified time range.
     * - Starting September 1, 2024, the value of the **SQLHash** field will change when you call this operation due to the optimization of the SQL template algorithm. For more information, see [Notice: Optimization of the SQL template algorithm](https://help.aliyun.com/document_detail/2845725.html).
     *
     * @param request - DescribeSlowLogsRequest
     * @returns DescribeSlowLogsResponse
     */
    describeSlowLogs(request: $_model.DescribeSlowLogsRequest): Promise<$_model.DescribeSlowLogsResponse>;
    /**
     * Queries whether an ApsaraDB RDS for SQL Server instance supports online storage expansion.
     *
     * @remarks
     * ### Supported engines
     * ApsaraDB RDS for SQL Server.
     *
     * @param request - DescribeSupportOnlineResizeDiskRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeSupportOnlineResizeDiskResponse
     */
    describeSupportOnlineResizeDiskWithOptions(request: $_model.DescribeSupportOnlineResizeDiskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSupportOnlineResizeDiskResponse>;
    /**
     * Queries whether an ApsaraDB RDS for SQL Server instance supports online storage expansion.
     *
     * @remarks
     * ### Supported engines
     * ApsaraDB RDS for SQL Server.
     *
     * @param request - DescribeSupportOnlineResizeDiskRequest
     * @returns DescribeSupportOnlineResizeDiskResponse
     */
    describeSupportOnlineResizeDisk(request: $_model.DescribeSupportOnlineResizeDiskRequest): Promise<$_model.DescribeSupportOnlineResizeDiskResponse>;
    /**
     * Queries the tag information of ApsaraDB RDS instances.
     *
     * @remarks
     * ### Supported engines
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for PostgreSQL
     * - ApsaraDB RDS for SQL Server
     * - ApsaraDB RDS for MariaDB
     * ### Precautions
     * * If a specific instance ID is specified, all tags of the instance are queried, and other filter conditions become invalid.
     * * If only a tag key (TagKey) is specified without a tag value (TagValue) when querying tags, all results that match the tag key are returned. If both a tag key and a tag value are specified, only results that match both conditions are returned.
     *
     * @param request - DescribeTagsRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeTagsResponse
     */
    describeTagsWithOptions(request: $_model.DescribeTagsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeTagsResponse>;
    /**
     * Queries the tag information of ApsaraDB RDS instances.
     *
     * @remarks
     * ### Supported engines
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for PostgreSQL
     * - ApsaraDB RDS for SQL Server
     * - ApsaraDB RDS for MariaDB
     * ### Precautions
     * * If a specific instance ID is specified, all tags of the instance are queried, and other filter conditions become invalid.
     * * If only a tag key (TagKey) is specified without a tag value (TagValue) when querying tags, all results that match the tag key are returned. If both a tag key and a tag value are specified, only results that match both conditions are returned.
     *
     * @param request - DescribeTagsRequest
     * @returns DescribeTagsResponse
     */
    describeTags(request: $_model.DescribeTagsRequest): Promise<$_model.DescribeTagsResponse>;
    /**
     * Queries the pending and running tasks of an ApsaraDB RDS for SQL Server instance.
     *
     * @remarks
     * ### Supported database engines
     * ApsaraDB RDS for SQL Server
     * > For ApsaraDB RDS for MySQL and ApsaraDB RDS for PostgreSQL instances, use [DescribeHistoryTasks](https://help.aliyun.com/document_detail/2627863.html).
     *
     * @param request - DescribeTasksRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeTasksResponse
     */
    describeTasksWithOptions(request: $_model.DescribeTasksRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeTasksResponse>;
    /**
     * Queries the pending and running tasks of an ApsaraDB RDS for SQL Server instance.
     *
     * @remarks
     * ### Supported database engines
     * ApsaraDB RDS for SQL Server
     * > For ApsaraDB RDS for MySQL and ApsaraDB RDS for PostgreSQL instances, use [DescribeHistoryTasks](https://help.aliyun.com/document_detail/2627863.html).
     *
     * @param request - DescribeTasksRequest
     * @returns DescribeTasksResponse
     */
    describeTasks(request: $_model.DescribeTasksRequest): Promise<$_model.DescribeTasksResponse>;
    /**
     * Queries the check reports for major engine version upgrades of ApsaraDB RDS for MySQL and ApsaraDB RDS for PostgreSQL.
     *
     * @remarks
     * ### Applicable engines
     * ApsaraDB RDS for MySQL
     * ApsaraDB RDS for PostgreSQL
     * ### Related documentation
     * >Notice: Before you call this operation, carefully read the feature documentation to ensure that you fully understand the prerequisites and the impacts of the operation.</notice>
     * - [Check reports major engine version upgrades of ApsaraDB RDS for MySQL](https://help.aliyun.com/document_detail/2794383.html)
     * - [Upgrade the major engine version of an ApsaraDB RDS for PostgreSQL instance](https://help.aliyun.com/document_detail/203309.html)
     * - [Interpret check reports major engine version upgrades of ApsaraDB RDS for PostgreSQL](https://help.aliyun.com/document_detail/218391.html)
     *
     * @param request - DescribeUpgradeMajorVersionPrecheckTaskRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeUpgradeMajorVersionPrecheckTaskResponse
     */
    describeUpgradeMajorVersionPrecheckTaskWithOptions(request: $_model.DescribeUpgradeMajorVersionPrecheckTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeUpgradeMajorVersionPrecheckTaskResponse>;
    /**
     * Queries the check reports for major engine version upgrades of ApsaraDB RDS for MySQL and ApsaraDB RDS for PostgreSQL.
     *
     * @remarks
     * ### Applicable engines
     * ApsaraDB RDS for MySQL
     * ApsaraDB RDS for PostgreSQL
     * ### Related documentation
     * >Notice: Before you call this operation, carefully read the feature documentation to ensure that you fully understand the prerequisites and the impacts of the operation.</notice>
     * - [Check reports major engine version upgrades of ApsaraDB RDS for MySQL](https://help.aliyun.com/document_detail/2794383.html)
     * - [Upgrade the major engine version of an ApsaraDB RDS for PostgreSQL instance](https://help.aliyun.com/document_detail/203309.html)
     * - [Interpret check reports major engine version upgrades of ApsaraDB RDS for PostgreSQL](https://help.aliyun.com/document_detail/218391.html)
     *
     * @param request - DescribeUpgradeMajorVersionPrecheckTaskRequest
     * @returns DescribeUpgradeMajorVersionPrecheckTaskResponse
     */
    describeUpgradeMajorVersionPrecheckTask(request: $_model.DescribeUpgradeMajorVersionPrecheckTaskRequest): Promise<$_model.DescribeUpgradeMajorVersionPrecheckTaskResponse>;
    /**
     * Queries the historical major engine version upgrade tasks for an ApsaraDB RDS for PostgreSQL instance.
     *
     * @remarks
     * ### Applicable engine
     * ApsaraDB RDS for PostgreSQL.
     *
     * @param request - DescribeUpgradeMajorVersionTasksRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeUpgradeMajorVersionTasksResponse
     */
    describeUpgradeMajorVersionTasksWithOptions(request: $_model.DescribeUpgradeMajorVersionTasksRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeUpgradeMajorVersionTasksResponse>;
    /**
     * Queries the historical major engine version upgrade tasks for an ApsaraDB RDS for PostgreSQL instance.
     *
     * @remarks
     * ### Applicable engine
     * ApsaraDB RDS for PostgreSQL.
     *
     * @param request - DescribeUpgradeMajorVersionTasksRequest
     * @returns DescribeUpgradeMajorVersionTasksResponse
     */
    describeUpgradeMajorVersionTasks(request: $_model.DescribeUpgradeMajorVersionTasksRequest): Promise<$_model.DescribeUpgradeMajorVersionTasksResponse>;
    /**
     * 查询交换机列表
     *
     * @param request - DescribeVSwitchListRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeVSwitchListResponse
     */
    describeVSwitchListWithOptions(request: $_model.DescribeVSwitchListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeVSwitchListResponse>;
    /**
     * 查询交换机列表
     *
     * @param request - DescribeVSwitchListRequest
     * @returns DescribeVSwitchListResponse
     */
    describeVSwitchList(request: $_model.DescribeVSwitchListRequest): Promise<$_model.DescribeVSwitchListResponse>;
    /**
     * Queries the details of vSwitches in a virtual private cloud (VPC).
     *
     * @remarks
     * ### Applicable engines
     * - RDS MySQL
     * - RDS PostgreSQL
     * - RDS SQL Server
     * - RDS MariaDB
     *
     * @param request - DescribeVSwitchesRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeVSwitchesResponse
     */
    describeVSwitchesWithOptions(request: $_model.DescribeVSwitchesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeVSwitchesResponse>;
    /**
     * Queries the details of vSwitches in a virtual private cloud (VPC).
     *
     * @remarks
     * ### Applicable engines
     * - RDS MySQL
     * - RDS PostgreSQL
     * - RDS SQL Server
     * - RDS MariaDB
     *
     * @param request - DescribeVSwitchesRequest
     * @returns DescribeVSwitchesResponse
     */
    describeVSwitches(request: $_model.DescribeVSwitchesRequest): Promise<$_model.DescribeVSwitchesResponse>;
    /**
     * Queries a list of virtual private clouds (VPCs) in an Alibaba Cloud account.
     *
     * @param request - DescribeVpcsRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeVpcsResponse
     */
    describeVpcsWithOptions(request: $_model.DescribeVpcsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeVpcsResponse>;
    /**
     * Queries a list of virtual private clouds (VPCs) in an Alibaba Cloud account.
     *
     * @param request - DescribeVpcsRequest
     * @returns DescribeVpcsResponse
     */
    describeVpcs(request: $_model.DescribeVpcsRequest): Promise<$_model.DescribeVpcsResponse>;
    /**
     * Retrieves the information about a specified whitelist template.
     *
     * @remarks
     * ### Supported engines
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for PostgreSQL
     * - ApsaraDB RDS for SQL Server
     *
     * @param request - DescribeWhitelistTemplateRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeWhitelistTemplateResponse
     */
    describeWhitelistTemplateWithOptions(request: $_model.DescribeWhitelistTemplateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeWhitelistTemplateResponse>;
    /**
     * Retrieves the information about a specified whitelist template.
     *
     * @remarks
     * ### Supported engines
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for PostgreSQL
     * - ApsaraDB RDS for SQL Server
     *
     * @param request - DescribeWhitelistTemplateRequest
     * @returns DescribeWhitelistTemplateResponse
     */
    describeWhitelistTemplate(request: $_model.DescribeWhitelistTemplateRequest): Promise<$_model.DescribeWhitelistTemplateResponse>;
    /**
     * Queries the instances associated with a whitelist template.
     *
     * @remarks
     * ### Supported engines
     * - RDS MySQL
     * - RDS PostgreSQL
     * - RDS SQL Server
     *
     * @param request - DescribeWhitelistTemplateLinkedInstanceRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeWhitelistTemplateLinkedInstanceResponse
     */
    describeWhitelistTemplateLinkedInstanceWithOptions(request: $_model.DescribeWhitelistTemplateLinkedInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeWhitelistTemplateLinkedInstanceResponse>;
    /**
     * Queries the instances associated with a whitelist template.
     *
     * @remarks
     * ### Supported engines
     * - RDS MySQL
     * - RDS PostgreSQL
     * - RDS SQL Server
     *
     * @param request - DescribeWhitelistTemplateLinkedInstanceRequest
     * @returns DescribeWhitelistTemplateLinkedInstanceResponse
     */
    describeWhitelistTemplateLinkedInstance(request: $_model.DescribeWhitelistTemplateLinkedInstanceRequest): Promise<$_model.DescribeWhitelistTemplateLinkedInstanceResponse>;
    /**
     * Destroys an ApsaraDB RDS instance in the recycle bin.
     *
     * @param request - DestroyDBInstanceRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DestroyDBInstanceResponse
     */
    destroyDBInstanceWithOptions(request: $_model.DestroyDBInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DestroyDBInstanceResponse>;
    /**
     * Destroys an ApsaraDB RDS instance in the recycle bin.
     *
     * @param request - DestroyDBInstanceRequest
     * @returns DestroyDBInstanceResponse
     */
    destroyDBInstance(request: $_model.DestroyDBInstanceRequest): Promise<$_model.DestroyDBInstanceResponse>;
    /**
     * Removes a unit node from an ApsaraDB RDS global active database cluster.
     *
     * @remarks
     * ### Applicable engine
     * - ApsaraDB RDS for MySQL
     * ### Precautions
     * Only unit nodes can be removed.
     *
     * @param request - DetachGadInstanceMemberRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DetachGadInstanceMemberResponse
     */
    detachGadInstanceMemberWithOptions(request: $_model.DetachGadInstanceMemberRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DetachGadInstanceMemberResponse>;
    /**
     * Removes a unit node from an ApsaraDB RDS global active database cluster.
     *
     * @remarks
     * ### Applicable engine
     * - ApsaraDB RDS for MySQL
     * ### Precautions
     * Only unit nodes can be removed.
     *
     * @param request - DetachGadInstanceMemberRequest
     * @returns DetachGadInstanceMemberResponse
     */
    detachGadInstanceMember(request: $_model.DetachGadInstanceMemberRequest): Promise<$_model.DetachGadInstanceMemberResponse>;
    /**
     * Detaches a pay-as-you-go data cloud disk or a system cloud disk from an RDS Custom instance.
     *
     * @param request - DetachRCDiskRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DetachRCDiskResponse
     */
    detachRCDiskWithOptions(request: $_model.DetachRCDiskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DetachRCDiskResponse>;
    /**
     * Detaches a pay-as-you-go data cloud disk or a system cloud disk from an RDS Custom instance.
     *
     * @param request - DetachRCDiskRequest
     * @returns DetachRCDiskResponse
     */
    detachRCDisk(request: $_model.DetachRCDiskRequest): Promise<$_model.DetachRCDiskResponse>;
    /**
     * Disassociates a whitelist template from an instance.
     *
     * @remarks
     * ### Supported engines
     * - RDS MySQL
     * - RDS PostgreSQL
     * - RDS SQL Server
     *
     * @param request - DetachWhitelistTemplateToInstanceRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DetachWhitelistTemplateToInstanceResponse
     */
    detachWhitelistTemplateToInstanceWithOptions(request: $_model.DetachWhitelistTemplateToInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DetachWhitelistTemplateToInstanceResponse>;
    /**
     * Disassociates a whitelist template from an instance.
     *
     * @remarks
     * ### Supported engines
     * - RDS MySQL
     * - RDS PostgreSQL
     * - RDS SQL Server
     *
     * @param request - DetachWhitelistTemplateToInstanceRequest
     * @returns DetachWhitelistTemplateToInstanceResponse
     */
    detachWhitelistTemplateToInstance(request: $_model.DetachWhitelistTemplateToInstanceRequest): Promise<$_model.DetachWhitelistTemplateToInstanceResponse>;
    /**
     * Enables backup encryption.
     *
     * @param request - EnableBackupEncryptionRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns EnableBackupEncryptionResponse
     */
    enableBackupEncryptionWithOptions(request: $_model.EnableBackupEncryptionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.EnableBackupEncryptionResponse>;
    /**
     * Enables backup encryption.
     *
     * @param request - EnableBackupEncryptionRequest
     * @returns EnableBackupEncryptionResponse
     */
    enableBackupEncryption(request: $_model.EnableBackupEncryptionRequest): Promise<$_model.EnableBackupEncryptionResponse>;
    /**
     * Evaluates the available disk space that can be unlocked by emergency local disk scaling.
     *
     * @param request - EvaluateLocalExtendDiskRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns EvaluateLocalExtendDiskResponse
     */
    evaluateLocalExtendDiskWithOptions(request: $_model.EvaluateLocalExtendDiskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.EvaluateLocalExtendDiskResponse>;
    /**
     * Evaluates the available disk space that can be unlocked by emergency local disk scaling.
     *
     * @param request - EvaluateLocalExtendDiskRequest
     * @returns EvaluateLocalExtendDiskResponse
     */
    evaluateLocalExtendDisk(request: $_model.EvaluateLocalExtendDiskRequest): Promise<$_model.EvaluateLocalExtendDiskResponse>;
    /**
     * Queries the topology of an ApsaraDB RDS instance.
     *
     * @remarks
     * ### Supported engines
     * ApsaraDB RDS for MySQL.
     *
     * @param request - GetDBInstanceTopologyRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns GetDBInstanceTopologyResponse
     */
    getDBInstanceTopologyWithOptions(request: $_model.GetDBInstanceTopologyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetDBInstanceTopologyResponse>;
    /**
     * Queries the topology of an ApsaraDB RDS instance.
     *
     * @remarks
     * ### Supported engines
     * ApsaraDB RDS for MySQL.
     *
     * @param request - GetDBInstanceTopologyRequest
     * @returns GetDBInstanceTopologyResponse
     */
    getDBInstanceTopology(request: $_model.GetDBInstanceTopologyRequest): Promise<$_model.GetDBInstanceTopologyResponse>;
    /**
     * Queries the Secure Sockets Layer (SSL) encryption information of the database proxy endpoint for an ApsaraDB RDS for MySQL instance.
     *
     * @remarks
     * ### Applicable engine
     * ApsaraDB RDS for MySQL.
     *
     * @param request - GetDbProxyInstanceSslRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns GetDbProxyInstanceSslResponse
     */
    getDbProxyInstanceSslWithOptions(request: $_model.GetDbProxyInstanceSslRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetDbProxyInstanceSslResponse>;
    /**
     * Queries the Secure Sockets Layer (SSL) encryption information of the database proxy endpoint for an ApsaraDB RDS for MySQL instance.
     *
     * @remarks
     * ### Applicable engine
     * ApsaraDB RDS for MySQL.
     *
     * @param request - GetDbProxyInstanceSslRequest
     * @returns GetDbProxyInstanceSslResponse
     */
    getDbProxyInstanceSsl(request: $_model.GetDbProxyInstanceSslRequest): Promise<$_model.GetDbProxyInstanceSslResponse>;
    /**
     * Grants access permissions on one or more databases to a specified database account.
     *
     * @remarks
     * ### Supported engines
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for PostgreSQL
     * - ApsaraDB RDS for SQL Server
     * - ApsaraDB RDS for MariaDB
     * ### Related documentation
     * >Notice: Before you call this operation, read the following documentation and make sure that you fully understand the prerequisites and impacts of this operation.
     * - [Modify account permissions for ApsaraDB RDS for MySQL](https://help.aliyun.com/document_detail/96101.html)
     * - [Modify account permissions for ApsaraDB RDS for SQL Server](https://help.aliyun.com/document_detail/95692.html)
     * - [Modify account permissions for ApsaraDB RDS for MariaDB](https://help.aliyun.com/document_detail/97134.html)
     * - [Permission details for ApsaraDB RDS for PostgreSQL](https://help.aliyun.com/document_detail/257684.html)
     *
     * @param request - GrantAccountPrivilegeRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns GrantAccountPrivilegeResponse
     */
    grantAccountPrivilegeWithOptions(request: $_model.GrantAccountPrivilegeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GrantAccountPrivilegeResponse>;
    /**
     * Grants access permissions on one or more databases to a specified database account.
     *
     * @remarks
     * ### Supported engines
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for PostgreSQL
     * - ApsaraDB RDS for SQL Server
     * - ApsaraDB RDS for MariaDB
     * ### Related documentation
     * >Notice: Before you call this operation, read the following documentation and make sure that you fully understand the prerequisites and impacts of this operation.
     * - [Modify account permissions for ApsaraDB RDS for MySQL](https://help.aliyun.com/document_detail/96101.html)
     * - [Modify account permissions for ApsaraDB RDS for SQL Server](https://help.aliyun.com/document_detail/95692.html)
     * - [Modify account permissions for ApsaraDB RDS for MariaDB](https://help.aliyun.com/document_detail/97134.html)
     * - [Permission details for ApsaraDB RDS for PostgreSQL](https://help.aliyun.com/document_detail/257684.html)
     *
     * @param request - GrantAccountPrivilegeRequest
     * @returns GrantAccountPrivilegeResponse
     */
    grantAccountPrivilege(request: $_model.GrantAccountPrivilegeRequest): Promise<$_model.GrantAccountPrivilegeResponse>;
    /**
     * Grants permissions to a service account.
     *
     * @remarks
     * ### Applicable engines
     * - RDS MySQL
     * - RDS SQL Server
     * ### Related documentation
     * >Notice: Before you call this operation, read the documentation to understand the prerequisites and impacts.
     * - [Grant permissions to a service account for an ApsaraDB RDS for MySQL instance](https://help.aliyun.com/document_detail/96102.html)
     * - [Grant permissions to a service account for an ApsaraDB RDS for SQL Server instance](https://help.aliyun.com/document_detail/95693.html)
     *
     * @param request - GrantOperatorPermissionRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns GrantOperatorPermissionResponse
     */
    grantOperatorPermissionWithOptions(request: $_model.GrantOperatorPermissionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GrantOperatorPermissionResponse>;
    /**
     * Grants permissions to a service account.
     *
     * @remarks
     * ### Applicable engines
     * - RDS MySQL
     * - RDS SQL Server
     * ### Related documentation
     * >Notice: Before you call this operation, read the documentation to understand the prerequisites and impacts.
     * - [Grant permissions to a service account for an ApsaraDB RDS for MySQL instance](https://help.aliyun.com/document_detail/96102.html)
     * - [Grant permissions to a service account for an ApsaraDB RDS for SQL Server instance](https://help.aliyun.com/document_detail/95693.html)
     *
     * @param request - GrantOperatorPermissionRequest
     * @returns GrantOperatorPermissionResponse
     */
    grantOperatorPermission(request: $_model.GrantOperatorPermissionRequest): Promise<$_model.GrantOperatorPermissionResponse>;
    /**
     * Performs a data import of backup data from a self-managed MySQL 5.7 database to ApsaraDB RDS.
     *
     * @remarks
     * ### Supported engines
     * - ApsaraDB RDS for MySQL
     * ### Feature description
     * A user backup is a full backup of a self-managed MySQL database. You can restore user backups to the cloud.
     * ### Precautions
     * **Before you call this operation, make sure that the following conditions are met:**
     * * You have used XtraBackup to back up the self-managed MySQL 5.7 or 8.0 database, and the backup file name ends with `_qp.xb`. For more information, see [Migrate full data from a self-managed MySQL 5.7 or 8.0 database to the cloud](https://help.aliyun.com/document_detail/251779.html).
     * * You have uploaded the backup file of the self-managed MySQL 5.7 or 8.0 database to an OSS bucket in the corresponding region. For more information, see [Migrate full data from a self-managed MySQL 5.7 or 8.0 database to the cloud](https://help.aliyun.com/document_detail/251779.html).
     *
     * @param request - ImportUserBackupFileRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ImportUserBackupFileResponse
     */
    importUserBackupFileWithOptions(request: $_model.ImportUserBackupFileRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ImportUserBackupFileResponse>;
    /**
     * Performs a data import of backup data from a self-managed MySQL 5.7 database to ApsaraDB RDS.
     *
     * @remarks
     * ### Supported engines
     * - ApsaraDB RDS for MySQL
     * ### Feature description
     * A user backup is a full backup of a self-managed MySQL database. You can restore user backups to the cloud.
     * ### Precautions
     * **Before you call this operation, make sure that the following conditions are met:**
     * * You have used XtraBackup to back up the self-managed MySQL 5.7 or 8.0 database, and the backup file name ends with `_qp.xb`. For more information, see [Migrate full data from a self-managed MySQL 5.7 or 8.0 database to the cloud](https://help.aliyun.com/document_detail/251779.html).
     * * You have uploaded the backup file of the self-managed MySQL 5.7 or 8.0 database to an OSS bucket in the corresponding region. For more information, see [Migrate full data from a self-managed MySQL 5.7 or 8.0 database to the cloud](https://help.aliyun.com/document_detail/251779.html).
     *
     * @param request - ImportUserBackupFileRequest
     * @returns ImportUserBackupFileResponse
     */
    importUserBackupFile(request: $_model.ImportUserBackupFileRequest): Promise<$_model.ImportUserBackupFileResponse>;
    /**
     * 为实例安装云助手Agent
     *
     * @param tmpReq - InstallRCCloudAssistantRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns InstallRCCloudAssistantResponse
     */
    installRCCloudAssistantWithOptions(tmpReq: $_model.InstallRCCloudAssistantRequest, runtime: $dara.RuntimeOptions): Promise<$_model.InstallRCCloudAssistantResponse>;
    /**
     * 为实例安装云助手Agent
     *
     * @param request - InstallRCCloudAssistantRequest
     * @returns InstallRCCloudAssistantResponse
     */
    installRCCloudAssistant(request: $_model.InstallRCCloudAssistantRequest): Promise<$_model.InstallRCCloudAssistantResponse>;
    /**
     * Queries the details of all instance types for ApsaraDB RDS instances.
     *
     * @remarks
     * ### Supported engines
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for PostgreSQL
     * - ApsaraDB RDS for SQL Server
     * - ApsaraDB RDS for MariaDB
     *
     * @param request - ListClassesRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ListClassesResponse
     */
    listClassesWithOptions(request: $_model.ListClassesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListClassesResponse>;
    /**
     * Queries the details of all instance types for ApsaraDB RDS instances.
     *
     * @remarks
     * ### Supported engines
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for PostgreSQL
     * - ApsaraDB RDS for SQL Server
     * - ApsaraDB RDS for MariaDB
     *
     * @param request - ListClassesRequest
     * @returns ListClassesResponse
     */
    listClasses(request: $_model.ListClassesRequest): Promise<$_model.ListClassesResponse>;
    /**
     * Lists native replication data import tasks.
     *
     * @remarks
     * Lists data import tasks for native replication instances.
     *
     * @param request - ListImportTasksRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ListImportTasksResponse
     */
    listImportTasksWithOptions(request: $_model.ListImportTasksRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListImportTasksResponse>;
    /**
     * Lists native replication data import tasks.
     *
     * @remarks
     * Lists data import tasks for native replication instances.
     *
     * @param request - ListImportTasksRequest
     * @returns ListImportTasksResponse
     */
    listImportTasks(request: $_model.ListImportTasksRequest): Promise<$_model.ListImportTasksResponse>;
    /**
     * RCVCluster列表接口
     *
     * @param request - ListRCVClustersRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ListRCVClustersResponse
     */
    listRCVClustersWithOptions(request: $_model.ListRCVClustersRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListRCVClustersResponse>;
    /**
     * RCVCluster列表接口
     *
     * @param request - ListRCVClustersRequest
     * @returns ListRCVClustersResponse
     */
    listRCVClusters(request: $_model.ListRCVClustersRequest): Promise<$_model.ListRCVClustersResponse>;
    /**
     * Queries the tags that are bound to one or more ApsaraDB RDS instances.
     *
     * @remarks
     * ### Supported engines
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for PostgreSQL
     * - ApsaraDB RDS for SQL Server
     * - ApsaraDB RDS for MariaDB
     *
     * @param request - ListTagResourcesRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ListTagResourcesResponse
     */
    listTagResourcesWithOptions(request: $_model.ListTagResourcesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListTagResourcesResponse>;
    /**
     * Queries the tags that are bound to one or more ApsaraDB RDS instances.
     *
     * @remarks
     * ### Supported engines
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for PostgreSQL
     * - ApsaraDB RDS for SQL Server
     * - ApsaraDB RDS for MariaDB
     *
     * @param request - ListTagResourcesRequest
     * @returns ListTagResourcesResponse
     */
    listTagResources(request: $_model.ListTagResourcesRequest): Promise<$_model.ListTagResourcesResponse>;
    /**
     * Queries the details of all user backups imported to ApsaraDB RDS.
     *
     * @remarks
     * ### Supported engines
     * - ApsaraDB RDS for MySQL
     * ### Features
     * * A user backup is a full backup of a self-managed MySQL database. You can restore user backups to the cloud. For more information, see [Migrate full data from a self-managed MySQL 5.7 database to the cloud](https://help.aliyun.com/document_detail/251779.html).
     * * When you call the [CreateDBInstance](https://help.aliyun.com/document_detail/26228.html) operation to create an ApsaraDB RDS for MySQL instance for backup migration to the cloud, you can call this operation to query the user backup ID.
     * * You can call the [ImportUserBackupFile](https://help.aliyun.com/document_detail/260266.html) operation to import user backups to ApsaraDB RDS.
     *
     * @param request - ListUserBackupFilesRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ListUserBackupFilesResponse
     */
    listUserBackupFilesWithOptions(request: $_model.ListUserBackupFilesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListUserBackupFilesResponse>;
    /**
     * Queries the details of all user backups imported to ApsaraDB RDS.
     *
     * @remarks
     * ### Supported engines
     * - ApsaraDB RDS for MySQL
     * ### Features
     * * A user backup is a full backup of a self-managed MySQL database. You can restore user backups to the cloud. For more information, see [Migrate full data from a self-managed MySQL 5.7 database to the cloud](https://help.aliyun.com/document_detail/251779.html).
     * * When you call the [CreateDBInstance](https://help.aliyun.com/document_detail/26228.html) operation to create an ApsaraDB RDS for MySQL instance for backup migration to the cloud, you can call this operation to query the user backup ID.
     * * You can call the [ImportUserBackupFile](https://help.aliyun.com/document_detail/260266.html) operation to import user backups to ApsaraDB RDS.
     *
     * @param request - ListUserBackupFilesRequest
     * @returns ListUserBackupFilesResponse
     */
    listUserBackupFiles(request: $_model.ListUserBackupFilesRequest): Promise<$_model.ListUserBackupFilesResponse>;
    /**
     * Locks a database account of an ApsaraDB RDS for PostgreSQL instance.
     *
     * @remarks
     * ### Applicable engine
     * RDS PostgreSQL
     * ### Related documentation
     * >Notice: Before calling this operation, carefully read the following documentation to fully understand the prerequisites and potential impacts. Proceed only after you understand the information.
     * [Lock an RDS PostgreSQL account](https://help.aliyun.com/document_detail/147649.html)
     *
     * @param request - LockAccountRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns LockAccountResponse
     */
    lockAccountWithOptions(request: $_model.LockAccountRequest, runtime: $dara.RuntimeOptions): Promise<$_model.LockAccountResponse>;
    /**
     * Locks a database account of an ApsaraDB RDS for PostgreSQL instance.
     *
     * @remarks
     * ### Applicable engine
     * RDS PostgreSQL
     * ### Related documentation
     * >Notice: Before calling this operation, carefully read the following documentation to fully understand the prerequisites and potential impacts. Proceed only after you understand the information.
     * [Lock an RDS PostgreSQL account](https://help.aliyun.com/document_detail/147649.html)
     *
     * @param request - LockAccountRequest
     * @returns LockAccountResponse
     */
    lockAccount(request: $_model.LockAccountRequest): Promise<$_model.LockAccountResponse>;
    /**
     * Migrates an ApsaraDB RDS instance to a different zone.
     *
     * @remarks
     * ### Applicable engines
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for PostgreSQL
     * - ApsaraDB RDS for SQL Server
     * ### Related feature documentation
     * >Notice: Before you call this operation, carefully read the feature documentation to ensure that you fully understand the prerequisites and the impacts of the operation.
     * - [Migrate an ApsaraDB RDS for MySQL instance across zones](https://help.aliyun.com/document_detail/96746.html)
     * - [Migrate an ApsaraDB RDS for PostgreSQL instance across zones](https://help.aliyun.com/document_detail/96746.html)
     * - [Migrate an ApsaraDB RDS for SQL Server instance across zones](https://help.aliyun.com/document_detail/95658.html)
     *
     * @param request - MigrateConnectionToOtherZoneRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns MigrateConnectionToOtherZoneResponse
     */
    migrateConnectionToOtherZoneWithOptions(request: $_model.MigrateConnectionToOtherZoneRequest, runtime: $dara.RuntimeOptions): Promise<$_model.MigrateConnectionToOtherZoneResponse>;
    /**
     * Migrates an ApsaraDB RDS instance to a different zone.
     *
     * @remarks
     * ### Applicable engines
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for PostgreSQL
     * - ApsaraDB RDS for SQL Server
     * ### Related feature documentation
     * >Notice: Before you call this operation, carefully read the feature documentation to ensure that you fully understand the prerequisites and the impacts of the operation.
     * - [Migrate an ApsaraDB RDS for MySQL instance across zones](https://help.aliyun.com/document_detail/96746.html)
     * - [Migrate an ApsaraDB RDS for PostgreSQL instance across zones](https://help.aliyun.com/document_detail/96746.html)
     * - [Migrate an ApsaraDB RDS for SQL Server instance across zones](https://help.aliyun.com/document_detail/95658.html)
     *
     * @param request - MigrateConnectionToOtherZoneRequest
     * @returns MigrateConnectionToOtherZoneResponse
     */
    migrateConnectionToOtherZone(request: $_model.MigrateConnectionToOtherZoneRequest): Promise<$_model.MigrateConnectionToOtherZoneResponse>;
    /**
     * Migrates an ApsaraDB RDS instance within a dedicated cluster.
     *
     * @remarks
     * The dedicated cluster feature allows you to manage instances in batches as clusters. You can create multiple dedicated clusters in a region. A dedicated cluster contains multiple hosts, and a host contains multiple instances. For more information, see [Overview of dedicated clusters](https://help.aliyun.com/document_detail/141455.html).
     *
     * @param request - MigrateDBInstanceRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns MigrateDBInstanceResponse
     */
    migrateDBInstanceWithOptions(request: $_model.MigrateDBInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.MigrateDBInstanceResponse>;
    /**
     * Migrates an ApsaraDB RDS instance within a dedicated cluster.
     *
     * @remarks
     * The dedicated cluster feature allows you to manage instances in batches as clusters. You can create multiple dedicated clusters in a region. A dedicated cluster contains multiple hosts, and a host contains multiple instances. For more information, see [Overview of dedicated clusters](https://help.aliyun.com/document_detail/141455.html).
     *
     * @param request - MigrateDBInstanceRequest
     * @returns MigrateDBInstanceResponse
     */
    migrateDBInstance(request: $_model.MigrateDBInstanceRequest): Promise<$_model.MigrateDBInstanceResponse>;
    /**
     * Changes the zone of a node in an ApsaraDB RDS for MySQL Cluster Edition instance.
     *
     * @param tmpReq - MigrateDBNodesRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns MigrateDBNodesResponse
     */
    migrateDBNodesWithOptions(tmpReq: $_model.MigrateDBNodesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.MigrateDBNodesResponse>;
    /**
     * Changes the zone of a node in an ApsaraDB RDS for MySQL Cluster Edition instance.
     *
     * @param request - MigrateDBNodesRequest
     * @returns MigrateDBNodesResponse
     */
    migrateDBNodes(request: $_model.MigrateDBNodesRequest): Promise<$_model.MigrateDBNodesResponse>;
    /**
     * Switches the IP address whitelist of an ApsaraDB RDS instance from general pattern to enhanced whitelist safe mode.
     *
     * @remarks
     * ### Supported engines
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for PostgreSQL
     * ### Related documentation
     * >Notice: Before you call this operation, read the following documentation and make sure that you fully understand the prerequisites and impacts of this operation.
     * - [Switch to the enhanced whitelist mode for ApsaraDB RDS for MySQL](https://help.aliyun.com/document_detail/96117.html)
     * - [Switch to the enhanced whitelist mode for ApsaraDB RDS for PostgreSQL](https://help.aliyun.com/document_detail/96767.html)
     *
     * @param request - MigrateSecurityIPModeRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns MigrateSecurityIPModeResponse
     */
    migrateSecurityIPModeWithOptions(request: $_model.MigrateSecurityIPModeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.MigrateSecurityIPModeResponse>;
    /**
     * Switches the IP address whitelist of an ApsaraDB RDS instance from general pattern to enhanced whitelist safe mode.
     *
     * @remarks
     * ### Supported engines
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for PostgreSQL
     * ### Related documentation
     * >Notice: Before you call this operation, read the following documentation and make sure that you fully understand the prerequisites and impacts of this operation.
     * - [Switch to the enhanced whitelist mode for ApsaraDB RDS for MySQL](https://help.aliyun.com/document_detail/96117.html)
     * - [Switch to the enhanced whitelist mode for ApsaraDB RDS for PostgreSQL](https://help.aliyun.com/document_detail/96767.html)
     *
     * @param request - MigrateSecurityIPModeRequest
     * @returns MigrateSecurityIPModeResponse
     */
    migrateSecurityIPMode(request: $_model.MigrateSecurityIPModeRequest): Promise<$_model.MigrateSecurityIPModeResponse>;
    /**
     * Migrates an ApsaraDB RDS instance to a different zone.
     *
     * @remarks
     * ### Supported engines
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for PostgreSQL
     * - ApsaraDB RDS for SQL Server
     * ### Related documentation
     * >Notice: Before you call this operation, read the documentation carefully to fully understand the prerequisites and impacts.</notice>
     * - [Migrate an ApsaraDB RDS for MySQL instance across zones](https://help.aliyun.com/document_detail/96053.html)
     * - [Migrate an ApsaraDB RDS for PostgreSQL instance across zones](https://help.aliyun.com/document_detail/96746.html)
     * - [Migrate an ApsaraDB RDS for SQL Server instance across zones](https://help.aliyun.com/document_detail/95658.html)
     *
     * @param request - MigrateToOtherZoneRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns MigrateToOtherZoneResponse
     */
    migrateToOtherZoneWithOptions(request: $_model.MigrateToOtherZoneRequest, runtime: $dara.RuntimeOptions): Promise<$_model.MigrateToOtherZoneResponse>;
    /**
     * Migrates an ApsaraDB RDS instance to a different zone.
     *
     * @remarks
     * ### Supported engines
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for PostgreSQL
     * - ApsaraDB RDS for SQL Server
     * ### Related documentation
     * >Notice: Before you call this operation, read the documentation carefully to fully understand the prerequisites and impacts.</notice>
     * - [Migrate an ApsaraDB RDS for MySQL instance across zones](https://help.aliyun.com/document_detail/96053.html)
     * - [Migrate an ApsaraDB RDS for PostgreSQL instance across zones](https://help.aliyun.com/document_detail/96746.html)
     * - [Migrate an ApsaraDB RDS for SQL Server instance across zones](https://help.aliyun.com/document_detail/95658.html)
     *
     * @param request - MigrateToOtherZoneRequest
     * @returns MigrateToOtherZoneResponse
     */
    migrateToOtherZone(request: $_model.MigrateToOtherZoneRequest): Promise<$_model.MigrateToOtherZoneResponse>;
    /**
     * Modifies the Active Directory (AD) domain information of an ApsaraDB RDS for SQL Server instance.
     *
     * @remarks
     * ### Supported engines
     * - ApsaraDB RDS for SQL Server
     * ### Related feature documentation
     * >Notice: Before calling this operation, carefully read the feature documentation to ensure that you fully understand the prerequisites and the impacts of this operation.
     * - [Connect an ApsaraDB RDS for SQL Server instance to a self-managed domain](https://help.aliyun.com/document_detail/170734.html)
     *
     * @param request - ModifyADInfoRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ModifyADInfoResponse
     */
    modifyADInfoWithOptions(request: $_model.ModifyADInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyADInfoResponse>;
    /**
     * Modifies the Active Directory (AD) domain information of an ApsaraDB RDS for SQL Server instance.
     *
     * @remarks
     * ### Supported engines
     * - ApsaraDB RDS for SQL Server
     * ### Related feature documentation
     * >Notice: Before calling this operation, carefully read the feature documentation to ensure that you fully understand the prerequisites and the impacts of this operation.
     * - [Connect an ApsaraDB RDS for SQL Server instance to a self-managed domain](https://help.aliyun.com/document_detail/170734.html)
     *
     * @param request - ModifyADInfoRequest
     * @returns ModifyADInfoResponse
     */
    modifyADInfo(request: $_model.ModifyADInfoRequest): Promise<$_model.ModifyADInfoResponse>;
    /**
     * Modifies the account password policy of an ApsaraDB RDS for SQL Server instance.
     *
     * @remarks
     * ### Supported engines
     * ApsaraDB RDS for SQL Server (Shared instances and instances running SQL Server 2008 R2 are not supported)
     * > Before calling this operation, you must configure the account password policy for SQL Server. For more information, see [ModifyAccountSecurityPolicy](https://help.aliyun.com/document_detail/2848321.html).
     * ### Related documentation
     * [Custom account password policies for ApsaraDB RDS for SQL Server](https://help.aliyun.com/document_detail/2845728.html)
     *
     * @param request - ModifyAccountCheckPolicyRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ModifyAccountCheckPolicyResponse
     */
    modifyAccountCheckPolicyWithOptions(request: $_model.ModifyAccountCheckPolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyAccountCheckPolicyResponse>;
    /**
     * Modifies the account password policy of an ApsaraDB RDS for SQL Server instance.
     *
     * @remarks
     * ### Supported engines
     * ApsaraDB RDS for SQL Server (Shared instances and instances running SQL Server 2008 R2 are not supported)
     * > Before calling this operation, you must configure the account password policy for SQL Server. For more information, see [ModifyAccountSecurityPolicy](https://help.aliyun.com/document_detail/2848321.html).
     * ### Related documentation
     * [Custom account password policies for ApsaraDB RDS for SQL Server](https://help.aliyun.com/document_detail/2845728.html)
     *
     * @param request - ModifyAccountCheckPolicyRequest
     * @returns ModifyAccountCheckPolicyResponse
     */
    modifyAccountCheckPolicy(request: $_model.ModifyAccountCheckPolicyRequest): Promise<$_model.ModifyAccountCheckPolicyResponse>;
    /**
     * Modifies the description of a database account.
     *
     * @remarks
     * ### Applicable engines
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for PostgreSQL
     * - ApsaraDB RDS for SQL Server
     * - ApsaraDB RDS for MariaDB
     *
     * @param request - ModifyAccountDescriptionRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ModifyAccountDescriptionResponse
     */
    modifyAccountDescriptionWithOptions(request: $_model.ModifyAccountDescriptionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyAccountDescriptionResponse>;
    /**
     * Modifies the description of a database account.
     *
     * @remarks
     * ### Applicable engines
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for PostgreSQL
     * - ApsaraDB RDS for SQL Server
     * - ApsaraDB RDS for MariaDB
     *
     * @param request - ModifyAccountDescriptionRequest
     * @returns ModifyAccountDescriptionResponse
     */
    modifyAccountDescription(request: $_model.ModifyAccountDescriptionRequest): Promise<$_model.ModifyAccountDescriptionResponse>;
    /**
     * Modifies the encryption or data masking permissions of an account in a specified instance.
     *
     * @remarks
     * ## Request description
     * - Before you invoke this API operation, make sure that the column encryption service is enabled in the DAS Security Center.
     * - If you receive the ColumnEncryptionErrorCode.NOT_PURCHASED error message when you invoke this API operation, go to the Database Autonomy Service (DAS) Security Center to purchase and enable the column encryption service.
     *
     * @param request - ModifyAccountMaskingPrivilegeRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ModifyAccountMaskingPrivilegeResponse
     */
    modifyAccountMaskingPrivilegeWithOptions(request: $_model.ModifyAccountMaskingPrivilegeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyAccountMaskingPrivilegeResponse>;
    /**
     * Modifies the encryption or data masking permissions of an account in a specified instance.
     *
     * @remarks
     * ## Request description
     * - Before you invoke this API operation, make sure that the column encryption service is enabled in the DAS Security Center.
     * - If you receive the ColumnEncryptionErrorCode.NOT_PURCHASED error message when you invoke this API operation, go to the Database Autonomy Service (DAS) Security Center to purchase and enable the column encryption service.
     *
     * @param request - ModifyAccountMaskingPrivilegeRequest
     * @returns ModifyAccountMaskingPrivilegeResponse
     */
    modifyAccountMaskingPrivilege(request: $_model.ModifyAccountMaskingPrivilegeRequest): Promise<$_model.ModifyAccountMaskingPrivilegeResponse>;
    /**
     * Modifies the account password policy of an ApsaraDB RDS for SQL Server instance.
     *
     * @remarks
     * ### Supported engines
     * ApsaraDB RDS for SQL Server (Shared instances and SQL Server 2008 R2 are not supported)
     * ### Related feature documentation
     * >Notice: Before you call this operation, read the feature documentation to understand the prerequisites and impacts.
     * [Custom password policy for ApsaraDB RDS for SQL Server](https://help.aliyun.com/document_detail/95640.html)
     *
     * @param request - ModifyAccountSecurityPolicyRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ModifyAccountSecurityPolicyResponse
     */
    modifyAccountSecurityPolicyWithOptions(request: $_model.ModifyAccountSecurityPolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyAccountSecurityPolicyResponse>;
    /**
     * Modifies the account password policy of an ApsaraDB RDS for SQL Server instance.
     *
     * @remarks
     * ### Supported engines
     * ApsaraDB RDS for SQL Server (Shared instances and SQL Server 2008 R2 are not supported)
     * ### Related feature documentation
     * >Notice: Before you call this operation, read the feature documentation to understand the prerequisites and impacts.
     * [Custom password policy for ApsaraDB RDS for SQL Server](https://help.aliyun.com/document_detail/95640.html)
     *
     * @param request - ModifyAccountSecurityPolicyRequest
     * @returns ModifyAccountSecurityPolicyResponse
     */
    modifyAccountSecurityPolicy(request: $_model.ModifyAccountSecurityPolicyRequest): Promise<$_model.ModifyAccountSecurityPolicyResponse>;
    /**
     * Enables or disables the historical events feature for an ApsaraDB RDS instance.
     *
     * @remarks
     * ### Supported engines
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for PostgreSQL
     * - ApsaraDB RDS for SQL Server
     * - ApsaraDB RDS for MariaDB
     * ### Related documentation
     * >Notice: Before you call this operation, carefully read the following documentation. Make sure that you fully understand the prerequisites and impacts of this operation.
     * - [ApsaraDB RDS for MySQL historical events](https://help.aliyun.com/document_detail/129759.html)
     * - [ApsaraDB RDS for PostgreSQL historical events](https://help.aliyun.com/document_detail/131008.html)
     * - [ApsaraDB RDS for SQL Server historical events](https://help.aliyun.com/document_detail/131013.html)
     * - [ApsaraDB RDS for MariaDB historical events](https://help.aliyun.com/document_detail/131010.html)
     *
     * @param request - ModifyActionEventPolicyRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ModifyActionEventPolicyResponse
     */
    modifyActionEventPolicyWithOptions(request: $_model.ModifyActionEventPolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyActionEventPolicyResponse>;
    /**
     * Enables or disables the historical events feature for an ApsaraDB RDS instance.
     *
     * @remarks
     * ### Supported engines
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for PostgreSQL
     * - ApsaraDB RDS for SQL Server
     * - ApsaraDB RDS for MariaDB
     * ### Related documentation
     * >Notice: Before you call this operation, carefully read the following documentation. Make sure that you fully understand the prerequisites and impacts of this operation.
     * - [ApsaraDB RDS for MySQL historical events](https://help.aliyun.com/document_detail/129759.html)
     * - [ApsaraDB RDS for PostgreSQL historical events](https://help.aliyun.com/document_detail/131008.html)
     * - [ApsaraDB RDS for SQL Server historical events](https://help.aliyun.com/document_detail/131013.html)
     * - [ApsaraDB RDS for MariaDB historical events](https://help.aliyun.com/document_detail/131010.html)
     *
     * @param request - ModifyActionEventPolicyRequest
     * @returns ModifyActionEventPolicyResponse
     */
    modifyActionEventPolicy(request: $_model.ModifyActionEventPolicyRequest): Promise<$_model.ModifyActionEventPolicyResponse>;
    /**
     * Modifies the switchover time of scheduled O&M tasks for an ApsaraDB RDS instance.
     *
     * @remarks
     * ### Supported engines
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for PostgreSQL
     * - ApsaraDB RDS for SQL Server
     * - ApsaraDB RDS for MariaDB
     * ### Related documentation
     * >Notice: Before you call this operation, read the following documentation and make sure that you fully understand the prerequisites and impacts of this operation.
     * - [Scheduled events of ApsaraDB RDS for MySQL](https://help.aliyun.com/document_detail/104183.html)
     * - [Scheduled events of ApsaraDB RDS for PostgreSQL](https://help.aliyun.com/document_detail/104452.html)
     * - [Scheduled events of ApsaraDB RDS for SQL Server](https://help.aliyun.com/document_detail/104451.html)
     * - [Scheduled events of ApsaraDB RDS for MariaDB](https://help.aliyun.com/document_detail/104454.html)
     *
     * @param request - ModifyActiveOperationTasksRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ModifyActiveOperationTasksResponse
     */
    modifyActiveOperationTasksWithOptions(request: $_model.ModifyActiveOperationTasksRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyActiveOperationTasksResponse>;
    /**
     * Modifies the switchover time of scheduled O&M tasks for an ApsaraDB RDS instance.
     *
     * @remarks
     * ### Supported engines
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for PostgreSQL
     * - ApsaraDB RDS for SQL Server
     * - ApsaraDB RDS for MariaDB
     * ### Related documentation
     * >Notice: Before you call this operation, read the following documentation and make sure that you fully understand the prerequisites and impacts of this operation.
     * - [Scheduled events of ApsaraDB RDS for MySQL](https://help.aliyun.com/document_detail/104183.html)
     * - [Scheduled events of ApsaraDB RDS for PostgreSQL](https://help.aliyun.com/document_detail/104452.html)
     * - [Scheduled events of ApsaraDB RDS for SQL Server](https://help.aliyun.com/document_detail/104451.html)
     * - [Scheduled events of ApsaraDB RDS for MariaDB](https://help.aliyun.com/document_detail/104454.html)
     *
     * @param request - ModifyActiveOperationTasksRequest
     * @returns ModifyActiveOperationTasksResponse
     */
    modifyActiveOperationTasks(request: $_model.ModifyActiveOperationTasksRequest): Promise<$_model.ModifyActiveOperationTasksResponse>;
    /**
     * Modifies the backup policy settings of an ApsaraDB RDS instance.
     *
     * @remarks
     * ### Supported engines
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for PostgreSQL
     * - ApsaraDB RDS for SQL Server
     * - ApsaraDB RDS for MariaDB
     * ### Related feature documentation
     * >Notice: Before you call this operation, read the feature documentation to fully understand the prerequisites and impacts.
     * - [Configure the automatic backup policy for an ApsaraDB RDS for MySQL instance](https://help.aliyun.com/document_detail/98818.html)
     * - [Configure the automatic backup policy for an ApsaraDB RDS for PostgreSQL instance](https://help.aliyun.com/document_detail/96772.html)
     * - [Configure the automatic backup policy for an ApsaraDB RDS for SQL Server instance](https://help.aliyun.com/document_detail/95717.html)
     * - [Configure the automatic backup policy for an ApsaraDB RDS for MariaDB instance](https://help.aliyun.com/document_detail/97147.html)
     *
     * @param request - ModifyBackupPolicyRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ModifyBackupPolicyResponse
     */
    modifyBackupPolicyWithOptions(request: $_model.ModifyBackupPolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyBackupPolicyResponse>;
    /**
     * Modifies the backup policy settings of an ApsaraDB RDS instance.
     *
     * @remarks
     * ### Supported engines
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for PostgreSQL
     * - ApsaraDB RDS for SQL Server
     * - ApsaraDB RDS for MariaDB
     * ### Related feature documentation
     * >Notice: Before you call this operation, read the feature documentation to fully understand the prerequisites and impacts.
     * - [Configure the automatic backup policy for an ApsaraDB RDS for MySQL instance](https://help.aliyun.com/document_detail/98818.html)
     * - [Configure the automatic backup policy for an ApsaraDB RDS for PostgreSQL instance](https://help.aliyun.com/document_detail/96772.html)
     * - [Configure the automatic backup policy for an ApsaraDB RDS for SQL Server instance](https://help.aliyun.com/document_detail/95717.html)
     * - [Configure the automatic backup policy for an ApsaraDB RDS for MariaDB instance](https://help.aliyun.com/document_detail/97147.html)
     *
     * @param request - ModifyBackupPolicyRequest
     * @returns ModifyBackupPolicyResponse
     */
    modifyBackupPolicy(request: $_model.ModifyBackupPolicyRequest): Promise<$_model.ModifyBackupPolicyResponse>;
    /**
     * Extends the expiration time of a single-database backup set (physical backup, full backup, or single-database backup) generated by a manual backup.
     *
     * @remarks
     * ### Supported engines
     * ApsaraDB RDS for SQL Server
     * ### Related feature documentation
     * >Notice: Before you call this operation, read the feature documentation carefully to fully understand the prerequisites and impacts.
     * [Manually back up ApsaraDB RDS for SQL Server data](https://help.aliyun.com/document_detail/95717.html)
     *
     * @param request - ModifyBackupSetExpireTimeRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ModifyBackupSetExpireTimeResponse
     */
    modifyBackupSetExpireTimeWithOptions(request: $_model.ModifyBackupSetExpireTimeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyBackupSetExpireTimeResponse>;
    /**
     * Extends the expiration time of a single-database backup set (physical backup, full backup, or single-database backup) generated by a manual backup.
     *
     * @remarks
     * ### Supported engines
     * ApsaraDB RDS for SQL Server
     * ### Related feature documentation
     * >Notice: Before you call this operation, read the feature documentation carefully to fully understand the prerequisites and impacts.
     * [Manually back up ApsaraDB RDS for SQL Server data](https://help.aliyun.com/document_detail/95717.html)
     *
     * @param request - ModifyBackupSetExpireTimeRequest
     * @returns ModifyBackupSetExpireTimeResponse
     */
    modifyBackupSetExpireTime(request: $_model.ModifyBackupSetExpireTimeRequest): Promise<$_model.ModifyBackupSetExpireTimeResponse>;
    /**
     * Modifies the system character set collation and time zone of an ApsaraDB RDS for SQL Server instance.
     *
     * @remarks
     * ### Applicable engine
     * RDS SQL Server
     * ### Related documentation
     * >Notice: Before you call this operation, read the following documentation and make sure that you fully understand the prerequisites and impacts of this operation.
     * [Modify the character set collation and time zone](https://help.aliyun.com/document_detail/95700.html)
     *
     * @param request - ModifyCollationTimeZoneRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ModifyCollationTimeZoneResponse
     */
    modifyCollationTimeZoneWithOptions(request: $_model.ModifyCollationTimeZoneRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyCollationTimeZoneResponse>;
    /**
     * Modifies the system character set collation and time zone of an ApsaraDB RDS for SQL Server instance.
     *
     * @remarks
     * ### Applicable engine
     * RDS SQL Server
     * ### Related documentation
     * >Notice: Before you call this operation, read the following documentation and make sure that you fully understand the prerequisites and impacts of this operation.
     * [Modify the character set collation and time zone](https://help.aliyun.com/document_detail/95700.html)
     *
     * @param request - ModifyCollationTimeZoneRequest
     * @returns ModifyCollationTimeZoneResponse
     */
    modifyCollationTimeZone(request: $_model.ModifyCollationTimeZoneRequest): Promise<$_model.ModifyCollationTimeZoneResponse>;
    /**
     * Modifies or disables the provisioned Serverless feature.
     *
     * @remarks
     * ### Applicable engine
     * ApsaraDB RDS for PostgreSQL
     * ### Related feature documentation
     * [Provisioned Serverless](https://help.aliyun.com/document_detail/2928780.html)
     *
     * @param request - ModifyComputeBurstConfigRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ModifyComputeBurstConfigResponse
     */
    modifyComputeBurstConfigWithOptions(request: $_model.ModifyComputeBurstConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyComputeBurstConfigResponse>;
    /**
     * Modifies or disables the provisioned Serverless feature.
     *
     * @remarks
     * ### Applicable engine
     * ApsaraDB RDS for PostgreSQL
     * ### Related feature documentation
     * [Provisioned Serverless](https://help.aliyun.com/document_detail/2928780.html)
     *
     * @param request - ModifyComputeBurstConfigRequest
     * @returns ModifyComputeBurstConfigResponse
     */
    modifyComputeBurstConfig(request: $_model.ModifyComputeBurstConfigRequest): Promise<$_model.ModifyComputeBurstConfigResponse>;
    /**
     * Modifies the resources of an ApsaraDB RDS instance.
     *
     * @param request - ModifyCustinsResourceRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ModifyCustinsResourceResponse
     */
    modifyCustinsResourceWithOptions(request: $_model.ModifyCustinsResourceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyCustinsResourceResponse>;
    /**
     * Modifies the resources of an ApsaraDB RDS instance.
     *
     * @param request - ModifyCustinsResourceRequest
     * @returns ModifyCustinsResourceResponse
     */
    modifyCustinsResource(request: $_model.ModifyCustinsResourceRequest): Promise<$_model.ModifyCustinsResourceResponse>;
    /**
     * Modifies the description of a database.
     *
     * @remarks
     * ### Applicable engines
     * - RDS MySQL
     * - RDS PostgreSQL
     * - RDS SQL Server
     * - RDS MariaDB
     *
     * @param request - ModifyDBDescriptionRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ModifyDBDescriptionResponse
     */
    modifyDBDescriptionWithOptions(request: $_model.ModifyDBDescriptionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyDBDescriptionResponse>;
    /**
     * Modifies the description of a database.
     *
     * @remarks
     * ### Applicable engines
     * - RDS MySQL
     * - RDS PostgreSQL
     * - RDS SQL Server
     * - RDS MariaDB
     *
     * @param request - ModifyDBDescriptionRequest
     * @returns ModifyDBDescriptionResponse
     */
    modifyDBDescription(request: $_model.ModifyDBDescriptionRequest): Promise<$_model.ModifyDBDescriptionResponse>;
    /**
     * Modifies an instance. Currently, only the PostgreSQL engine is supported.
     *
     * @param tmpReq - ModifyDBInstanceRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ModifyDBInstanceResponse
     */
    modifyDBInstanceWithOptions(tmpReq: $_model.ModifyDBInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyDBInstanceResponse>;
    /**
     * Modifies an instance. Currently, only the PostgreSQL engine is supported.
     *
     * @param request - ModifyDBInstanceRequest
     * @returns ModifyDBInstanceResponse
     */
    modifyDBInstance(request: $_model.ModifyDBInstanceRequest): Promise<$_model.ModifyDBInstanceResponse>;
    /**
     * Modifies the minor version upgrade method for ApsaraDB RDS for MySQL, ApsaraDB RDS for PostgreSQL, and ApsaraDB RDS for SQL Server instances.
     *
     * @remarks
     * ### Supported engines
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for PostgreSQL
     * - ApsaraDB RDS for SQL Server
     * ### Related feature documentation
     * >Notice: Before you call this operation, carefully read the feature documentation to ensure that you fully understand the prerequisites and the impacts of this operation.</notice>
     * - [Modify the automatic upgrade settings for ApsaraDB RDS for MySQL](https://help.aliyun.com/document_detail/96059.html)
     * - [Modify the automatic upgrade settings for ApsaraDB RDS for PostgreSQL](https://help.aliyun.com/document_detail/146895.html)
     * - [Modify the automatic upgrade settings for ApsaraDB RDS for SQL Server](https://help.aliyun.com/document_detail/213582.html)
     *
     * @param request - ModifyDBInstanceAutoUpgradeMinorVersionRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ModifyDBInstanceAutoUpgradeMinorVersionResponse
     */
    modifyDBInstanceAutoUpgradeMinorVersionWithOptions(request: $_model.ModifyDBInstanceAutoUpgradeMinorVersionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyDBInstanceAutoUpgradeMinorVersionResponse>;
    /**
     * Modifies the minor version upgrade method for ApsaraDB RDS for MySQL, ApsaraDB RDS for PostgreSQL, and ApsaraDB RDS for SQL Server instances.
     *
     * @remarks
     * ### Supported engines
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for PostgreSQL
     * - ApsaraDB RDS for SQL Server
     * ### Related feature documentation
     * >Notice: Before you call this operation, carefully read the feature documentation to ensure that you fully understand the prerequisites and the impacts of this operation.</notice>
     * - [Modify the automatic upgrade settings for ApsaraDB RDS for MySQL](https://help.aliyun.com/document_detail/96059.html)
     * - [Modify the automatic upgrade settings for ApsaraDB RDS for PostgreSQL](https://help.aliyun.com/document_detail/146895.html)
     * - [Modify the automatic upgrade settings for ApsaraDB RDS for SQL Server](https://help.aliyun.com/document_detail/213582.html)
     *
     * @param request - ModifyDBInstanceAutoUpgradeMinorVersionRequest
     * @returns ModifyDBInstanceAutoUpgradeMinorVersionResponse
     */
    modifyDBInstanceAutoUpgradeMinorVersion(request: $_model.ModifyDBInstanceAutoUpgradeMinorVersionRequest): Promise<$_model.ModifyDBInstanceAutoUpgradeMinorVersionResponse>;
    /**
     * Modifies the column encryption algorithm configuration for a specified instance.
     *
     * @remarks
     * ## Request description
     * - Before you use this operation, make sure that you have activated the Cloud Hardware Security Module (CloudHSM) for column encryption in the DAS Security Center.
     * - If you receive an error message when you invoke this operation, go to the DAS (Database Autonomy Service) Security Center to purchase and activate the Cloud Hardware Security Module (CloudHSM) for column encryption before use.
     *
     * @param request - ModifyDBInstanceCLSRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ModifyDBInstanceCLSResponse
     */
    modifyDBInstanceCLSWithOptions(request: $_model.ModifyDBInstanceCLSRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyDBInstanceCLSResponse>;
    /**
     * Modifies the column encryption algorithm configuration for a specified instance.
     *
     * @remarks
     * ## Request description
     * - Before you use this operation, make sure that you have activated the Cloud Hardware Security Module (CloudHSM) for column encryption in the DAS Security Center.
     * - If you receive an error message when you invoke this operation, go to the DAS (Database Autonomy Service) Security Center to purchase and activate the Cloud Hardware Security Module (CloudHSM) for column encryption before use.
     *
     * @param request - ModifyDBInstanceCLSRequest
     * @returns ModifyDBInstanceCLSResponse
     */
    modifyDBInstanceCLS(request: $_model.ModifyDBInstanceCLSRequest): Promise<$_model.ModifyDBInstanceCLSResponse>;
    /**
     * Modifies the configuration items of an ApsaraDB RDS instance.
     *
     * @remarks
     * ### Supported engines
     * - ApsaraDB RDS for PostgreSQL
     * - ApsaraDB RDS for SQL Server
     * > Currently supported configuration items include [ApsaraDB RDS for PostgreSQL PgBouncer](https://help.aliyun.com/document_detail/2398301.html), [ApsaraDB RDS for PostgreSQL cloud disk encryption](https://help.aliyun.com/document_detail/124822.html), [ApsaraDB RDS for SQL Server cloud disk encryption](https://help.aliyun.com/document_detail/135391.html)<props="china">, [ApsaraDB RDS for SQL Server simple recovery](https://help.aliyun.com/document_detail/2618484.html), and [ApsaraDB RDS for SQL Server error log cleanup](https://help.aliyun.com/document_detail/95645.html).
     *
     * @param request - ModifyDBInstanceConfigRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ModifyDBInstanceConfigResponse
     */
    modifyDBInstanceConfigWithOptions(request: $_model.ModifyDBInstanceConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyDBInstanceConfigResponse>;
    /**
     * Modifies the configuration items of an ApsaraDB RDS instance.
     *
     * @remarks
     * ### Supported engines
     * - ApsaraDB RDS for PostgreSQL
     * - ApsaraDB RDS for SQL Server
     * > Currently supported configuration items include [ApsaraDB RDS for PostgreSQL PgBouncer](https://help.aliyun.com/document_detail/2398301.html), [ApsaraDB RDS for PostgreSQL cloud disk encryption](https://help.aliyun.com/document_detail/124822.html), [ApsaraDB RDS for SQL Server cloud disk encryption](https://help.aliyun.com/document_detail/135391.html)<props="china">, [ApsaraDB RDS for SQL Server simple recovery](https://help.aliyun.com/document_detail/2618484.html), and [ApsaraDB RDS for SQL Server error log cleanup](https://help.aliyun.com/document_detail/95645.html).
     *
     * @param request - ModifyDBInstanceConfigRequest
     * @returns ModifyDBInstanceConfigResponse
     */
    modifyDBInstanceConfig(request: $_model.ModifyDBInstanceConfigRequest): Promise<$_model.ModifyDBInstanceConfigResponse>;
    /**
     * Manages the endpoint and port of an instance.
     *
     * @remarks
     * ### Applicable engines
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for PostgreSQL
     * - ApsaraDB RDS for SQL Server
     * - ApsaraDB RDS for MariaDB
     * ### Related documentation
     * >Notice: Before you call this operation, read the following documentation and make sure that you fully understand the prerequisites and impacts of this operation.
     * - [Modify the endpoint and port of an ApsaraDB RDS for MySQL instance](https://help.aliyun.com/document_detail/96163.html)
     * - [Modify the endpoint and port of an ApsaraDB RDS for PostgreSQL instance](https://help.aliyun.com/document_detail/96788.html)
     * - [Modify the endpoint and port of an ApsaraDB RDS for SQL Server instance](https://help.aliyun.com/document_detail/95740.html)
     * - [Modify the endpoint and port of an ApsaraDB RDS for MariaDB instance](https://help.aliyun.com/document_detail/97157.html)
     *
     * @param request - ModifyDBInstanceConnectionStringRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ModifyDBInstanceConnectionStringResponse
     */
    modifyDBInstanceConnectionStringWithOptions(request: $_model.ModifyDBInstanceConnectionStringRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyDBInstanceConnectionStringResponse>;
    /**
     * Manages the endpoint and port of an instance.
     *
     * @remarks
     * ### Applicable engines
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for PostgreSQL
     * - ApsaraDB RDS for SQL Server
     * - ApsaraDB RDS for MariaDB
     * ### Related documentation
     * >Notice: Before you call this operation, read the following documentation and make sure that you fully understand the prerequisites and impacts of this operation.
     * - [Modify the endpoint and port of an ApsaraDB RDS for MySQL instance](https://help.aliyun.com/document_detail/96163.html)
     * - [Modify the endpoint and port of an ApsaraDB RDS for PostgreSQL instance](https://help.aliyun.com/document_detail/96788.html)
     * - [Modify the endpoint and port of an ApsaraDB RDS for SQL Server instance](https://help.aliyun.com/document_detail/95740.html)
     * - [Modify the endpoint and port of an ApsaraDB RDS for MariaDB instance](https://help.aliyun.com/document_detail/97157.html)
     *
     * @param request - ModifyDBInstanceConnectionStringRequest
     * @returns ModifyDBInstanceConnectionStringResponse
     */
    modifyDBInstanceConnectionString(request: $_model.ModifyDBInstanceConnectionStringRequest): Promise<$_model.ModifyDBInstanceConnectionStringResponse>;
    /**
     * Sets the replication delay time for an ApsaraDB RDS for MySQL read-only instance.
     *
     * @remarks
     * ### Applicable engine
     * - RDS MySQL
     * ### Related documentation
     * >Notice: Before you call this operation, read the following documentation and make sure that you fully understand the prerequisites and impacts of this operation.
     * - [Read-only instance delayed replication](https://help.aliyun.com/document_detail/96056.html)
     *
     * @param request - ModifyDBInstanceDelayedReplicationTimeRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ModifyDBInstanceDelayedReplicationTimeResponse
     */
    modifyDBInstanceDelayedReplicationTimeWithOptions(request: $_model.ModifyDBInstanceDelayedReplicationTimeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyDBInstanceDelayedReplicationTimeResponse>;
    /**
     * Sets the replication delay time for an ApsaraDB RDS for MySQL read-only instance.
     *
     * @remarks
     * ### Applicable engine
     * - RDS MySQL
     * ### Related documentation
     * >Notice: Before you call this operation, read the following documentation and make sure that you fully understand the prerequisites and impacts of this operation.
     * - [Read-only instance delayed replication](https://help.aliyun.com/document_detail/96056.html)
     *
     * @param request - ModifyDBInstanceDelayedReplicationTimeRequest
     * @returns ModifyDBInstanceDelayedReplicationTimeResponse
     */
    modifyDBInstanceDelayedReplicationTime(request: $_model.ModifyDBInstanceDelayedReplicationTimeRequest): Promise<$_model.ModifyDBInstanceDelayedReplicationTimeResponse>;
    /**
     * Enables or disables release protection for an ApsaraDB RDS instance.
     *
     * @remarks
     * ### Supported engines
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for PostgreSQL
     * - ApsaraDB RDS for SQL Server
     * - ApsaraDB RDS for MariaDB
     * ### Related documentation
     * >Notice: Before you call this operation, read the documentation carefully to fully understand the prerequisites and impacts.
     * - [Enable and disable release protection for an ApsaraDB RDS for MySQL instance](https://help.aliyun.com/document_detail/414512.html)
     * - [Enable and disable release protection for an ApsaraDB RDS for PostgreSQL instance](https://help.aliyun.com/document_detail/471512.html)
     * - [Enable and disable release protection for an ApsaraDB RDS for SQL Server instance](https://help.aliyun.com/document_detail/416209.html)
     * - [Enable and disable release protection for an ApsaraDB RDS for MariaDB instance](https://help.aliyun.com/document_detail/414512.html)
     *
     * @param request - ModifyDBInstanceDeletionProtectionRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ModifyDBInstanceDeletionProtectionResponse
     */
    modifyDBInstanceDeletionProtectionWithOptions(request: $_model.ModifyDBInstanceDeletionProtectionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyDBInstanceDeletionProtectionResponse>;
    /**
     * Enables or disables release protection for an ApsaraDB RDS instance.
     *
     * @remarks
     * ### Supported engines
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for PostgreSQL
     * - ApsaraDB RDS for SQL Server
     * - ApsaraDB RDS for MariaDB
     * ### Related documentation
     * >Notice: Before you call this operation, read the documentation carefully to fully understand the prerequisites and impacts.
     * - [Enable and disable release protection for an ApsaraDB RDS for MySQL instance](https://help.aliyun.com/document_detail/414512.html)
     * - [Enable and disable release protection for an ApsaraDB RDS for PostgreSQL instance](https://help.aliyun.com/document_detail/471512.html)
     * - [Enable and disable release protection for an ApsaraDB RDS for SQL Server instance](https://help.aliyun.com/document_detail/416209.html)
     * - [Enable and disable release protection for an ApsaraDB RDS for MariaDB instance](https://help.aliyun.com/document_detail/414512.html)
     *
     * @param request - ModifyDBInstanceDeletionProtectionRequest
     * @returns ModifyDBInstanceDeletionProtectionResponse
     */
    modifyDBInstanceDeletionProtection(request: $_model.ModifyDBInstanceDeletionProtectionRequest): Promise<$_model.ModifyDBInstanceDeletionProtectionResponse>;
    /**
     * Modifies the name of an ApsaraDB RDS instance.
     *
     * @remarks
     * ### Supported engines
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for PostgreSQL
     * - ApsaraDB RDS for SQL Server
     * - ApsaraDB RDS for MariaDB
     *
     * @param request - ModifyDBInstanceDescriptionRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ModifyDBInstanceDescriptionResponse
     */
    modifyDBInstanceDescriptionWithOptions(request: $_model.ModifyDBInstanceDescriptionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyDBInstanceDescriptionResponse>;
    /**
     * Modifies the name of an ApsaraDB RDS instance.
     *
     * @remarks
     * ### Supported engines
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for PostgreSQL
     * - ApsaraDB RDS for SQL Server
     * - ApsaraDB RDS for MariaDB
     *
     * @param request - ModifyDBInstanceDescriptionRequest
     * @returns ModifyDBInstanceDescriptionResponse
     */
    modifyDBInstanceDescription(request: $_model.ModifyDBInstanceDescriptionRequest): Promise<$_model.ModifyDBInstanceDescriptionResponse>;
    /**
     * Modifies the endpoint weight information of an ApsaraDB RDS Cluster Edition instance.
     *
     * @remarks
     * ### Supported engines
     * <props="china">
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for PostgreSQL
     * <props="intl">ApsaraDB RDS for MySQL
     *
     * @param tmpReq - ModifyDBInstanceEndpointRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ModifyDBInstanceEndpointResponse
     */
    modifyDBInstanceEndpointWithOptions(tmpReq: $_model.ModifyDBInstanceEndpointRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyDBInstanceEndpointResponse>;
    /**
     * Modifies the endpoint weight information of an ApsaraDB RDS Cluster Edition instance.
     *
     * @remarks
     * ### Supported engines
     * <props="china">
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for PostgreSQL
     * <props="intl">ApsaraDB RDS for MySQL
     *
     * @param request - ModifyDBInstanceEndpointRequest
     * @returns ModifyDBInstanceEndpointResponse
     */
    modifyDBInstanceEndpoint(request: $_model.ModifyDBInstanceEndpointRequest): Promise<$_model.ModifyDBInstanceEndpointResponse>;
    /**
     * Modifies the endpoint connection address of an ApsaraDB RDS Cluster Edition instance.
     *
     * @remarks
     * ### Supported DPI engines
     * <props="china">
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for PostgreSQL
     * <props="intl">ApsaraDB RDS for MySQL
     * ### Precautions
     * - You can modify the endpoint connection address, including the connection strings and ports for both public and internal networks, as well as the VPC, vSwitch, and IP address for the internal network connection.
     * - When you modify the endpoint, VpcId and VSwitchId are treated as a group. For an internal endpoint, you cannot specify VpcId, VSwitchId, or PrivateIpAddress together with ConnectionStringPrefix or Port. However, you must specify at least one of these parameters.
     *
     * @param request - ModifyDBInstanceEndpointAddressRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ModifyDBInstanceEndpointAddressResponse
     */
    modifyDBInstanceEndpointAddressWithOptions(request: $_model.ModifyDBInstanceEndpointAddressRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyDBInstanceEndpointAddressResponse>;
    /**
     * Modifies the endpoint connection address of an ApsaraDB RDS Cluster Edition instance.
     *
     * @remarks
     * ### Supported DPI engines
     * <props="china">
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for PostgreSQL
     * <props="intl">ApsaraDB RDS for MySQL
     * ### Precautions
     * - You can modify the endpoint connection address, including the connection strings and ports for both public and internal networks, as well as the VPC, vSwitch, and IP address for the internal network connection.
     * - When you modify the endpoint, VpcId and VSwitchId are treated as a group. For an internal endpoint, you cannot specify VpcId, VSwitchId, or PrivateIpAddress together with ConnectionStringPrefix or Port. However, you must specify at least one of these parameters.
     *
     * @param request - ModifyDBInstanceEndpointAddressRequest
     * @returns ModifyDBInstanceEndpointAddressResponse
     */
    modifyDBInstanceEndpointAddress(request: $_model.ModifyDBInstanceEndpointAddressRequest): Promise<$_model.ModifyDBInstanceEndpointAddressResponse>;
    /**
     * Modifies the high-availability mode and data replication method of an ApsaraDB RDS instance.
     *
     * @remarks
     * ### Supported engines
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for PostgreSQL
     * ### Related documentation
     * >Notice: Before you call this operation, read the following documentation and make sure that you fully understand the prerequisites and impacts of this operation.
     * - [Modify the data replication method of an ApsaraDB RDS for MySQL instance](https://help.aliyun.com/document_detail/96055.html)
     * - [Modify the data replication method of an ApsaraDB RDS for PostgreSQL instance](https://help.aliyun.com/document_detail/151265.html)
     *
     * @param request - ModifyDBInstanceHAConfigRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ModifyDBInstanceHAConfigResponse
     */
    modifyDBInstanceHAConfigWithOptions(request: $_model.ModifyDBInstanceHAConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyDBInstanceHAConfigResponse>;
    /**
     * Modifies the high-availability mode and data replication method of an ApsaraDB RDS instance.
     *
     * @remarks
     * ### Supported engines
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for PostgreSQL
     * ### Related documentation
     * >Notice: Before you call this operation, read the following documentation and make sure that you fully understand the prerequisites and impacts of this operation.
     * - [Modify the data replication method of an ApsaraDB RDS for MySQL instance](https://help.aliyun.com/document_detail/96055.html)
     * - [Modify the data replication method of an ApsaraDB RDS for PostgreSQL instance](https://help.aliyun.com/document_detail/151265.html)
     *
     * @param request - ModifyDBInstanceHAConfigRequest
     * @returns ModifyDBInstanceHAConfigResponse
     */
    modifyDBInstanceHAConfig(request: $_model.ModifyDBInstanceHAConfigRequest): Promise<$_model.ModifyDBInstanceHAConfigResponse>;
    /**
     * Modifies the maintenance window of an ApsaraDB RDS instance.
     *
     * @remarks
     * ### Supported engines
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for PostgreSQL
     * - ApsaraDB RDS for SQL Server
     * - ApsaraDB RDS for MariaDB
     * ### Related documentation
     * >Notice: Before you call this operation, read the following documentation and make sure that you fully understand the prerequisites and impacts of this operation.
     * - [Set the maintenance window of an ApsaraDB RDS for MySQL instance](https://help.aliyun.com/document_detail/96052.html)
     * - [Set the maintenance window of an ApsaraDB RDS for PostgreSQL instance](https://help.aliyun.com/document_detail/96799.html)
     * - [Set the maintenance window of an ApsaraDB RDS for SQL Server instance](https://help.aliyun.com/document_detail/95657.html)
     * - [Set the maintenance window of an ApsaraDB RDS for MariaDB instance](https://help.aliyun.com/document_detail/97473.html)
     *
     * @param request - ModifyDBInstanceMaintainTimeRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ModifyDBInstanceMaintainTimeResponse
     */
    modifyDBInstanceMaintainTimeWithOptions(request: $_model.ModifyDBInstanceMaintainTimeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyDBInstanceMaintainTimeResponse>;
    /**
     * Modifies the maintenance window of an ApsaraDB RDS instance.
     *
     * @remarks
     * ### Supported engines
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for PostgreSQL
     * - ApsaraDB RDS for SQL Server
     * - ApsaraDB RDS for MariaDB
     * ### Related documentation
     * >Notice: Before you call this operation, read the following documentation and make sure that you fully understand the prerequisites and impacts of this operation.
     * - [Set the maintenance window of an ApsaraDB RDS for MySQL instance](https://help.aliyun.com/document_detail/96052.html)
     * - [Set the maintenance window of an ApsaraDB RDS for PostgreSQL instance](https://help.aliyun.com/document_detail/96799.html)
     * - [Set the maintenance window of an ApsaraDB RDS for SQL Server instance](https://help.aliyun.com/document_detail/95657.html)
     * - [Set the maintenance window of an ApsaraDB RDS for MariaDB instance](https://help.aliyun.com/document_detail/97473.html)
     *
     * @param request - ModifyDBInstanceMaintainTimeRequest
     * @returns ModifyDBInstanceMaintainTimeResponse
     */
    modifyDBInstanceMaintainTime(request: $_model.ModifyDBInstanceMaintainTimeRequest): Promise<$_model.ModifyDBInstanceMaintainTimeResponse>;
    /**
     * Modifies the enhanced monitoring metrics displayed for an ApsaraDB RDS for PostgreSQL instance.
     *
     * @remarks
     * ### Supported engines
     * - ApsaraDB RDS for PostgreSQL
     * ### Related documentation
     * >Notice: Before you call this operation, read the documentation to understand the prerequisites and impacts.
     * [Enhanced monitoring](https://help.aliyun.com/document_detail/299200.html).
     *
     * @param request - ModifyDBInstanceMetricsRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ModifyDBInstanceMetricsResponse
     */
    modifyDBInstanceMetricsWithOptions(request: $_model.ModifyDBInstanceMetricsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyDBInstanceMetricsResponse>;
    /**
     * Modifies the enhanced monitoring metrics displayed for an ApsaraDB RDS for PostgreSQL instance.
     *
     * @remarks
     * ### Supported engines
     * - ApsaraDB RDS for PostgreSQL
     * ### Related documentation
     * >Notice: Before you call this operation, read the documentation to understand the prerequisites and impacts.
     * [Enhanced monitoring](https://help.aliyun.com/document_detail/299200.html).
     *
     * @param request - ModifyDBInstanceMetricsRequest
     * @returns ModifyDBInstanceMetricsResponse
     */
    modifyDBInstanceMetrics(request: $_model.ModifyDBInstanceMetricsRequest): Promise<$_model.ModifyDBInstanceMetricsResponse>;
    /**
     * Modifies the monitoring frequency.
     *
     * @remarks
     * ### Supported engines
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for SQL Server
     * ### Precautions
     * Second-level monitoring for ApsaraDB RDS for MySQL incurs additional fees. Make sure that you fully understand the [billing methods and pricing](https://help.aliyun.com/document_detail/45020.html) of ApsaraDB RDS before you call this operation.
     * ### Related documentation
     * >Notice: Before you call this operation, carefully read the feature documentation to ensure that you fully understand the prerequisites and the impacts of the operation.
     * - [Set the monitoring frequency for an ApsaraDB RDS for MySQL instance](https://help.aliyun.com/document_detail/96112.html)
     * - [Set the monitoring frequency for an ApsaraDB RDS for SQL Server instance](https://help.aliyun.com/document_detail/95710.html)
     *
     * @param request - ModifyDBInstanceMonitorRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ModifyDBInstanceMonitorResponse
     */
    modifyDBInstanceMonitorWithOptions(request: $_model.ModifyDBInstanceMonitorRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyDBInstanceMonitorResponse>;
    /**
     * Modifies the monitoring frequency.
     *
     * @remarks
     * ### Supported engines
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for SQL Server
     * ### Precautions
     * Second-level monitoring for ApsaraDB RDS for MySQL incurs additional fees. Make sure that you fully understand the [billing methods and pricing](https://help.aliyun.com/document_detail/45020.html) of ApsaraDB RDS before you call this operation.
     * ### Related documentation
     * >Notice: Before you call this operation, carefully read the feature documentation to ensure that you fully understand the prerequisites and the impacts of the operation.
     * - [Set the monitoring frequency for an ApsaraDB RDS for MySQL instance](https://help.aliyun.com/document_detail/96112.html)
     * - [Set the monitoring frequency for an ApsaraDB RDS for SQL Server instance](https://help.aliyun.com/document_detail/95710.html)
     *
     * @param request - ModifyDBInstanceMonitorRequest
     * @returns ModifyDBInstanceMonitorResponse
     */
    modifyDBInstanceMonitor(request: $_model.ModifyDBInstanceMonitorRequest): Promise<$_model.ModifyDBInstanceMonitorResponse>;
    /**
     * Modifies the expiration time of a classic network endpoint in hybrid access mode.
     *
     * @remarks
     * ### Applicable engines
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for SQL Server
     * ### Related documentation
     * - [Temporary hybrid access solution for ApsaraDB RDS for MySQL](https://help.aliyun.com/document_detail/96110.html)
     * - [Temporary hybrid access solution for ApsaraDB RDS for SQL Server](https://help.aliyun.com/document_detail/95708.html)
     *
     * @param request - ModifyDBInstanceNetworkExpireTimeRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ModifyDBInstanceNetworkExpireTimeResponse
     */
    modifyDBInstanceNetworkExpireTimeWithOptions(request: $_model.ModifyDBInstanceNetworkExpireTimeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyDBInstanceNetworkExpireTimeResponse>;
    /**
     * Modifies the expiration time of a classic network endpoint in hybrid access mode.
     *
     * @remarks
     * ### Applicable engines
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for SQL Server
     * ### Related documentation
     * - [Temporary hybrid access solution for ApsaraDB RDS for MySQL](https://help.aliyun.com/document_detail/96110.html)
     * - [Temporary hybrid access solution for ApsaraDB RDS for SQL Server](https://help.aliyun.com/document_detail/95708.html)
     *
     * @param request - ModifyDBInstanceNetworkExpireTimeRequest
     * @returns ModifyDBInstanceNetworkExpireTimeResponse
     */
    modifyDBInstanceNetworkExpireTime(request: $_model.ModifyDBInstanceNetworkExpireTimeRequest): Promise<$_model.ModifyDBInstanceNetworkExpireTimeResponse>;
    /**
     * Switches the network type of an ApsaraDB RDS instance from the classic network to a VPC through an instance switchover.
     *
     * @remarks
     * ### Supported database engines
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for PostgreSQL
     * - ApsaraDB RDS for SQL Server
     * ### Related documentation
     * >Notice: Before you call this operation, read the documentation carefully to fully understand the prerequisites and impacts.
     * - [Change the network type of an ApsaraDB RDS for MySQL instance](https://help.aliyun.com/document_detail/96109.html)
     * - [Change the network type of an ApsaraDB RDS for PostgreSQL instance](https://help.aliyun.com/document_detail/96761.html)
     * - [Change the network type of an ApsaraDB RDS for SQL Server instance](https://help.aliyun.com/document_detail/95707.html)
     *
     * @param request - ModifyDBInstanceNetworkTypeRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ModifyDBInstanceNetworkTypeResponse
     */
    modifyDBInstanceNetworkTypeWithOptions(request: $_model.ModifyDBInstanceNetworkTypeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyDBInstanceNetworkTypeResponse>;
    /**
     * Switches the network type of an ApsaraDB RDS instance from the classic network to a VPC through an instance switchover.
     *
     * @remarks
     * ### Supported database engines
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for PostgreSQL
     * - ApsaraDB RDS for SQL Server
     * ### Related documentation
     * >Notice: Before you call this operation, read the documentation carefully to fully understand the prerequisites and impacts.
     * - [Change the network type of an ApsaraDB RDS for MySQL instance](https://help.aliyun.com/document_detail/96109.html)
     * - [Change the network type of an ApsaraDB RDS for PostgreSQL instance](https://help.aliyun.com/document_detail/96761.html)
     * - [Change the network type of an ApsaraDB RDS for SQL Server instance](https://help.aliyun.com/document_detail/95707.html)
     *
     * @param request - ModifyDBInstanceNetworkTypeRequest
     * @returns ModifyDBInstanceNetworkTypeResponse
     */
    modifyDBInstanceNetworkType(request: $_model.ModifyDBInstanceNetworkTypeRequest): Promise<$_model.ModifyDBInstanceNetworkTypeResponse>;
    /**
     * Changes the billing method of a pay-as-you-go instance to subscription.
     *
     * @remarks
     * ### Supported engines
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for PostgreSQL
     * - ApsaraDB RDS for SQL Server
     * - ApsaraDB RDS for MariaDB
     * ### Related documentation
     * >Warning: This API operation involves billing changes. After the conversion, the instance is immediately billed on a subscription basis. Calculate the estimated costs in advance and read the related documentation before you call this operation.
     * - [Change the billing method of an ApsaraDB RDS for MySQL instance from pay-as-you-go to subscription](https://help.aliyun.com/document_detail/96048.html)
     * - [Change the billing method of an ApsaraDB RDS for PostgreSQL instance from pay-as-you-go to subscription](https://help.aliyun.com/document_detail/96743.html)
     * - [Change the billing method of an ApsaraDB RDS for SQL Server instance from pay-as-you-go to subscription](https://help.aliyun.com/document_detail/95631.html)
     * - [Change the billing method of an ApsaraDB RDS for MariaDB instance from pay-as-you-go to subscription](https://help.aliyun.com/document_detail/97120.html)
     *
     * @param request - ModifyDBInstancePayTypeRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ModifyDBInstancePayTypeResponse
     */
    modifyDBInstancePayTypeWithOptions(request: $_model.ModifyDBInstancePayTypeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyDBInstancePayTypeResponse>;
    /**
     * Changes the billing method of a pay-as-you-go instance to subscription.
     *
     * @remarks
     * ### Supported engines
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for PostgreSQL
     * - ApsaraDB RDS for SQL Server
     * - ApsaraDB RDS for MariaDB
     * ### Related documentation
     * >Warning: This API operation involves billing changes. After the conversion, the instance is immediately billed on a subscription basis. Calculate the estimated costs in advance and read the related documentation before you call this operation.
     * - [Change the billing method of an ApsaraDB RDS for MySQL instance from pay-as-you-go to subscription](https://help.aliyun.com/document_detail/96048.html)
     * - [Change the billing method of an ApsaraDB RDS for PostgreSQL instance from pay-as-you-go to subscription](https://help.aliyun.com/document_detail/96743.html)
     * - [Change the billing method of an ApsaraDB RDS for SQL Server instance from pay-as-you-go to subscription](https://help.aliyun.com/document_detail/95631.html)
     * - [Change the billing method of an ApsaraDB RDS for MariaDB instance from pay-as-you-go to subscription](https://help.aliyun.com/document_detail/97120.html)
     *
     * @param request - ModifyDBInstancePayTypeRequest
     * @returns ModifyDBInstancePayTypeResponse
     */
    modifyDBInstancePayType(request: $_model.ModifyDBInstancePayTypeRequest): Promise<$_model.ModifyDBInstancePayTypeResponse>;
    /**
     * Enables or disables the native replication mode for an ApsaraDB RDS instance.
     *
     * @remarks
     * To enable the native replication feature for an ApsaraDB RDS for MySQL instance, the following requirements must be met:
     * - DPI engine version: MySQL 5.7
     * - Edition: Basic Edition
     * - Billing method: pay-as-you-go or subscription
     * - Milvus version: 20240930 or later
     * For more information about native replication, see [Native replication for ApsaraDB RDS](https://help.aliyun.com/document_detail/2856530.html).
     *
     * @param request - ModifyDBInstanceReplicationSwitchRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ModifyDBInstanceReplicationSwitchResponse
     */
    modifyDBInstanceReplicationSwitchWithOptions(request: $_model.ModifyDBInstanceReplicationSwitchRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyDBInstanceReplicationSwitchResponse>;
    /**
     * Enables or disables the native replication mode for an ApsaraDB RDS instance.
     *
     * @remarks
     * To enable the native replication feature for an ApsaraDB RDS for MySQL instance, the following requirements must be met:
     * - DPI engine version: MySQL 5.7
     * - Edition: Basic Edition
     * - Billing method: pay-as-you-go or subscription
     * - Milvus version: 20240930 or later
     * For more information about native replication, see [Native replication for ApsaraDB RDS](https://help.aliyun.com/document_detail/2856530.html).
     *
     * @param request - ModifyDBInstanceReplicationSwitchRequest
     * @returns ModifyDBInstanceReplicationSwitchResponse
     */
    modifyDBInstanceReplicationSwitch(request: $_model.ModifyDBInstanceReplicationSwitchRequest): Promise<$_model.ModifyDBInstanceReplicationSwitchResponse>;
    /**
     * Modifies the SSL configuration of an ApsaraDB RDS instance.
     *
     * @remarks
     * ### Supported DPI engines
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for PostgreSQL
     * - ApsaraDB RDS for SQL Server
     * ### Related feature documentation
     * >Notice: Before you call this operation, read the feature documentation to understand the prerequisites and impacts.
     * - [Settings for Secure Sockets Layer (SSL) encryption in ApsaraDB RDS for MySQL](https://help.aliyun.com/document_detail/96120.html)
     * - [Settings for Secure Sockets Layer (SSL) encryption in ApsaraDB RDS for PostgreSQL](https://help.aliyun.com/document_detail/229517.html)
     * - [Settings for Secure Sockets Layer (SSL) encryption in ApsaraDB RDS for SQL Server](https://help.aliyun.com/document_detail/95715.html)
     *
     * @param request - ModifyDBInstanceSSLRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ModifyDBInstanceSSLResponse
     */
    modifyDBInstanceSSLWithOptions(request: $_model.ModifyDBInstanceSSLRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyDBInstanceSSLResponse>;
    /**
     * Modifies the SSL configuration of an ApsaraDB RDS instance.
     *
     * @remarks
     * ### Supported DPI engines
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for PostgreSQL
     * - ApsaraDB RDS for SQL Server
     * ### Related feature documentation
     * >Notice: Before you call this operation, read the feature documentation to understand the prerequisites and impacts.
     * - [Settings for Secure Sockets Layer (SSL) encryption in ApsaraDB RDS for MySQL](https://help.aliyun.com/document_detail/96120.html)
     * - [Settings for Secure Sockets Layer (SSL) encryption in ApsaraDB RDS for PostgreSQL](https://help.aliyun.com/document_detail/229517.html)
     * - [Settings for Secure Sockets Layer (SSL) encryption in ApsaraDB RDS for SQL Server](https://help.aliyun.com/document_detail/95715.html)
     *
     * @param request - ModifyDBInstanceSSLRequest
     * @returns ModifyDBInstanceSSLResponse
     */
    modifyDBInstanceSSL(request: $_model.ModifyDBInstanceSSLRequest): Promise<$_model.ModifyDBInstanceSSLResponse>;
    /**
     * Modifies the security group rules of an ApsaraDB RDS for SQL Server instance.
     *
     * @remarks
     * ### Supported engines
     * ApsaraDB RDS for SQL Server
     * ### Related documentation
     * [Configure security group rules for an ApsaraDB RDS for SQL Server instance](https://help.aliyun.com/document_detail/2392322.html)
     *
     * @param request - ModifyDBInstanceSecurityGroupRuleRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ModifyDBInstanceSecurityGroupRuleResponse
     */
    modifyDBInstanceSecurityGroupRuleWithOptions(request: $_model.ModifyDBInstanceSecurityGroupRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyDBInstanceSecurityGroupRuleResponse>;
    /**
     * Modifies the security group rules of an ApsaraDB RDS for SQL Server instance.
     *
     * @remarks
     * ### Supported engines
     * ApsaraDB RDS for SQL Server
     * ### Related documentation
     * [Configure security group rules for an ApsaraDB RDS for SQL Server instance](https://help.aliyun.com/document_detail/2392322.html)
     *
     * @param request - ModifyDBInstanceSecurityGroupRuleRequest
     * @returns ModifyDBInstanceSecurityGroupRuleResponse
     */
    modifyDBInstanceSecurityGroupRule(request: $_model.ModifyDBInstanceSecurityGroupRuleRequest): Promise<$_model.ModifyDBInstanceSecurityGroupRuleResponse>;
    /**
     * Modifies the specifications and storage capacity of an ApsaraDB RDS instance.
     *
     * @remarks
     * ### Supported engines
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for PostgreSQL
     * - ApsaraDB RDS for SQL Server
     * - ApsaraDB RDS for MariaDB
     * ### Billing
     * This API operation involves [specification change fees](https://help.aliyun.com/document_detail/57178.html). Read the relevant feature documentation before you proceed.
     * ### Relevant feature documentation
     * - [Change the specifications of an ApsaraDB RDS for MySQL instance](https://help.aliyun.com/document_detail/96061.html)
     * - [Change the specifications of an ApsaraDB RDS for PostgreSQL instance](https://help.aliyun.com/document_detail/96750.html)
     * - [Change the specifications of an ApsaraDB RDS for SQL Server instance](https://help.aliyun.com/document_detail/95665.html)
     * - [Change the specifications of an ApsaraDB RDS for MariaDB instance](https://help.aliyun.com/document_detail/97129.html)
     *
     * @param tmpReq - ModifyDBInstanceSpecRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ModifyDBInstanceSpecResponse
     */
    modifyDBInstanceSpecWithOptions(tmpReq: $_model.ModifyDBInstanceSpecRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyDBInstanceSpecResponse>;
    /**
     * Modifies the specifications and storage capacity of an ApsaraDB RDS instance.
     *
     * @remarks
     * ### Supported engines
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for PostgreSQL
     * - ApsaraDB RDS for SQL Server
     * - ApsaraDB RDS for MariaDB
     * ### Billing
     * This API operation involves [specification change fees](https://help.aliyun.com/document_detail/57178.html). Read the relevant feature documentation before you proceed.
     * ### Relevant feature documentation
     * - [Change the specifications of an ApsaraDB RDS for MySQL instance](https://help.aliyun.com/document_detail/96061.html)
     * - [Change the specifications of an ApsaraDB RDS for PostgreSQL instance](https://help.aliyun.com/document_detail/96750.html)
     * - [Change the specifications of an ApsaraDB RDS for SQL Server instance](https://help.aliyun.com/document_detail/95665.html)
     * - [Change the specifications of an ApsaraDB RDS for MariaDB instance](https://help.aliyun.com/document_detail/97129.html)
     *
     * @param request - ModifyDBInstanceSpecRequest
     * @returns ModifyDBInstanceSpecResponse
     */
    modifyDBInstanceSpec(request: $_model.ModifyDBInstanceSpecRequest): Promise<$_model.ModifyDBInstanceSpecResponse>;
    /**
     * Enables the transparent data encryption (TDE) feature for an ApsaraDB RDS instance and allows you to modify the encrypt status.
     *
     * @remarks
     * ### Applicable DPI engines
     * - RDS MySQL
     * - RDS PostgreSQL
     * - RDS SQL Server
     * ### Related feature documentation
     * >Notice: Before you call this operation, read the feature documentation to fully understand the prerequisites and impacts of the encrypt operation.
     * - [Settings for transparent data encryption (TDE) for ApsaraDB RDS for MySQL](https://help.aliyun.com/document_detail/96121.html)
     * - [Settings for transparent data encryption (TDE) for ApsaraDB RDS for PostgreSQL](https://help.aliyun.com/document_detail/465652.html)
     * - [Settings for transparent data encryption (TDE) for ApsaraDB RDS for SQL Server](https://help.aliyun.com/document_detail/95716.html)
     *
     * @param request - ModifyDBInstanceTDERequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ModifyDBInstanceTDEResponse
     */
    modifyDBInstanceTDEWithOptions(request: $_model.ModifyDBInstanceTDERequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyDBInstanceTDEResponse>;
    /**
     * Enables the transparent data encryption (TDE) feature for an ApsaraDB RDS instance and allows you to modify the encrypt status.
     *
     * @remarks
     * ### Applicable DPI engines
     * - RDS MySQL
     * - RDS PostgreSQL
     * - RDS SQL Server
     * ### Related feature documentation
     * >Notice: Before you call this operation, read the feature documentation to fully understand the prerequisites and impacts of the encrypt operation.
     * - [Settings for transparent data encryption (TDE) for ApsaraDB RDS for MySQL](https://help.aliyun.com/document_detail/96121.html)
     * - [Settings for transparent data encryption (TDE) for ApsaraDB RDS for PostgreSQL](https://help.aliyun.com/document_detail/465652.html)
     * - [Settings for transparent data encryption (TDE) for ApsaraDB RDS for SQL Server](https://help.aliyun.com/document_detail/95716.html)
     *
     * @param request - ModifyDBInstanceTDERequest
     * @returns ModifyDBInstanceTDEResponse
     */
    modifyDBInstanceTDE(request: $_model.ModifyDBInstanceTDERequest): Promise<$_model.ModifyDBInstanceTDEResponse>;
    /**
     * Enables or disables vector storage for an ApsaraDB RDS for MySQL instance.
     *
     * @remarks
     * ### Applicable engines
     * - ApsaraDB RDS for MySQL
     * ### Related documentation
     * >Notice: Before you call this operation, carefully read the feature documentation to ensure that you fully understand the prerequisites and the impacts of the operation.
     * - [Vector storage for ApsaraDB RDS for MySQL](https://help.aliyun.com/document_detail/2998661.html)
     *
     * @param request - ModifyDBInstanceVectorSupportStatusRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ModifyDBInstanceVectorSupportStatusResponse
     */
    modifyDBInstanceVectorSupportStatusWithOptions(request: $_model.ModifyDBInstanceVectorSupportStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyDBInstanceVectorSupportStatusResponse>;
    /**
     * Enables or disables vector storage for an ApsaraDB RDS for MySQL instance.
     *
     * @remarks
     * ### Applicable engines
     * - ApsaraDB RDS for MySQL
     * ### Related documentation
     * >Notice: Before you call this operation, carefully read the feature documentation to ensure that you fully understand the prerequisites and the impacts of the operation.
     * - [Vector storage for ApsaraDB RDS for MySQL](https://help.aliyun.com/document_detail/2998661.html)
     *
     * @param request - ModifyDBInstanceVectorSupportStatusRequest
     * @returns ModifyDBInstanceVectorSupportStatusResponse
     */
    modifyDBInstanceVectorSupportStatus(request: $_model.ModifyDBInstanceVectorSupportStatusRequest): Promise<$_model.ModifyDBInstanceVectorSupportStatusResponse>;
    /**
     * Modifies the specifications, storage type, and storage capacity of nodes in an ApsaraDB RDS for MySQL Cluster Edition instance.
     *
     * @remarks
     * ### Supported engines
     * - ApsaraDB RDS for MySQL
     * ### Related documentation
     *  [Modify node configurations](https://help.aliyun.com/document_detail/2627998.html)
     * >Warning: This API operation incurs fees. Read the related documentation carefully before you call this operation.</warning>
     *
     * @param tmpReq - ModifyDBNodeRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ModifyDBNodeResponse
     */
    modifyDBNodeWithOptions(tmpReq: $_model.ModifyDBNodeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyDBNodeResponse>;
    /**
     * Modifies the specifications, storage type, and storage capacity of nodes in an ApsaraDB RDS for MySQL Cluster Edition instance.
     *
     * @remarks
     * ### Supported engines
     * - ApsaraDB RDS for MySQL
     * ### Related documentation
     *  [Modify node configurations](https://help.aliyun.com/document_detail/2627998.html)
     * >Warning: This API operation incurs fees. Read the related documentation carefully before you call this operation.</warning>
     *
     * @param request - ModifyDBNodeRequest
     * @returns ModifyDBNodeResponse
     */
    modifyDBNode(request: $_model.ModifyDBNodeRequest): Promise<$_model.ModifyDBNodeResponse>;
    /**
     * Enables or modifies the database proxy instance feature for an ApsaraDB RDS instance.
     *
     * @remarks
     * ### Supported database engines
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for PostgreSQL
     * > Starting from October 17, 2023, ApsaraDB RDS for MySQL Cluster Edition gradually provides a free dedicated proxy service with one proxy node in each unit. For details, see [Promotion: Free dedicated proxy service with one proxy node for ApsaraDB RDS for MySQL Cluster Edition](https://help.aliyun.com/document_detail/2555466.html).
     * ### Related feature documentation
     * >Notice: Before you call this operation, read the feature documentation carefully to fully understand the prerequisites and the impacts of this operation.
     * - [Enable the database proxy for ApsaraDB RDS for MySQL](https://help.aliyun.com/document_detail/197456.html)
     * - [Enable the database proxy for ApsaraDB RDS for PostgreSQL](https://help.aliyun.com/document_detail/418272.html)
     *
     * @param tmpReq - ModifyDBProxyRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ModifyDBProxyResponse
     */
    modifyDBProxyWithOptions(tmpReq: $_model.ModifyDBProxyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyDBProxyResponse>;
    /**
     * Enables or modifies the database proxy instance feature for an ApsaraDB RDS instance.
     *
     * @remarks
     * ### Supported database engines
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for PostgreSQL
     * > Starting from October 17, 2023, ApsaraDB RDS for MySQL Cluster Edition gradually provides a free dedicated proxy service with one proxy node in each unit. For details, see [Promotion: Free dedicated proxy service with one proxy node for ApsaraDB RDS for MySQL Cluster Edition](https://help.aliyun.com/document_detail/2555466.html).
     * ### Related feature documentation
     * >Notice: Before you call this operation, read the feature documentation carefully to fully understand the prerequisites and the impacts of this operation.
     * - [Enable the database proxy for ApsaraDB RDS for MySQL](https://help.aliyun.com/document_detail/197456.html)
     * - [Enable the database proxy for ApsaraDB RDS for PostgreSQL](https://help.aliyun.com/document_detail/418272.html)
     *
     * @param request - ModifyDBProxyRequest
     * @returns ModifyDBProxyResponse
     */
    modifyDBProxy(request: $_model.ModifyDBProxyRequest): Promise<$_model.ModifyDBProxyResponse>;
    /**
     * Configures the access policy for the database proxy endpoint of an ApsaraDB RDS instance.
     *
     * @remarks
     * ### Supported DPI engines
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for PostgreSQL
     * ### Related feature documentation
     * >Notice: Before you call this operation, read the feature documentation to fully understand the prerequisites and impacts.
     * - [Configure the access policy for a database proxy endpoint of an ApsaraDB RDS for MySQL instance](https://help.aliyun.com/document_detail/2621331.html)
     * - [Configure the access policy for a database proxy endpoint of an ApsaraDB RDS for PostgreSQL instance](https://help.aliyun.com/document_detail/418273.html)
     *
     * @param request - ModifyDBProxyEndpointRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ModifyDBProxyEndpointResponse
     */
    modifyDBProxyEndpointWithOptions(request: $_model.ModifyDBProxyEndpointRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyDBProxyEndpointResponse>;
    /**
     * Configures the access policy for the database proxy endpoint of an ApsaraDB RDS instance.
     *
     * @remarks
     * ### Supported DPI engines
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for PostgreSQL
     * ### Related feature documentation
     * >Notice: Before you call this operation, read the feature documentation to fully understand the prerequisites and impacts.
     * - [Configure the access policy for a database proxy endpoint of an ApsaraDB RDS for MySQL instance](https://help.aliyun.com/document_detail/2621331.html)
     * - [Configure the access policy for a database proxy endpoint of an ApsaraDB RDS for PostgreSQL instance](https://help.aliyun.com/document_detail/418273.html)
     *
     * @param request - ModifyDBProxyEndpointRequest
     * @returns ModifyDBProxyEndpointResponse
     */
    modifyDBProxyEndpoint(request: $_model.ModifyDBProxyEndpointRequest): Promise<$_model.ModifyDBProxyEndpointResponse>;
    /**
     * Modifies the database proxy endpoint of an ApsaraDB RDS instance.
     *
     * @remarks
     * ### Supported database engines
     * - RDS MySQL
     * - RDS PostgreSQL
     * ### Related documentation
     * >Notice: Before you call this operation, carefully read the feature documentation to ensure that you fully understand the prerequisites and the impacts of the operation.</notice>
     * - [Configure the database proxy endpoint for RDS MySQL](https://help.aliyun.com/document_detail/184921.html)
     * - [Configure the database proxy endpoint for RDS PostgreSQL](https://help.aliyun.com/document_detail/418274.html)
     *
     * @param request - ModifyDBProxyEndpointAddressRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ModifyDBProxyEndpointAddressResponse
     */
    modifyDBProxyEndpointAddressWithOptions(request: $_model.ModifyDBProxyEndpointAddressRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyDBProxyEndpointAddressResponse>;
    /**
     * Modifies the database proxy endpoint of an ApsaraDB RDS instance.
     *
     * @remarks
     * ### Supported database engines
     * - RDS MySQL
     * - RDS PostgreSQL
     * ### Related documentation
     * >Notice: Before you call this operation, carefully read the feature documentation to ensure that you fully understand the prerequisites and the impacts of the operation.</notice>
     * - [Configure the database proxy endpoint for RDS MySQL](https://help.aliyun.com/document_detail/184921.html)
     * - [Configure the database proxy endpoint for RDS PostgreSQL](https://help.aliyun.com/document_detail/418274.html)
     *
     * @param request - ModifyDBProxyEndpointAddressRequest
     * @returns ModifyDBProxyEndpointAddressResponse
     */
    modifyDBProxyEndpointAddress(request: $_model.ModifyDBProxyEndpointAddressRequest): Promise<$_model.ModifyDBProxyEndpointAddressResponse>;
    /**
     * Modifies the configurations of an ApsaraDB RDS database proxy instance.
     *
     * @remarks
     * ### Supported engines
     * - RDS MySQL
     * - RDS PostgreSQL
     * > Starting from October 17, 2023, ApsaraDB RDS for MySQL Cluster Edition gradually provides a free dedicated dedicated proxy with one proxy instance across units. For more information, see [Promotion: Free dedicated dedicated proxy with one proxy instance for ApsaraDB RDS for MySQL Cluster Edition](https://help.aliyun.com/document_detail/2555466.html).
     *
     * @param tmpReq - ModifyDBProxyInstanceRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ModifyDBProxyInstanceResponse
     */
    modifyDBProxyInstanceWithOptions(tmpReq: $_model.ModifyDBProxyInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyDBProxyInstanceResponse>;
    /**
     * Modifies the configurations of an ApsaraDB RDS database proxy instance.
     *
     * @remarks
     * ### Supported engines
     * - RDS MySQL
     * - RDS PostgreSQL
     * > Starting from October 17, 2023, ApsaraDB RDS for MySQL Cluster Edition gradually provides a free dedicated dedicated proxy with one proxy instance across units. For more information, see [Promotion: Free dedicated dedicated proxy with one proxy instance for ApsaraDB RDS for MySQL Cluster Edition](https://help.aliyun.com/document_detail/2555466.html).
     *
     * @param request - ModifyDBProxyInstanceRequest
     * @returns ModifyDBProxyInstanceResponse
     */
    modifyDBProxyInstance(request: $_model.ModifyDBProxyInstanceRequest): Promise<$_model.ModifyDBProxyInstanceResponse>;
    /**
     * Configures the distributed transaction whitelist for an ApsaraDB RDS for SQL Server instance.
     *
     * @remarks
     * ### Applicable engine
     * RDS SQL Server
     * ### Related documentation
     * >Notice: Before you call this operation, read the following documentation and make sure that you fully understand the prerequisites and impacts of this operation.
     * [Configure a distributed transaction whitelist](https://help.aliyun.com/document_detail/124321.html)
     *
     * @param request - ModifyDTCSecurityIpHostsForSQLServerRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ModifyDTCSecurityIpHostsForSQLServerResponse
     */
    modifyDTCSecurityIpHostsForSQLServerWithOptions(request: $_model.ModifyDTCSecurityIpHostsForSQLServerRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyDTCSecurityIpHostsForSQLServerResponse>;
    /**
     * Configures the distributed transaction whitelist for an ApsaraDB RDS for SQL Server instance.
     *
     * @remarks
     * ### Applicable engine
     * RDS SQL Server
     * ### Related documentation
     * >Notice: Before you call this operation, read the following documentation and make sure that you fully understand the prerequisites and impacts of this operation.
     * [Configure a distributed transaction whitelist](https://help.aliyun.com/document_detail/124321.html)
     *
     * @param request - ModifyDTCSecurityIpHostsForSQLServerRequest
     * @returns ModifyDTCSecurityIpHostsForSQLServerResponse
     */
    modifyDTCSecurityIpHostsForSQLServer(request: $_model.ModifyDTCSecurityIpHostsForSQLServerRequest): Promise<$_model.ModifyDTCSecurityIpHostsForSQLServerResponse>;
    /**
     * Configures the automatic storage expansion feature for an ApsaraDB RDS instance.
     *
     * @remarks
     * ### Supported engines
     * <props="china">
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for PostgreSQL
     * - ApsaraDB RDS for SQL Server
     * <props="intl">
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for PostgreSQL
     * ### Related documentation
     * >Notice: Before you call this operation, read the documentation carefully to fully understand the prerequisites and impacts.</notice>
     * <props="china">
     * - [Automatic storage expansion for ApsaraDB RDS for MySQL](https://help.aliyun.com/document_detail/173826.html)
     * - [Automatic storage expansion for ApsaraDB RDS for PostgreSQL](https://help.aliyun.com/document_detail/432496.html)
     * - [Automatic storage expansion for ApsaraDB RDS for SQL Server](https://help.aliyun.com/document_detail/2573613.html)
     * <props="intl">
     * - [Automatic storage expansion for ApsaraDB RDS for MySQL](https://help.aliyun.com/document_detail/173826.html)
     * - [Automatic storage expansion for ApsaraDB RDS for PostgreSQL](https://help.aliyun.com/document_detail/432496.html)
     *
     * @param request - ModifyDasInstanceConfigRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ModifyDasInstanceConfigResponse
     */
    modifyDasInstanceConfigWithOptions(request: $_model.ModifyDasInstanceConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyDasInstanceConfigResponse>;
    /**
     * Configures the automatic storage expansion feature for an ApsaraDB RDS instance.
     *
     * @remarks
     * ### Supported engines
     * <props="china">
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for PostgreSQL
     * - ApsaraDB RDS for SQL Server
     * <props="intl">
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for PostgreSQL
     * ### Related documentation
     * >Notice: Before you call this operation, read the documentation carefully to fully understand the prerequisites and impacts.</notice>
     * <props="china">
     * - [Automatic storage expansion for ApsaraDB RDS for MySQL](https://help.aliyun.com/document_detail/173826.html)
     * - [Automatic storage expansion for ApsaraDB RDS for PostgreSQL](https://help.aliyun.com/document_detail/432496.html)
     * - [Automatic storage expansion for ApsaraDB RDS for SQL Server](https://help.aliyun.com/document_detail/2573613.html)
     * <props="intl">
     * - [Automatic storage expansion for ApsaraDB RDS for MySQL](https://help.aliyun.com/document_detail/173826.html)
     * - [Automatic storage expansion for ApsaraDB RDS for PostgreSQL](https://help.aliyun.com/document_detail/432496.html)
     *
     * @param request - ModifyDasInstanceConfigRequest
     * @returns ModifyDasInstanceConfigResponse
     */
    modifyDasInstanceConfig(request: $_model.ModifyDasInstanceConfigRequest): Promise<$_model.ModifyDasInstanceConfigResponse>;
    /**
     * Modifies the attributes of an ApsaraDB RDS for SQL Server database.
     *
     * @remarks
     * ### Supported engines
     * - ApsaraDB RDS for SQL Server
     * ### Related feature documentation
     * The features supported by this operation include [Modifying the attributes of an SQL Server database](https://help.aliyun.com/document_detail/2401398.html) and [Archiving cloud disk data to OSS](https://help.aliyun.com/document_detail/2767189.html). Before you use the data archiving to OSS feature by calling this API operation, you must enable the data archiving feature in the console.
     * >Notice: Before you call this API operation, carefully read the feature documentation to ensure that you fully understand the prerequisites and the impacts of the operation.
     *
     * @param request - ModifyDatabaseConfigRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ModifyDatabaseConfigResponse
     */
    modifyDatabaseConfigWithOptions(request: $_model.ModifyDatabaseConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyDatabaseConfigResponse>;
    /**
     * Modifies the attributes of an ApsaraDB RDS for SQL Server database.
     *
     * @remarks
     * ### Supported engines
     * - ApsaraDB RDS for SQL Server
     * ### Related feature documentation
     * The features supported by this operation include [Modifying the attributes of an SQL Server database](https://help.aliyun.com/document_detail/2401398.html) and [Archiving cloud disk data to OSS](https://help.aliyun.com/document_detail/2767189.html). Before you use the data archiving to OSS feature by calling this API operation, you must enable the data archiving feature in the console.
     * >Notice: Before you call this API operation, carefully read the feature documentation to ensure that you fully understand the prerequisites and the impacts of the operation.
     *
     * @param request - ModifyDatabaseConfigRequest
     * @returns ModifyDatabaseConfigResponse
     */
    modifyDatabaseConfig(request: $_model.ModifyDatabaseConfigRequest): Promise<$_model.ModifyDatabaseConfigResponse>;
    /**
     * Configures Secure Sockets Layer (SSL) encryption for the database proxy endpoint of an ApsaraDB RDS for MySQL instance.
     *
     * @remarks
     * ### Supported engines
     * ApsaraDB RDS for MySQL
     * ### Related documentation
     * >Notice: Before you call this operation, read the feature documentation to ensure that you fully understand the prerequisites and impacts.</notice>
     * [Configure Secure Sockets Layer (SSL) encryption for the database proxy of ApsaraDB RDS for MySQL](https://help.aliyun.com/document_detail/188164.html)
     *
     * @param request - ModifyDbProxyInstanceSslRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ModifyDbProxyInstanceSslResponse
     */
    modifyDbProxyInstanceSslWithOptions(request: $_model.ModifyDbProxyInstanceSslRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyDbProxyInstanceSslResponse>;
    /**
     * Configures Secure Sockets Layer (SSL) encryption for the database proxy endpoint of an ApsaraDB RDS for MySQL instance.
     *
     * @remarks
     * ### Supported engines
     * ApsaraDB RDS for MySQL
     * ### Related documentation
     * >Notice: Before you call this operation, read the feature documentation to ensure that you fully understand the prerequisites and impacts.</notice>
     * [Configure Secure Sockets Layer (SSL) encryption for the database proxy of ApsaraDB RDS for MySQL](https://help.aliyun.com/document_detail/188164.html)
     *
     * @param request - ModifyDbProxyInstanceSslRequest
     * @returns ModifyDbProxyInstanceSslResponse
     */
    modifyDbProxyInstanceSsl(request: $_model.ModifyDbProxyInstanceSslRequest): Promise<$_model.ModifyDbProxyInstanceSslResponse>;
    /**
     * Modifies the event information in the event center.
     *
     * @param request - ModifyEventInfoRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ModifyEventInfoResponse
     */
    modifyEventInfoWithOptions(request: $_model.ModifyEventInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyEventInfoResponse>;
    /**
     * Modifies the event information in the event center.
     *
     * @param request - ModifyEventInfoRequest
     * @returns ModifyEventInfoResponse
     */
    modifyEventInfo(request: $_model.ModifyEventInfoRequest): Promise<$_model.ModifyEventInfoResponse>;
    /**
     * Modifies the availability check method of an ApsaraDB RDS instance.
     *
     * @remarks
     * ### Supported engines
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for PostgreSQL
     * - ApsaraDB RDS for SQL Server
     * - ApsaraDB RDS for MariaDB
     * ### Related documentation
     * >Notice: Before you call this operation, carefully read the feature documentation to ensure that you fully understand the prerequisites and impacts.
     * [What is the availability check method?](https://help.aliyun.com/document_detail/207467.html).
     *
     * @param request - ModifyHADiagnoseConfigRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ModifyHADiagnoseConfigResponse
     */
    modifyHADiagnoseConfigWithOptions(request: $_model.ModifyHADiagnoseConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyHADiagnoseConfigResponse>;
    /**
     * Modifies the availability check method of an ApsaraDB RDS instance.
     *
     * @remarks
     * ### Supported engines
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for PostgreSQL
     * - ApsaraDB RDS for SQL Server
     * - ApsaraDB RDS for MariaDB
     * ### Related documentation
     * >Notice: Before you call this operation, carefully read the feature documentation to ensure that you fully understand the prerequisites and impacts.
     * [What is the availability check method?](https://help.aliyun.com/document_detail/207467.html).
     *
     * @param request - ModifyHADiagnoseConfigRequest
     * @returns ModifyHADiagnoseConfigResponse
     */
    modifyHADiagnoseConfig(request: $_model.ModifyHADiagnoseConfigRequest): Promise<$_model.ModifyHADiagnoseConfigResponse>;
    /**
     * Enables or shuts down the automatic switchover feature for the primary and secondary instances of an ApsaraDB RDS instance.
     *
     * @remarks
     * ### Applicable engines
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for PostgreSQL
     * - ApsaraDB RDS for SQL Server
     * - ApsaraDB RDS for MariaDB
     * ### Related documentation
     * >Notice: Before you call this operation, carefully read the following documentation to fully understand the prerequisites and impacts of this operation.
     * - [Automatic primary/secondary switchover for ApsaraDB RDS for MySQL](https://help.aliyun.com/document_detail/96054.html)
     * - [Automatic primary/secondary switchover for ApsaraDB RDS for PostgreSQL](https://help.aliyun.com/document_detail/96747.html)
     * - [Automatic primary/secondary switchover for ApsaraDB RDS for SQL Server](https://help.aliyun.com/document_detail/95659.html)
     * - [Automatic primary/secondary switchover for ApsaraDB RDS for MariaDB](https://help.aliyun.com/document_detail/97127.html)
     *
     * @param request - ModifyHASwitchConfigRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ModifyHASwitchConfigResponse
     */
    modifyHASwitchConfigWithOptions(request: $_model.ModifyHASwitchConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyHASwitchConfigResponse>;
    /**
     * Enables or shuts down the automatic switchover feature for the primary and secondary instances of an ApsaraDB RDS instance.
     *
     * @remarks
     * ### Applicable engines
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for PostgreSQL
     * - ApsaraDB RDS for SQL Server
     * - ApsaraDB RDS for MariaDB
     * ### Related documentation
     * >Notice: Before you call this operation, carefully read the following documentation to fully understand the prerequisites and impacts of this operation.
     * - [Automatic primary/secondary switchover for ApsaraDB RDS for MySQL](https://help.aliyun.com/document_detail/96054.html)
     * - [Automatic primary/secondary switchover for ApsaraDB RDS for PostgreSQL](https://help.aliyun.com/document_detail/96747.html)
     * - [Automatic primary/secondary switchover for ApsaraDB RDS for SQL Server](https://help.aliyun.com/document_detail/95659.html)
     * - [Automatic primary/secondary switchover for ApsaraDB RDS for MariaDB](https://help.aliyun.com/document_detail/97127.html)
     *
     * @param request - ModifyHASwitchConfigRequest
     * @returns ModifyHASwitchConfigResponse
     */
    modifyHASwitchConfig(request: $_model.ModifyHASwitchConfigRequest): Promise<$_model.ModifyHASwitchConfigResponse>;
    /**
     * Modifies the data import task for an ApsaraDB RDS for MySQL instance that uses native replication.
     *
     * @remarks
     * Modifies the data import task for an ApsaraDB RDS for MySQL instance that uses native replication.
     *
     * @param request - ModifyImportTaskRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ModifyImportTaskResponse
     */
    modifyImportTaskWithOptions(request: $_model.ModifyImportTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyImportTaskResponse>;
    /**
     * Modifies the data import task for an ApsaraDB RDS for MySQL instance that uses native replication.
     *
     * @remarks
     * Modifies the data import task for an ApsaraDB RDS for MySQL instance that uses native replication.
     *
     * @param request - ModifyImportTaskRequest
     * @returns ModifyImportTaskResponse
     */
    modifyImportTask(request: $_model.ModifyImportTaskRequest): Promise<$_model.ModifyImportTaskResponse>;
    /**
     * Modifies the auto-renewal configuration of an ApsaraDB RDS instance.
     *
     * @remarks
     * ### Applicable engines
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for PostgreSQL
     * - ApsaraDB RDS for SQL Server
     * - ApsaraDB RDS for MariaDB
     * ### Related feature documentation
     * >Warning: This API operation involves fees. Read the related feature documentation carefully before you perform this operation.
     * - [Auto-renewal for ApsaraDB RDS for MySQL](https://help.aliyun.com/document_detail/96049.html)
     * - [Auto-renewal for ApsaraDB RDS for PostgreSQL](https://help.aliyun.com/document_detail/96740.html)
     * - [Auto-renewal for ApsaraDB RDS for SQL Server](https://help.aliyun.com/document_detail/95635.html)
     * - [Auto-renewal for ApsaraDB RDS for MariaDB](https://help.aliyun.com/document_detail/97121.html)
     *
     * @param request - ModifyInstanceAutoRenewalAttributeRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ModifyInstanceAutoRenewalAttributeResponse
     */
    modifyInstanceAutoRenewalAttributeWithOptions(request: $_model.ModifyInstanceAutoRenewalAttributeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyInstanceAutoRenewalAttributeResponse>;
    /**
     * Modifies the auto-renewal configuration of an ApsaraDB RDS instance.
     *
     * @remarks
     * ### Applicable engines
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for PostgreSQL
     * - ApsaraDB RDS for SQL Server
     * - ApsaraDB RDS for MariaDB
     * ### Related feature documentation
     * >Warning: This API operation involves fees. Read the related feature documentation carefully before you perform this operation.
     * - [Auto-renewal for ApsaraDB RDS for MySQL](https://help.aliyun.com/document_detail/96049.html)
     * - [Auto-renewal for ApsaraDB RDS for PostgreSQL](https://help.aliyun.com/document_detail/96740.html)
     * - [Auto-renewal for ApsaraDB RDS for SQL Server](https://help.aliyun.com/document_detail/95635.html)
     * - [Auto-renewal for ApsaraDB RDS for MariaDB](https://help.aliyun.com/document_detail/97121.html)
     *
     * @param request - ModifyInstanceAutoRenewalAttributeRequest
     * @returns ModifyInstanceAutoRenewalAttributeResponse
     */
    modifyInstanceAutoRenewalAttribute(request: $_model.ModifyInstanceAutoRenewalAttributeRequest): Promise<$_model.ModifyInstanceAutoRenewalAttributeResponse>;
    /**
     * Modifies the cross-region backup settings of an ApsaraDB RDS instance.
     *
     * @remarks
     * ### Supported database engines
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for PostgreSQL
     * - ApsaraDB RDS for SQL Server
     * ### Related documentation
     * >Notice: Before you call this operation, carefully read the feature documentation to ensure that you fully understand the prerequisites and impacts of this operation.</notice>
     * - [Cross-region backup for ApsaraDB RDS for MySQL](https://help.aliyun.com/document_detail/120824.html)
     * - [Cross-region backup for ApsaraDB RDS for PostgreSQL](https://help.aliyun.com/document_detail/206671.html)
     * - [Cross-region backup for ApsaraDB RDS for SQL Server](https://help.aliyun.com/document_detail/187923.html)
     *
     * @param request - ModifyInstanceCrossBackupPolicyRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ModifyInstanceCrossBackupPolicyResponse
     */
    modifyInstanceCrossBackupPolicyWithOptions(request: $_model.ModifyInstanceCrossBackupPolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyInstanceCrossBackupPolicyResponse>;
    /**
     * Modifies the cross-region backup settings of an ApsaraDB RDS instance.
     *
     * @remarks
     * ### Supported database engines
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for PostgreSQL
     * - ApsaraDB RDS for SQL Server
     * ### Related documentation
     * >Notice: Before you call this operation, carefully read the feature documentation to ensure that you fully understand the prerequisites and impacts of this operation.</notice>
     * - [Cross-region backup for ApsaraDB RDS for MySQL](https://help.aliyun.com/document_detail/120824.html)
     * - [Cross-region backup for ApsaraDB RDS for PostgreSQL](https://help.aliyun.com/document_detail/206671.html)
     * - [Cross-region backup for ApsaraDB RDS for SQL Server](https://help.aliyun.com/document_detail/187923.html)
     *
     * @param request - ModifyInstanceCrossBackupPolicyRequest
     * @returns ModifyInstanceCrossBackupPolicyResponse
     */
    modifyInstanceCrossBackupPolicy(request: $_model.ModifyInstanceCrossBackupPolicyRequest): Promise<$_model.ModifyInstanceCrossBackupPolicyResponse>;
    /**
     * Modifies the encryption or masking rules for a specified instance.
     *
     * @remarks
     * ## Request description
     * - Before you invoke this operation, make sure that the Cloud Hardware Security Module (CloudHSM) column encryption feature is enabled in the DAS Security Center.
     * - If you receive the error message ColumnEncryptionErrorCode.NOT_PURCHASED when invoking this operation, go to the Database Autonomy Service (DAS) Security Center to purchase and enable the Cloud Hardware Security Module (CloudHSM) column encryption feature.
     *
     * @param tmpReq - ModifyMaskingRulesRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ModifyMaskingRulesResponse
     */
    modifyMaskingRulesWithOptions(tmpReq: $_model.ModifyMaskingRulesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyMaskingRulesResponse>;
    /**
     * Modifies the encryption or masking rules for a specified instance.
     *
     * @remarks
     * ## Request description
     * - Before you invoke this operation, make sure that the Cloud Hardware Security Module (CloudHSM) column encryption feature is enabled in the DAS Security Center.
     * - If you receive the error message ColumnEncryptionErrorCode.NOT_PURCHASED when invoking this operation, go to the Database Autonomy Service (DAS) Security Center to purchase and enable the Cloud Hardware Security Module (CloudHSM) column encryption feature.
     *
     * @param request - ModifyMaskingRulesRequest
     * @returns ModifyMaskingRulesResponse
     */
    modifyMaskingRules(request: $_model.ModifyMaskingRulesRequest): Promise<$_model.ModifyMaskingRulesResponse>;
    /**
     * 修改PostgreSQL数据库的HBA配置文件
     *
     * @param request - ModifyPGHbaConfigRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ModifyPGHbaConfigResponse
     */
    modifyPGHbaConfigWithOptions(request: $_model.ModifyPGHbaConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyPGHbaConfigResponse>;
    /**
     * 修改PostgreSQL数据库的HBA配置文件
     *
     * @param request - ModifyPGHbaConfigRequest
     * @returns ModifyPGHbaConfigResponse
     */
    modifyPGHbaConfig(request: $_model.ModifyPGHbaConfigRequest): Promise<$_model.ModifyPGHbaConfigResponse>;
    /**
     * Modifies the parameter values of an ApsaraDB RDS instance.
     *
     * @remarks
     * ### Supported engines
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for PostgreSQL
     * - ApsaraDB RDS for SQL Server
     * - ApsaraDB RDS for MariaDB
     * ### Related documentation
     * >Notice: Before you call this operation, read the following documentation and make sure that you fully understand the prerequisites and impacts of this operation.
     * - [Configure the parameters of an ApsaraDB RDS for MySQL instance](https://help.aliyun.com/document_detail/96063.html)
     * - [Configure the parameters of an ApsaraDB RDS for PostgreSQL instance](https://help.aliyun.com/document_detail/96751.html)
     * - [Configure the parameters of an ApsaraDB RDS for SQL Server instance](https://help.aliyun.com/document_detail/95667.html)
     * - [Configure the parameters of an ApsaraDB RDS for MariaDB instance](https://help.aliyun.com/document_detail/97130.html)
     *
     * @param request - ModifyParameterRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ModifyParameterResponse
     */
    modifyParameterWithOptions(request: $_model.ModifyParameterRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyParameterResponse>;
    /**
     * Modifies the parameter values of an ApsaraDB RDS instance.
     *
     * @remarks
     * ### Supported engines
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for PostgreSQL
     * - ApsaraDB RDS for SQL Server
     * - ApsaraDB RDS for MariaDB
     * ### Related documentation
     * >Notice: Before you call this operation, read the following documentation and make sure that you fully understand the prerequisites and impacts of this operation.
     * - [Configure the parameters of an ApsaraDB RDS for MySQL instance](https://help.aliyun.com/document_detail/96063.html)
     * - [Configure the parameters of an ApsaraDB RDS for PostgreSQL instance](https://help.aliyun.com/document_detail/96751.html)
     * - [Configure the parameters of an ApsaraDB RDS for SQL Server instance](https://help.aliyun.com/document_detail/95667.html)
     * - [Configure the parameters of an ApsaraDB RDS for MariaDB instance](https://help.aliyun.com/document_detail/97130.html)
     *
     * @param request - ModifyParameterRequest
     * @returns ModifyParameterResponse
     */
    modifyParameter(request: $_model.ModifyParameterRequest): Promise<$_model.ModifyParameterResponse>;
    /**
     * Modifies an ApsaraDB RDS parameter template.
     *
     * @remarks
     * ### Supported engines
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for PostgreSQL
     * ### Related documentation
     * >Notice: Before you call this operation, read the documentation to fully understand the prerequisites and the impacts of the operation.
     * - [Use parameter templates in ApsaraDB RDS for MySQL](https://help.aliyun.com/document_detail/130565.html)
     * - [Use parameter templates in ApsaraDB RDS for PostgreSQL](https://help.aliyun.com/document_detail/457176.html)
     *
     * @param request - ModifyParameterGroupRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ModifyParameterGroupResponse
     */
    modifyParameterGroupWithOptions(request: $_model.ModifyParameterGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyParameterGroupResponse>;
    /**
     * Modifies an ApsaraDB RDS parameter template.
     *
     * @remarks
     * ### Supported engines
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for PostgreSQL
     * ### Related documentation
     * >Notice: Before you call this operation, read the documentation to fully understand the prerequisites and the impacts of the operation.
     * - [Use parameter templates in ApsaraDB RDS for MySQL](https://help.aliyun.com/document_detail/130565.html)
     * - [Use parameter templates in ApsaraDB RDS for PostgreSQL](https://help.aliyun.com/document_detail/457176.html)
     *
     * @param request - ModifyParameterGroupRequest
     * @returns ModifyParameterGroupResponse
     */
    modifyParameterGroup(request: $_model.ModifyParameterGroupRequest): Promise<$_model.ModifyParameterGroupResponse>;
    /**
     * Modifies the effective time of a scheduled parameter modification task.
     *
     * @remarks
     * ### Applicable engines
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for PostgreSQL
     * ### Related documentation
     * >Notice: Before you call this operation, read the feature documentation to fully understand the prerequisites and impacts.
     * - [Set the parameters of an ApsaraDB RDS for MySQL instance](https://help.aliyun.com/document_detail/96063.html)
     * - [Set the parameters of an ApsaraDB RDS for PostgreSQL instance](https://help.aliyun.com/document_detail/96751.html)
     *
     * @param request - ModifyParameterTimedScheduleTaskRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ModifyParameterTimedScheduleTaskResponse
     */
    modifyParameterTimedScheduleTaskWithOptions(request: $_model.ModifyParameterTimedScheduleTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyParameterTimedScheduleTaskResponse>;
    /**
     * Modifies the effective time of a scheduled parameter modification task.
     *
     * @remarks
     * ### Applicable engines
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for PostgreSQL
     * ### Related documentation
     * >Notice: Before you call this operation, read the feature documentation to fully understand the prerequisites and impacts.
     * - [Set the parameters of an ApsaraDB RDS for MySQL instance](https://help.aliyun.com/document_detail/96063.html)
     * - [Set the parameters of an ApsaraDB RDS for PostgreSQL instance](https://help.aliyun.com/document_detail/96751.html)
     *
     * @param request - ModifyParameterTimedScheduleTaskRequest
     * @returns ModifyParameterTimedScheduleTaskResponse
     */
    modifyParameterTimedScheduleTask(request: $_model.ModifyParameterTimedScheduleTaskRequest): Promise<$_model.ModifyParameterTimedScheduleTaskResponse>;
    /**
     * 修改部署集的名称和描述信息
     *
     * @param request - ModifyRCDeploymentSetAttributeRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ModifyRCDeploymentSetAttributeResponse
     */
    modifyRCDeploymentSetAttributeWithOptions(request: $_model.ModifyRCDeploymentSetAttributeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyRCDeploymentSetAttributeResponse>;
    /**
     * 修改部署集的名称和描述信息
     *
     * @param request - ModifyRCDeploymentSetAttributeRequest
     * @returns ModifyRCDeploymentSetAttributeResponse
     */
    modifyRCDeploymentSetAttribute(request: $_model.ModifyRCDeploymentSetAttributeRequest): Promise<$_model.ModifyRCDeploymentSetAttributeResponse>;
    /**
     * Modifies the attributes of a block storage device, such as the name, description, release behavior with the instance, automatic snapshot deletion behavior with the disk, automatic snapshot policy, and performance burst feature.
     *
     * @remarks
     * You can specify the DiskId parameter to modify the attributes of a block storage device, such as the name, description, and release behavior with the instance.
     *
     * @param request - ModifyRCDiskAttributeRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ModifyRCDiskAttributeResponse
     */
    modifyRCDiskAttributeWithOptions(request: $_model.ModifyRCDiskAttributeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyRCDiskAttributeResponse>;
    /**
     * Modifies the attributes of a block storage device, such as the name, description, release behavior with the instance, automatic snapshot deletion behavior with the disk, automatic snapshot policy, and performance burst feature.
     *
     * @remarks
     * You can specify the DiskId parameter to modify the attributes of a block storage device, such as the name, description, and release behavior with the instance.
     *
     * @param request - ModifyRCDiskAttributeRequest
     * @returns ModifyRCDiskAttributeResponse
     */
    modifyRCDiskAttribute(request: $_model.ModifyRCDiskAttributeRequest): Promise<$_model.ModifyRCDiskAttributeResponse>;
    /**
     * 修改RDS用户磁盘付费类型
     *
     * @param request - ModifyRCDiskChargeTypeRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ModifyRCDiskChargeTypeResponse
     */
    modifyRCDiskChargeTypeWithOptions(request: $_model.ModifyRCDiskChargeTypeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyRCDiskChargeTypeResponse>;
    /**
     * 修改RDS用户磁盘付费类型
     *
     * @param request - ModifyRCDiskChargeTypeRequest
     * @returns ModifyRCDiskChargeTypeResponse
     */
    modifyRCDiskChargeType(request: $_model.ModifyRCDiskChargeTypeRequest): Promise<$_model.ModifyRCDiskChargeTypeResponse>;
    /**
     * Modifies the cloud disk category or performance level (PL) of an ApsaraDB RDS Custom instance.
     *
     * @remarks
     * >Notice: To minimize the impact on your business, perform Upgrade/Downgrade operations during off-peak hours.
     * When you invoke this operation, take note of the following items:
     * - ESSD cloud disks support upgrading and downgrading performance levels, but do not support downgrading to PL0.
     * - The ESSD cloud disk must be in the In_Use or Available state.
     * - If the ESSD cloud disk is mounted to an instance, the instance must be in the Running or Stopped state. The instance cannot be expired or have an overdue payment.
     * - The performance level of an ESSD cloud disk is limited by its capacity. If you cannot upgrade the performance level, expand the capacity and try again.
     *
     * @param request - ModifyRCDiskSpecRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ModifyRCDiskSpecResponse
     */
    modifyRCDiskSpecWithOptions(request: $_model.ModifyRCDiskSpecRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyRCDiskSpecResponse>;
    /**
     * Modifies the cloud disk category or performance level (PL) of an ApsaraDB RDS Custom instance.
     *
     * @remarks
     * >Notice: To minimize the impact on your business, perform Upgrade/Downgrade operations during off-peak hours.
     * When you invoke this operation, take note of the following items:
     * - ESSD cloud disks support upgrading and downgrading performance levels, but do not support downgrading to PL0.
     * - The ESSD cloud disk must be in the In_Use or Available state.
     * - If the ESSD cloud disk is mounted to an instance, the instance must be in the Running or Stopped state. The instance cannot be expired or have an overdue payment.
     * - The performance level of an ESSD cloud disk is limited by its capacity. If you cannot upgrade the performance level, expand the capacity and try again.
     *
     * @param request - ModifyRCDiskSpecRequest
     * @returns ModifyRCDiskSpecResponse
     */
    modifyRCDiskSpec(request: $_model.ModifyRCDiskSpecRequest): Promise<$_model.ModifyRCDiskSpecResponse>;
    /**
     * 查询RDS用户专属主机实例
     *
     * @param request - ModifyRCElasticScalingRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ModifyRCElasticScalingResponse
     */
    modifyRCElasticScalingWithOptions(request: $_model.ModifyRCElasticScalingRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyRCElasticScalingResponse>;
    /**
     * 查询RDS用户专属主机实例
     *
     * @param request - ModifyRCElasticScalingRequest
     * @returns ModifyRCElasticScalingResponse
     */
    modifyRCElasticScaling(request: $_model.ModifyRCElasticScalingRequest): Promise<$_model.ModifyRCElasticScalingResponse>;
    /**
     * Upgrades or downgrades the instance type of an RDS Custom instance.
     *
     * @remarks
     * Before you call this operation, make sure that you fully understand the billing methods, pricing, and refund rules for downgrades of RDS Custom instances.
     * When you call this operation, take note of the following items:
     * - You cannot modify the instance type of an expired instance. You can try again after you renew the instance.
     * - Only **standard cloud disk instances** support instance type changes.
     * - When you upgrade or downgrade the instance type, take note of the following items:
     *   - The instance must be in the **Running** or **Stopped** state.
     *   - The price difference for the downgrade is refunded to your original payment method. Vouchers that have been used are not refunded.
     * - Before you change the instance type or system cloud disk type, call the DescribeRCResourcesModification operation to query the available inventory in the destination zone.
     *
     * @param request - ModifyRCInstanceRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ModifyRCInstanceResponse
     */
    modifyRCInstanceWithOptions(request: $_model.ModifyRCInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyRCInstanceResponse>;
    /**
     * Upgrades or downgrades the instance type of an RDS Custom instance.
     *
     * @remarks
     * Before you call this operation, make sure that you fully understand the billing methods, pricing, and refund rules for downgrades of RDS Custom instances.
     * When you call this operation, take note of the following items:
     * - You cannot modify the instance type of an expired instance. You can try again after you renew the instance.
     * - Only **standard cloud disk instances** support instance type changes.
     * - When you upgrade or downgrade the instance type, take note of the following items:
     *   - The instance must be in the **Running** or **Stopped** state.
     *   - The price difference for the downgrade is refunded to your original payment method. Vouchers that have been used are not refunded.
     * - Before you change the instance type or system cloud disk type, call the DescribeRCResourcesModification operation to query the available inventory in the destination zone.
     *
     * @param request - ModifyRCInstanceRequest
     * @returns ModifyRCInstanceResponse
     */
    modifyRCInstance(request: $_model.ModifyRCInstanceRequest): Promise<$_model.ModifyRCInstanceResponse>;
    /**
     * 修改rds custom实例的部分属性
     *
     * @param tmpReq - ModifyRCInstanceAttributeRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ModifyRCInstanceAttributeResponse
     */
    modifyRCInstanceAttributeWithOptions(tmpReq: $_model.ModifyRCInstanceAttributeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyRCInstanceAttributeResponse>;
    /**
     * 修改rds custom实例的部分属性
     *
     * @param request - ModifyRCInstanceAttributeRequest
     * @returns ModifyRCInstanceAttributeResponse
     */
    modifyRCInstanceAttribute(request: $_model.ModifyRCInstanceAttributeRequest): Promise<$_model.ModifyRCInstanceAttributeResponse>;
    /**
     * Modifies the billing method of an RDS Custom instance or a cloud disk. You can use this operation to convert a pay-as-you-go instance to a subscription instance and vice versa.
     *
     * @remarks
     * ### Precautions
     * - Before you call this operation, make sure that you fully understand the billing methods and pricing of RDS Custom, including subscription and pay-as-you-go.
     * - Make sure that the target instance is in the **Running** or **Stopped** state and your account has no overdue payments.
     * - Make sure that the cloud disk is in the **In_use** state and its billing method has not been modified in the last 15 minutes.
     * - After you change the billing method, fees are automatically deducted by default. Make sure that your account balance is sufficient. Otherwise, an abnormal order is generated and can only be canceled.
     * ### Before you begin
     * Refer to the corresponding feature documentation:
     * - [Change the billing method of an instance](https://help.aliyun.com/document_detail/2878542.html)
     * - [Change the billing method of a cloud disk](https://help.aliyun.com/document_detail/2878547.html)
     *
     * @param request - ModifyRCInstanceChargeTypeRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ModifyRCInstanceChargeTypeResponse
     */
    modifyRCInstanceChargeTypeWithOptions(request: $_model.ModifyRCInstanceChargeTypeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyRCInstanceChargeTypeResponse>;
    /**
     * Modifies the billing method of an RDS Custom instance or a cloud disk. You can use this operation to convert a pay-as-you-go instance to a subscription instance and vice versa.
     *
     * @remarks
     * ### Precautions
     * - Before you call this operation, make sure that you fully understand the billing methods and pricing of RDS Custom, including subscription and pay-as-you-go.
     * - Make sure that the target instance is in the **Running** or **Stopped** state and your account has no overdue payments.
     * - Make sure that the cloud disk is in the **In_use** state and its billing method has not been modified in the last 15 minutes.
     * - After you change the billing method, fees are automatically deducted by default. Make sure that your account balance is sufficient. Otherwise, an abnormal order is generated and can only be canceled.
     * ### Before you begin
     * Refer to the corresponding feature documentation:
     * - [Change the billing method of an instance](https://help.aliyun.com/document_detail/2878542.html)
     * - [Change the billing method of a cloud disk](https://help.aliyun.com/document_detail/2878547.html)
     *
     * @param request - ModifyRCInstanceChargeTypeRequest
     * @returns ModifyRCInstanceChargeTypeResponse
     */
    modifyRCInstanceChargeType(request: $_model.ModifyRCInstanceChargeTypeRequest): Promise<$_model.ModifyRCInstanceChargeTypeResponse>;
    /**
     * Modifies the name of an RDS Custom instance.
     *
     * @param request - ModifyRCInstanceDescriptionRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ModifyRCInstanceDescriptionResponse
     */
    modifyRCInstanceDescriptionWithOptions(request: $_model.ModifyRCInstanceDescriptionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyRCInstanceDescriptionResponse>;
    /**
     * Modifies the name of an RDS Custom instance.
     *
     * @param request - ModifyRCInstanceDescriptionRequest
     * @returns ModifyRCInstanceDescriptionResponse
     */
    modifyRCInstanceDescription(request: $_model.ModifyRCInstanceDescriptionRequest): Promise<$_model.ModifyRCInstanceDescriptionResponse>;
    /**
     * 修改RDS Custom实例密钥对
     *
     * @param request - ModifyRCInstanceKeyPairRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ModifyRCInstanceKeyPairResponse
     */
    modifyRCInstanceKeyPairWithOptions(request: $_model.ModifyRCInstanceKeyPairRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyRCInstanceKeyPairResponse>;
    /**
     * 修改RDS Custom实例密钥对
     *
     * @param request - ModifyRCInstanceKeyPairRequest
     * @returns ModifyRCInstanceKeyPairResponse
     */
    modifyRCInstanceKeyPair(request: $_model.ModifyRCInstanceKeyPairRequest): Promise<$_model.ModifyRCInstanceKeyPairResponse>;
    /**
     * 修改RDS Custom实例的公网配置
     *
     * @param request - ModifyRCInstanceNetworkSpecRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ModifyRCInstanceNetworkSpecResponse
     */
    modifyRCInstanceNetworkSpecWithOptions(request: $_model.ModifyRCInstanceNetworkSpecRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyRCInstanceNetworkSpecResponse>;
    /**
     * 修改RDS Custom实例的公网配置
     *
     * @param request - ModifyRCInstanceNetworkSpecRequest
     * @returns ModifyRCInstanceNetworkSpecResponse
     */
    modifyRCInstanceNetworkSpec(request: $_model.ModifyRCInstanceNetworkSpecRequest): Promise<$_model.ModifyRCInstanceNetworkSpecResponse>;
    /**
     * 修改RC实例安全组
     *
     * @param request - ModifyRCInstanceVpcAttributeRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ModifyRCInstanceVpcAttributeResponse
     */
    modifyRCInstanceVpcAttributeWithOptions(request: $_model.ModifyRCInstanceVpcAttributeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyRCInstanceVpcAttributeResponse>;
    /**
     * 修改RC实例安全组
     *
     * @param request - ModifyRCInstanceVpcAttributeRequest
     * @returns ModifyRCInstanceVpcAttributeResponse
     */
    modifyRCInstanceVpcAttribute(request: $_model.ModifyRCInstanceVpcAttributeRequest): Promise<$_model.ModifyRCInstanceVpcAttributeResponse>;
    /**
     * 修改RC安全组规则
     *
     * @param request - ModifyRCSecurityGroupPermissionRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ModifyRCSecurityGroupPermissionResponse
     */
    modifyRCSecurityGroupPermissionWithOptions(request: $_model.ModifyRCSecurityGroupPermissionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyRCSecurityGroupPermissionResponse>;
    /**
     * 修改RC安全组规则
     *
     * @param request - ModifyRCSecurityGroupPermissionRequest
     * @returns ModifyRCSecurityGroupPermissionResponse
     */
    modifyRCSecurityGroupPermission(request: $_model.ModifyRCSecurityGroupPermissionRequest): Promise<$_model.ModifyRCSecurityGroupPermissionResponse>;
    /**
     * 修改RCVCluster
     *
     * @param tmpReq - ModifyRCVClusterRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ModifyRCVClusterResponse
     */
    modifyRCVClusterWithOptions(tmpReq: $_model.ModifyRCVClusterRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyRCVClusterResponse>;
    /**
     * 修改RCVCluster
     *
     * @param request - ModifyRCVClusterRequest
     * @returns ModifyRCVClusterResponse
     */
    modifyRCVCluster(request: $_model.ModifyRCVClusterRequest): Promise<$_model.ModifyRCVClusterResponse>;
    /**
     * Modifies the latency threshold of a read/write splitting link and the read weights of instances.
     *
     * @remarks
     * ### Supported engines
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for SQL Server
     * ### Before you begin
     * When you call this operation, the instance must meet the following conditions. Otherwise, the operation fails:
     * * The MySQL instance uses a shared database proxy.
     * * Read/write splitting is enabled for the MySQL instance.
     * * The instance runs one of the following editions:
     *     * MySQL 5.7 high availability series (with local SSDs)
     *     * MySQL 5.6
     *     * SQL Server Cluster Edition
     *
     * @param request - ModifyReadWriteSplittingConnectionRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ModifyReadWriteSplittingConnectionResponse
     */
    modifyReadWriteSplittingConnectionWithOptions(request: $_model.ModifyReadWriteSplittingConnectionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyReadWriteSplittingConnectionResponse>;
    /**
     * Modifies the latency threshold of a read/write splitting link and the read weights of instances.
     *
     * @remarks
     * ### Supported engines
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for SQL Server
     * ### Before you begin
     * When you call this operation, the instance must meet the following conditions. Otherwise, the operation fails:
     * * The MySQL instance uses a shared database proxy.
     * * Read/write splitting is enabled for the MySQL instance.
     * * The instance runs one of the following editions:
     *     * MySQL 5.7 high availability series (with local SSDs)
     *     * MySQL 5.6
     *     * SQL Server Cluster Edition
     *
     * @param request - ModifyReadWriteSplittingConnectionRequest
     * @returns ModifyReadWriteSplittingConnectionResponse
     */
    modifyReadWriteSplittingConnection(request: $_model.ModifyReadWriteSplittingConnectionRequest): Promise<$_model.ModifyReadWriteSplittingConnectionResponse>;
    /**
     * Modifies the delayed replication time of an ApsaraDB RDS for MySQL read-only instance.
     *
     * @remarks
     * ### Applicable engine
     * ApsaraDB RDS for MySQL
     * ### Related documentation
     * >Notice: Before you call this operation, read the following documentation and make sure that you fully understand the prerequisites and impacts of this operation.
     * [Delayed replication of ApsaraDB RDS for MySQL read-only instances](https://help.aliyun.com/document_detail/96056.html)
     *
     * @param request - ModifyReadonlyInstanceDelayReplicationTimeRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ModifyReadonlyInstanceDelayReplicationTimeResponse
     */
    modifyReadonlyInstanceDelayReplicationTimeWithOptions(request: $_model.ModifyReadonlyInstanceDelayReplicationTimeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyReadonlyInstanceDelayReplicationTimeResponse>;
    /**
     * Modifies the delayed replication time of an ApsaraDB RDS for MySQL read-only instance.
     *
     * @remarks
     * ### Applicable engine
     * ApsaraDB RDS for MySQL
     * ### Related documentation
     * >Notice: Before you call this operation, read the following documentation and make sure that you fully understand the prerequisites and impacts of this operation.
     * [Delayed replication of ApsaraDB RDS for MySQL read-only instances](https://help.aliyun.com/document_detail/96056.html)
     *
     * @param request - ModifyReadonlyInstanceDelayReplicationTimeRequest
     * @returns ModifyReadonlyInstanceDelayReplicationTimeResponse
     */
    modifyReadonlyInstanceDelayReplicationTime(request: $_model.ModifyReadonlyInstanceDelayReplicationTimeRequest): Promise<$_model.ModifyReadonlyInstanceDelayReplicationTimeResponse>;
    /**
     * Moves an ApsaraDB RDS instance to a specified resource group.
     *
     * @remarks
     * ### Supported engines
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for PostgreSQL
     * - ApsaraDB RDS for SQL Server
     * - ApsaraDB RDS for MariaDB
     * ### Related documentation
     * >Notice: Before you call this operation, read the following documentation and make sure that you fully understand the prerequisites and impacts of this operation.
     * [Move resources across resource groups](https://help.aliyun.com/document_detail/94487.html)
     *
     * @param request - ModifyResourceGroupRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ModifyResourceGroupResponse
     */
    modifyResourceGroupWithOptions(request: $_model.ModifyResourceGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyResourceGroupResponse>;
    /**
     * Moves an ApsaraDB RDS instance to a specified resource group.
     *
     * @remarks
     * ### Supported engines
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for PostgreSQL
     * - ApsaraDB RDS for SQL Server
     * - ApsaraDB RDS for MariaDB
     * ### Related documentation
     * >Notice: Before you call this operation, read the following documentation and make sure that you fully understand the prerequisites and impacts of this operation.
     * [Move resources across resource groups](https://help.aliyun.com/document_detail/94487.html)
     *
     * @param request - ModifyResourceGroupRequest
     * @returns ModifyResourceGroupResponse
     */
    modifyResourceGroup(request: $_model.ModifyResourceGroupRequest): Promise<$_model.ModifyResourceGroupResponse>;
    /**
     * Enables or disables the SQL Explorer (SQL Audit) feature for an instance. This operation is deprecated. You can still call this operation, but it is no longer maintained.
     *
     * @remarks
     * This operation is deprecated. You can still call this operation, but Alibaba Cloud no longer maintains it. Use the [ModifySqlLogConfig](https://help.aliyun.com/document_detail/2778835.html) operation instead.
     *
     * @param request - ModifySQLCollectorPolicyRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ModifySQLCollectorPolicyResponse
     */
    modifySQLCollectorPolicyWithOptions(request: $_model.ModifySQLCollectorPolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifySQLCollectorPolicyResponse>;
    /**
     * Enables or disables the SQL Explorer (SQL Audit) feature for an instance. This operation is deprecated. You can still call this operation, but it is no longer maintained.
     *
     * @remarks
     * This operation is deprecated. You can still call this operation, but Alibaba Cloud no longer maintains it. Use the [ModifySqlLogConfig](https://help.aliyun.com/document_detail/2778835.html) operation instead.
     *
     * @param request - ModifySQLCollectorPolicyRequest
     * @returns ModifySQLCollectorPolicyResponse
     */
    modifySQLCollectorPolicy(request: $_model.ModifySQLCollectorPolicyRequest): Promise<$_model.ModifySQLCollectorPolicyResponse>;
    /**
     * Modifies the log retention period of SQL Explorer for an ApsaraDB RDS instance. This operation is deprecated and no longer maintained, but can still be invoked normally.
     *
     * @remarks
     * This operation is deprecated and no longer maintained by Alibaba Cloud, but remains available for use. Use the [ModifySqlLogConfig](https://help.aliyun.com/document_detail/2778835.html) operation instead.
     *
     * @param request - ModifySQLCollectorRetentionRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ModifySQLCollectorRetentionResponse
     */
    modifySQLCollectorRetentionWithOptions(request: $_model.ModifySQLCollectorRetentionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifySQLCollectorRetentionResponse>;
    /**
     * Modifies the log retention period of SQL Explorer for an ApsaraDB RDS instance. This operation is deprecated and no longer maintained, but can still be invoked normally.
     *
     * @remarks
     * This operation is deprecated and no longer maintained by Alibaba Cloud, but remains available for use. Use the [ModifySqlLogConfig](https://help.aliyun.com/document_detail/2778835.html) operation instead.
     *
     * @param request - ModifySQLCollectorRetentionRequest
     * @returns ModifySQLCollectorRetentionResponse
     */
    modifySQLCollectorRetention(request: $_model.ModifySQLCollectorRetentionRequest): Promise<$_model.ModifySQLCollectorRetentionResponse>;
    /**
     * Modifies the association between a specified ApsaraDB RDS instance and ECS security groups.
     *
     * @remarks
     * ### Supported engines
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for PostgreSQL
     * - ApsaraDB RDS for SQL Server
     * ### Related documentation
     * >Notice: Before you call this operation, read the following documentation and make sure that you fully understand the prerequisites and impacts of this operation.
     * - [Configure a security group for an ApsaraDB RDS for MySQL instance](https://help.aliyun.com/document_detail/201042.html)
     * - [Configure a security group for an ApsaraDB RDS for PostgreSQL instance](https://help.aliyun.com/document_detail/206310.html)
     * - [Configure a security group for an ApsaraDB RDS for SQL Server instance](https://help.aliyun.com/document_detail/2392322.html)
     *
     * @param request - ModifySecurityGroupConfigurationRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ModifySecurityGroupConfigurationResponse
     */
    modifySecurityGroupConfigurationWithOptions(request: $_model.ModifySecurityGroupConfigurationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifySecurityGroupConfigurationResponse>;
    /**
     * Modifies the association between a specified ApsaraDB RDS instance and ECS security groups.
     *
     * @remarks
     * ### Supported engines
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for PostgreSQL
     * - ApsaraDB RDS for SQL Server
     * ### Related documentation
     * >Notice: Before you call this operation, read the following documentation and make sure that you fully understand the prerequisites and impacts of this operation.
     * - [Configure a security group for an ApsaraDB RDS for MySQL instance](https://help.aliyun.com/document_detail/201042.html)
     * - [Configure a security group for an ApsaraDB RDS for PostgreSQL instance](https://help.aliyun.com/document_detail/206310.html)
     * - [Configure a security group for an ApsaraDB RDS for SQL Server instance](https://help.aliyun.com/document_detail/2392322.html)
     *
     * @param request - ModifySecurityGroupConfigurationRequest
     * @returns ModifySecurityGroupConfigurationResponse
     */
    modifySecurityGroupConfiguration(request: $_model.ModifySecurityGroupConfigurationRequest): Promise<$_model.ModifySecurityGroupConfigurationResponse>;
    /**
     * Modifies the IP whitelist configuration of a specified ApsaraDB RDS instance. This operation supports overwrite, append, and delete modes.
     *
     * @remarks
     * ### Supported engines
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for PostgreSQL
     * - ApsaraDB RDS for SQL Server
     * - ApsaraDB RDS for MariaDB
     * ### Related feature documentation
     * >Notice: Before you call this operation, carefully read the feature documentation to ensure that you fully understand the prerequisites and the impacts of the operation.
     * - [Configure an IP whitelist for an ApsaraDB RDS for MySQL instance](https://help.aliyun.com/document_detail/96118.html)
     * - [Configure an IP whitelist for an ApsaraDB RDS for PostgreSQL instance](https://help.aliyun.com/document_detail/43187.html)
     * - [Configure an IP whitelist for an ApsaraDB RDS for SQL Server instance](https://help.aliyun.com/document_detail/43186.html)
     * - [Configure an IP whitelist for an ApsaraDB RDS for MariaDB instance](https://help.aliyun.com/document_detail/90336.html)
     *
     * @param request - ModifySecurityIpsRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ModifySecurityIpsResponse
     */
    modifySecurityIpsWithOptions(request: $_model.ModifySecurityIpsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifySecurityIpsResponse>;
    /**
     * Modifies the IP whitelist configuration of a specified ApsaraDB RDS instance. This operation supports overwrite, append, and delete modes.
     *
     * @remarks
     * ### Supported engines
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for PostgreSQL
     * - ApsaraDB RDS for SQL Server
     * - ApsaraDB RDS for MariaDB
     * ### Related feature documentation
     * >Notice: Before you call this operation, carefully read the feature documentation to ensure that you fully understand the prerequisites and the impacts of the operation.
     * - [Configure an IP whitelist for an ApsaraDB RDS for MySQL instance](https://help.aliyun.com/document_detail/96118.html)
     * - [Configure an IP whitelist for an ApsaraDB RDS for PostgreSQL instance](https://help.aliyun.com/document_detail/43187.html)
     * - [Configure an IP whitelist for an ApsaraDB RDS for SQL Server instance](https://help.aliyun.com/document_detail/43186.html)
     * - [Configure an IP whitelist for an ApsaraDB RDS for MariaDB instance](https://help.aliyun.com/document_detail/90336.html)
     *
     * @param request - ModifySecurityIpsRequest
     * @returns ModifySecurityIpsResponse
     */
    modifySecurityIps(request: $_model.ModifySecurityIpsRequest): Promise<$_model.ModifySecurityIpsResponse>;
    /**
     * Modifies the historical task information in the task center.
     *
     * @param request - ModifyTaskInfoRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ModifyTaskInfoResponse
     */
    modifyTaskInfoWithOptions(request: $_model.ModifyTaskInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyTaskInfoResponse>;
    /**
     * Modifies the historical task information in the task center.
     *
     * @param request - ModifyTaskInfoRequest
     * @returns ModifyTaskInfoResponse
     */
    modifyTaskInfo(request: $_model.ModifyTaskInfoRequest): Promise<$_model.ModifyTaskInfoResponse>;
    /**
     * Edits a whitelist template, including creating, modifying, and deleting whitelist templates.
     *
     * @remarks
     * ### Supported engines
     * - RDS MySQL
     * - RDS PostgreSQL
     * - RDS SQL Server
     *
     * @param request - ModifyWhitelistTemplateRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ModifyWhitelistTemplateResponse
     */
    modifyWhitelistTemplateWithOptions(request: $_model.ModifyWhitelistTemplateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyWhitelistTemplateResponse>;
    /**
     * Edits a whitelist template, including creating, modifying, and deleting whitelist templates.
     *
     * @remarks
     * ### Supported engines
     * - RDS MySQL
     * - RDS PostgreSQL
     * - RDS SQL Server
     *
     * @param request - ModifyWhitelistTemplateRequest
     * @returns ModifyWhitelistTemplateResponse
     */
    modifyWhitelistTemplate(request: $_model.ModifyWhitelistTemplateRequest): Promise<$_model.ModifyWhitelistTemplateResponse>;
    /**
     * Performs a pre-check for creating an order to delete a node.
     *
     * @param tmpReq - PreCheckCreateOrderForDeleteDBNodesRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns PreCheckCreateOrderForDeleteDBNodesResponse
     */
    preCheckCreateOrderForDeleteDBNodesWithOptions(tmpReq: $_model.PreCheckCreateOrderForDeleteDBNodesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.PreCheckCreateOrderForDeleteDBNodesResponse>;
    /**
     * Performs a pre-check for creating an order to delete a node.
     *
     * @param request - PreCheckCreateOrderForDeleteDBNodesRequest
     * @returns PreCheckCreateOrderForDeleteDBNodesResponse
     */
    preCheckCreateOrderForDeleteDBNodes(request: $_model.PreCheckCreateOrderForDeleteDBNodesRequest): Promise<$_model.PreCheckCreateOrderForDeleteDBNodesResponse>;
    /**
     * Checks whether an ApsaraDB RDS for PostgreSQL primary instance meets the prerequisites for creating a DuckDB-based analytical instance. For conditions that are not met, it returns the failure reasons and provides solutions or recommended target values.
     *
     * @remarks
     * ### Applicable engine
     * ApsaraDB RDS for PostgreSQL
     * ### Related feature documentation
     * [DuckDB-based analytical instance](https://help.aliyun.com/document_detail/2977241.html)
     *
     * @param request - PrecheckDuckDBDependencyRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns PrecheckDuckDBDependencyResponse
     */
    precheckDuckDBDependencyWithOptions(request: $_model.PrecheckDuckDBDependencyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.PrecheckDuckDBDependencyResponse>;
    /**
     * Checks whether an ApsaraDB RDS for PostgreSQL primary instance meets the prerequisites for creating a DuckDB-based analytical instance. For conditions that are not met, it returns the failure reasons and provides solutions or recommended target values.
     *
     * @remarks
     * ### Applicable engine
     * ApsaraDB RDS for PostgreSQL
     * ### Related feature documentation
     * [DuckDB-based analytical instance](https://help.aliyun.com/document_detail/2977241.html)
     *
     * @param request - PrecheckDuckDBDependencyRequest
     * @returns PrecheckDuckDBDependencyResponse
     */
    precheckDuckDBDependency(request: $_model.PrecheckDuckDBDependencyRequest): Promise<$_model.PrecheckDuckDBDependencyResponse>;
    /**
     * Clears the binary logs of an ApsaraDB RDS instance.
     *
     * @remarks
     * ### Applicable engines
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for SQL Server
     * ### Description
     * ApsaraDB RDS instances have an automatic log backup upload mechanism. However, when the instance storage is insufficient, you can use this operation to manually upload log backups and release storage space in advance. After the upload, the system automatically clears duplicate binary log backups.
     * Calling this operation uploads binary log backups to OSS (for SQL Server, the transaction log is shrunk before the upload), and then clears the binary log backups to release storage space.
     * ### Precautions
     * - Uploading log backups does not affect data restoration.
     * - The released space is storage space, not backup storage space. Therefore, the backup storage usage is not reduced.
     * - The OSS to which log backups are uploaded is provided by ApsaraDB RDS. You do not need to purchase OSS, and you cannot access this OSS.
     *
     * @param request - PurgeDBInstanceLogRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns PurgeDBInstanceLogResponse
     */
    purgeDBInstanceLogWithOptions(request: $_model.PurgeDBInstanceLogRequest, runtime: $dara.RuntimeOptions): Promise<$_model.PurgeDBInstanceLogResponse>;
    /**
     * Clears the binary logs of an ApsaraDB RDS instance.
     *
     * @remarks
     * ### Applicable engines
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for SQL Server
     * ### Description
     * ApsaraDB RDS instances have an automatic log backup upload mechanism. However, when the instance storage is insufficient, you can use this operation to manually upload log backups and release storage space in advance. After the upload, the system automatically clears duplicate binary log backups.
     * Calling this operation uploads binary log backups to OSS (for SQL Server, the transaction log is shrunk before the upload), and then clears the binary log backups to release storage space.
     * ### Precautions
     * - Uploading log backups does not affect data restoration.
     * - The released space is storage space, not backup storage space. Therefore, the backup storage usage is not reduced.
     * - The OSS to which log backups are uploaded is provided by ApsaraDB RDS. You do not need to purchase OSS, and you cannot access this OSS.
     *
     * @param request - PurgeDBInstanceLogRequest
     * @returns PurgeDBInstanceLogResponse
     */
    purgeDBInstanceLog(request: $_model.PurgeDBInstanceLogRequest): Promise<$_model.PurgeDBInstanceLogResponse>;
    /**
     * Queries ApsaraDB RDS notifications.
     *
     * @remarks
     * ### Supported engines
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for PostgreSQL
     * - ApsaraDB RDS for SQL Server
     * - ApsaraDB RDS for MariaDB
     * ### Feature description
     * ApsaraDB RDS notifications are highlighted at the top of the ApsaraDB RDS console. These notifications include renewal reminders and instance creation failure reminders.
     * After you query notifications by calling this operation, you can call the [ConfirmNotify](https://help.aliyun.com/document_detail/610444.html) operation to mark a notification as confirmed. This indicates that you have acknowledged the content of the notification.
     *
     * @param request - QueryNotifyRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns QueryNotifyResponse
     */
    queryNotifyWithOptions(request: $_model.QueryNotifyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryNotifyResponse>;
    /**
     * Queries ApsaraDB RDS notifications.
     *
     * @remarks
     * ### Supported engines
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for PostgreSQL
     * - ApsaraDB RDS for SQL Server
     * - ApsaraDB RDS for MariaDB
     * ### Feature description
     * ApsaraDB RDS notifications are highlighted at the top of the ApsaraDB RDS console. These notifications include renewal reminders and instance creation failure reminders.
     * After you query notifications by calling this operation, you can call the [ConfirmNotify](https://help.aliyun.com/document_detail/610444.html) operation to mark a notification as confirmed. This indicates that you have acknowledged the content of the notification.
     *
     * @param request - QueryNotifyRequest
     * @returns QueryNotifyResponse
     */
    queryNotify(request: $_model.QueryNotifyRequest): Promise<$_model.QueryNotifyResponse>;
    /**
     * Queries the hot issues of the RDS bot.
     *
     * @param request - QueryRecommendByCodeRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns QueryRecommendByCodeResponse
     */
    queryRecommendByCodeWithOptions(request: $_model.QueryRecommendByCodeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryRecommendByCodeResponse>;
    /**
     * Queries the hot issues of the RDS bot.
     *
     * @param request - QueryRecommendByCodeRequest
     * @returns QueryRecommendByCodeResponse
     */
    queryRecommendByCode(request: $_model.QueryRecommendByCodeRequest): Promise<$_model.QueryRecommendByCodeResponse>;
    /**
     * 创建服务关联角色和开租
     *
     * @param request - RdsCustomInitRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns RdsCustomInitResponse
     */
    rdsCustomInitWithOptions(request: $_model.RdsCustomInitRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RdsCustomInitResponse>;
    /**
     * 创建服务关联角色和开租
     *
     * @param request - RdsCustomInitRequest
     * @returns RdsCustomInitResponse
     */
    rdsCustomInit(request: $_model.RdsCustomInitRequest): Promise<$_model.RdsCustomInitResponse>;
    /**
     * 重启RDS用户专属主机实例
     *
     * @param request - RebootRCInstanceRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns RebootRCInstanceResponse
     */
    rebootRCInstanceWithOptions(request: $_model.RebootRCInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RebootRCInstanceResponse>;
    /**
     * 重启RDS用户专属主机实例
     *
     * @param request - RebootRCInstanceRequest
     * @returns RebootRCInstanceResponse
     */
    rebootRCInstance(request: $_model.RebootRCInstanceRequest): Promise<$_model.RebootRCInstanceResponse>;
    /**
     * 批量重启RC实例
     *
     * @param tmpReq - RebootRCInstancesRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns RebootRCInstancesResponse
     */
    rebootRCInstancesWithOptions(tmpReq: $_model.RebootRCInstancesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RebootRCInstancesResponse>;
    /**
     * 批量重启RC实例
     *
     * @param request - RebootRCInstancesRequest
     * @returns RebootRCInstancesResponse
     */
    rebootRCInstances(request: $_model.RebootRCInstancesRequest): Promise<$_model.RebootRCInstancesResponse>;
    /**
     * Rebuilds a secondary instance in a dedicated cluster by calling the RebuildDBInstance operation.
     *
     * @remarks
     * The dedicated cluster feature allows you to manage instances in batches by cluster. You can create multiple dedicated clusters in a region. Each dedicated cluster contains multiple hosts, and each host contains multiple instances. For more information, see [Overview of dedicated clusters](https://help.aliyun.com/document_detail/141455.html).
     *
     * @param request - RebuildDBInstanceRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns RebuildDBInstanceResponse
     */
    rebuildDBInstanceWithOptions(request: $_model.RebuildDBInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RebuildDBInstanceResponse>;
    /**
     * Rebuilds a secondary instance in a dedicated cluster by calling the RebuildDBInstance operation.
     *
     * @remarks
     * The dedicated cluster feature allows you to manage instances in batches by cluster. You can create multiple dedicated clusters in a region. Each dedicated cluster contains multiple hosts, and each host contains multiple instances. For more information, see [Overview of dedicated clusters](https://help.aliyun.com/document_detail/141455.html).
     *
     * @param request - RebuildDBInstanceRequest
     * @returns RebuildDBInstanceResponse
     */
    rebuildDBInstance(request: $_model.RebuildDBInstanceRequest): Promise<$_model.RebuildDBInstanceResponse>;
    /**
     * Rebuilds the data synchronization link for an RDS disaster recovery instance.
     *
     * @remarks
     * ### Applicable engines
     * - ApsaraDB RDS for PostgreSQL
     *
     * @param request - RebuildReplicationLinkRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns RebuildReplicationLinkResponse
     */
    rebuildReplicationLinkWithOptions(request: $_model.RebuildReplicationLinkRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RebuildReplicationLinkResponse>;
    /**
     * Rebuilds the data synchronization link for an RDS disaster recovery instance.
     *
     * @remarks
     * ### Applicable engines
     * - ApsaraDB RDS for PostgreSQL
     *
     * @param request - RebuildReplicationLinkRequest
     * @returns RebuildReplicationLinkResponse
     */
    rebuildReplicationLink(request: $_model.RebuildReplicationLinkRequest): Promise<$_model.RebuildReplicationLinkResponse>;
    /**
     * Performs an instance switchover between an ApsaraDB RDS for MySQL primary instance and a disaster recovery instance.
     *
     * @remarks
     * ### Applicable engine
     * ApsaraDB RDS for MySQL.
     *
     * @param request - ReceiveDBInstanceRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ReceiveDBInstanceResponse
     */
    receiveDBInstanceWithOptions(request: $_model.ReceiveDBInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ReceiveDBInstanceResponse>;
    /**
     * Performs an instance switchover between an ApsaraDB RDS for MySQL primary instance and a disaster recovery instance.
     *
     * @remarks
     * ### Applicable engine
     * ApsaraDB RDS for MySQL.
     *
     * @param request - ReceiveDBInstanceRequest
     * @returns ReceiveDBInstanceResponse
     */
    receiveDBInstance(request: $_model.ReceiveDBInstanceRequest): Promise<$_model.ReceiveDBInstanceResponse>;
    /**
     * Restores the backup data of an ApsaraDB RDS for SQL Server instance to an existing instance or a new instance.
     *
     * @remarks
     * ### Supported engines
     * ApsaraDB RDS for SQL Server (instances of SQL Server 2012 and later)
     * ### Related documentation
     * >Notice: Before you call this operation, carefully read the documentation to ensure that you fully understand the prerequisites and impacts.
     * [Restore SQL Server data](https://help.aliyun.com/document_detail/95722.html)
     *
     * @param request - RecoveryDBInstanceRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns RecoveryDBInstanceResponse
     */
    recoveryDBInstanceWithOptions(request: $_model.RecoveryDBInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RecoveryDBInstanceResponse>;
    /**
     * Restores the backup data of an ApsaraDB RDS for SQL Server instance to an existing instance or a new instance.
     *
     * @remarks
     * ### Supported engines
     * ApsaraDB RDS for SQL Server (instances of SQL Server 2012 and later)
     * ### Related documentation
     * >Notice: Before you call this operation, carefully read the documentation to ensure that you fully understand the prerequisites and impacts.
     * [Restore SQL Server data](https://help.aliyun.com/document_detail/95722.html)
     *
     * @param request - RecoveryDBInstanceRequest
     * @returns RecoveryDBInstanceResponse
     */
    recoveryDBInstance(request: $_model.RecoveryDBInstanceRequest): Promise<$_model.RecoveryDBInstanceResponse>;
    /**
     * 重新部署实例
     *
     * @param request - RedeployRCInstanceRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns RedeployRCInstanceResponse
     */
    redeployRCInstanceWithOptions(request: $_model.RedeployRCInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RedeployRCInstanceResponse>;
    /**
     * 重新部署实例
     *
     * @param request - RedeployRCInstanceRequest
     * @returns RedeployRCInstanceResponse
     */
    redeployRCInstance(request: $_model.RedeployRCInstanceRequest): Promise<$_model.RedeployRCInstanceResponse>;
    /**
     * Releases the public endpoint of an ApsaraDB RDS instance.
     *
     * @remarks
     * ### Supported engines
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for PostgreSQL
     * - ApsaraDB RDS for SQL Server
     * - ApsaraDB RDS for MariaDB
     * ### Related documentation
     * - [Release the public endpoint of an ApsaraDB RDS for MySQL instance](https://help.aliyun.com/document_detail/26128.html)
     * - [Release the public endpoint of an ApsaraDB RDS for PostgreSQL instance](https://help.aliyun.com/document_detail/97738.html)
     * - [Release the public endpoint of an ApsaraDB RDS for SQL Server instance](https://help.aliyun.com/document_detail/97736.html)
     * - [Release the public endpoint of an ApsaraDB RDS for MariaDB instance](https://help.aliyun.com/document_detail/97740.html)
     *
     * @param request - ReleaseInstanceConnectionRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ReleaseInstanceConnectionResponse
     */
    releaseInstanceConnectionWithOptions(request: $_model.ReleaseInstanceConnectionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ReleaseInstanceConnectionResponse>;
    /**
     * Releases the public endpoint of an ApsaraDB RDS instance.
     *
     * @remarks
     * ### Supported engines
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for PostgreSQL
     * - ApsaraDB RDS for SQL Server
     * - ApsaraDB RDS for MariaDB
     * ### Related documentation
     * - [Release the public endpoint of an ApsaraDB RDS for MySQL instance](https://help.aliyun.com/document_detail/26128.html)
     * - [Release the public endpoint of an ApsaraDB RDS for PostgreSQL instance](https://help.aliyun.com/document_detail/97738.html)
     * - [Release the public endpoint of an ApsaraDB RDS for SQL Server instance](https://help.aliyun.com/document_detail/97736.html)
     * - [Release the public endpoint of an ApsaraDB RDS for MariaDB instance](https://help.aliyun.com/document_detail/97740.html)
     *
     * @param request - ReleaseInstanceConnectionRequest
     * @returns ReleaseInstanceConnectionResponse
     */
    releaseInstanceConnection(request: $_model.ReleaseInstanceConnectionRequest): Promise<$_model.ReleaseInstanceConnectionResponse>;
    /**
     * Releases the public endpoint of an instance.
     *
     * @remarks
     * ### Supported engines
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for PostgreSQL
     * - ApsaraDB RDS for SQL Server
     * - ApsaraDB RDS for MariaDB
     * ### Related documentation
     * >Notice: Before you call this operation, read the following documentation and make sure that you fully understand the prerequisites and impacts of this operation.
     * - [Release the public endpoint of an ApsaraDB RDS for MySQL instance](https://help.aliyun.com/document_detail/26128.html)
     * - [Release the public endpoint of an ApsaraDB RDS for PostgreSQL instance](https://help.aliyun.com/document_detail/97738.html)
     * - [Release the public endpoint of an ApsaraDB RDS for SQL Server instance](https://help.aliyun.com/document_detail/97736.html)
     * - [Release the public endpoint of an ApsaraDB RDS for MariaDB instance](https://help.aliyun.com/document_detail/97740.html)
     *
     * @param request - ReleaseInstancePublicConnectionRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ReleaseInstancePublicConnectionResponse
     */
    releaseInstancePublicConnectionWithOptions(request: $_model.ReleaseInstancePublicConnectionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ReleaseInstancePublicConnectionResponse>;
    /**
     * Releases the public endpoint of an instance.
     *
     * @remarks
     * ### Supported engines
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for PostgreSQL
     * - ApsaraDB RDS for SQL Server
     * - ApsaraDB RDS for MariaDB
     * ### Related documentation
     * >Notice: Before you call this operation, read the following documentation and make sure that you fully understand the prerequisites and impacts of this operation.
     * - [Release the public endpoint of an ApsaraDB RDS for MySQL instance](https://help.aliyun.com/document_detail/26128.html)
     * - [Release the public endpoint of an ApsaraDB RDS for PostgreSQL instance](https://help.aliyun.com/document_detail/97738.html)
     * - [Release the public endpoint of an ApsaraDB RDS for SQL Server instance](https://help.aliyun.com/document_detail/97736.html)
     * - [Release the public endpoint of an ApsaraDB RDS for MariaDB instance](https://help.aliyun.com/document_detail/97740.html)
     *
     * @param request - ReleaseInstancePublicConnectionRequest
     * @returns ReleaseInstancePublicConnectionResponse
     */
    releaseInstancePublicConnection(request: $_model.ReleaseInstancePublicConnectionRequest): Promise<$_model.ReleaseInstancePublicConnectionResponse>;
    /**
     * Releases the read/write splitting endpoint.
     *
     * @remarks
     * ### Supported engines
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for SQL Server
     * ### Prerequisites
     * When you call this operation, the instance must meet the following requirements. Otherwise, the operation fails:
     * * The MySQL instance uses the shared database proxy.
     * * Read/write splitting is enabled for the instance.
     * * The instance runs one of the following editions:
     *     * MySQL 5.7 High-availability Edition (with local SSDs)
     *     * MySQL 5.6
     *     * SQL Server Cluster Edition
     *
     * @param request - ReleaseReadWriteSplittingConnectionRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ReleaseReadWriteSplittingConnectionResponse
     */
    releaseReadWriteSplittingConnectionWithOptions(request: $_model.ReleaseReadWriteSplittingConnectionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ReleaseReadWriteSplittingConnectionResponse>;
    /**
     * Releases the read/write splitting endpoint.
     *
     * @remarks
     * ### Supported engines
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for SQL Server
     * ### Prerequisites
     * When you call this operation, the instance must meet the following requirements. Otherwise, the operation fails:
     * * The MySQL instance uses the shared database proxy.
     * * Read/write splitting is enabled for the instance.
     * * The instance runs one of the following editions:
     *     * MySQL 5.7 High-availability Edition (with local SSDs)
     *     * MySQL 5.6
     *     * SQL Server Cluster Edition
     *
     * @param request - ReleaseReadWriteSplittingConnectionRequest
     * @returns ReleaseReadWriteSplittingConnectionResponse
     */
    releaseReadWriteSplittingConnection(request: $_model.ReleaseReadWriteSplittingConnectionRequest): Promise<$_model.ReleaseReadWriteSplittingConnectionResponse>;
    /**
     * Removes ApsaraDB RDS Custom instances from a deployment set.
     *
     * @remarks
     * Removing an instance from a deployment set is a lossless operation and does not cause the instance to restart.
     *
     * @param request - RemoveRCInstancesFromDeploymentSetRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns RemoveRCInstancesFromDeploymentSetResponse
     */
    removeRCInstancesFromDeploymentSetWithOptions(request: $_model.RemoveRCInstancesFromDeploymentSetRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RemoveRCInstancesFromDeploymentSetResponse>;
    /**
     * Removes ApsaraDB RDS Custom instances from a deployment set.
     *
     * @remarks
     * Removing an instance from a deployment set is a lossless operation and does not cause the instance to restart.
     *
     * @param request - RemoveRCInstancesFromDeploymentSetRequest
     * @returns RemoveRCInstancesFromDeploymentSetResponse
     */
    removeRCInstancesFromDeploymentSet(request: $_model.RemoveRCInstancesFromDeploymentSetRequest): Promise<$_model.RemoveRCInstancesFromDeploymentSetResponse>;
    /**
     * Unbinds tags from an ApsaraDB RDS instance.
     *
     * @remarks
     * ### Supported engines
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for PostgreSQL
     * - ApsaraDB RDS for SQL Server
     * - ApsaraDB RDS for MariaDB
     * ### Precautions
     * * You can unbind up to 10 tags at a time.
     * * If all instances bound to a tag are unbound, the tag is automatically deleted.
     * * If you specify only a tag key (TagKey) without a tag value (TagValue) when unbinding tags, all tags that match the tag key are unbound.
     * * You must specify at least one key-value pair or a single tag key.
     *
     * @param request - RemoveTagsFromResourceRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns RemoveTagsFromResourceResponse
     */
    removeTagsFromResourceWithOptions(request: $_model.RemoveTagsFromResourceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RemoveTagsFromResourceResponse>;
    /**
     * Unbinds tags from an ApsaraDB RDS instance.
     *
     * @remarks
     * ### Supported engines
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for PostgreSQL
     * - ApsaraDB RDS for SQL Server
     * - ApsaraDB RDS for MariaDB
     * ### Precautions
     * * You can unbind up to 10 tags at a time.
     * * If all instances bound to a tag are unbound, the tag is automatically deleted.
     * * If you specify only a tag key (TagKey) without a tag value (TagValue) when unbinding tags, all tags that match the tag key are unbound.
     * * You must specify at least one key-value pair or a single tag key.
     *
     * @param request - RemoveTagsFromResourceRequest
     * @returns RemoveTagsFromResourceResponse
     */
    removeTagsFromResource(request: $_model.RemoveTagsFromResourceRequest): Promise<$_model.RemoveTagsFromResourceResponse>;
    /**
     * Manually renews a subscription ApsaraDB RDS instance.
     *
     * @remarks
     * ### Supported engines
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for PostgreSQL
     * - ApsaraDB RDS for SQL Server
     * - ApsaraDB RDS for MariaDB
     * ### Related documentation
     * >Warning: This API operation involves fees. Read the related documentation carefully before you perform this operation.
     * - [Manually renew an ApsaraDB RDS for MySQL instance](https://help.aliyun.com/document_detail/96050.html)
     * - [Manually renew an ApsaraDB RDS for PostgreSQL instance](https://help.aliyun.com/document_detail/96741.html)
     * - [Manually renew an ApsaraDB RDS for SQL Server instance](https://help.aliyun.com/document_detail/95637.html)
     * - [Manually renew an ApsaraDB RDS for MariaDB instance](https://help.aliyun.com/document_detail/97122.html)
     *
     * @param request - RenewInstanceRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns RenewInstanceResponse
     */
    renewInstanceWithOptions(request: $_model.RenewInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RenewInstanceResponse>;
    /**
     * Manually renews a subscription ApsaraDB RDS instance.
     *
     * @remarks
     * ### Supported engines
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for PostgreSQL
     * - ApsaraDB RDS for SQL Server
     * - ApsaraDB RDS for MariaDB
     * ### Related documentation
     * >Warning: This API operation involves fees. Read the related documentation carefully before you perform this operation.
     * - [Manually renew an ApsaraDB RDS for MySQL instance](https://help.aliyun.com/document_detail/96050.html)
     * - [Manually renew an ApsaraDB RDS for PostgreSQL instance](https://help.aliyun.com/document_detail/96741.html)
     * - [Manually renew an ApsaraDB RDS for SQL Server instance](https://help.aliyun.com/document_detail/95637.html)
     * - [Manually renew an ApsaraDB RDS for MariaDB instance](https://help.aliyun.com/document_detail/97122.html)
     *
     * @param request - RenewInstanceRequest
     * @returns RenewInstanceResponse
     */
    renewInstance(request: $_model.RenewInstanceRequest): Promise<$_model.RenewInstanceResponse>;
    /**
     * Renews a subscription RDS Custom instance.
     *
     * @param request - RenewRCInstanceRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns RenewRCInstanceResponse
     */
    renewRCInstanceWithOptions(request: $_model.RenewRCInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RenewRCInstanceResponse>;
    /**
     * Renews a subscription RDS Custom instance.
     *
     * @param request - RenewRCInstanceRequest
     * @returns RenewRCInstanceResponse
     */
    renewRCInstance(request: $_model.RenewRCInstanceRequest): Promise<$_model.RenewRCInstanceResponse>;
    /**
     * Reinstalls the operating system of an RDS Custom instance.
     *
     * @remarks
     * - The instance must be in the Stopped state.
     * - Reinstalling the operating system causes data loss on the original system cloud disk. Proceed with caution.
     *
     * @param request - ReplaceRCInstanceSystemDiskRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ReplaceRCInstanceSystemDiskResponse
     */
    replaceRCInstanceSystemDiskWithOptions(request: $_model.ReplaceRCInstanceSystemDiskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ReplaceRCInstanceSystemDiskResponse>;
    /**
     * Reinstalls the operating system of an RDS Custom instance.
     *
     * @remarks
     * - The instance must be in the Stopped state.
     * - Reinstalling the operating system causes data loss on the original system cloud disk. Proceed with caution.
     *
     * @param request - ReplaceRCInstanceSystemDiskRequest
     * @returns ReplaceRCInstanceSystemDiskResponse
     */
    replaceRCInstanceSystemDisk(request: $_model.ReplaceRCInstanceSystemDiskRequest): Promise<$_model.ReplaceRCInstanceSystemDiskResponse>;
    /**
     * Resets the permissions of a privileged account.
     *
     * @remarks
     * ### Applicable engines
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for SQL Server
     * - ApsaraDB RDS for MariaDB
     * ### Related documentation
     * >Notice: Before you call this operation, read the following documentation and make sure that you fully understand the prerequisites and impacts of this operation.
     * [Reset the permissions of a privileged account](https://help.aliyun.com/document_detail/140724.html)
     *
     * @param request - ResetAccountRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ResetAccountResponse
     */
    resetAccountWithOptions(request: $_model.ResetAccountRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ResetAccountResponse>;
    /**
     * Resets the permissions of a privileged account.
     *
     * @remarks
     * ### Applicable engines
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for SQL Server
     * - ApsaraDB RDS for MariaDB
     * ### Related documentation
     * >Notice: Before you call this operation, read the following documentation and make sure that you fully understand the prerequisites and impacts of this operation.
     * [Reset the permissions of a privileged account](https://help.aliyun.com/document_detail/140724.html)
     *
     * @param request - ResetAccountRequest
     * @returns ResetAccountResponse
     */
    resetAccount(request: $_model.ResetAccountRequest): Promise<$_model.ResetAccountResponse>;
    /**
     * Resets the password of a database account.
     *
     * @remarks
     * ### Applicable engines
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for PostgreSQL
     * - ApsaraDB RDS for SQL Server
     * - ApsaraDB RDS for MariaDB
     * ### Related documentation
     * >Notice: Before you call this operation, read the following documentation and make sure that you fully understand the prerequisites and impacts of this operation.
     * - [Reset the password of an ApsaraDB RDS for MySQL instance](https://help.aliyun.com/document_detail/96100.html)
     * - [Reset the password of an ApsaraDB RDS for PostgreSQL instance](https://help.aliyun.com/document_detail/96814.html)
     * - [Reset the password of an ApsaraDB RDS for SQL Server instance](https://help.aliyun.com/document_detail/95691.html)
     * - [Reset the password of an ApsaraDB RDS for MariaDB instance](https://help.aliyun.com/document_detail/97133.html)
     *
     * @param request - ResetAccountPasswordRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ResetAccountPasswordResponse
     */
    resetAccountPasswordWithOptions(request: $_model.ResetAccountPasswordRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ResetAccountPasswordResponse>;
    /**
     * Resets the password of a database account.
     *
     * @remarks
     * ### Applicable engines
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for PostgreSQL
     * - ApsaraDB RDS for SQL Server
     * - ApsaraDB RDS for MariaDB
     * ### Related documentation
     * >Notice: Before you call this operation, read the following documentation and make sure that you fully understand the prerequisites and impacts of this operation.
     * - [Reset the password of an ApsaraDB RDS for MySQL instance](https://help.aliyun.com/document_detail/96100.html)
     * - [Reset the password of an ApsaraDB RDS for PostgreSQL instance](https://help.aliyun.com/document_detail/96814.html)
     * - [Reset the password of an ApsaraDB RDS for SQL Server instance](https://help.aliyun.com/document_detail/95691.html)
     * - [Reset the password of an ApsaraDB RDS for MariaDB instance](https://help.aliyun.com/document_detail/97133.html)
     *
     * @param request - ResetAccountPasswordRequest
     * @returns ResetAccountPasswordResponse
     */
    resetAccountPassword(request: $_model.ResetAccountPasswordRequest): Promise<$_model.ResetAccountPasswordResponse>;
    /**
     * Expands the instance storage of an ApsaraDB RDS Custom instance.
     *
     * @remarks
     * Storage space changes are not supported for instances with local disks.
     *
     * @param request - ResizeRCInstanceDiskRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ResizeRCInstanceDiskResponse
     */
    resizeRCInstanceDiskWithOptions(request: $_model.ResizeRCInstanceDiskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ResizeRCInstanceDiskResponse>;
    /**
     * Expands the instance storage of an ApsaraDB RDS Custom instance.
     *
     * @remarks
     * Storage space changes are not supported for instances with local disks.
     *
     * @param request - ResizeRCInstanceDiskRequest
     * @returns ResizeRCInstanceDiskResponse
     */
    resizeRCInstanceDisk(request: $_model.ResizeRCInstanceDiskRequest): Promise<$_model.ResizeRCInstanceDiskResponse>;
    /**
     * Manually restarts an ApsaraDB RDS instance.
     *
     * @remarks
     * ### Supported engines
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for PostgreSQL
     * - ApsaraDB RDS for SQL Server
     * - ApsaraDB RDS for MariaDB
     * ### Related documentation
     * >Notice: Before you call this operation, read the following documentation and make sure that you fully understand the prerequisites and impacts of this operation.
     * - [Restart an ApsaraDB RDS for MySQL instance](https://help.aliyun.com/document_detail/96051.html)
     * - [Restart an ApsaraDB RDS for PostgreSQL instance](https://help.aliyun.com/document_detail/96798.html)
     * - [Restart an ApsaraDB RDS for SQL Server instance](https://help.aliyun.com/document_detail/95656.html)
     * - [Restart an ApsaraDB RDS for MariaDB instance](https://help.aliyun.com/document_detail/97472.html)
     *
     * @param request - RestartDBInstanceRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns RestartDBInstanceResponse
     */
    restartDBInstanceWithOptions(request: $_model.RestartDBInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RestartDBInstanceResponse>;
    /**
     * Manually restarts an ApsaraDB RDS instance.
     *
     * @remarks
     * ### Supported engines
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for PostgreSQL
     * - ApsaraDB RDS for SQL Server
     * - ApsaraDB RDS for MariaDB
     * ### Related documentation
     * >Notice: Before you call this operation, read the following documentation and make sure that you fully understand the prerequisites and impacts of this operation.
     * - [Restart an ApsaraDB RDS for MySQL instance](https://help.aliyun.com/document_detail/96051.html)
     * - [Restart an ApsaraDB RDS for PostgreSQL instance](https://help.aliyun.com/document_detail/96798.html)
     * - [Restart an ApsaraDB RDS for SQL Server instance](https://help.aliyun.com/document_detail/95656.html)
     * - [Restart an ApsaraDB RDS for MariaDB instance](https://help.aliyun.com/document_detail/97472.html)
     *
     * @param request - RestartDBInstanceRequest
     * @returns RestartDBInstanceResponse
     */
    restartDBInstance(request: $_model.RestartDBInstanceRequest): Promise<$_model.RestartDBInstanceResponse>;
    /**
     * Restores data across regions to an existing instance.
     *
     * @remarks
     * > Before the restoration, you can call the CheckCreateDdrDBInstance operation to check whether an ApsaraDB RDS instance can be restored across regions by using a cross-region backup set.
     * ### Supported engines
     * ApsaraDB RDS for MySQL
     * ### Related documentation
     * >Notice: Before you call this operation, read the documentation to understand the prerequisites and impacts.</notice>
     * - [Cross-region backup for ApsaraDB RDS for MySQL](https://help.aliyun.com/document_detail/120824.html)
     * - [Cross-region restoration for ApsaraDB RDS for MySQL](https://help.aliyun.com/document_detail/120875.html)
     *
     * @param request - RestoreDdrTableRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns RestoreDdrTableResponse
     */
    restoreDdrTableWithOptions(request: $_model.RestoreDdrTableRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RestoreDdrTableResponse>;
    /**
     * Restores data across regions to an existing instance.
     *
     * @remarks
     * > Before the restoration, you can call the CheckCreateDdrDBInstance operation to check whether an ApsaraDB RDS instance can be restored across regions by using a cross-region backup set.
     * ### Supported engines
     * ApsaraDB RDS for MySQL
     * ### Related documentation
     * >Notice: Before you call this operation, read the documentation to understand the prerequisites and impacts.</notice>
     * - [Cross-region backup for ApsaraDB RDS for MySQL](https://help.aliyun.com/document_detail/120824.html)
     * - [Cross-region restoration for ApsaraDB RDS for MySQL](https://help.aliyun.com/document_detail/120875.html)
     *
     * @param request - RestoreDdrTableRequest
     * @returns RestoreDdrTableResponse
     */
    restoreDdrTable(request: $_model.RestoreDdrTableRequest): Promise<$_model.RestoreDdrTableResponse>;
    /**
     * Restores specific databases or tables of an ApsaraDB RDS instance to the original instance.
     *
     * @remarks
     * ### Supported engines
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for PostgreSQL
     * ### Related documentation
     * >Notice: Before you call this operation, read the following documentation and make sure that you fully understand the prerequisites and impacts of this operation.
     * - [Restore individual databases and tables of an ApsaraDB RDS for MySQL instance](https://help.aliyun.com/document_detail/103175.html)
     * - [Restore specific databases of an ApsaraDB RDS for PostgreSQL instance](https://help.aliyun.com/document_detail/613672.html)
     *
     * @param request - RestoreTableRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns RestoreTableResponse
     */
    restoreTableWithOptions(request: $_model.RestoreTableRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RestoreTableResponse>;
    /**
     * Restores specific databases or tables of an ApsaraDB RDS instance to the original instance.
     *
     * @remarks
     * ### Supported engines
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for PostgreSQL
     * ### Related documentation
     * >Notice: Before you call this operation, read the following documentation and make sure that you fully understand the prerequisites and impacts of this operation.
     * - [Restore individual databases and tables of an ApsaraDB RDS for MySQL instance](https://help.aliyun.com/document_detail/103175.html)
     * - [Restore specific databases of an ApsaraDB RDS for PostgreSQL instance](https://help.aliyun.com/document_detail/613672.html)
     *
     * @param request - RestoreTableRequest
     * @returns RestoreTableResponse
     */
    restoreTable(request: $_model.RestoreTableRequest): Promise<$_model.RestoreTableResponse>;
    /**
     * Revokes the access permissions of an account on a database.
     *
     * @remarks
     * ### Supported DPI engines
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for SQL Server
     * - ApsaraDB RDS for MariaDB
     * ### Before you begin
     * * The instance status is Running.
     * * The database is in the Running state.
     * ### Precautions
     * * The revoked permissions include SELECT, INSERT, UPDATE, DELETE, CREATE, DROP, REFERENCES, INDEX, ALTER, CREATE TEMPORARY TABLES, LOCK TABLES, EXECUTE, CREATE VIEW, SHOW VIEW, CREATE ROUTINE, ALTER ROUTINE, EVENT, and TRIGGER.
     * * This operation does not support SQL Server 2017 Cluster Edition or PostgreSQL instances.
     *
     * @param request - RevokeAccountPrivilegeRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns RevokeAccountPrivilegeResponse
     */
    revokeAccountPrivilegeWithOptions(request: $_model.RevokeAccountPrivilegeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RevokeAccountPrivilegeResponse>;
    /**
     * Revokes the access permissions of an account on a database.
     *
     * @remarks
     * ### Supported DPI engines
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for SQL Server
     * - ApsaraDB RDS for MariaDB
     * ### Before you begin
     * * The instance status is Running.
     * * The database is in the Running state.
     * ### Precautions
     * * The revoked permissions include SELECT, INSERT, UPDATE, DELETE, CREATE, DROP, REFERENCES, INDEX, ALTER, CREATE TEMPORARY TABLES, LOCK TABLES, EXECUTE, CREATE VIEW, SHOW VIEW, CREATE ROUTINE, ALTER ROUTINE, EVENT, and TRIGGER.
     * * This operation does not support SQL Server 2017 Cluster Edition or PostgreSQL instances.
     *
     * @param request - RevokeAccountPrivilegeRequest
     * @returns RevokeAccountPrivilegeResponse
     */
    revokeAccountPrivilege(request: $_model.RevokeAccountPrivilegeRequest): Promise<$_model.RevokeAccountPrivilegeResponse>;
    /**
     * Revokes the access permissions of an Alibaba Cloud service account on an ApsaraDB RDS instance.
     *
     * @remarks
     * ### Supported engines
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for PostgreSQL
     * - ApsaraDB RDS for SQL Server
     * ### Related documentation
     * >Notice: Before you call this operation, read the following documentation and make sure that you fully understand the prerequisites and impacts of this operation.
     * - [Grant permissions to the service account of an ApsaraDB RDS for MySQL instance](https://help.aliyun.com/document_detail/96102.html)
     * - [Grant permissions to the service account of an ApsaraDB RDS for PostgreSQL instance](https://help.aliyun.com/document_detail/146887.html)
     * - [Grant permissions to the service account of an ApsaraDB RDS for SQL Server instance](https://help.aliyun.com/document_detail/95693.html)
     *
     * @param request - RevokeOperatorPermissionRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns RevokeOperatorPermissionResponse
     */
    revokeOperatorPermissionWithOptions(request: $_model.RevokeOperatorPermissionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RevokeOperatorPermissionResponse>;
    /**
     * Revokes the access permissions of an Alibaba Cloud service account on an ApsaraDB RDS instance.
     *
     * @remarks
     * ### Supported engines
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for PostgreSQL
     * - ApsaraDB RDS for SQL Server
     * ### Related documentation
     * >Notice: Before you call this operation, read the following documentation and make sure that you fully understand the prerequisites and impacts of this operation.
     * - [Grant permissions to the service account of an ApsaraDB RDS for MySQL instance](https://help.aliyun.com/document_detail/96102.html)
     * - [Grant permissions to the service account of an ApsaraDB RDS for PostgreSQL instance](https://help.aliyun.com/document_detail/146887.html)
     * - [Grant permissions to the service account of an ApsaraDB RDS for SQL Server instance](https://help.aliyun.com/document_detail/95693.html)
     *
     * @param request - RevokeOperatorPermissionRequest
     * @returns RevokeOperatorPermissionResponse
     */
    revokeOperatorPermission(request: $_model.RevokeOperatorPermissionRequest): Promise<$_model.RevokeOperatorPermissionResponse>;
    /**
     * 删除RC安全组规则
     *
     * @param tmpReq - RevokeRCSecurityGroupPermissionRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns RevokeRCSecurityGroupPermissionResponse
     */
    revokeRCSecurityGroupPermissionWithOptions(tmpReq: $_model.RevokeRCSecurityGroupPermissionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RevokeRCSecurityGroupPermissionResponse>;
    /**
     * 删除RC安全组规则
     *
     * @param request - RevokeRCSecurityGroupPermissionRequest
     * @returns RevokeRCSecurityGroupPermissionResponse
     */
    revokeRCSecurityGroupPermission(request: $_model.RevokeRCSecurityGroupPermissionRequest): Promise<$_model.RevokeRCSecurityGroupPermissionResponse>;
    /**
     * 创建并执行云助手命令
     *
     * @param tmpReq - RunRCCommandRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns RunRCCommandResponse
     */
    runRCCommandWithOptions(tmpReq: $_model.RunRCCommandRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RunRCCommandResponse>;
    /**
     * 创建并执行云助手命令
     *
     * @param request - RunRCCommandRequest
     * @returns RunRCCommandResponse
     */
    runRCCommand(request: $_model.RunRCCommandRequest): Promise<$_model.RunRCCommandResponse>;
    /**
     * Creates one or more RDS Custom instances by specifying parameters such as ImageId, InstanceType, VSwitchId, and SecurityGroupId.
     *
     * @remarks
     * - Before you create an RDS Custom instance, submit a ticket to apply for adding your Alibaba Cloud account to the whitelist.
     * - Only subscription RDS Custom instances are supported.
     * - Supported regions include Beijing, Shanghai, Shenzhen, and Hangzhou.
     *
     * @param tmpReq - RunRCInstancesRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns RunRCInstancesResponse
     */
    runRCInstancesWithOptions(tmpReq: $_model.RunRCInstancesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RunRCInstancesResponse>;
    /**
     * Creates one or more RDS Custom instances by specifying parameters such as ImageId, InstanceType, VSwitchId, and SecurityGroupId.
     *
     * @remarks
     * - Before you create an RDS Custom instance, submit a ticket to apply for adding your Alibaba Cloud account to the whitelist.
     * - Only subscription RDS Custom instances are supported.
     * - Supported regions include Beijing, Shanghai, Shenzhen, and Hangzhou.
     *
     * @param request - RunRCInstancesRequest
     * @returns RunRCInstancesResponse
     */
    runRCInstances(request: $_model.RunRCInstancesRequest): Promise<$_model.RunRCInstancesResponse>;
    /**
     * 共享部署集
     *
     * @param request - ShareRCDeploymentSetRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ShareRCDeploymentSetResponse
     */
    shareRCDeploymentSetWithOptions(request: $_model.ShareRCDeploymentSetRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ShareRCDeploymentSetResponse>;
    /**
     * 共享部署集
     *
     * @param request - ShareRCDeploymentSetRequest
     * @returns ShareRCDeploymentSetResponse
     */
    shareRCDeploymentSet(request: $_model.ShareRCDeploymentSetRequest): Promise<$_model.ShareRCDeploymentSetResponse>;
    /**
     * Starts a suspended ApsaraDB RDS instance.
     *
     * @remarks
     * ### Supported engines
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for PostgreSQL
     * - ApsaraDB RDS for SQL Server
     * ### Related documentation
     * >Notice: Before you call this operation, read the documentation to understand the prerequisites and impacts.
     * <props="china">
     * - [Start an ApsaraDB RDS for MySQL instance](https://help.aliyun.com/document_detail/427093.html)
     * - [Start an ApsaraDB RDS for PostgreSQL instance](https://help.aliyun.com/document_detail/452314.html)
     * - [Start an ApsaraDB RDS for SQL Server instance](https://help.aliyun.com/document_detail/462504.html)
     * <props="intl">
     * [Start an ApsaraDB RDS for SQL Server instance](https://help.aliyun.com/document_detail/462504.html)
     *
     * @param request - StartDBInstanceRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns StartDBInstanceResponse
     */
    startDBInstanceWithOptions(request: $_model.StartDBInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.StartDBInstanceResponse>;
    /**
     * Starts a suspended ApsaraDB RDS instance.
     *
     * @remarks
     * ### Supported engines
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for PostgreSQL
     * - ApsaraDB RDS for SQL Server
     * ### Related documentation
     * >Notice: Before you call this operation, read the documentation to understand the prerequisites and impacts.
     * <props="china">
     * - [Start an ApsaraDB RDS for MySQL instance](https://help.aliyun.com/document_detail/427093.html)
     * - [Start an ApsaraDB RDS for PostgreSQL instance](https://help.aliyun.com/document_detail/452314.html)
     * - [Start an ApsaraDB RDS for SQL Server instance](https://help.aliyun.com/document_detail/462504.html)
     * <props="intl">
     * [Start an ApsaraDB RDS for SQL Server instance](https://help.aliyun.com/document_detail/462504.html)
     *
     * @param request - StartDBInstanceRequest
     * @returns StartDBInstanceResponse
     */
    startDBInstance(request: $_model.StartDBInstanceRequest): Promise<$_model.StartDBInstanceResponse>;
    /**
     * Starts an RDS Custom instance that is in the Stopped state. After the API call succeeds, the instance transitions from the Starting state to the Running state.
     *
     * @param request - StartRCInstanceRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns StartRCInstanceResponse
     */
    startRCInstanceWithOptions(request: $_model.StartRCInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.StartRCInstanceResponse>;
    /**
     * Starts an RDS Custom instance that is in the Stopped state. After the API call succeeds, the instance transitions from the Starting state to the Running state.
     *
     * @param request - StartRCInstanceRequest
     * @returns StartRCInstanceResponse
     */
    startRCInstance(request: $_model.StartRCInstanceRequest): Promise<$_model.StartRCInstanceResponse>;
    /**
     * 批量启动RC实例
     *
     * @param tmpReq - StartRCInstancesRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns StartRCInstancesResponse
     */
    startRCInstancesWithOptions(tmpReq: $_model.StartRCInstancesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.StartRCInstancesResponse>;
    /**
     * 批量启动RC实例
     *
     * @param request - StartRCInstancesRequest
     * @returns StartRCInstancesResponse
     */
    startRCInstances(request: $_model.StartRCInstancesRequest): Promise<$_model.StartRCInstancesResponse>;
    /**
     * Pauses an ApsaraDB RDS instance.
     *
     * @remarks
     * ### Supported engines
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for PostgreSQL
     * - ApsaraDB RDS for SQL Server
     * ### Related documentation
     * >Notice: Before you call this operation, read the following documentation and make sure that you fully understand the prerequisites and impacts of this operation.
     * <props="china">
     * - [Pause an ApsaraDB RDS for MySQL instance](https://help.aliyun.com/document_detail/427093.html)
     * - [Pause an ApsaraDB RDS for PostgreSQL instance](https://help.aliyun.com/document_detail/452314.html)
     * - [Pause an ApsaraDB RDS for SQL Server instance](https://help.aliyun.com/document_detail/462504.html)
     * <props="intl">
     * [Pause an ApsaraDB RDS for SQL Server instance](https://help.aliyun.com/document_detail/462504.html)
     *
     * @param request - StopDBInstanceRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns StopDBInstanceResponse
     */
    stopDBInstanceWithOptions(request: $_model.StopDBInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.StopDBInstanceResponse>;
    /**
     * Pauses an ApsaraDB RDS instance.
     *
     * @remarks
     * ### Supported engines
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for PostgreSQL
     * - ApsaraDB RDS for SQL Server
     * ### Related documentation
     * >Notice: Before you call this operation, read the following documentation and make sure that you fully understand the prerequisites and impacts of this operation.
     * <props="china">
     * - [Pause an ApsaraDB RDS for MySQL instance](https://help.aliyun.com/document_detail/427093.html)
     * - [Pause an ApsaraDB RDS for PostgreSQL instance](https://help.aliyun.com/document_detail/452314.html)
     * - [Pause an ApsaraDB RDS for SQL Server instance](https://help.aliyun.com/document_detail/462504.html)
     * <props="intl">
     * [Pause an ApsaraDB RDS for SQL Server instance](https://help.aliyun.com/document_detail/462504.html)
     *
     * @param request - StopDBInstanceRequest
     * @returns StopDBInstanceResponse
     */
    stopDBInstance(request: $_model.StopDBInstanceRequest): Promise<$_model.StopDBInstanceResponse>;
    /**
     * Stops a running RDS Custom instance. After a successful call, the instance transitions from the Stopping state to the Stopped state.
     *
     * @param request - StopRCInstanceRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns StopRCInstanceResponse
     */
    stopRCInstanceWithOptions(request: $_model.StopRCInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.StopRCInstanceResponse>;
    /**
     * Stops a running RDS Custom instance. After a successful call, the instance transitions from the Stopping state to the Stopped state.
     *
     * @param request - StopRCInstanceRequest
     * @returns StopRCInstanceResponse
     */
    stopRCInstance(request: $_model.StopRCInstanceRequest): Promise<$_model.StopRCInstanceResponse>;
    /**
     * 批量停止RC实例
     *
     * @param tmpReq - StopRCInstancesRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns StopRCInstancesResponse
     */
    stopRCInstancesWithOptions(tmpReq: $_model.StopRCInstancesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.StopRCInstancesResponse>;
    /**
     * 批量停止RC实例
     *
     * @param request - StopRCInstancesRequest
     * @returns StopRCInstancesResponse
     */
    stopRCInstances(request: $_model.StopRCInstancesRequest): Promise<$_model.StopRCInstancesResponse>;
    /**
     * Performs a manual primary/secondary switchover for an ApsaraDB RDS instance.
     *
     * @remarks
     * ### Supported engines
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for PostgreSQL
     * - ApsaraDB RDS for SQL Server
     * - ApsaraDB RDS for MariaDB
     * ### Related documentation
     * >Notice: Before you call this operation, read the following documentation and make sure that you fully understand the prerequisites and impacts of this operation.
     * - [Primary/secondary switchover for ApsaraDB RDS for MySQL](https://help.aliyun.com/document_detail/96054.html)
     * - [Primary/secondary switchover for ApsaraDB RDS for PostgreSQL](https://help.aliyun.com/document_detail/96747.html)
     * - [Primary/secondary switchover for ApsaraDB RDS for SQL Server](https://help.aliyun.com/document_detail/95659.html)
     * - [Primary/secondary switchover for ApsaraDB RDS for MariaDB](https://help.aliyun.com/document_detail/97127.html)
     *
     * @param request - SwitchDBInstanceHARequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns SwitchDBInstanceHAResponse
     */
    switchDBInstanceHAWithOptions(request: $_model.SwitchDBInstanceHARequest, runtime: $dara.RuntimeOptions): Promise<$_model.SwitchDBInstanceHAResponse>;
    /**
     * Performs a manual primary/secondary switchover for an ApsaraDB RDS instance.
     *
     * @remarks
     * ### Supported engines
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for PostgreSQL
     * - ApsaraDB RDS for SQL Server
     * - ApsaraDB RDS for MariaDB
     * ### Related documentation
     * >Notice: Before you call this operation, read the following documentation and make sure that you fully understand the prerequisites and impacts of this operation.
     * - [Primary/secondary switchover for ApsaraDB RDS for MySQL](https://help.aliyun.com/document_detail/96054.html)
     * - [Primary/secondary switchover for ApsaraDB RDS for PostgreSQL](https://help.aliyun.com/document_detail/96747.html)
     * - [Primary/secondary switchover for ApsaraDB RDS for SQL Server](https://help.aliyun.com/document_detail/95659.html)
     * - [Primary/secondary switchover for ApsaraDB RDS for MariaDB](https://help.aliyun.com/document_detail/97127.html)
     *
     * @param request - SwitchDBInstanceHARequest
     * @returns SwitchDBInstanceHAResponse
     */
    switchDBInstanceHA(request: $_model.SwitchDBInstanceHARequest): Promise<$_model.SwitchDBInstanceHAResponse>;
    /**
     * Switches the internal and public endpoints of a classic network instance.
     *
     * @remarks
     * ### Supported engines
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for SQL Server
     * ### Before you begin
     * - The instance has only one of the following addresses: an internal endpoint or a public endpoint.
     * - The instance is in the Running state.
     * - The number of switchovers within the last 24 hours is less than 20.
     * - The network type of the instance is classic network.
     * ### Precautions
     * After the switchover, the endpoint changes. You must update the endpoint in your code and restart the application.
     *
     * @param request - SwitchDBInstanceNetTypeRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns SwitchDBInstanceNetTypeResponse
     */
    switchDBInstanceNetTypeWithOptions(request: $_model.SwitchDBInstanceNetTypeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SwitchDBInstanceNetTypeResponse>;
    /**
     * Switches the internal and public endpoints of a classic network instance.
     *
     * @remarks
     * ### Supported engines
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for SQL Server
     * ### Before you begin
     * - The instance has only one of the following addresses: an internal endpoint or a public endpoint.
     * - The instance is in the Running state.
     * - The number of switchovers within the last 24 hours is less than 20.
     * - The network type of the instance is classic network.
     * ### Precautions
     * After the switchover, the endpoint changes. You must update the endpoint in your code and restart the application.
     *
     * @param request - SwitchDBInstanceNetTypeRequest
     * @returns SwitchDBInstanceNetTypeResponse
     */
    switchDBInstanceNetType(request: $_model.SwitchDBInstanceNetTypeRequest): Promise<$_model.SwitchDBInstanceNetTypeResponse>;
    /**
     * Switches the VPC and vSwitch of an ApsaraDB RDS instance.
     *
     * @remarks
     * ### Applicable engines
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for PostgreSQL
     * - ApsaraDB RDS for SQL Server
     * ### Related documentation
     * >Notice: Before you call this operation, read the feature documentation to ensure that you fully understand the prerequisites and impacts.
     * - [Change the VPC and vSwitch of an ApsaraDB RDS for MySQL instance](https://help.aliyun.com/document_detail/137567.html)
     * - [Change the vSwitch of an ApsaraDB RDS for PostgreSQL instance](https://help.aliyun.com/document_detail/146885.html)
     * - [Change the VPC and vSwitch of an ApsaraDB RDS for SQL Server instance](https://help.aliyun.com/document_detail/347675.html)
     *
     * @param request - SwitchDBInstanceVpcRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns SwitchDBInstanceVpcResponse
     */
    switchDBInstanceVpcWithOptions(request: $_model.SwitchDBInstanceVpcRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SwitchDBInstanceVpcResponse>;
    /**
     * Switches the VPC and vSwitch of an ApsaraDB RDS instance.
     *
     * @remarks
     * ### Applicable engines
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for PostgreSQL
     * - ApsaraDB RDS for SQL Server
     * ### Related documentation
     * >Notice: Before you call this operation, read the feature documentation to ensure that you fully understand the prerequisites and impacts.
     * - [Change the VPC and vSwitch of an ApsaraDB RDS for MySQL instance](https://help.aliyun.com/document_detail/137567.html)
     * - [Change the vSwitch of an ApsaraDB RDS for PostgreSQL instance](https://help.aliyun.com/document_detail/146885.html)
     * - [Change the VPC and vSwitch of an ApsaraDB RDS for SQL Server instance](https://help.aliyun.com/document_detail/347675.html)
     *
     * @param request - SwitchDBInstanceVpcRequest
     * @returns SwitchDBInstanceVpcResponse
     */
    switchDBInstanceVpc(request: $_model.SwitchDBInstanceVpcRequest): Promise<$_model.SwitchDBInstanceVpcResponse>;
    /**
     * Switches traffic for zero-downtime major engine version upgrades of ApsaraDB RDS for PostgreSQL.
     *
     * @remarks
     * Applicable engines:
     * * ApsaraDB RDS for PostgreSQL
     *
     * @param request - SwitchOverMajorVersionUpgradeRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns SwitchOverMajorVersionUpgradeResponse
     */
    switchOverMajorVersionUpgradeWithOptions(request: $_model.SwitchOverMajorVersionUpgradeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SwitchOverMajorVersionUpgradeResponse>;
    /**
     * Switches traffic for zero-downtime major engine version upgrades of ApsaraDB RDS for PostgreSQL.
     *
     * @remarks
     * Applicable engines:
     * * ApsaraDB RDS for PostgreSQL
     *
     * @param request - SwitchOverMajorVersionUpgradeRequest
     * @returns SwitchOverMajorVersionUpgradeResponse
     */
    switchOverMajorVersionUpgrade(request: $_model.SwitchOverMajorVersionUpgradeRequest): Promise<$_model.SwitchOverMajorVersionUpgradeResponse>;
    /**
     * Switches the replication task of an ApsaraDB RDS for SQL Server primary instance to a disaster recovery instance.
     *
     * @remarks
     * ### Applicable engine
     * ApsaraDB RDS for SQL Server.
     *
     * @param request - SwitchReplicationLinkRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns SwitchReplicationLinkResponse
     */
    switchReplicationLinkWithOptions(request: $_model.SwitchReplicationLinkRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SwitchReplicationLinkResponse>;
    /**
     * Switches the replication task of an ApsaraDB RDS for SQL Server primary instance to a disaster recovery instance.
     *
     * @remarks
     * ### Applicable engine
     * ApsaraDB RDS for SQL Server.
     *
     * @param request - SwitchReplicationLinkRequest
     * @returns SwitchReplicationLinkResponse
     */
    switchReplicationLink(request: $_model.SwitchReplicationLinkRequest): Promise<$_model.SwitchReplicationLinkResponse>;
    /**
     * 同步密钥对
     *
     * @param request - SyncRCKeyPairRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns SyncRCKeyPairResponse
     */
    syncRCKeyPairWithOptions(request: $_model.SyncRCKeyPairRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SyncRCKeyPairResponse>;
    /**
     * 同步密钥对
     *
     * @param request - SyncRCKeyPairRequest
     * @returns SyncRCKeyPairResponse
     */
    syncRCKeyPair(request: $_model.SyncRCKeyPairRequest): Promise<$_model.SyncRCKeyPairResponse>;
    /**
     * 同步RDS Custom的安全组
     *
     * @param request - SyncRCSecurityGroupRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns SyncRCSecurityGroupResponse
     */
    syncRCSecurityGroupWithOptions(request: $_model.SyncRCSecurityGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SyncRCSecurityGroupResponse>;
    /**
     * 同步RDS Custom的安全组
     *
     * @param request - SyncRCSecurityGroupRequest
     * @returns SyncRCSecurityGroupResponse
     */
    syncRCSecurityGroup(request: $_model.SyncRCSecurityGroupRequest): Promise<$_model.SyncRCSecurityGroupResponse>;
    /**
     * Creates and binds tags to specified ApsaraDB RDS instances.
     *
     * @remarks
     * ### Supported database engines
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for PostgreSQL
     * - ApsaraDB RDS for SQL Server
     * - ApsaraDB RDS for MariaDB
     * ### Related documentation
     * >Notice: Before you call this operation, read the related documentation to fully understand the prerequisites and impacts.
     * - [Create tags for an ApsaraDB RDS for MySQL instance](https://help.aliyun.com/document_detail/96149.html)
     * - [Create tags for an ApsaraDB RDS for PostgreSQL instance](https://help.aliyun.com/document_detail/96777.html)
     * - [Create tags for an ApsaraDB RDS for SQL Server instance](https://help.aliyun.com/document_detail/95726.html)
     * - [Create tags for an ApsaraDB RDS for MariaDB instance](https://help.aliyun.com/document_detail/97152.html)
     *
     * @param request - TagResourcesRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns TagResourcesResponse
     */
    tagResourcesWithOptions(request: $_model.TagResourcesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.TagResourcesResponse>;
    /**
     * Creates and binds tags to specified ApsaraDB RDS instances.
     *
     * @remarks
     * ### Supported database engines
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for PostgreSQL
     * - ApsaraDB RDS for SQL Server
     * - ApsaraDB RDS for MariaDB
     * ### Related documentation
     * >Notice: Before you call this operation, read the related documentation to fully understand the prerequisites and impacts.
     * - [Create tags for an ApsaraDB RDS for MySQL instance](https://help.aliyun.com/document_detail/96149.html)
     * - [Create tags for an ApsaraDB RDS for PostgreSQL instance](https://help.aliyun.com/document_detail/96777.html)
     * - [Create tags for an ApsaraDB RDS for SQL Server instance](https://help.aliyun.com/document_detail/95726.html)
     * - [Create tags for an ApsaraDB RDS for MariaDB instance](https://help.aliyun.com/document_detail/97152.html)
     *
     * @param request - TagResourcesRequest
     * @returns TagResourcesResponse
     */
    tagResources(request: $_model.TagResourcesRequest): Promise<$_model.TagResourcesResponse>;
    /**
     * Terminates an ongoing backup migration task for an ApsaraDB RDS for SQL Server instance.
     *
     * @remarks
     * ### Supported engines
     * - ApsaraDB RDS for SQL Server
     *
     * @param request - TerminateMigrateTaskRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns TerminateMigrateTaskResponse
     */
    terminateMigrateTaskWithOptions(request: $_model.TerminateMigrateTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.TerminateMigrateTaskResponse>;
    /**
     * Terminates an ongoing backup migration task for an ApsaraDB RDS for SQL Server instance.
     *
     * @remarks
     * ### Supported engines
     * - ApsaraDB RDS for SQL Server
     *
     * @param request - TerminateMigrateTaskRequest
     * @returns TerminateMigrateTaskResponse
     */
    terminateMigrateTask(request: $_model.TerminateMigrateTaskRequest): Promise<$_model.TerminateMigrateTaskResponse>;
    /**
     * Modifies the billing method of an ApsaraDB RDS instance.
     *
     * @remarks
     * ### Supported engines
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for PostgreSQL
     * - ApsaraDB RDS for SQL Server
     * - ApsaraDB RDS for MariaDB
     * ### Related documentation
     * >Warning: This API operation involves fees. Read the related documentation carefully before you call this operation.</warning>
     * - [Change the billing method of an ApsaraDB RDS for MySQL instance from pay-as-you-go to subscription](https://help.aliyun.com/document_detail/96048.html) and [Change the billing method of an ApsaraDB RDS for MySQL instance from subscription to pay-as-you-go](https://help.aliyun.com/document_detail/161875.html)
     * - [Change the billing method of an ApsaraDB RDS for PostgreSQL instance from pay-as-you-go to subscription](https://help.aliyun.com/document_detail/96743.html) and [Change the billing method of an ApsaraDB RDS for PostgreSQL instance from subscription to pay-as-you-go](https://help.aliyun.com/document_detail/162756.html)
     * - [Change the billing method of an ApsaraDB RDS for SQL Server instance from pay-as-you-go to subscription](https://help.aliyun.com/document_detail/95631.html) and [Change the billing method of an ApsaraDB RDS for SQL Server instance from subscription to pay-as-you-go](https://help.aliyun.com/document_detail/162755.html)
     * - [Change the billing method of an ApsaraDB RDS for MariaDB instance from pay-as-you-go to subscription](https://help.aliyun.com/document_detail/97120.html) and [Change the billing method of an ApsaraDB RDS for MariaDB instance from subscription to pay-as-you-go](https://help.aliyun.com/document_detail/169252.html)
     *
     * @param request - TransformDBInstancePayTypeRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns TransformDBInstancePayTypeResponse
     */
    transformDBInstancePayTypeWithOptions(request: $_model.TransformDBInstancePayTypeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.TransformDBInstancePayTypeResponse>;
    /**
     * Modifies the billing method of an ApsaraDB RDS instance.
     *
     * @remarks
     * ### Supported engines
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for PostgreSQL
     * - ApsaraDB RDS for SQL Server
     * - ApsaraDB RDS for MariaDB
     * ### Related documentation
     * >Warning: This API operation involves fees. Read the related documentation carefully before you call this operation.</warning>
     * - [Change the billing method of an ApsaraDB RDS for MySQL instance from pay-as-you-go to subscription](https://help.aliyun.com/document_detail/96048.html) and [Change the billing method of an ApsaraDB RDS for MySQL instance from subscription to pay-as-you-go](https://help.aliyun.com/document_detail/161875.html)
     * - [Change the billing method of an ApsaraDB RDS for PostgreSQL instance from pay-as-you-go to subscription](https://help.aliyun.com/document_detail/96743.html) and [Change the billing method of an ApsaraDB RDS for PostgreSQL instance from subscription to pay-as-you-go](https://help.aliyun.com/document_detail/162756.html)
     * - [Change the billing method of an ApsaraDB RDS for SQL Server instance from pay-as-you-go to subscription](https://help.aliyun.com/document_detail/95631.html) and [Change the billing method of an ApsaraDB RDS for SQL Server instance from subscription to pay-as-you-go](https://help.aliyun.com/document_detail/162755.html)
     * - [Change the billing method of an ApsaraDB RDS for MariaDB instance from pay-as-you-go to subscription](https://help.aliyun.com/document_detail/97120.html) and [Change the billing method of an ApsaraDB RDS for MariaDB instance from subscription to pay-as-you-go](https://help.aliyun.com/document_detail/169252.html)
     *
     * @param request - TransformDBInstancePayTypeRequest
     * @returns TransformDBInstancePayTypeResponse
     */
    transformDBInstancePayType(request: $_model.TransformDBInstancePayTypeRequest): Promise<$_model.TransformDBInstancePayTypeResponse>;
    /**
     * 解绑RDS Custom实例的弹性公网
     *
     * @param request - UnassociateEipAddressWithRCInstanceRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns UnassociateEipAddressWithRCInstanceResponse
     */
    unassociateEipAddressWithRCInstanceWithOptions(request: $_model.UnassociateEipAddressWithRCInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UnassociateEipAddressWithRCInstanceResponse>;
    /**
     * 解绑RDS Custom实例的弹性公网
     *
     * @param request - UnassociateEipAddressWithRCInstanceRequest
     * @returns UnassociateEipAddressWithRCInstanceResponse
     */
    unassociateEipAddressWithRCInstance(request: $_model.UnassociateEipAddressWithRCInstanceRequest): Promise<$_model.UnassociateEipAddressWithRCInstanceResponse>;
    /**
     * Unlocks a database account of an ApsaraDB RDS for PostgreSQL instance.
     *
     * @remarks
     * ### Applicable engine
     * RDS PostgreSQL
     * ### Related documentation
     * >Notice: Before you call this operation, read the following documentation and make sure that you fully understand the prerequisites and impacts of this operation.
     * [Lock an account of an ApsaraDB RDS for PostgreSQL instance](https://help.aliyun.com/document_detail/147649.html)
     *
     * @param request - UnlockAccountRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns UnlockAccountResponse
     */
    unlockAccountWithOptions(request: $_model.UnlockAccountRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UnlockAccountResponse>;
    /**
     * Unlocks a database account of an ApsaraDB RDS for PostgreSQL instance.
     *
     * @remarks
     * ### Applicable engine
     * RDS PostgreSQL
     * ### Related documentation
     * >Notice: Before you call this operation, read the following documentation and make sure that you fully understand the prerequisites and impacts of this operation.
     * [Lock an account of an ApsaraDB RDS for PostgreSQL instance](https://help.aliyun.com/document_detail/147649.html)
     *
     * @param request - UnlockAccountRequest
     * @returns UnlockAccountResponse
     */
    unlockAccount(request: $_model.UnlockAccountRequest): Promise<$_model.UnlockAccountResponse>;
    /**
     * Removes tags from a specified ApsaraDB RDS instance.
     *
     * @remarks
     * ### Supported database engines
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for PostgreSQL
     * - ApsaraDB RDS for SQL Server
     * - ApsaraDB RDS for MariaDB
     * ### Precautions
     * * You can remove up to 20 tags at a time.
     * * If a tag is removed from an instance and is not attached to any other instances, the tag is automatically deleted.
     *
     * @param request - UntagResourcesRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns UntagResourcesResponse
     */
    untagResourcesWithOptions(request: $_model.UntagResourcesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UntagResourcesResponse>;
    /**
     * Removes tags from a specified ApsaraDB RDS instance.
     *
     * @remarks
     * ### Supported database engines
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for PostgreSQL
     * - ApsaraDB RDS for SQL Server
     * - ApsaraDB RDS for MariaDB
     * ### Precautions
     * * You can remove up to 20 tags at a time.
     * * If a tag is removed from an instance and is not attached to any other instances, the tag is automatically deleted.
     *
     * @param request - UntagResourcesRequest
     * @returns UntagResourcesResponse
     */
    untagResources(request: $_model.UntagResourcesRequest): Promise<$_model.UntagResourcesResponse>;
    /**
     * Updates the replication channel of a native replication instance.
     *
     * @remarks
     * ### Applicable engines
     * RDS MySQL
     * ### Related feature documentation
     * >Notice: Before you use this API operation, carefully read the feature documentation to ensure that you fully understand the prerequisites and the impacts of the operation.</notice>
     * [Native replication instances of ApsaraDB RDS for MySQL](https://help.aliyun.com/document_detail/2856487.html)
     *
     * @param request - UpdateDBInstanceReplicationRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns UpdateDBInstanceReplicationResponse
     */
    updateDBInstanceReplicationWithOptions(request: $_model.UpdateDBInstanceReplicationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateDBInstanceReplicationResponse>;
    /**
     * Updates the replication channel of a native replication instance.
     *
     * @remarks
     * ### Applicable engines
     * RDS MySQL
     * ### Related feature documentation
     * >Notice: Before you use this API operation, carefully read the feature documentation to ensure that you fully understand the prerequisites and the impacts of the operation.</notice>
     * [Native replication instances of ApsaraDB RDS for MySQL](https://help.aliyun.com/document_detail/2856487.html)
     *
     * @param request - UpdateDBInstanceReplicationRequest
     * @returns UpdateDBInstanceReplicationResponse
     */
    updateDBInstanceReplication(request: $_model.UpdateDBInstanceReplicationRequest): Promise<$_model.UpdateDBInstanceReplicationResponse>;
    /**
     * Upgrades specified plug-ins in a specified database.
     *
     * @remarks
     * <props="china">You can join the RDS PostgreSQL plug-in DingTalk group (103525002795) for consultation, discussion, and feedback to get more information about plug-ins.
     * ### Supported engine
     * RDS PostgreSQL
     * ### Related documentation
     * >Notice: Before you call this operation, carefully read the feature documentation to ensure that you fully understand the prerequisites and the impacts of the operation.
     * [Manage plug-ins](https://help.aliyun.com/document_detail/2402409.html)
     *
     * @param request - UpdatePostgresExtensionsRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns UpdatePostgresExtensionsResponse
     */
    updatePostgresExtensionsWithOptions(request: $_model.UpdatePostgresExtensionsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdatePostgresExtensionsResponse>;
    /**
     * Upgrades specified plug-ins in a specified database.
     *
     * @remarks
     * <props="china">You can join the RDS PostgreSQL plug-in DingTalk group (103525002795) for consultation, discussion, and feedback to get more information about plug-ins.
     * ### Supported engine
     * RDS PostgreSQL
     * ### Related documentation
     * >Notice: Before you call this operation, carefully read the feature documentation to ensure that you fully understand the prerequisites and the impacts of the operation.
     * [Manage plug-ins](https://help.aliyun.com/document_detail/2402409.html)
     *
     * @param request - UpdatePostgresExtensionsRequest
     * @returns UpdatePostgresExtensionsResponse
     */
    updatePostgresExtensions(request: $_model.UpdatePostgresExtensionsRequest): Promise<$_model.UpdatePostgresExtensionsResponse>;
    /**
     * Modifies the description and retention period of a user backup.
     *
     * @remarks
     * ### Supported engines
     * ApsaraDB RDS for MySQL
     * ### Related documentation
     * A user backup is a full backup of a self-managed MySQL database. You can restore the user backup to Alibaba Cloud. For more information, see [Migrate full data from self-managed MySQL 5.7 and 8.0 databases to the cloud](https://help.aliyun.com/document_detail/251779.html).
     * >Notice: Before you call this operation, read the related documentation to ensure that you fully understand the prerequisites and impacts of this operation.</notice>
     *
     * @param request - UpdateUserBackupFileRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns UpdateUserBackupFileResponse
     */
    updateUserBackupFileWithOptions(request: $_model.UpdateUserBackupFileRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateUserBackupFileResponse>;
    /**
     * Modifies the description and retention period of a user backup.
     *
     * @remarks
     * ### Supported engines
     * ApsaraDB RDS for MySQL
     * ### Related documentation
     * A user backup is a full backup of a self-managed MySQL database. You can restore the user backup to Alibaba Cloud. For more information, see [Migrate full data from self-managed MySQL 5.7 and 8.0 databases to the cloud](https://help.aliyun.com/document_detail/251779.html).
     * >Notice: Before you call this operation, read the related documentation to ensure that you fully understand the prerequisites and impacts of this operation.</notice>
     *
     * @param request - UpdateUserBackupFileRequest
     * @returns UpdateUserBackupFileResponse
     */
    updateUserBackupFile(request: $_model.UpdateUserBackupFileRequest): Promise<$_model.UpdateUserBackupFileResponse>;
    /**
     * Upgrades the major engine version of an ApsaraDB RDS for MySQL instance.
     *
     * @remarks
     * ### Applicable engine
     * ApsaraDB RDS for MySQL
     * ### Related documentation
     * >Notice: Before you call this operation, read the following documentation and make sure that you fully understand the prerequisites and impacts of this operation.
     * [Upgrade the database engine version of an ApsaraDB RDS for MySQL instance](https://help.aliyun.com/document_detail/96058.html)
     *
     * @param request - UpgradeDBInstanceEngineVersionRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns UpgradeDBInstanceEngineVersionResponse
     */
    upgradeDBInstanceEngineVersionWithOptions(request: $_model.UpgradeDBInstanceEngineVersionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpgradeDBInstanceEngineVersionResponse>;
    /**
     * Upgrades the major engine version of an ApsaraDB RDS for MySQL instance.
     *
     * @remarks
     * ### Applicable engine
     * ApsaraDB RDS for MySQL
     * ### Related documentation
     * >Notice: Before you call this operation, read the following documentation and make sure that you fully understand the prerequisites and impacts of this operation.
     * [Upgrade the database engine version of an ApsaraDB RDS for MySQL instance](https://help.aliyun.com/document_detail/96058.html)
     *
     * @param request - UpgradeDBInstanceEngineVersionRequest
     * @returns UpgradeDBInstanceEngineVersionResponse
     */
    upgradeDBInstanceEngineVersion(request: $_model.UpgradeDBInstanceEngineVersionRequest): Promise<$_model.UpgradeDBInstanceEngineVersionResponse>;
    /**
     * Upgrades the minor engine version of an ApsaraDB RDS instance.
     *
     * @remarks
     * ### Supported database engines
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for PostgreSQL
     * - ApsaraDB RDS for SQL Server
     * ### Related documentation
     * >Notice: Before you call this operation, carefully read the documentation to ensure that you fully understand the prerequisites and impacts.
     * - [Upgrade the minor engine version of an ApsaraDB RDS for MySQL instance](https://help.aliyun.com/document_detail/96059.html)
     * - [Upgrade the minor engine version of an ApsaraDB RDS for PostgreSQL instance](https://help.aliyun.com/document_detail/146895.html)
     * - [Upgrade the minor engine version of an ApsaraDB RDS for SQL Server instance](https://help.aliyun.com/document_detail/213582.html)
     *
     * @param request - UpgradeDBInstanceKernelVersionRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns UpgradeDBInstanceKernelVersionResponse
     */
    upgradeDBInstanceKernelVersionWithOptions(request: $_model.UpgradeDBInstanceKernelVersionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpgradeDBInstanceKernelVersionResponse>;
    /**
     * Upgrades the minor engine version of an ApsaraDB RDS instance.
     *
     * @remarks
     * ### Supported database engines
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for PostgreSQL
     * - ApsaraDB RDS for SQL Server
     * ### Related documentation
     * >Notice: Before you call this operation, carefully read the documentation to ensure that you fully understand the prerequisites and impacts.
     * - [Upgrade the minor engine version of an ApsaraDB RDS for MySQL instance](https://help.aliyun.com/document_detail/96059.html)
     * - [Upgrade the minor engine version of an ApsaraDB RDS for PostgreSQL instance](https://help.aliyun.com/document_detail/146895.html)
     * - [Upgrade the minor engine version of an ApsaraDB RDS for SQL Server instance](https://help.aliyun.com/document_detail/213582.html)
     *
     * @param request - UpgradeDBInstanceKernelVersionRequest
     * @returns UpgradeDBInstanceKernelVersionResponse
     */
    upgradeDBInstanceKernelVersion(request: $_model.UpgradeDBInstanceKernelVersionRequest): Promise<$_model.UpgradeDBInstanceKernelVersionResponse>;
    /**
     * Initiates a major engine version upgrade task for an ApsaraDB RDS for PostgreSQL instance.
     *
     * @remarks
     * ### Supported engine
     * ApsaraDB RDS for PostgreSQL
     * ### Related documentation
     * This API operation incurs fees. Carefully read the related documentation to fully understand the fees, prerequisites, and impacts before you proceed.
     * [Upgrade the major engine version of an ApsaraDB RDS for PostgreSQL instance](https://help.aliyun.com/document_detail/203309.html)
     *
     * @param request - UpgradeDBInstanceMajorVersionRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns UpgradeDBInstanceMajorVersionResponse
     */
    upgradeDBInstanceMajorVersionWithOptions(request: $_model.UpgradeDBInstanceMajorVersionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpgradeDBInstanceMajorVersionResponse>;
    /**
     * Initiates a major engine version upgrade task for an ApsaraDB RDS for PostgreSQL instance.
     *
     * @remarks
     * ### Supported engine
     * ApsaraDB RDS for PostgreSQL
     * ### Related documentation
     * This API operation incurs fees. Carefully read the related documentation to fully understand the fees, prerequisites, and impacts before you proceed.
     * [Upgrade the major engine version of an ApsaraDB RDS for PostgreSQL instance](https://help.aliyun.com/document_detail/203309.html)
     *
     * @param request - UpgradeDBInstanceMajorVersionRequest
     * @returns UpgradeDBInstanceMajorVersionResponse
     */
    upgradeDBInstanceMajorVersion(request: $_model.UpgradeDBInstanceMajorVersionRequest): Promise<$_model.UpgradeDBInstanceMajorVersionResponse>;
    /**
     * Performs a pre-upgrade check before a major engine version upgrade for ApsaraDB RDS for MySQL or ApsaraDB RDS for PostgreSQL instances.
     *
     * @remarks
     * ### Applicable engines
     * RDS MySQL
     * RDS PostgreSQL
     * ### Related documentation
     * >Notice: Before you call this operation, read the following documentation and make sure that you fully understand the prerequisites and impacts of this operation.
     * - [Major engine version upgrade check report for RDS MySQL](https://help.aliyun.com/document_detail/2794383.html)
     * - [Upgrade the major engine version of an ApsaraDB RDS for PostgreSQL instance](https://help.aliyun.com/document_detail/2879540.html)
     *
     * @param request - UpgradeDBInstanceMajorVersionPrecheckRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns UpgradeDBInstanceMajorVersionPrecheckResponse
     */
    upgradeDBInstanceMajorVersionPrecheckWithOptions(request: $_model.UpgradeDBInstanceMajorVersionPrecheckRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpgradeDBInstanceMajorVersionPrecheckResponse>;
    /**
     * Performs a pre-upgrade check before a major engine version upgrade for ApsaraDB RDS for MySQL or ApsaraDB RDS for PostgreSQL instances.
     *
     * @remarks
     * ### Applicable engines
     * RDS MySQL
     * RDS PostgreSQL
     * ### Related documentation
     * >Notice: Before you call this operation, read the following documentation and make sure that you fully understand the prerequisites and impacts of this operation.
     * - [Major engine version upgrade check report for RDS MySQL](https://help.aliyun.com/document_detail/2794383.html)
     * - [Upgrade the major engine version of an ApsaraDB RDS for PostgreSQL instance](https://help.aliyun.com/document_detail/2879540.html)
     *
     * @param request - UpgradeDBInstanceMajorVersionPrecheckRequest
     * @returns UpgradeDBInstanceMajorVersionPrecheckResponse
     */
    upgradeDBInstanceMajorVersionPrecheck(request: $_model.UpgradeDBInstanceMajorVersionPrecheckRequest): Promise<$_model.UpgradeDBInstanceMajorVersionPrecheckResponse>;
    /**
     * Upgrades the minor engine version of the database proxy.
     *
     * @remarks
     * ### Supported engines
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for PostgreSQL
     * ### Related feature documentation
     * >Notice: Before you call this operation, read the feature documentation to understand the prerequisites and impacts.
     * - [Upgrade the minor engine version of the database proxy for an ApsaraDB RDS for MySQL instance](https://help.aliyun.com/document_detail/197465.html)
     * - [Upgrade the minor engine version of the database proxy for an ApsaraDB RDS for PostgreSQL instance](https://help.aliyun.com/document_detail/418469.html)
     *
     * @param request - UpgradeDBProxyInstanceKernelVersionRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns UpgradeDBProxyInstanceKernelVersionResponse
     */
    upgradeDBProxyInstanceKernelVersionWithOptions(request: $_model.UpgradeDBProxyInstanceKernelVersionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpgradeDBProxyInstanceKernelVersionResponse>;
    /**
     * Upgrades the minor engine version of the database proxy.
     *
     * @remarks
     * ### Supported engines
     * - ApsaraDB RDS for MySQL
     * - ApsaraDB RDS for PostgreSQL
     * ### Related feature documentation
     * >Notice: Before you call this operation, read the feature documentation to understand the prerequisites and impacts.
     * - [Upgrade the minor engine version of the database proxy for an ApsaraDB RDS for MySQL instance](https://help.aliyun.com/document_detail/197465.html)
     * - [Upgrade the minor engine version of the database proxy for an ApsaraDB RDS for PostgreSQL instance](https://help.aliyun.com/document_detail/418469.html)
     *
     * @param request - UpgradeDBProxyInstanceKernelVersionRequest
     * @returns UpgradeDBProxyInstanceKernelVersionResponse
     */
    upgradeDBProxyInstanceKernelVersion(request: $_model.UpgradeDBProxyInstanceKernelVersionRequest): Promise<$_model.UpgradeDBProxyInstanceKernelVersionResponse>;
    /**
     * Pre-checks the data import task for an ApsaraDB RDS for MySQL native replication instance.
     *
     * @remarks
     * Pre-checks the data import task for an ApsaraDB RDS for MySQL native replication instance.
     *
     * @param request - ValidateImportTaskRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ValidateImportTaskResponse
     */
    validateImportTaskWithOptions(request: $_model.ValidateImportTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ValidateImportTaskResponse>;
    /**
     * Pre-checks the data import task for an ApsaraDB RDS for MySQL native replication instance.
     *
     * @remarks
     * Pre-checks the data import task for an ApsaraDB RDS for MySQL native replication instance.
     *
     * @param request - ValidateImportTaskRequest
     * @returns ValidateImportTaskResponse
     */
    validateImportTask(request: $_model.ValidateImportTaskRequest): Promise<$_model.ValidateImportTaskResponse>;
}
