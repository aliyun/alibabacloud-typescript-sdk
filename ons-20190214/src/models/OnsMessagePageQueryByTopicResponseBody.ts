// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OnsMessagePageQueryByTopicResponseBodyMsgFoundDoMsgFoundListOnsRestMessageDoPropertyListMessageProperty extends $dara.Model {
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

export class OnsMessagePageQueryByTopicResponseBodyMsgFoundDoMsgFoundListOnsRestMessageDoPropertyList extends $dara.Model {
  messageProperty?: OnsMessagePageQueryByTopicResponseBodyMsgFoundDoMsgFoundListOnsRestMessageDoPropertyListMessageProperty[];
  static names(): { [key: string]: string } {
    return {
      messageProperty: 'MessageProperty',
    };
  }

  static types(): { [key: string]: any } {
    return {
      messageProperty: { 'type': 'array', 'itemType': OnsMessagePageQueryByTopicResponseBodyMsgFoundDoMsgFoundListOnsRestMessageDoPropertyListMessageProperty },
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

export class OnsMessagePageQueryByTopicResponseBodyMsgFoundDoMsgFoundListOnsRestMessageDo extends $dara.Model {
  bodyCRC?: number;
  bornHost?: string;
  bornTimestamp?: number;
  instanceId?: string;
  msgId?: string;
  propertyList?: OnsMessagePageQueryByTopicResponseBodyMsgFoundDoMsgFoundListOnsRestMessageDoPropertyList;
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
      propertyList: OnsMessagePageQueryByTopicResponseBodyMsgFoundDoMsgFoundListOnsRestMessageDoPropertyList,
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

export class OnsMessagePageQueryByTopicResponseBodyMsgFoundDoMsgFoundList extends $dara.Model {
  onsRestMessageDo?: OnsMessagePageQueryByTopicResponseBodyMsgFoundDoMsgFoundListOnsRestMessageDo[];
  static names(): { [key: string]: string } {
    return {
      onsRestMessageDo: 'OnsRestMessageDo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      onsRestMessageDo: { 'type': 'array', 'itemType': OnsMessagePageQueryByTopicResponseBodyMsgFoundDoMsgFoundListOnsRestMessageDo },
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

export class OnsMessagePageQueryByTopicResponseBodyMsgFoundDo extends $dara.Model {
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The total number of returned pages.
   * 
   * @example
   * 400
   */
  maxPageCount?: number;
  msgFoundList?: OnsMessagePageQueryByTopicResponseBodyMsgFoundDoMsgFoundList;
  /**
   * @remarks
   * The ID of the query task. The first time you call this operation to query the messages that are sent to a specified consumer group within a specified time range, this parameter is returned. You can use the task ID to query the details of messages on other returned pages.
   * 
   * @example
   * 0BC1310300002A9F000021E4D7A48346
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      maxPageCount: 'MaxPageCount',
      msgFoundList: 'MsgFoundList',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      maxPageCount: 'number',
      msgFoundList: OnsMessagePageQueryByTopicResponseBodyMsgFoundDoMsgFoundList,
      taskId: 'string',
    };
  }

  validate() {
    if(this.msgFoundList && typeof (this.msgFoundList as any).validate === 'function') {
      (this.msgFoundList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsMessagePageQueryByTopicResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the message that is queried.
   */
  msgFoundDo?: OnsMessagePageQueryByTopicResponseBodyMsgFoundDo;
  /**
   * @remarks
   * The ID of the request. This parameter is a common parameter. Each request has a unique ID. You can use this ID to troubleshoot issues.
   * 
   * @example
   * 5DC2A47E-2B31-4722-96C8-FA59C9*****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      msgFoundDo: 'MsgFoundDo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      msgFoundDo: OnsMessagePageQueryByTopicResponseBodyMsgFoundDo,
      requestId: 'string',
    };
  }

  validate() {
    if(this.msgFoundDo && typeof (this.msgFoundDo as any).validate === 'function') {
      (this.msgFoundDo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

