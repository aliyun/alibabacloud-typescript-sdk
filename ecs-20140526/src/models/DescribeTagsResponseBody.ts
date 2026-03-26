// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTagsResponseBodyTagsTagResourceTypeCount extends $dara.Model {
  ddh?: number;
  disk?: number;
  eni?: number;
  image?: number;
  instance?: number;
  keyPair?: number;
  launchTemplate?: number;
  reservedInstance?: number;
  securitygroup?: number;
  snapshot?: number;
  snapshotPolicy?: number;
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
  resourceTypeCount?: DescribeTagsResponseBodyTagsTagResourceTypeCount;
  tagKey?: string;
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

