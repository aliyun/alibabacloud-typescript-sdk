// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CustomAttribute extends $dara.Model {
  comment?: string;
  createTime?: number;
  /**
   * @example
   * true
   */
  displayEnabled?: boolean;
  /**
   * @example
   * 业务负责人
   */
  displayName?: string;
  entityTypes?: string[];
  /**
   * @example
   * custom-attribute:biz_owner
   */
  id?: string;
  modifyTime?: number;
  /**
   * @example
   * false
   */
  searchFilterEnabled?: boolean;
  /**
   * @example
   * TEXT
   */
  type?: string;
  valueEnums?: string[];
  static names(): { [key: string]: string } {
    return {
      comment: 'Comment',
      createTime: 'CreateTime',
      displayEnabled: 'DisplayEnabled',
      displayName: 'DisplayName',
      entityTypes: 'EntityTypes',
      id: 'Id',
      modifyTime: 'ModifyTime',
      searchFilterEnabled: 'SearchFilterEnabled',
      type: 'Type',
      valueEnums: 'ValueEnums',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      createTime: 'number',
      displayEnabled: 'boolean',
      displayName: 'string',
      entityTypes: { 'type': 'array', 'itemType': 'string' },
      id: 'string',
      modifyTime: 'number',
      searchFilterEnabled: 'boolean',
      type: 'string',
      valueEnums: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.entityTypes)) {
      $dara.Model.validateArray(this.entityTypes);
    }
    if(Array.isArray(this.valueEnums)) {
      $dara.Model.validateArray(this.valueEnums);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

