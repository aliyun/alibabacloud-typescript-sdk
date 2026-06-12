// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListServiceInstanceResourcesResponseBodyResources extends $dara.Model {
  /**
   * @remarks
   * The time when the resource was created.
   * 
   * @example
   * 2022-01-01T12:00:00
   */
  createTime?: string;
  /**
   * @remarks
   * The expiration time.
   * 
   * @example
   * 2022-03-01T12:00:00
   */
  expireTime?: string;
  /**
   * @remarks
   * The billing method. Valid values:
   * 
   * - Subscription: subscription.
   * 
   * - PayAsYouGo: pay-as-you-go.
   * 
   * @example
   * Subscription
   */
  payType?: string;
  /**
   * @remarks
   * The product code.
   * 
   * @example
   * rds
   */
  productCode?: string;
  /**
   * @remarks
   * The product type.
   * 
   * @example
   * RDS
   */
  productType?: string;
  /**
   * @remarks
   * The renewal status. Valid values:
   * 
   * - AutoRenewal: auto-renewal.
   * 
   * - ManualRenewal: manual renewal.
   * 
   * - NotRenewal: no renewal.
   * 
   * @example
   * AutoRenewal
   */
  renewStatus?: string;
  /**
   * @remarks
   * The renewal period.
   * 
   * @example
   * 1
   */
  renewalPeriod?: number;
  /**
   * @remarks
   * The unit of the renewal period. Valid values:
   * 
   * - Month: month.
   * 
   * - Year: year.
   * 
   * @example
   * Month
   */
  renewalPeriodUnit?: string;
  /**
   * @remarks
   * The Alibaba Cloud Resource Name (ARN) of the resource.
   * 
   * @example
   * arn:acs:sag:cn-hangzhou:130920852836****:ccn/ccn-b3qf0q439sq2de****
   */
  resourceARN?: string;
  /**
   * @remarks
   * The status of the resource. Valid values:
   * 
   * - INIT_COMPLETE: The resource is pending creation.
   * 
   * - CREATE_COMPLETE: The resource is created.
   * 
   * - CREATE_FAILED: The resource failed to be created.
   * 
   * - CREATE_IN_PROGRESS: The resource is being created.
   * 
   * - UPDATE_IN_PROGRESS: The resource is being updated.
   * 
   * - UPDATE_FAILED: The resource failed to be updated.
   * 
   * - UPDATE_COMPLETE: The resource is updated.
   * 
   * - DELETE_IN_PROGRESS: The resource is being deleted.
   * 
   * - DELETE_FAILED: The resource failed to be deleted.
   * 
   * - DELETE_COMPLETE: The resource is deleted.
   * 
   * - CHECK_IN_PROGRESS: The resource is being checked.
   * 
   * - CHECK_FAILED: The resource failed to be checked.
   * 
   * - CHECK_COMPLETE: The resource is checked.
   * 
   * - IMPORT_IN_PROGRESS: The resource is being imported.
   * 
   * - IMPORT_FAILED: The resource failed to be imported.
   * 
   * - IMPORT_COMPLETE: The resource is imported.
   * 
   * @example
   * CREATE_COMPLETE
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      expireTime: 'ExpireTime',
      payType: 'PayType',
      productCode: 'ProductCode',
      productType: 'ProductType',
      renewStatus: 'RenewStatus',
      renewalPeriod: 'RenewalPeriod',
      renewalPeriodUnit: 'RenewalPeriodUnit',
      resourceARN: 'ResourceARN',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      expireTime: 'string',
      payType: 'string',
      productCode: 'string',
      productType: 'string',
      renewStatus: 'string',
      renewalPeriod: 'number',
      renewalPeriodUnit: 'string',
      resourceARN: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServiceInstanceResourcesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of entries returned per page. Maximum value: 100. Default value: 20.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The token to start the next query.
   * 
   * @example
   * AAAAAc3HCuYhJi/wvpk4xOr0VLbAx7BkQzyYC+ONO+WudHGKEdB0uWSY7AGnM3qCgm/Ynge7zU6NWdbj0Tegyajyqyc=
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * B288A0BE-D927-4888-B0F7-B35EF84B6E6F
   */
  requestId?: string;
  /**
   * @remarks
   * The resources.
   */
  resources?: ListServiceInstanceResourcesResponseBodyResources[];
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      resources: 'Resources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      resources: { 'type': 'array', 'itemType': ListServiceInstanceResourcesResponseBodyResources },
    };
  }

  validate() {
    if(Array.isArray(this.resources)) {
      $dara.Model.validateArray(this.resources);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

