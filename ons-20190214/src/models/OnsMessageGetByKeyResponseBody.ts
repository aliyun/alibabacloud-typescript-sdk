// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OnsMessageGetByKeyResponseBodyDataOnsRestMessageDoPropertyListMessageProperty extends $dara.Model {
  name?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsMessageGetByKeyResponseBodyDataOnsRestMessageDoPropertyList extends $dara.Model {
  messageProperty?: OnsMessageGetByKeyResponseBodyDataOnsRestMessageDoPropertyListMessageProperty[];
  static names(): { [key: string]: string } {
    return {
      messageProperty: 'MessageProperty',
    };
  }

  static types(): { [key: string]: any } {
    return {
      messageProperty: { 'type': 'array', 'itemType': OnsMessageGetByKeyResponseBodyDataOnsRestMessageDoPropertyListMessageProperty },
    };
  }

  validate() {
    if(Array.isArray(this.messageProperty)) {
      $dara.Model.validateArray(this.messageProperty);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsMessageGetByKeyResponseBodyDataOnsRestMessageDo extends $dara.Model {
  bodyCRC?: number;
  bornHost?: string;
  bornTimestamp?: number;
  instanceId?: string;
  msgId?: string;
  propertyList?: OnsMessageGetByKeyResponseBodyDataOnsRestMessageDoPropertyList;
  reconsumeTimes?: number;
  storeHost?: string;
  storeSize?: number;
  storeTimestamp?: number;
  topic?: string;
  static names(): { [key: string]: string } {
    return {
      bodyCRC: 'BodyCRC',
      bornHost: 'BornHost',
      bornTimestamp: 'BornTimestamp',
      instanceId: 'InstanceId',
      msgId: 'MsgId',
      propertyList: 'PropertyList',
      reconsumeTimes: 'ReconsumeTimes',
      storeHost: 'StoreHost',
      storeSize: 'StoreSize',
      storeTimestamp: 'StoreTimestamp',
      topic: 'Topic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bodyCRC: 'number',
      bornHost: 'string',
      bornTimestamp: 'number',
      instanceId: 'string',
      msgId: 'string',
      propertyList: OnsMessageGetByKeyResponseBodyDataOnsRestMessageDoPropertyList,
      reconsumeTimes: 'number',
      storeHost: 'string',
      storeSize: 'number',
      storeTimestamp: 'number',
      topic: 'string',
    };
  }

  validate() {
    if(this.propertyList && typeof (this.propertyList as any).validate === 'function') {
      (this.propertyList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsMessageGetByKeyResponseBodyData extends $dara.Model {
  onsRestMessageDo?: OnsMessageGetByKeyResponseBodyDataOnsRestMessageDo[];
  static names(): { [key: string]: string } {
    return {
      onsRestMessageDo: 'OnsRestMessageDo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      onsRestMessageDo: { 'type': 'array', 'itemType': OnsMessageGetByKeyResponseBodyDataOnsRestMessageDo },
    };
  }

  validate() {
    if(Array.isArray(this.onsRestMessageDo)) {
      $dara.Model.validateArray(this.onsRestMessageDo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsMessageGetByKeyResponseBody extends $dara.Model {
  data?: OnsMessageGetByKeyResponseBodyData;
  /**
   * @remarks
   * The ID of the request. This parameter is a common parameter. Each request has a unique ID. You can use this ID to troubleshoot issues.
   * 
   * @example
   * A07E3902-B92E-44A6-B6C5-6AA111111****
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
      data: OnsMessageGetByKeyResponseBodyData,
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

