// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTagsResponseBodyTagsTagResourceTypeCount extends $dara.Model {
  /**
   * @remarks
   * The number of dedicated hosts to which the tag is added.
   * 
   * @example
   * 1
   */
  ddh?: number;
  /**
   * @remarks
   * The number of disks to which the tag is added.
   * 
   * @example
   * 15
   */
  disk?: number;
  /**
   * @remarks
   * The number of ENIs to which the tag is added.
   * 
   * @example
   * 5
   */
  eni?: number;
  /**
   * @remarks
   * The number of images to which the tag is added.
   * 
   * @example
   * 6
   */
  image?: number;
  /**
   * @remarks
   * The number of instances to which the tag is added.
   * 
   * @example
   * 45
   */
  instance?: number;
  /**
   * @remarks
   * The number of key pairs to which the tag is added.
   * 
   * @example
   * 17
   */
  keyPair?: number;
  /**
   * @remarks
   * The number of launch templates to which the tag is added.
   * 
   * @example
   * 6
   */
  launchTemplate?: number;
  /**
   * @remarks
   * The number of reserved instances to which the tag is added.
   * 
   * @example
   * 4
   */
  reservedInstance?: number;
  /**
   * @remarks
   * The number of security groups to which the tag is added.
   * 
   * @example
   * 4
   */
  securitygroup?: number;
  /**
   * @remarks
   * The number of snapshots to which the tag is added.
   * 
   * @example
   * 15
   */
  snapshot?: number;
  /**
   * @remarks
   * The number of automatic snapshot policies to which the tag is added.
   * 
   * @example
   * 4
   */
  snapshotPolicy?: number;
  /**
   * @remarks
   * The number of storage volumes to which the tag is added.
   * 
   * @example
   * 6
   */
  volume?: number;
  static names(): { [key: string]: string } {
    return {
      ddh: 'Ddh',
      disk: 'Disk',
      eni: 'Eni',
      image: 'Image',
      instance: 'Instance',
      keyPair: 'KeyPair',
      launchTemplate: 'LaunchTemplate',
      reservedInstance: 'ReservedInstance',
      securitygroup: 'Securitygroup',
      snapshot: 'Snapshot',
      snapshotPolicy: 'SnapshotPolicy',
      volume: 'Volume',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ddh: 'number',
      disk: 'number',
      eni: 'number',
      image: 'number',
      instance: 'number',
      keyPair: 'number',
      launchTemplate: 'number',
      reservedInstance: 'number',
      securitygroup: 'number',
      snapshot: 'number',
      snapshotPolicy: 'number',
      volume: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTagsResponseBodyTagsTag extends $dara.Model {
  /**
   * @remarks
   * The number of resource types.
   */
  resourceTypeCount?: DescribeTagsResponseBodyTagsTagResourceTypeCount;
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * TestKey
   */
  tagKey?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * TestValue
   */
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      resourceTypeCount: 'ResourceTypeCount',
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceTypeCount: DescribeTagsResponseBodyTagsTagResourceTypeCount,
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  validate() {
    if(this.resourceTypeCount && typeof (this.resourceTypeCount as any).validate === 'function') {
      (this.resourceTypeCount as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTagsResponseBodyTags extends $dara.Model {
  tag?: DescribeTagsResponseBodyTagsTag[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': DescribeTagsResponseBodyTagsTag },
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTagsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 50
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * B04B8CF3-4489-432D-83BA-6F128E4F2295
   */
  requestId?: string;
  /**
   * @remarks
   * The tags that match all filter conditions.
   */
  tags?: DescribeTagsResponseBodyTags;
  /**
   * @remarks
   * The total number of tags.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      tags: 'Tags',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      tags: DescribeTagsResponseBodyTags,
      totalCount: 'number',
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

