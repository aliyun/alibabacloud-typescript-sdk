// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ScreenLCRequestURLList extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * https://medclients-sh.oss-cn-shanghai.aliyuncs.com/demo/xxx/0001.dcm
   */
  URL?: string;
  static names(): { [key: string]: string } {
    return {
      URL: 'URL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      URL: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

