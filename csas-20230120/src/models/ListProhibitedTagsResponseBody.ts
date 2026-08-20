// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListProhibitedTagsResponseBodyTags extends $dara.Model {
  /**
   * @remarks
   * The time when the prohibited software tag was created, in the yyyy-MM-dd HH:mm:ss format. The time is in the UTC+8 time zone.
   * 
   * @example
   * 2022-10-10 11:39:34
   */
  createTime?: string;
  /**
   * @remarks
   * The description of the prohibited software tag.
   * 
   * @example
   * created
   */
  description?: string;
  /**
   * @remarks
   * Indicates whether the tag is a system built-in device tag. Valid values:
   * - **true**: A system built-in device tag.
   * - **false**: A user-defined device tag.
   * 
   * @example
   * true
   */
  isDefault?: boolean;
  /**
   * @remarks
   * The name of the prohibited software tag.
   * 
   * @example
   * tag_name
   */
  name?: string;
  /**
   * @remarks
   * The collection of software prohibition policy IDs that reference the tag.
   */
  policyIds?: string[];
  /**
   * @remarks
   * The collection of prohibited software IDs included in the tag.
   */
  softwareIds?: string[];
  /**
   * @remarks
   * The ID of the prohibited software tag.
   * 
   * @example
   * tag-7b2c9e4a1d8f****
   */
  tagId?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      description: 'Description',
      isDefault: 'IsDefault',
      name: 'Name',
      policyIds: 'PolicyIds',
      softwareIds: 'SoftwareIds',
      tagId: 'TagId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      description: 'string',
      isDefault: 'boolean',
      name: 'string',
      policyIds: { 'type': 'array', 'itemType': 'string' },
      softwareIds: { 'type': 'array', 'itemType': 'string' },
      tagId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.policyIds)) {
      $dara.Model.validateArray(this.policyIds);
    }
    if(Array.isArray(this.softwareIds)) {
      $dara.Model.validateArray(this.softwareIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProhibitedTagsResponseBody extends $dara.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 287434FF-344F-565A-8623-439005BA9287
   */
  requestId?: string;
  /**
   * @remarks
   * The list of prohibited software tags.
   */
  tags?: ListProhibitedTagsResponseBodyTags[];
  /**
   * @remarks
   * The total number of prohibited software tags.
   * 
   * @example
   * 10
   */
  totalNum?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      tags: 'Tags',
      totalNum: 'TotalNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      tags: { 'type': 'array', 'itemType': ListProhibitedTagsResponseBodyTags },
      totalNum: 'number',
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

