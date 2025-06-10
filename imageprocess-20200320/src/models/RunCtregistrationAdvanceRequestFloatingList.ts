// This file is auto-generated, don't edit it
import { Readable } from 'stream';
import * as $dara from '@darabonba/typescript';


export class RunCTRegistrationAdvanceRequestFloatingList extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * https://medclients-sh.oss-cn-shanghai.aliyuncs.com/demo/registration/flt/34_P18.4.1.dcm
   */
  floatingURLObject?: Readable;
  static names(): { [key: string]: string } {
    return {
      floatingURLObject: 'FloatingURL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      floatingURLObject: 'Readable',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

