// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UploadCsrResponseBody extends $dara.Model {
  /**
   * @remarks
   * The unique ID of the CSR. You can use this ID to obtain the content of the CSR. For more information, see [GetCsrDetail](https://help.aliyun.com/document_detail/2709720.html).
   * 
   * @example
   * 2271
   */
  csrId?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * CBF1E9B7-D6A0-4E9E-AD3E-2B47E6C2837D
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      csrId: 'CsrId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      csrId: 'number',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

