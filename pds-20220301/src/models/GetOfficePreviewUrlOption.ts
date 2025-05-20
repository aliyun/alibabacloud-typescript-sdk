// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetOfficePreviewUrlOption extends $dara.Model {
  copy?: boolean;
  print?: boolean;
  static names(): { [key: string]: string } {
    return {
      copy: 'copy',
      print: 'print',
    };
  }

  static types(): { [key: string]: any } {
    return {
      copy: 'boolean',
      print: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

