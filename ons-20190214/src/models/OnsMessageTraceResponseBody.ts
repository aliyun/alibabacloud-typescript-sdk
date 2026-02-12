// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OnsMessageTraceResponseBodyDataMessageTrack extends $dara.Model {
  consumerGroup?: string;
  instanceId?: string;
  trackType?: string;
  static names(): { [key: string]: string } {
    return {
      consumerGroup: 'ConsumerGroup',
      instanceId: 'InstanceId',
      trackType: 'TrackType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consumerGroup: 'string',
      instanceId: 'string',
      trackType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsMessageTraceResponseBodyData extends $dara.Model {
  messageTrack?: OnsMessageTraceResponseBodyDataMessageTrack[];
  static names(): { [key: string]: string } {
    return {
      messageTrack: 'MessageTrack',
    };
  }

  static types(): { [key: string]: any } {
    return {
      messageTrack: { 'type': 'array', 'itemType': OnsMessageTraceResponseBodyDataMessageTrack },
    };
  }

  validate() {
    if(Array.isArray(this.messageTrack)) {
      $dara.Model.validateArray(this.messageTrack);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsMessageTraceResponseBody extends $dara.Model {
  data?: OnsMessageTraceResponseBodyData;
  /**
   * @remarks
   * The ID of the request. This parameter is a common parameter. Each request has a unique ID. You can use this ID to troubleshoot issues.
   * 
   * @example
   * EAE5BE23-37A1-4354-94D6-E44AE17E****
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
      data: OnsMessageTraceResponseBodyData,
      requestId: 'string',
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

