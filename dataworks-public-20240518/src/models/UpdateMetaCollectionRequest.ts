// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateMetaCollectionRequest extends $dara.Model {
  administrators?: string[];
  /**
   * @example
   * new comment
   */
  description?: string;
  /**
   * @remarks
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
      administrators: 'Administrators',
      description: 'Description',
      id: 'Id',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      administrators: { 'type': 'array', 'itemType': 'string' },
      description: 'string',
      id: 'string',
      name: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.administrators)) {
      $dara.Model.validateArray(this.administrators);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

