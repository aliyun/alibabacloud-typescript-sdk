// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OnsDLQMessagePageQueryByGroupIdResponseBodyMsgFoundDoMsgFoundListOnsRestMessageDoPropertyListMessageProperty extends $dara.Model {
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

export class OnsDLQMessagePageQueryByGroupIdResponseBodyMsgFoundDoMsgFoundListOnsRestMessageDoPropertyList extends $dara.Model {
  messageProperty?: OnsDLQMessagePageQueryByGroupIdResponseBodyMsgFoundDoMsgFoundListOnsRestMessageDoPropertyListMessageProperty[];
  static names(): { [key: string]: string } {
    return {
      messageProperty: 'MessageProperty',
    };
  }

  static types(): { [key: string]: any } {
    return {
      messageProperty: { 'type': 'array', 'itemType': OnsDLQMessagePageQueryByGroupIdResponseBodyMsgFoundDoMsgFoundListOnsRestMessageDoPropertyListMessageProperty },
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

export class OnsDLQMessagePageQueryByGroupIdResponseBodyMsgFoundDoMsgFoundListOnsRestMessageDo extends $dara.Model {
  bodyCRC?: number;
  bornHost?: string;
  bornTimestamp?: number;
  instanceId?: string;
  msgId?: string;
  propertyList?: OnsDLQMessagePageQueryByGroupIdResponseBodyMsgFoundDoMsgFoundListOnsRestMessageDoPropertyList;
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
      propertyList: OnsDLQMessagePageQueryByGroupIdResponseBodyMsgFoundDoMsgFoundListOnsRestMessageDoPropertyList,
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

export class OnsDLQMessagePageQueryByGroupIdResponseBodyMsgFoundDoMsgFoundList extends $dara.Model {
  onsRestMessageDo?: OnsDLQMessagePageQueryByGroupIdResponseBodyMsgFoundDoMsgFoundListOnsRestMessageDo[];
  static names(): { [key: string]: string } {
    return {
      onsRestMessageDo: 'OnsRestMessageDo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      onsRestMessageDo: { 'type': 'array', 'itemType': OnsDLQMessagePageQueryByGroupIdResponseBodyMsgFoundDoMsgFoundListOnsRestMessageDo },
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

export class OnsDLQMessagePageQueryByGroupIdResponseBodyMsgFoundDo extends $dara.Model {
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
  msgFoundList?: OnsDLQMessagePageQueryByGroupIdResponseBodyMsgFoundDoMsgFoundList;
  /**
   * @remarks
   * The ID of the query task. The first time you call this operation to query the dead-letter messages that are sent to a specified consumer group within a specified time range, this parameter is returned. You can use the task ID to query the details of dead-letter messages on other returned pages.
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
      msgFoundList: OnsDLQMessagePageQueryByGroupIdResponseBodyMsgFoundDoMsgFoundList,
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

export class OnsDLQMessagePageQueryByGroupIdResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about dead-letter messages that are queried.
   */
  msgFoundDo?: OnsDLQMessagePageQueryByGroupIdResponseBodyMsgFoundDo;
  /**
   * @remarks
   * The ID of the request. This parameter is a common parameter. Each request has a unique ID. You can use this ID to troubleshoot issues.
   * 
   * @example
   * B00CD3C8-D81E-4A41-85E2-38F19252****
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
      msgFoundDo: OnsDLQMessagePageQueryByGroupIdResponseBodyMsgFoundDo,
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

