// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OnsConsumerGetConnectionResponseBodyDataConnectionListConnectionDo extends $dara.Model {
  clientAddr?: string;
  clientId?: string;
  language?: string;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      clientAddr: 'ClientAddr',
      clientId: 'ClientId',
      language: 'Language',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientAddr: 'string',
      clientId: 'string',
      language: 'string',
      version: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsConsumerGetConnectionResponseBodyDataConnectionList extends $dara.Model {
  connectionDo?: OnsConsumerGetConnectionResponseBodyDataConnectionListConnectionDo[];
  static names(): { [key: string]: string } {
    return {
      connectionDo: 'ConnectionDo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectionDo: { 'type': 'array', 'itemType': OnsConsumerGetConnectionResponseBodyDataConnectionListConnectionDo },
    };
  }

  validate() {
    if(Array.isArray(this.connectionDo)) {
      $dara.Model.validateArray(this.connectionDo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsConsumerGetConnectionResponseBodyData extends $dara.Model {
  connectionList?: OnsConsumerGetConnectionResponseBodyDataConnectionList;
  messageModel?: string;
  static names(): { [key: string]: string } {
    return {
      connectionList: 'ConnectionList',
      messageModel: 'MessageModel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectionList: OnsConsumerGetConnectionResponseBodyDataConnectionList,
      messageModel: 'string',
    };
  }

  validate() {
    if(this.connectionList && typeof (this.connectionList as any).validate === 'function') {
      (this.connectionList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsConsumerGetConnectionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data returned.
   */
  data?: OnsConsumerGetConnectionResponseBodyData;
  /**
   * @remarks
   * The ID of the request. This parameter is a common parameter. Each request has a unique ID. You can use this ID to troubleshoot issues.
   * 
   * @example
   * DE4140C7-F42D-473D-A5FF-B1E31692****
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
      data: OnsConsumerGetConnectionResponseBodyData,
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

