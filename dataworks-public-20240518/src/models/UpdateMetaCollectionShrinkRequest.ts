// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateMetaCollectionShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The collection administrator IDs. This parameter is available only for data albums. The administrator must be an account within the same tenant.
   */
  administratorsShrink?: string;
  /**
   * @example
   * new comment
   */
  description?: string;
  /**
   * @remarks
   * The collection ID.
   * 
   * This parameter is required.
   * 
   * @example
   * category.123
   */
  id?: string;
  /**
   * @example
   * new_name
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      administratorsShrink: 'Administrators',
      description: 'Description',
      id: 'Id',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      administratorsShrink: 'string',
      description: 'string',
      id: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

