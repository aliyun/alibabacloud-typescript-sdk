// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateColumnBusinessMetadataRequest extends $dara.Model {
  /**
   * @example
   * test description
   */
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * maxcompute-column:11075xxxx::test_project:test_schema:test_table:test_column
   */
  id?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      id: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

