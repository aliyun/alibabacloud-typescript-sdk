// This file is auto-generated, don't edit it
import { Readable } from 'stream';
import * as $dara from '@darabonba/typescript';


export class RunCTRegistrationAdvanceRequestReferenceList extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * https://medclients-sh.oss-cn-shanghai.aliyuncs.com/demo/registration/ref/33_P18.4.1.dcm
   */
  referenceURLObject?: Readable;
  static names(): { [key: string]: string } {
    return {
      referenceURLObject: 'ReferenceURL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      referenceURLObject: 'Readable',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

