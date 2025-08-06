// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListVodRealtimeLogDeliveryResponseBodyContentRealtimeLogDeliveryInfo extends $dara.Model {
  dmId?: number;
  domainName?: string;
  logstore?: string;
  project?: string;
  region?: string;
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

export class ListVodRealtimeLogDeliveryResponseBodyContent extends $dara.Model {
  realtimeLogDeliveryInfo?: ListVodRealtimeLogDeliveryResponseBodyContentRealtimeLogDeliveryInfo[];
  static names(): { [key: string]: string } {
    return {
      realtimeLogDeliveryInfo: 'RealtimeLogDeliveryInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      realtimeLogDeliveryInfo: { 'type': 'array', 'itemType': ListVodRealtimeLogDeliveryResponseBodyContentRealtimeLogDeliveryInfo },
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

export class ListVodRealtimeLogDeliveryResponseBody extends $dara.Model {
  content?: ListVodRealtimeLogDeliveryResponseBodyContent;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: ListVodRealtimeLogDeliveryResponseBodyContent,
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

