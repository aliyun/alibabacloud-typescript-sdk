// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListIntegratedServiceResponseBodyData extends $dara.Model {
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
   * The identifier of the cloud service. Valid values:
   * 
   * *   eventbridge: EventBridge
   * *   cms: CloudMonitor
   * *   bpstudio: Cloud Architect Design Tools
   * 
   * @example
   * cms
   */
  serviceCode?: string;
  /**
   * @remarks
   * The name of the cloud service.
   * 
   * @example
   * cms
   */
  serviceName?: string;
  /**
   * @remarks
   * The integration status of the cloud service. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  status?: boolean;
  static names(): { [key: string]: string } {
    return {
      aggregatorDeliveryDataType: 'AggregatorDeliveryDataType',
      integratedTypes: 'IntegratedTypes',
      serviceCode: 'ServiceCode',
      serviceName: 'ServiceName',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggregatorDeliveryDataType: 'string',
      integratedTypes: 'string',
      serviceCode: 'string',
      serviceName: 'string',
      status: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIntegratedServiceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the cloud service that can be integrated.
   */
  data?: ListIntegratedServiceResponseBodyData[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 86DB52A5-0C25-505A-96D5-9BAE1EFA00B9
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListIntegratedServiceResponseBodyData },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

