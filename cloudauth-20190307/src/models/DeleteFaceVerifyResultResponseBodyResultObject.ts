// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteFaceVerifyResultResponseBodyResultObject extends $dara.Model {
  /**
   * @example
   * sha58aeae7ea2f5ed069530f58df4e6d
   */
  certifyId?: string;
  /**
   * @example
   * N
   */
  deleteResult?: string;
  /**
   * @example
   * NOT_DELETE_REPEATEDLY
   */
  failReason?: string;
  static names(): { [key: string]: string } {
    return {
      certifyId: 'CertifyId',
      deleteResult: 'DeleteResult',
      failReason: 'FailReason',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certifyId: 'string',
      deleteResult: 'string',
      failReason: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

