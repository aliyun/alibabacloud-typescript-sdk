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
   * The time when the resource expires.
   * 
   * @example
   * 2022-03-01T12:00:00
   */
  expireTime?: string;
  /**
   * @remarks
   * The billing method. Valid values:
   * 
   * *   Subscription
   * *   PayAsYouGo
   * 
   * @example
   * Subscription
   */
  payType?: string;
  /**
   * @remarks
   * The code of the cloud service.
   * 
   * @example
   * rds
   */
  productCode?: string;
  /**
   * @remarks
   * The type of the cloud service.
   * 
   * @example
   * RDS
   */
  productType?: string;
  /**
   * @remarks
   * The renewal state. Valid values:
   * 
   * *   AutoRenewal
   * *   ManualRenewal
   * *   NotRenewal
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
   * *   Month
   * *   Year
   * 
   * @example
   * Month
   */
  renewalPeriodUnit?: string;
  /**
   * @remarks
   * The ARN of the resource.
   * 
   * @example
   * arn:acs:sag:cn-hangzhou:130920852836****:ccn/ccn-b3qf0q439sq2de****
   */
  resourceARN?: string;
  /**
   * @remarks
   * The state of the resource. Valid values:
   * 
   * *   running
   * *   waiting
   * *   terminated
   * 
   * >  This parameter is returned only for containers.
   * 
   * @example
   * running
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

