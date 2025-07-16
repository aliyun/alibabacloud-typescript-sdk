// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRealtimeLogDeliveryInfosResponseBodyContentRealtimeLogDeliveryInfos extends $dara.Model {
  /**
   * @remarks
   * The name of the Logstore that collects log data from Alibaba Cloud CDN in real time.
   * 
   * @example
   * LogstoreName
   */
  logstore?: string;
  /**
   * @remarks
   * The name of the Log Service project that is used for real-time log delivery.
   * 
   * @example
   * ProjectName
   */
  project?: string;
  /**
   * @remarks
   * The ID of the region where the Log Service project is deployed. For more information, see [Regions that support real-time log delivery](https://help.aliyun.com/document_detail/144883.html).
   * 
   * @example
   * ch-shanghai
   */
  region?: string;
  static names(): { [key: string]: string } {
    return {
      logstore: 'Logstore',
      project: 'Project',
      region: 'Region',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logstore: 'string',
      project: 'string',
      region: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRealtimeLogDeliveryInfosResponseBodyContent extends $dara.Model {
  realtimeLogDeliveryInfos?: ListRealtimeLogDeliveryInfosResponseBodyContentRealtimeLogDeliveryInfos[];
  static names(): { [key: string]: string } {
    return {
      realtimeLogDeliveryInfos: 'RealtimeLogDeliveryInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      realtimeLogDeliveryInfos: { 'type': 'array', 'itemType': ListRealtimeLogDeliveryInfosResponseBodyContentRealtimeLogDeliveryInfos },
    };
  }

  validate() {
    if(Array.isArray(this.realtimeLogDeliveryInfos)) {
      $dara.Model.validateArray(this.realtimeLogDeliveryInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRealtimeLogDeliveryInfosResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about real-time log delivery.
   */
  content?: ListRealtimeLogDeliveryInfosResponseBodyContent;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 95D5B69F-8AEC-419B-8F3A-612B35032B0D
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
      content: ListRealtimeLogDeliveryInfosResponseBodyContent,
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

