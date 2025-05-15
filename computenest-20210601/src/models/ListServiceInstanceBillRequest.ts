// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListServiceInstanceBillRequest extends $dara.Model {
  /**
   * @remarks
   * The billing cycle. Format: YYYY-MM.
   * 
   * This parameter is required.
   * 
   * @example
   * 2024-05
   */
  billingCycle?: string;
  /**
   * @remarks
   * The billing date. This parameter is required only if the **Granularity** parameter is set to DAILY. Format: YYYY-MM-DD.
   * 
   * @example
   * 2025-04-01
   */
  billingDate?: string;
  /**
   * @remarks
   * The granularity at which bills are queried. Valid values:
   * 
   * *   MONTHLY: queries bills by month. The data queried is consistent with the data that is displayed for the specified billing cycle on the Billing Details tab of the Bill Details page in User Center.
   * *   DAILY: queries bills by day. The data queried is consistent with the data that is displayed for the specified day on the Billing Details tab of the Bill Details page in User Center.
   * 
   * You must set the **BillingDate** parameter before you can set the Granularity parameter to DAILY.
   * 
   * @example
   * DAILY
   */
  granularity?: string;
  /**
   * @remarks
   * The number of entries page. Valid values: 1 to 100. Default value: 20.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * A pagination token.
   * 
   * @example
   * AAAAAVz7BQqj2xtiNSC3d3RAD38=
   */
  nextToken?: string;
  /**
   * @remarks
   * The service instance ID.
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

