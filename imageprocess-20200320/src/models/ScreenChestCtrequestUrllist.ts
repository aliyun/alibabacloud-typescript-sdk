// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ScreenChestCTRequestURLList extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * https://medclients-sh.oss-cn-shanghai.aliyuncs.com/demo/coronacases_org_001/1.2.112.92121.1.1689.19.2.2020040219072764787101585825****.dcm
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

