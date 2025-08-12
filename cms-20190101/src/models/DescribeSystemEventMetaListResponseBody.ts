// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSystemEventMetaListResponseBodyDataResource extends $dara.Model {
  /**
   * @remarks
   * The type of the system event. Valid values:
   * 
   * *   StatusNotification: fault notifications
   * *   Exception: exceptions
   * *   Maintenance: O\\&M
   * 
   * @example
   * Exception
   */
  eventType?: string;
  /**
   * @remarks
   * The alert level. Valid values:
   * 
   * *   CRITICAL
   * *   WARN
   * *   INFO
   * 
   * @example
   * INFO
   */
  level?: string;
  /**
   * @remarks
   * The name of the system event.
   * 
   * @example
   * SelectFailureRate
   */
  name?: string;
  /**
   * @remarks
   * The description of the event name.
   * 
   * @example
   * High query failure rate
   */
  nameDesc?: string;
  nameDesc_en?: string;
  /**
   * @remarks
   * The abbreviation of the service name.
   * 
   * @example
   * ADS
   */
  product?: string;
  /**
   * @remarks
   * The status of the system event.
   * 
   * @example
   * failed
   */
  status?: string;
  /**
   * @remarks
   * The description of the event status.
   * 
   * @example
   * Operation Failed
   */
  statusDesc?: string;
  static names(): { [key: string]: string } {
    return {
      eventType: 'EventType',
      level: 'Level',
      name: 'Name',
      nameDesc: 'NameDesc',
      nameDesc_en: 'NameDesc.En',
      product: 'Product',
      status: 'Status',
      statusDesc: 'StatusDesc',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventType: 'string',
      level: 'string',
      name: 'string',
      nameDesc: 'string',
      nameDesc_en: 'string',
      product: 'string',
      status: 'string',
      statusDesc: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSystemEventMetaListResponseBodyData extends $dara.Model {
  resource?: DescribeSystemEventMetaListResponseBodyDataResource[];
  static names(): { [key: string]: string } {
    return {
      resource: 'Resource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resource: { 'type': 'array', 'itemType': DescribeSystemEventMetaListResponseBodyDataResource },
    };
  }

  validate() {
    if(Array.isArray(this.resource)) {
      $dara.Model.validateArray(this.resource);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSystemEventMetaListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code.
   * 
   * >  The status code 200 indicates that the request was successful.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The queried meta information.
   */
  data?: DescribeSystemEventMetaListResponseBodyData;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A6582C8B-E67C-4A19-BC15-EAEFEBDC7995
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: DescribeSystemEventMetaListResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

