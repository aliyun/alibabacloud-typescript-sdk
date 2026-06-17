// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RemoveTagsRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * > You must specify both the tag key (`Tag.N.Key`) and the tag value (`Tag.N.Value`).
   * 
   * This parameter is required.
   * 
   * @example
   * Key1
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * > You must specify both the tag key (`Tag.N.Key`) and the tag value (`Tag.N.Value`).
   * 
   * This parameter is required.
   * 
   * @example
   * Value1
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

export class RemoveTagsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the application group.
   * 
   * This parameter is required.
   * 
   * @example
   * 12345
   */
  groupIds?: string[];
  regionId?: string;
  /**
   * @remarks
   * The list of tags.
   * 
   * This parameter is required.
   */
  tag?: RemoveTagsRequestTag[];
  static names(): { [key: string]: string } {
    return {
      groupIds: 'GroupIds',
      regionId: 'RegionId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupIds: { 'type': 'array', 'itemType': 'string' },
      regionId: 'string',
      tag: { 'type': 'array', 'itemType': RemoveTagsRequestTag },
    };
  }

  validate() {
    if(Array.isArray(this.groupIds)) {
      $dara.Model.validateArray(this.groupIds);
    }
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

