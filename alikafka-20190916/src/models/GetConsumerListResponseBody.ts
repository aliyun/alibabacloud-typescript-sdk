// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetConsumerListResponseBodyConsumerListConsumerVOTagsTagVO extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * test
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * test
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
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

export class GetConsumerListResponseBodyConsumerListConsumerVOTags extends $dara.Model {
  tagVO?: GetConsumerListResponseBodyConsumerListConsumerVOTagsTagVO[];
  static names(): { [key: string]: string } {
    return {
      tagVO: 'TagVO',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagVO: { 'type': 'array', 'itemType': GetConsumerListResponseBodyConsumerListConsumerVOTagsTagVO },
    };
  }

  validate() {
    if(Array.isArray(this.tagVO)) {
      $dara.Model.validateArray(this.tagVO);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConsumerListResponseBodyConsumerListConsumerVO extends $dara.Model {
  /**
   * @remarks
   * Indicates that the consumer group was automatically created by the system.
   * 
   * @example
   * false
   */
  automaticallyCreatedGroup?: boolean;
  /**
   * @remarks
   * The consumer group ID.
   * 
   * @example
   * kafka-test
   */
  consumerId?: string;
  /**
   * @remarks
   * The timestamp that indicates when the consumer group was created. Unit: milliseconds.
   * 
   * @example
   * 1729736584002
   */
  createTime?: number;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * alikafka_post-cn-v0h18sav****
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the region where the instance resides.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The instance description.
   * 
   * @example
   * test
   */
  remark?: string;
  /**
   * @remarks
   * The tags.
   */
  tags?: GetConsumerListResponseBodyConsumerListConsumerVOTags;
  static names(): { [key: string]: string } {
    return {
      automaticallyCreatedGroup: 'AutomaticallyCreatedGroup',
      consumerId: 'ConsumerId',
      createTime: 'CreateTime',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      remark: 'Remark',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      automaticallyCreatedGroup: 'boolean',
      consumerId: 'string',
      createTime: 'number',
      instanceId: 'string',
      regionId: 'string',
      remark: 'string',
      tags: GetConsumerListResponseBodyConsumerListConsumerVOTags,
    };
  }

  validate() {
    if(this.tags && typeof (this.tags as any).validate === 'function') {
      (this.tags as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConsumerListResponseBodyConsumerList extends $dara.Model {
  consumerVO?: GetConsumerListResponseBodyConsumerListConsumerVO[];
  static names(): { [key: string]: string } {
    return {
      consumerVO: 'ConsumerVO',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consumerVO: { 'type': 'array', 'itemType': GetConsumerListResponseBodyConsumerListConsumerVO },
    };
  }

  validate() {
    if(Array.isArray(this.consumerVO)) {
      $dara.Model.validateArray(this.consumerVO);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConsumerListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code returned. The HTTP status code 200 indicates that the request is successful.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The consumer groups.
   */
  consumerList?: GetConsumerListResponseBodyConsumerList;
  /**
   * @remarks
   * The number of the page to return. Pages start from page 1.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * operation success.
   */
  message?: string;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 808F042B-CB9A-4FBC-9009-00E7DDB6****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 12
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      consumerList: 'ConsumerList',
      currentPage: 'CurrentPage',
      message: 'Message',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      consumerList: GetConsumerListResponseBodyConsumerList,
      currentPage: 'number',
      message: 'string',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
      total: 'number',
    };
  }

  validate() {
    if(this.consumerList && typeof (this.consumerList as any).validate === 'function') {
      (this.consumerList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

