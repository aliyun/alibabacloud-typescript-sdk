// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetOfficeEditUrlOption extends $dara.Model {
  copy?: boolean;
  print?: boolean;
  readonly?: boolean;
  static names(): { [key: string]: string } {
    return {
      copy: 'copy',
      print: 'print',
      readonly: 'readonly',
    };
  }

  static types(): { [key: string]: any } {
    return {
      copy: 'boolean',
      print: 'boolean',
      readonly: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

