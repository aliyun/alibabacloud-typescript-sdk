// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateCustomAttributeShrinkRequest extends $dara.Model {
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
   * @example
   * 业务负责人
   */
  displayName?: string;
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
  valueEnumsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      comment: 'Comment',
      displayEnabled: 'DisplayEnabled',
      displayName: 'DisplayName',
      entityTypesShrink: 'EntityTypes',
      id: 'Id',
      searchFilterEnabled: 'SearchFilterEnabled',
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

