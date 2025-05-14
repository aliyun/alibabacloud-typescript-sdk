// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetFileUploadInfoResponseBodyHeaderSignatureInfo } from "./GetFileUploadInfoResponseBodyHeaderSignatureInfo";


export class GetFileUploadInfoResponseBody extends $dara.Model {
  headerSignatureInfo?: GetFileUploadInfoResponseBodyHeaderSignatureInfo;
  /**
   * @example
   * HEADER_SIGNATURE
   */
  protocol?: string;
  /**
   * @example
   * 0FAAEC9C-C6C8-5C87-AF8E-1195889BBXXX
   */
  requestId?: string;
  /**
   * @example
   * DINGTALK
   */
  storageDriver?: string;
  /**
   * @example
   * upload_key
   */
  uploadKey?: string;
  /**
   * @example
   * 0FAAEC9C-C6C8-5C87-AF8E-1195889BBXXX
   */
  vendorRequestId?: string;
  /**
   * @example
   * dingtalk
   */
  vendorType?: string;
  static names(): { [key: string]: string } {
    return {
      headerSignatureInfo: 'headerSignatureInfo',
      protocol: 'protocol',
      requestId: 'requestId',
      storageDriver: 'storageDriver',
      uploadKey: 'uploadKey',
      vendorRequestId: 'vendorRequestId',
      vendorType: 'vendorType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headerSignatureInfo: GetFileUploadInfoResponseBodyHeaderSignatureInfo,
      protocol: 'string',
      requestId: 'string',
      storageDriver: 'string',
      uploadKey: 'string',
      vendorRequestId: 'string',
      vendorType: 'string',
    };
  }

  validate() {
    if(this.headerSignatureInfo && typeof (this.headerSignatureInfo as any).validate === 'function') {
      (this.headerSignatureInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

