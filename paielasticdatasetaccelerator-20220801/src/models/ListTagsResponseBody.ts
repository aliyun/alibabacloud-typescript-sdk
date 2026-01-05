// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTagsResponseBodyTags extends $dara.Model {
  /**
   * @example
   * 2014-10-02T15:01:23Z
   */
  gmtCreateTime?: string;
  /**
   * @example
   * 2014-10-02T15:01:23Z
   */
  gmtModifiedTime?: string;
  /**
   * @example
   * dataset_version
   */
  key?: string;
  /**
   * @example
   * 1557702098194904
   */
  ownerId?: string;
  /**
   * @example
   * inst-my1tk3jggooi5uwks
   */
  resourceId?: string;
  /**
   * @example
   * Instance
   */
  resourceType?: string;
  /**
   * @example
   * 276065346797410278
   */
  userId?: string;
  /**
   * @example
   * v0.1.0
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      gmtCreateTime: 'GmtCreateTime',
      gmtModifiedTime: 'GmtModifiedTime',
      key: 'Key',
      ownerId: 'OwnerId',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      userId: 'UserId',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtCreateTime: 'string',
      gmtModifiedTime: 'string',
      key: 'string',
      ownerId: 'string',
      resourceId: 'string',
      resourceType: 'string',
      userId: 'string',
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

export class ListTagsResponseBody extends $dara.Model {
  /**
   * @example
   * A731A84D-55C9-44F7-99BB-E1CF0CF19197
   */
  requestId?: string;
  tags?: ListTagsResponseBodyTags[];
  /**
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      tags: 'Tags',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      tags: { 'type': 'array', 'itemType': ListTagsResponseBodyTags },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

