// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCustomAttributeShrinkRequest extends $dara.Model {
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
  entityTypesShrink?: string;
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
  valueEnumsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      comment: 'Comment',
      displayEnabled: 'DisplayEnabled',
      displayName: 'DisplayName',
      entityTypesShrink: 'EntityTypes',
      id: 'Id',
      searchFilterEnabled: 'SearchFilterEnabled',
      type: 'Type',
      valueEnumsShrink: 'ValueEnums',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      displayEnabled: 'boolean',
      displayName: 'string',
      entityTypesShrink: 'string',
      id: 'string',
      searchFilterEnabled: 'boolean',
      type: 'string',
      valueEnumsShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

