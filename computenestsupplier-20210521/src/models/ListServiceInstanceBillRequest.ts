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
   * 2025-03
   */
  billingCycle?: string;
  /**
   * @remarks
   * The billing date. This parameter is required only if the **Granularity** parameter is set to DAILY. Format: YYYY-MM-DD.
   * 
   * @example
   * 2024-12-05
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
   * MONTHLY
   */
  granularity?: string;
  /**
   * @remarks
   * The maximum number of entries per page.
   * 
   * Valid values: 1 to 100.
   * 
   * Default value: 20.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * A pagination token. It can be used in the next request to retrieve a new page of results. If NextToken is empty, no next page exists.
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

