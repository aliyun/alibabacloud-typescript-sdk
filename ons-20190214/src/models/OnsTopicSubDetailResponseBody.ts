// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OnsTopicSubDetailResponseBodyDataSubscriptionDataListSubscriptionDataList extends $dara.Model {
  groupId?: string;
  messageModel?: string;
  online?: string;
  subString?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      messageModel: 'MessageModel',
      online: 'Online',
      subString: 'SubString',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      messageModel: 'string',
      online: 'string',
      subString: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsTopicSubDetailResponseBodyDataSubscriptionDataList extends $dara.Model {
  subscriptionDataList?: OnsTopicSubDetailResponseBodyDataSubscriptionDataListSubscriptionDataList[];
  static names(): { [key: string]: string } {
    return {
      subscriptionDataList: 'SubscriptionDataList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      subscriptionDataList: { 'type': 'array', 'itemType': OnsTopicSubDetailResponseBodyDataSubscriptionDataListSubscriptionDataList },
    };
  }

  validate() {
    if(Array.isArray(this.subscriptionDataList)) {
      $dara.Model.validateArray(this.subscriptionDataList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsTopicSubDetailResponseBodyData extends $dara.Model {
  subscriptionDataList?: OnsTopicSubDetailResponseBodyDataSubscriptionDataList;
  /**
   * @remarks
   * The topic name.
   * 
   * @example
   * test
   */
  topic?: string;
  static names(): { [key: string]: string } {
    return {
      subscriptionDataList: 'SubscriptionDataList',
      topic: 'Topic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      subscriptionDataList: OnsTopicSubDetailResponseBodyDataSubscriptionDataList,
      topic: 'string',
    };
  }

  validate() {
    if(this.subscriptionDataList && typeof (this.subscriptionDataList as any).validate === 'function') {
      (this.subscriptionDataList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsTopicSubDetailResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data returned.
   */
  data?: OnsTopicSubDetailResponseBodyData;
  /**
   * @remarks
   * The ID of the request. This parameter is a common parameter. Each request has a unique ID. You can use this ID to troubleshoot issues.
   * 
   * @example
   * 87B6207F-2908-42B5-A134-84956DCA****
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
      data: OnsTopicSubDetailResponseBodyData,
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

