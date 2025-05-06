// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetIntegratedServiceStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * The type of the event that is integrated across accounts. Valid values:
   * 
   * *   NonCompliantNotification: non-compliance event
   * 
   * @example
   * NonCompliantNotification
   */
  aggregatorDeliveryDataType?: string;
  /**
   * @remarks
   * Indicates whether the product has been integrated. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  data?: boolean;
  /**
   * @remarks
   * The types of the integrated events. Separate multiple event types with commas (,). Valid values:
   * 
   * *   ConfigurationItemChangeNotification: resource change event
   * *   NonCompliantNotification: non-compliance event
   * 
   * @example
   * NonCompliantNotification
   */
  integratedTypes?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 2E396C84-8D50-5F95-97FA-C0367181BA8A
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      aggregatorDeliveryDataType: 'AggregatorDeliveryDataType',
      data: 'Data',
      integratedTypes: 'IntegratedTypes',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggregatorDeliveryDataType: 'string',
      data: 'boolean',
      integratedTypes: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

