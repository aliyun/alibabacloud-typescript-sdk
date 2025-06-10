// This file is auto-generated, don't edit it
import { Readable } from 'stream';
import * as $dara from '@darabonba/typescript';


export class ScreenChestCTAdvanceRequestURLList extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * https://medclients-sh.oss-cn-shanghai.aliyuncs.com/demo/coronacases_org_001/1.2.112.92121.1.1689.19.2.2020040219072764787101585825****.dcm
   */
  URLObject?: Readable;
  static names(): { [key: string]: string } {
    return {
      URLObject: 'URL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      URLObject: 'Readable',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

