// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAssetTopicsResponseBodyDataTopicListOwners extends $dara.Model {
  /**
   * @remarks
   * The user ID.
   * 
   * @example
   * 30001011
   */
  userId?: string;
  /**
   * @remarks
   * The username.
   * 
   * @example
   * John
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      userId: 'UserId',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userId: 'string',
      userName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAssetTopicsResponseBodyDataTopicListVisibleUserGroups extends $dara.Model {
  /**
   * @remarks
   * The user group ID.
   * 
   * @example
   * 20001
   */
  userGroupId?: string;
  /**
   * @remarks
   * The user group name.
   * 
   * @example
   * Data Governance Group
   */
  userGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      userGroupId: 'UserGroupId',
      userGroupName: 'UserGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userGroupId: 'string',
      userGroupName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAssetTopicsResponseBodyDataTopicListVisibleUsers extends $dara.Model {
  /**
   * @remarks
   * The user ID.
   * 
   * @example
   * 30001012
   */
  userId?: string;
  /**
   * @remarks
   * The username.
   * 
   * @example
   * Jane
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      userId: 'UserId',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userId: 'string',
      userName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAssetTopicsResponseBodyDataTopicList extends $dara.Model {
  /**
   * @remarks
   * The asset type.
   * 
   * @example
   * TABLE
   */
  assetType?: string;
  /**
   * @remarks
   * The last modified time.
   * 
   * @example
   * 2025-06-30 00:00:00
   */
  modifyTime?: string;
  /**
   * @remarks
   * The topic administrators.
   */
  owners?: ListAssetTopicsResponseBodyDataTopicListOwners[];
  /**
   * @remarks
   * The topic description.
   * 
   * @example
   * Aggregates assets related to core metrics
   */
  topicDescription?: string;
  /**
   * @remarks
   * The topic ID.
   * 
   * @example
   * 28440278777
   */
  topicId?: number;
  /**
   * @remarks
   * The topic name.
   * 
   * @example
   * Core Metrics Topic
   */
  topicName?: string;
  /**
   * @remarks
   * The visibility scope. Valid values: PUBLIC, SPECIFIED.
   * 
   * @example
   * SPECIFIED
   */
  visibilityType?: string;
  /**
   * @remarks
   * The explicitly visible user groups. Returns null for PUBLIC topics.
   */
  visibleUserGroups?: ListAssetTopicsResponseBodyDataTopicListVisibleUserGroups[];
  /**
   * @remarks
   * The explicitly visible users. Returns null for PUBLIC topics.
   */
  visibleUsers?: ListAssetTopicsResponseBodyDataTopicListVisibleUsers[];
  static names(): { [key: string]: string } {
    return {
      assetType: 'AssetType',
      modifyTime: 'ModifyTime',
      owners: 'Owners',
      topicDescription: 'TopicDescription',
      topicId: 'TopicId',
      topicName: 'TopicName',
      visibilityType: 'VisibilityType',
      visibleUserGroups: 'VisibleUserGroups',
      visibleUsers: 'VisibleUsers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assetType: 'string',
      modifyTime: 'string',
      owners: { 'type': 'array', 'itemType': ListAssetTopicsResponseBodyDataTopicListOwners },
      topicDescription: 'string',
      topicId: 'number',
      topicName: 'string',
      visibilityType: 'string',
      visibleUserGroups: { 'type': 'array', 'itemType': ListAssetTopicsResponseBodyDataTopicListVisibleUserGroups },
      visibleUsers: { 'type': 'array', 'itemType': ListAssetTopicsResponseBodyDataTopicListVisibleUsers },
    };
  }

  validate() {
    if(Array.isArray(this.owners)) {
      $dara.Model.validateArray(this.owners);
    }
    if(Array.isArray(this.visibleUserGroups)) {
      $dara.Model.validateArray(this.visibleUserGroups);
    }
    if(Array.isArray(this.visibleUsers)) {
      $dara.Model.validateArray(this.visibleUsers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAssetTopicsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The list of topics.
   */
  topicList?: ListAssetTopicsResponseBodyDataTopicList[];
  /**
   * @remarks
   * The total number of records that match the query conditions.
   * 
   * @example
   * -599403204152
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      topicList: 'TopicList',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      topicList: { 'type': 'array', 'itemType': ListAssetTopicsResponseBodyDataTopicList },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.topicList)) {
      $dara.Model.validateArray(this.topicList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAssetTopicsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The backend response code.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The paginated result of asset topics.
   */
  data?: ListAssetTopicsResponseBodyData;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The details of the backend exception.
   * 
   * @example
   * internal error
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 82E78D6B-AA8F-1FEF-8AA3-5C9DA2A79140
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ListAssetTopicsResponseBodyData,
      httpStatusCode: 'number',
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

