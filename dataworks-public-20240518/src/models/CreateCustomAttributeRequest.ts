// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCustomAttributeRequest extends $dara.Model {
  /**
   * @example
   * test comment
   */
  comment?: string;
  /**
   * @example
   * true
   */
  displayEnabled?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 业务负责人
   */
  displayName?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  entityTypes?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * custom-attribute:biz_owner
   */
  id?: string;
  /**
   * @example
   * false
   */
  searchFilterEnabled?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * TEXT
   */
  type?: string;
  valueEnums?: string[];
  static names(): { [key: string]: string } {
    return {
      comment: 'Comment',
      displayEnabled: 'DisplayEnabled',
      displayName: 'DisplayName',
      entityTypes: 'EntityTypes',
      id: 'Id',
      searchFilterEnabled: 'SearchFilterEnabled',
      type: 'Type',
      valueEnums: 'ValueEnums',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      displayEnabled: 'boolean',
      displayName: 'string',
      entityTypes: { 'type': 'array', 'itemType': 'string' },
      id: 'string',
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

