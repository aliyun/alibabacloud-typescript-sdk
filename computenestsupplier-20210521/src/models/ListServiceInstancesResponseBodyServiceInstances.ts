// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListServiceInstancesResponseBodyServiceInstancesService } from "./ListServiceInstancesResponseBodyServiceInstancesService";
import { ListServiceInstancesResponseBodyServiceInstancesTags } from "./ListServiceInstancesResponseBodyServiceInstancesTags";


export class ListServiceInstancesResponseBodyServiceInstances extends $dara.Model {
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
   * The time when the service instance expires.
   * 
   * @example
   * 2022-01-01T12:00:00
   */
  endTime?: string;
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
   * The name of the service instance.
   * 
   * @example
   * TestName
   */
  name?: string;
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
   * 2021-12-29T06:48:56Z
   */
  operationEndTime?: string;
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
   * The parameters of the service instance.
   * 
   * @example
   * {"param":"value"}
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
   * The deployment progress of the service instance. Unit: percentage.
   * 
   * @example
   * 90
   */
  progress?: number;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * si-d6ab3a63ccxxxxxx
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The information about the service.
   */
  service?: ListServiceInstancesResponseBodyServiceInstancesService;
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
   * The source from which the service instance is created.
   * 
   * @example
   * Supplier
   */
  source?: string;
  /**
   * @remarks
   * The status of the service instance. Valid values:
   * 
   * *   Created
   * *   Deploying
   * *   DeployedFailed
   * *   Deployed
   * *   Upgrading
   * *   Deleting
   * *   Deleted
   * 
   * @example
   * Deployed
   */
  status?: string;
  /**
   * @remarks
   * The description of the deployment of the service instance.
   * 
   * @example
   * deploy successfully
   */
  statusDetail?: string;
  /**
   * @remarks
   * The custom tags.
   */
  tags?: ListServiceInstancesResponseBodyServiceInstancesTags[];
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
      endTime: 'EndTime',
      isOperated: 'IsOperated',
      name: 'Name',
      operatedServiceInstanceId: 'OperatedServiceInstanceId',
      operationEndTime: 'OperationEndTime',
      operationStartTime: 'OperationStartTime',
      parameters: 'Parameters',
      payType: 'PayType',
      progress: 'Progress',
      resourceGroupId: 'ResourceGroupId',
      service: 'Service',
      serviceInstanceId: 'ServiceInstanceId',
      serviceType: 'ServiceType',
      source: 'Source',
      status: 'Status',
      statusDetail: 'StatusDetail',
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
      endTime: 'string',
      isOperated: 'boolean',
      name: 'string',
      operatedServiceInstanceId: 'string',
      operationEndTime: 'string',
      operationStartTime: 'string',
      parameters: 'string',
      payType: 'string',
      progress: 'number',
      resourceGroupId: 'string',
      service: ListServiceInstancesResponseBodyServiceInstancesService,
      serviceInstanceId: 'string',
      serviceType: 'string',
      source: 'string',
      status: 'string',
      statusDetail: 'string',
      tags: { 'type': 'array', 'itemType': ListServiceInstancesResponseBodyServiceInstancesTags },
      templateName: 'string',
      updateTime: 'string',
      userId: 'number',
    };
  }

  validate() {
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

