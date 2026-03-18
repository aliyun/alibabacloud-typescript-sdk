// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTableInfoRequest extends $dara.Model {
  schemaName?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      schemaName: 'schemaName',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      schemaName: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

