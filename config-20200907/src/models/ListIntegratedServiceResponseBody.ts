// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListIntegratedServiceResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The event type for cross-account integration. Supported event types:
   * 
   * - NonCompliantNotification: non-compliance events.
   * 
   * @example
   * NonCompliantNotification
   */
  aggregatorDeliveryDataType?: string;
  /**
   * @remarks
   * The event types for the integration. Separate multiple types with commas (,). Supported event types:
   * 
   * - ConfigurationItemChangeNotification: resource change events.
   * 
   * - NonCompliantNotification: non-compliance events.
   * 
   * @example
   * NonCompliantNotification
   */
  integratedTypes?: string;
  /**
   * @remarks
   * The identifier of the integrable Alibaba Cloud service. Valid values:
   * 
   * - eventbridge: EventBridge.
   * 
   * - cms: Cloud Monitor.
   * 
   * - bpstudio: Cloud Architect Design Tools.
   * 
   * @example
   * cms
   */
  serviceCode?: string;
  /**
   * @remarks
   * The name of the integrated service.
   * 
   * @example
   * 云监控
   */
  serviceName?: string;
  /**
   * @remarks
   * The integration status of the Alibaba Cloud service. Valid values:
   * 
   * - true: The service is integrated.
   * 
   * - false: The service is not integrated.
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
   * The information about the integrated services.
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

