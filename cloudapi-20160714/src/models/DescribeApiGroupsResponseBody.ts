// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeApiGroupsResponseBodyApiGroupAttributesApiGroupAttributeTagsTagInfo extends $dara.Model {
  key?: string;
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

export class DescribeApiGroupsResponseBodyApiGroupAttributesApiGroupAttributeTags extends $dara.Model {
  tagInfo?: DescribeApiGroupsResponseBodyApiGroupAttributesApiGroupAttributeTagsTagInfo[];
  static names(): { [key: string]: string } {
    return {
      tagInfo: 'TagInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagInfo: { 'type': 'array', 'itemType': DescribeApiGroupsResponseBodyApiGroupAttributesApiGroupAttributeTagsTagInfo },
    };
  }

  validate() {
    if(Array.isArray(this.tagInfo)) {
      $dara.Model.validateArray(this.tagInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiGroupsResponseBodyApiGroupAttributesApiGroupAttribute extends $dara.Model {
  basePath?: string;
  billingStatus?: string;
  createdTime?: string;
  description?: string;
  groupId?: string;
  groupName?: string;
  httpsPolicy?: string;
  illegalStatus?: string;
  instanceId?: string;
  instanceType?: string;
  modifiedTime?: string;
  regionId?: string;
  subDomain?: string;
  tags?: DescribeApiGroupsResponseBodyApiGroupAttributesApiGroupAttributeTags;
  trafficLimit?: number;
  static names(): { [key: string]: string } {
    return {
      basePath: 'BasePath',
      billingStatus: 'BillingStatus',
      createdTime: 'CreatedTime',
      description: 'Description',
      groupId: 'GroupId',
      groupName: 'GroupName',
      httpsPolicy: 'HttpsPolicy',
      illegalStatus: 'IllegalStatus',
      instanceId: 'InstanceId',
      instanceType: 'InstanceType',
      modifiedTime: 'ModifiedTime',
      regionId: 'RegionId',
      subDomain: 'SubDomain',
      tags: 'Tags',
      trafficLimit: 'TrafficLimit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      basePath: 'string',
      billingStatus: 'string',
      createdTime: 'string',
      description: 'string',
      groupId: 'string',
      groupName: 'string',
      httpsPolicy: 'string',
      illegalStatus: 'string',
      instanceId: 'string',
      instanceType: 'string',
      modifiedTime: 'string',
      regionId: 'string',
      subDomain: 'string',
      tags: DescribeApiGroupsResponseBodyApiGroupAttributesApiGroupAttributeTags,
      trafficLimit: 'number',
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

export class DescribeApiGroupsResponseBodyApiGroupAttributes extends $dara.Model {
  apiGroupAttribute?: DescribeApiGroupsResponseBodyApiGroupAttributesApiGroupAttribute[];
  static names(): { [key: string]: string } {
    return {
      apiGroupAttribute: 'ApiGroupAttribute',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiGroupAttribute: { 'type': 'array', 'itemType': DescribeApiGroupsResponseBodyApiGroupAttributesApiGroupAttribute },
    };
  }

  validate() {
    if(Array.isArray(this.apiGroupAttribute)) {
      $dara.Model.validateArray(this.apiGroupAttribute);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiGroupsResponseBody extends $dara.Model {
  apiGroupAttributes?: DescribeApiGroupsResponseBodyApiGroupAttributes;
  /**
   * @remarks
   * The number of pages to return the results on.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
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
   * D6E46F10-F26C-4AA0-BB69-FE2743D9AE62
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of returned entries.
   * 
   * @example
   * 2
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      apiGroupAttributes: 'ApiGroupAttributes',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiGroupAttributes: DescribeApiGroupsResponseBodyApiGroupAttributes,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.apiGroupAttributes && typeof (this.apiGroupAttributes as any).validate === 'function') {
      (this.apiGroupAttributes as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

