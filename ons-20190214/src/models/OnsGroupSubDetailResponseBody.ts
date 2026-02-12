// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OnsGroupSubDetailResponseBodyDataSubscriptionDataListSubscriptionDataList extends $dara.Model {
  subString?: string;
  topic?: string;
  static names(): { [key: string]: string } {
    return {
      subString: 'SubString',
      topic: 'Topic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      subString: 'string',
      topic: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsGroupSubDetailResponseBodyDataSubscriptionDataList extends $dara.Model {
  subscriptionDataList?: OnsGroupSubDetailResponseBodyDataSubscriptionDataListSubscriptionDataList[];
  static names(): { [key: string]: string } {
    return {
      subscriptionDataList: 'SubscriptionDataList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      subscriptionDataList: { 'type': 'array', 'itemType': OnsGroupSubDetailResponseBodyDataSubscriptionDataListSubscriptionDataList },
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

export class OnsGroupSubDetailResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The ID of the consumer group that you want to query.
   * 
   * @example
   * GID_test_group_id
   */
  groupId?: string;
  /**
   * @remarks
   * The consumption mode. Valid values:
   * 
   * *   **CLUSTERING**: the clustering consumption mode
   * *   **BROADCASTING**: the broadcasting consumption mode
   * 
   * For more information about consumption modes, see [Clustering consumption and broadcasting consumption](https://help.aliyun.com/document_detail/43163.html).
   * 
   * @example
   * CLUSTERING
   */
  messageModel?: string;
  /**
   * @remarks
   * Indicates whether consumers in the group are online.
   * 
   * @example
   * true
   */
  online?: boolean;
  subscriptionDataList?: OnsGroupSubDetailResponseBodyDataSubscriptionDataList;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      messageModel: 'MessageModel',
      online: 'Online',
      subscriptionDataList: 'SubscriptionDataList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      messageModel: 'string',
      online: 'boolean',
      subscriptionDataList: OnsGroupSubDetailResponseBodyDataSubscriptionDataList,
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

export class OnsGroupSubDetailResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data returned.
   */
  data?: OnsGroupSubDetailResponseBodyData;
  /**
   * @remarks
   * The ID of the request. This parameter is a common parameter. Each request has a unique ID. You can use this ID to troubleshoot issues.
   * 
   * @example
   * 3364E875-013B-442A-BC3C-C1A84DC6****
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
      data: OnsGroupSubDetailResponseBodyData,
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

