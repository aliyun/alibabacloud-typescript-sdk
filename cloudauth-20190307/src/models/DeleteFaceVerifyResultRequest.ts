// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteFaceVerifyResultRequest extends $dara.Model {
  /**
   * @remarks
   * The unique identifier for ID Verification.
   * 
   * @example
   * shae18209d29ce4e8ba252caae98ab15
   */
  certifyId?: string;
  /**
   * @remarks
   * Specifies whether the deletion relies on the data retrieved from the corresponding verification process. Valid values:
   * - Y: Yes. To successfully delete the related data, you must have obtained the processing result by calling the DescribeFaceVerify operation.
   * - N: No. This is the default value. You can directly set this parameter to N when you use the server-only API integration mode.
   * 
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

