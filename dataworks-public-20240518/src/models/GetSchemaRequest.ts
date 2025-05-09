// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSchemaRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * maxcompute-schema:123456XXX::test_project:default
   * holo-schema:h-abc123xxx::test_db:test_schema
   */
  id?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

