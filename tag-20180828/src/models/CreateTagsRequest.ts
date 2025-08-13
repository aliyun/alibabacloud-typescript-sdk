// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTagsRequestTagKeyValueParamListTagValueParamList extends $dara.Model {
  /**
   * @remarks
   * The description of the value for tag N.
   * 
   * Valid values of N: 1 to 10.
   * 
   * @example
   * Test environment
   */
  description?: string;
  /**
   * @remarks
   * The value of tag N.
   * 
   * The tag value can be up to 128 characters in length and cannot contain `http://` or `https://`.
   * 
   * Valid values of N: 1 to 10.
   * 
   * @example
   * test
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
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

export class CreateTagsRequestTagKeyValueParamList extends $dara.Model {
  /**
   * @remarks
   * The description of the key for tag N.
   * 
   * Valid values of N: 1 to 10.
   * 
   * @example
   * Business environment
   */
  description?: string;
  /**
   * @remarks
   * The value of tag N.
   * 
   * The tag value can be up to 128 characters in length and cannot start with `acs:` or `aliyun`. The tag key cannot contain `http://` or `https://`.
   * 
   * Valid values of N: 1 to 10.
   * 
   * This parameter is required.
   * 
   * @example
   * Environment
   */
  key?: string;
  /**
   * @remarks
   * The information about the tag values.
   */
  tagValueParamList?: CreateTagsRequestTagKeyValueParamListTagValueParamList[];
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      key: 'Key',
      tagValueParamList: 'TagValueParamList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      key: 'string',
      tagValueParamList: { 'type': 'array', 'itemType': CreateTagsRequestTagKeyValueParamListTagValueParamList },
    };
  }

  validate() {
    if(Array.isArray(this.tagValueParamList)) {
      $dara.Model.validateArray(this.tagValueParamList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTagsRequest extends $dara.Model {
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID.
   * 
   * > Only `cn-hangzhou` is supported.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  /**
   * @remarks
   * The information about the tags.
   * 
   * This parameter is required.
   */
  tagKeyValueParamList?: CreateTagsRequestTagKeyValueParamList[];
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      tagKeyValueParamList: 'TagKeyValueParamList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      tagKeyValueParamList: { 'type': 'array', 'itemType': CreateTagsRequestTagKeyValueParamList },
    };
  }

  validate() {
    if(Array.isArray(this.tagKeyValueParamList)) {
      $dara.Model.validateArray(this.tagKeyValueParamList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

