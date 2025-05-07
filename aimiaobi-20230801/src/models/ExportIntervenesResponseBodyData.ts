// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExportIntervenesResponseBodyData extends $dara.Model {
  /**
   * @example
   * http://xxx/xxx.xls
   */
  fileUrl?: string;
  static names(): { [key: string]: string } {
    return {
      fileUrl: 'FileUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

