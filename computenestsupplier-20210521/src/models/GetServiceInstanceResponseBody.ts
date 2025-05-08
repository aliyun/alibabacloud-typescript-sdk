// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetServiceInstanceResponseBodyNetworkConfig } from "./GetServiceInstanceResponseBodyNetworkConfig";
import { GetServiceInstanceResponseBodyService } from "./GetServiceInstanceResponseBodyService";
import { GetServiceInstanceResponseBodyTags } from "./GetServiceInstanceResponseBodyTags";


export class GetServiceInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The business status of the service instance. Valid values:
   * 
   * *   Normal: The service instance is normal.
   * *   Renewing: The service instance is being renewed.
   * *   RenewFailed: The service instance failed to be renewed.
   * *   Expired: The service instance expired.
   * 
   * @example
   * Normal
   */
  bizStatus?: string;
  /**
   * @remarks
   * The time when the service instance was created.
   * 
   * @example
   * 2021-05-20T00:00:00Z
   */
  createTime?: string;
  /**
   * @remarks
   * Indicates whether the service instance supports the hosted O\\&M feature. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  enableInstanceOps?: boolean;
  /**
   * @remarks
   * Indicates whether the Prometheus monitoring feature is enabled on the user side.
   * 
   * @example
   * true
   */
  enableUserPrometheus?: boolean;
  /**
   * @remarks
   * The time when the service instance expires.
   * 
   * @example
   * 2022-01-01T12:00:00
   */
  endTime?: string;
  /**
   * @remarks
   * The URL of the Grafana dashboard.
   * 
   * @example
   * https://g.xxxxxx.aliyun.com/d/xxxxxxxx-cn-mariadb/mysql-xxxxxxxx-quickstart-and-dashboard?orgId=355401&refresh=10s
   */
  grafanaDashBoardUrl?: string;
  /**
   * @remarks
   * Indicates whether the hosted O\\&M feature is enabled for the service instance. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  isOperated?: boolean;
  /**
   * @remarks
   * The license metadata.
   * 
   * @example
   * {"renewType":"MONTHLY"}
   */
  licenseMetadata?: string;
  /**
   * @remarks
   * The name of the service instance.
   * 
   * @example
   * TestName
   */
  name?: string;
  /**
   * @remarks
   * The network configurations.
   * 
   * >  This parameter is discontinued.
   */
  networkConfig?: GetServiceInstanceResponseBodyNetworkConfig;
  /**
   * @remarks
   * The ID of the service instance that is used to implement hosted O\\&M.
   * 
   * @example
   * si-d6ab3a63ccbb4b17****
   */
  operatedServiceInstanceId?: string;
  /**
   * @remarks
   * The end of the time range during which hosted O\\&M is implemented.
   * 
   * @example
   * 2022-01-28T06:48:56Z
   */
  operationEndTime?: string;
  /**
   * @remarks
   * Operate extra info
   * 
   * @example
   * 6cc5ce3590ed7f5529e85fec
   */
  operationExtraInfo?: string;
  /**
   * @remarks
   * The beginning of the time range during which hosted O\\&M is implemented.
   * 
   * @example
   * 2021-12-29T06:48:56Z
   */
  operationStartTime?: string;
  /**
   * @remarks
   * The outputs returned from creating the service instance.
   * 
   * *   If the service is deployed by using a ROS template, all output fields of the template are returned.
   * *   If the service is deployed by calling an SPI operation, the output fields of the service provider and for the Compute Nest additional features are returned.
   * 
   * @example
   * {
   *       "InstanceIds": [
   *             "i-hp38ofxl0dsyfi7z****"
   *       ]
   * }
   */
  outputs?: string;
  /**
   * @remarks
   * The parameters that are specified to deploy the service instance.
   * 
   * @example
   * {
   *       "param": "value"
   * }
   */
  parameters?: string;
  /**
   * @remarks
   * The billing method of the service. Valid values:
   * 
   * *   Permanent: Once you purchase the service, you can use it permanently.
   * *   Subscription: You purchase the service from Alibaba Cloud Marketplace and are charged for the service on a subscription basis.
   * *   PayAsYouGo: You purchase the service from Alibaba Cloud Marketplace and are charged for the service on a pay-as-you-go basis.
   * *   CustomFixTime: You are charged for the service based on a custom duration fixed by the service provider.
   * 
   * @example
   * Subscription
   */
  payType?: string;
  /**
   * @remarks
   * The package name.
   * 
   * @example
   * Package 1
   */
  predefinedParameterName?: string;
  /**
   * @remarks
   * The deployment progress of the service instance. Unit: percentage.
   * 
   * @example
   * 90
   */
  progress?: number;
  /**
   * @remarks
   * The logon URL for the accounts in the resource directory corresponding to the service instance.
   * 
   * @example
   * https://signin.aliyun.com/switchRole.htm?parentAlias=1307782318217247.onaliyun.com&roleName=ResourceDirectoryAccountAccessRole
   */
  rdAccountLoginUrl?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 4DB0F536-B3BE-4F0D-BD29-E83FB56D550C
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-aekzkt5buxxxxxx
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The list of resources.
   * 
   * @example
   * [
   *       {
   *             "StackId": "stack-xxx"
   *       }
   * ]
   */
  resources?: string;
  /**
   * @remarks
   * The information about the service to which the service instance belongs.
   */
  service?: GetServiceInstanceResponseBodyService;
  /**
   * @remarks
   * The ID of the service instance.
   * 
   * @example
   * si-d6ab3a63ccbb4b17****
   */
  serviceInstanceId?: string;
  /**
   * @remarks
   * The type of the service. Valid values:
   * 
   * *   private: The service is a private service and is deployed within the account of a customer.
   * *   managed: The service is a fully managed service and is deployed within the account of a service provider.
   * *   operation: The service is a hosted O\\&M service.
   * *   poc: The service is a trial service.
   * 
   * @example
   * private
   */
  serviceType?: string;
  /**
   * @remarks
   * The source of the service instance. Valid values:
   * 
   * *   User: Compute Nest customer
   * *   Market: Alibaba Cloud Marketplace
   * *   Supplier: Compute Nest service provider
   * 
   * @example
   * User
   */
  source?: string;
  /**
   * @remarks
   * The deployment state of the service instance. Valid values:
   * 
   * *   Created
   * *   Deploying
   * *   DeployedFailed
   * *   Deployed
   * *   Upgrading
   * *   Deleting
   * *   Deleted
   * *   DeletedFailed
   * 
   * @example
   * Deployed
   */
  status?: string;
  /**
   * @remarks
   * The description of the deployment state of the service instance.
   * 
   * @example
   * deploy successfully
   */
  statusDetail?: string;
  /**
   * @remarks
   * The Alibaba Cloud account ID of the service provider.
   * 
   * @example
   * 1964460391538545
   */
  supplierUid?: number;
  /**
   * @remarks
   * The custom tags.
   */
  tags?: GetServiceInstanceResponseBodyTags[];
  /**
   * @remarks
   * The template name.
   * 
   * @example
   * 模板1
   */
  templateName?: string;
  /**
   * @remarks
   * The time when the service instance was updated.
   * 
   * @example
   * 2021-05-20T00:00:00Z
   */
  updateTime?: string;
  /**
   * @remarks
   * The Alibaba Cloud account ID of the user.
   * 
   * @example
   * 1234567
   */
  userId?: number;
  static names(): { [key: string]: string } {
    return {
      bizStatus: 'BizStatus',
      createTime: 'CreateTime',
      enableInstanceOps: 'EnableInstanceOps',
      enableUserPrometheus: 'EnableUserPrometheus',
      endTime: 'EndTime',
      grafanaDashBoardUrl: 'GrafanaDashBoardUrl',
      isOperated: 'IsOperated',
      licenseMetadata: 'LicenseMetadata',
      name: 'Name',
      networkConfig: 'NetworkConfig',
      operatedServiceInstanceId: 'OperatedServiceInstanceId',
      operationEndTime: 'OperationEndTime',
      operationExtraInfo: 'OperationExtraInfo',
      operationStartTime: 'OperationStartTime',
      outputs: 'Outputs',
      parameters: 'Parameters',
      payType: 'PayType',
      predefinedParameterName: 'PredefinedParameterName',
      progress: 'Progress',
      rdAccountLoginUrl: 'RdAccountLoginUrl',
      requestId: 'RequestId',
      resourceGroupId: 'ResourceGroupId',
      resources: 'Resources',
      service: 'Service',
      serviceInstanceId: 'ServiceInstanceId',
      serviceType: 'ServiceType',
      source: 'Source',
      status: 'Status',
      statusDetail: 'StatusDetail',
      supplierUid: 'SupplierUid',
      tags: 'Tags',
      templateName: 'TemplateName',
      updateTime: 'UpdateTime',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizStatus: 'string',
      createTime: 'string',
      enableInstanceOps: 'boolean',
      enableUserPrometheus: 'boolean',
      endTime: 'string',
      grafanaDashBoardUrl: 'string',
      isOperated: 'boolean',
      licenseMetadata: 'string',
      name: 'string',
      networkConfig: GetServiceInstanceResponseBodyNetworkConfig,
      operatedServiceInstanceId: 'string',
      operationEndTime: 'string',
      operationExtraInfo: 'string',
      operationStartTime: 'string',
      outputs: 'string',
      parameters: 'string',
      payType: 'string',
      predefinedParameterName: 'string',
      progress: 'number',
      rdAccountLoginUrl: 'string',
      requestId: 'string',
      resourceGroupId: 'string',
      resources: 'string',
      service: GetServiceInstanceResponseBodyService,
      serviceInstanceId: 'string',
      serviceType: 'string',
      source: 'string',
      status: 'string',
      statusDetail: 'string',
      supplierUid: 'number',
      tags: { 'type': 'array', 'itemType': GetServiceInstanceResponseBodyTags },
      templateName: 'string',
      updateTime: 'string',
      userId: 'number',
    };
  }

  validate() {
    if(this.networkConfig && typeof (this.networkConfig as any).validate === 'function') {
      (this.networkConfig as any).validate();
    }
    if(this.service && typeof (this.service as any).validate === 'function') {
      (this.service as any).validate();
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

