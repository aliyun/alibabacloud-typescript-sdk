// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteFaceVerifyResultRequest extends $dara.Model {
  /**
   * @remarks
   * The unique identifier for real-person authentication.
   * 
   * @example
   * shae18209d29ce4e8ba252caae98ab15
   */
  certifyId?: string;
  /**
   * @remarks
   * Specifies whether deletion depends on having retrieved the relevant data from the corresponding authentication process.
   * 
   * - Y: Required. To successfully delete the relevant data, you must have already obtained the processing result through the DescribeFaceVerify API.
   * - N: Not required (default). You can directly pass N when integrating through the pure server-side API mode.
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

