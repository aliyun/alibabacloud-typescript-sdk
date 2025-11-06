// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListVhostResponseBodyDataVhosts extends $dara.Model {
  channelNum?: number;
  connectionNum?: number;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      channelNum: 'ChannelNum',
      connectionNum: 'ConnectionNum',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channelNum: 'number',
      connectionNum: 'number',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVhostResponseBodyData extends $dara.Model {
  vhosts?: ListVhostResponseBodyDataVhosts[];
  static names(): { [key: string]: string } {
    return {
      vhosts: 'Vhosts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vhosts: { 'type': 'array', 'itemType': ListVhostResponseBodyDataVhosts },
    };
  }

  validate() {
    if(Array.isArray(this.vhosts)) {
      $dara.Model.validateArray(this.vhosts);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVhostResponseBody extends $dara.Model {
  code?: number;
  data?: ListVhostResponseBodyData;
  message?: string;
  requestId?: string;
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
      data: ListVhostResponseBodyData,
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

