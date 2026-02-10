// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListLiveRealtimeLogDeliveryInfosResponseBodyContentRealtimeLogDeliveryInfos extends $dara.Model {
  logstore?: string;
  project?: string;
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

export class ListLiveRealtimeLogDeliveryInfosResponseBodyContent extends $dara.Model {
  realtimeLogDeliveryInfos?: ListLiveRealtimeLogDeliveryInfosResponseBodyContentRealtimeLogDeliveryInfos[];
  static names(): { [key: string]: string } {
    return {
      realtimeLogDeliveryInfos: 'RealtimeLogDeliveryInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      realtimeLogDeliveryInfos: { 'type': 'array', 'itemType': ListLiveRealtimeLogDeliveryInfosResponseBodyContentRealtimeLogDeliveryInfos },
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

export class ListLiveRealtimeLogDeliveryInfosResponseBody extends $dara.Model {
  content?: ListLiveRealtimeLogDeliveryInfosResponseBodyContent;
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
      content: ListLiveRealtimeLogDeliveryInfosResponseBodyContent,
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

