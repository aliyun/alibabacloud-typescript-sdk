// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetMetaTableDetailInfoResponseBodyDetailInfo } from "./GetMetaTableDetailInfoResponseBodyDetailInfo";


export class GetMetaTableDetailInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the table.
   */
  detailInfo?: GetMetaTableDetailInfoResponseBodyDetailInfo;
  /**
   * @remarks
   * The error code returned.
   * 
   * @example
   * UnknownError
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message returned.
   * 
   * @example
   * UnknownError
   */
  errorMessage?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * E881CB2F-DE42-42E5-90EB-8B3173DCB9B9
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      detailInfo: 'DetailInfo',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detailInfo: GetMetaTableDetailInfoResponseBodyDetailInfo,
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.detailInfo && typeof (this.detailInfo as any).validate === 'function') {
      (this.detailInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

