// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListServiceInstanceBillRequest extends $dara.Model {
  /**
   * @remarks
   * The billing cycle in the YYYY-MM format.
   * 
   * This parameter is required.
   * 
   * @example
   * 2025-03
   */
  billingCycle?: string;
  /**
   * @remarks
   * The billing date. This parameter is required only when **Granularity** is set to DAILY. The format is YYYY-MM-DD.
   * 
   * @example
   * 2024-12-05
   */
  billingDate?: string;
  /**
   * @remarks
   * The granularity at which you want to query bills. Valid values:
   * 
   * - MONTHLY: by month. The bill details are consistent with the bills on the By Billing Cycle tab of the Bill Details page in User Center.
   * 
   * - DAILY: by day. The bill details are consistent with the bills on the By Day tab of the Bill Details page in User Center.
   * 
   * > If you set this parameter to DAILY, you must specify BillingDate.
   * 
   * @example
   * MONTHLY
   */
  granularity?: string;
  /**
   * @remarks
   * The number of entries to return on each page. Maximum value: 100. Default value: 20.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that is used to start the next query. Valid values:
   * 
   * - If **NextToken** is empty, no more results exist.
   * 
   * - If **NextToken** has a value, the value is the token that is used to start the next query.
   * 
   * @example
   * AAAAAfu+XtuBE55iRLHEYYuojI4=
   */
  nextToken?: string;
  /**
   * @remarks
   * The service ID.
   * 
   * @example
   * service-6121296da4f44e469519
   */
  serviceId?: string;
  /**
   * @remarks
   * The ID of the service instance.
   * 
   * You can call the [ListServiceInstances](https://help.aliyun.com/document_detail/396200.html) operation to obtain the service instance ID.
   * 
   * @example
   * si-0d0d7bc9accc4e2e8a8f
   */
  serviceInstanceId?: string;
  /**
   * @remarks
   * The service version.
   * 
   * @example
   * 1
   */
  serviceVersion?: string;
  static names(): { [key: string]: string } {
    return {
      billingCycle: 'BillingCycle',
      billingDate: 'BillingDate',
      granularity: 'Granularity',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      serviceId: 'ServiceId',
      serviceInstanceId: 'ServiceInstanceId',
      serviceVersion: 'ServiceVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billingCycle: 'string',
      billingDate: 'string',
      granularity: 'string',
      maxResults: 'number',
      nextToken: 'string',
      serviceId: 'string',
      serviceInstanceId: 'string',
      serviceVersion: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

