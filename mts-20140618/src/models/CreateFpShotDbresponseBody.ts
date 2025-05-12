// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateFpShotDBResponseBodyFpShotDB } from "./CreateFpShotDbresponseBodyFpShotDb";


export class CreateFpShotDBResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the media fingerprint library.
   */
  fpShotDB?: CreateFpShotDBResponseBodyFpShotDB;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 25818875-5F78-4A13-BEF6-D7393642CA58
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      fpShotDB: 'FpShotDB',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fpShotDB: CreateFpShotDBResponseBodyFpShotDB,
      requestId: 'string',
    };
  }

  validate() {
    if(this.fpShotDB && typeof (this.fpShotDB as any).validate === 'function') {
      (this.fpShotDB as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

