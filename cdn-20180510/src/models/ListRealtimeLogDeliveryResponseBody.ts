// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRealtimeLogDeliveryResponseBodyContentRealtimeLogDeliveryInfo extends $dara.Model {
  /**
   * @remarks
   * The domain ID.
   * 
   * @example
   * 1001010
   */
  dmId?: number;
  /**
   * @remarks
   * The accelerated domain name.
   * 
   * @example
   * example.com
   */
  domain?: string;
  /**
   * @remarks
   * The name of the Logstore where log entries are stored.
   * 
   * @example
   * test
   */
  logstore?: string;
  /**
   * @remarks
   * The name of the Log Service project that is used for real-time log delivery.
   * 
   * @example
   * test
   */
  project?: string;
  /**
   * @remarks
   * The ID of the region where the Log Service project is deployed.
   * 
   * @example
   * cn-hangzhou-corp
   */
  region?: string;
  /**
   * @remarks
   * The status of real-time log delivery.
   * 
   * @example
   * online
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      dmId: 'DmId',
      domain: 'Domain',
      logstore: 'Logstore',
      project: 'Project',
      region: 'Region',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dmId: 'number',
      domain: 'string',
      logstore: 'string',
      project: 'string',
      region: 'string',
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

export class ListRealtimeLogDeliveryResponseBodyContent extends $dara.Model {
  realtimeLogDeliveryInfo?: ListRealtimeLogDeliveryResponseBodyContentRealtimeLogDeliveryInfo[];
  static names(): { [key: string]: string } {
    return {
      realtimeLogDeliveryInfo: 'RealtimeLogDeliveryInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      realtimeLogDeliveryInfo: { 'type': 'array', 'itemType': ListRealtimeLogDeliveryResponseBodyContentRealtimeLogDeliveryInfo },
    };
  }

  validate() {
    if(Array.isArray(this.realtimeLogDeliveryInfo)) {
      $dara.Model.validateArray(this.realtimeLogDeliveryInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRealtimeLogDeliveryResponseBody extends $dara.Model {
  /**
   * @remarks
   * The logging information.
   */
  content?: ListRealtimeLogDeliveryResponseBodyContent;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 30559C03-86C9-4EEC-B840-0DC5F5A2189B
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: ListRealtimeLogDeliveryResponseBodyContent,
      requestId: 'string',
    };
  }

  validate() {
    if(this.content && typeof (this.content as any).validate === 'function') {
      (this.content as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

