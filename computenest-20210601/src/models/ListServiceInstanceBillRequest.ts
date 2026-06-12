// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListServiceInstanceBillRequest extends $dara.Model {
  /**
   * @remarks
   * The billing cycle in YYYY-MM format. Only billing cycles in the last 18 months are supported.
   * 
   * This parameter is required.
   * 
   * @example
   * 2024-05
   */
  billingCycle?: string;
  /**
   * @remarks
   * The billing date. This parameter is required only when **Granularity** is set to DAILY. The format is YYYY-MM-DD.
   * 
   * @example
   * 2025-04-01
   */
  billingDate?: string;
  /**
   * @remarks
   * The granularity of the bills to query. Valid values:
   * 
   * - MONTHLY: monthly. The data is consistent with the bills aggregated by billing cycle in the User Center.
   * 
   * - DAILY: daily. The data is consistent with the bills aggregated by day in the User Center.
   * 
   * If you set this parameter to DAILY, you must also specify **BillingDate**.
   * 
   * @example
   * DAILY
   */
  granularity?: string;
  /**
   * @remarks
   * The number of entries to return on each page. Maximum value: 100. Default value: 20.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that is used to retrieve the next page of results.
   * 
   * @example
   * AAAAAVz7BQqj2xtiNSC3d3RAD38=
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the service instance.
   * 
   * @example
   * si-49793f3bfa034ec6a990
   */
  serviceInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      billingCycle: 'BillingCycle',
      billingDate: 'BillingDate',
      granularity: 'Granularity',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      serviceInstanceId: 'ServiceInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billingCycle: 'string',
      billingDate: 'string',
      granularity: 'string',
      maxResults: 'number',
      nextToken: 'string',
      serviceInstanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

