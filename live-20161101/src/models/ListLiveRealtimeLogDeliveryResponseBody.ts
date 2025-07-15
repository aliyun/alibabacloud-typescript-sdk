// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListLiveRealtimeLogDeliveryResponseBodyContentRealtimeLogDeliveryInfo extends $dara.Model {
  /**
   * @remarks
   * The ID of the domain name.
   * 
   * @example
   * 1001010
   */
  dmId?: number;
  /**
   * @remarks
   * The streaming domain.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * The name of the Logstore to which log entries are delivered.
   * 
   * @example
   * logstore_example
   */
  logstore?: string;
  /**
   * @remarks
   * The name of the Log Service project that is used for real-time log delivery.
   * 
   * @example
   * project_example
   */
  project?: string;
  /**
   * @remarks
   * The ID of the region where the Log Service project is deployed.
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @remarks
   * The status of real-time log delivery. Valid values:
   * 
   * *   **online**: enabled
   * *   **offline**: disabled
   * 
   * @example
   * online
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      dmId: 'DmId',
      domainName: 'DomainName',
      logstore: 'Logstore',
      project: 'Project',
      region: 'Region',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dmId: 'number',
      domainName: 'string',
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

export class ListLiveRealtimeLogDeliveryResponseBodyContent extends $dara.Model {
  realtimeLogDeliveryInfo?: ListLiveRealtimeLogDeliveryResponseBodyContentRealtimeLogDeliveryInfo[];
  static names(): { [key: string]: string } {
    return {
      realtimeLogDeliveryInfo: 'RealtimeLogDeliveryInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      realtimeLogDeliveryInfo: { 'type': 'array', 'itemType': ListLiveRealtimeLogDeliveryResponseBodyContentRealtimeLogDeliveryInfo },
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

export class ListLiveRealtimeLogDeliveryResponseBody extends $dara.Model {
  /**
   * @remarks
   * The configurations of real-time log delivery.
   */
  content?: ListLiveRealtimeLogDeliveryResponseBodyContent;
  /**
   * @remarks
   * The request ID.
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
      content: ListLiveRealtimeLogDeliveryResponseBodyContent,
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

