// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDtsJobDetailResponseBodySubSyncJobReverseJobTagList extends $dara.Model {
  /**
   * @remarks
   * The Alibaba Cloud account ID.
   * 
   * @example
   * 191448876515****
   */
  aliUid?: number;
  /**
   * @remarks
   * The operator of the tag.
   * 
   * @example
   * 191448876515****
   */
  creator?: number;
  /**
   * @remarks
   * The time when the task was created.
   * 
   * @example
   * 2022-03-16T08:01:19Z
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The time when the task was modified.
   * 
   * @example
   * 2022-03-16T08:01:19Z
   */
  gmtModified?: string;
  /**
   * @remarks
   * The primary key of the table.
   * 
   * @example
   * 2
   */
  id?: number;
  /**
   * @remarks
   * The ID of the region in which the DTS instance resides. For more information, see [Supported regions](https://help.aliyun.com/document_detail/141033.html).
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the data migration, data synchronization, or change tracking instance.
   * 
   * @example
   * dtsnjuc14kp12u****
   */
  resourceId?: string;
  /**
   * @remarks
   * The resource type.
   * 
   * @example
   * ALIYUN::DTS::INSTANCE
   */
  resourceType?: string;
  /**
   * @remarks
   * Indicates whether the tag is visible. Valid values:
   * 
   * *   **0**: The tag is public.
   * *   **1**: The tag is private.
   * 
   * @example
   * 0
   */
  scope?: string;
  /**
   * @remarks
   * The ID of the region in which the DTS task resides.
   * 
   * > In most cases, the ID of the region in which the destination instance resides is returned.
   * 
   * @example
   * cn-hangzhou
   */
  srcRegion?: string;
  /**
   * @remarks
   * The type of the tag. Valid values:
   * 
   * *   **System**: The tag was created by the system.
   * *   **Custom**: The tag was created by a user.
   * 
   * > By default, if the parameter is left empty, custom tags and system tags are returned.
   * 
   * @example
   * System
   */
  tagCategory?: string;
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * key1
   */
  tagKey?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * value1
   */
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      aliUid: 'AliUid',
      creator: 'Creator',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      id: 'Id',
      regionId: 'RegionId',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      scope: 'Scope',
      srcRegion: 'SrcRegion',
      tagCategory: 'TagCategory',
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliUid: 'number',
      creator: 'number',
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'number',
      regionId: 'string',
      resourceId: 'string',
      resourceType: 'string',
      scope: 'string',
      srcRegion: 'string',
      tagCategory: 'string',
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

