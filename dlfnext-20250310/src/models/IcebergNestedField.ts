// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class IcebergNestedField extends $dara.Model {
  doc?: string;
  id?: number;
  name?: string;
  optional?: boolean;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      doc: 'doc',
      id: 'id',
      name: 'name',
      optional: 'optional',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      doc: 'string',
      id: 'number',
      name: 'string',
      optional: 'boolean',
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

