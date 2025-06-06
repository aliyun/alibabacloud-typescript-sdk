// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteFaceVerifyResultRequest extends $dara.Model {
  /**
   * @example
   * shae18209d29ce4e8ba252caae98ab15
   */
  certifyId?: string;
  /**
   * @example
   * Y
   */
  deleteAfterQuery?: string;
  static names(): { [key: string]: string } {
    return {
      certifyId: 'CertifyId',
      deleteAfterQuery: 'DeleteAfterQuery',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certifyId: 'string',
      deleteAfterQuery: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

