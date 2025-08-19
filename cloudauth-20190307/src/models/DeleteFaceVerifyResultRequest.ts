// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteFaceVerifyResultRequest extends $dara.Model {
  /**
   * @remarks
   * Unique identifier for real-person authentication.
   * 
   * @example
   * shae18209d29ce4e8ba252caae98ab15
   */
  certifyId?: string;
  /**
   * @remarks
   * Whether deletion depends on having already obtained relevant data from the corresponding authentication process.
   * 
   * - Y: Required. To successfully delete the related data, you must have obtained the processing result through the DescribeFaceVerify interface.
   * - N: Not required (default). For pure server-side API integration, you can directly pass N.
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

