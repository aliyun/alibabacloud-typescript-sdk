// This file is auto-generated, don't edit it
import { Readable } from 'stream';
import * as $dara from '@darabonba/typescript';


export class PredictCVDAdvanceRequestURLList extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * https://medclients-sh.oss-cn-shanghai.aliyuncs.com/demo/xxx/0001.dcm
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

