// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetInterveneTemplateFileUrlResponseBodyData extends $dara.Model {
  code?: number;
  /**
   * @example
   * http://xxx/xxx.xls
   */
  fileUrl?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      fileUrl: 'FileUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
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

