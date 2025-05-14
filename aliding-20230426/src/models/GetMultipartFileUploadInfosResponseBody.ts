// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetMultipartFileUploadInfosResponseBodyMultipartHeaderSignatureInfos } from "./GetMultipartFileUploadInfosResponseBodyMultipartHeaderSignatureInfos";


export class GetMultipartFileUploadInfosResponseBody extends $dara.Model {
  multipartHeaderSignatureInfos?: GetMultipartFileUploadInfosResponseBodyMultipartHeaderSignatureInfos[];
  /**
   * @example
   * 0FAAEC9C-C6C8-5C87-AF8E-1195889BBXXX
   */
  requestId?: string;
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
      multipartHeaderSignatureInfos: 'multipartHeaderSignatureInfos',
      requestId: 'requestId',
      vendorRequestId: 'vendorRequestId',
      vendorType: 'vendorType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      multipartHeaderSignatureInfos: { 'type': 'array', 'itemType': GetMultipartFileUploadInfosResponseBodyMultipartHeaderSignatureInfos },
      requestId: 'string',
      vendorRequestId: 'string',
      vendorType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.multipartHeaderSignatureInfos)) {
      $dara.Model.validateArray(this.multipartHeaderSignatureInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

