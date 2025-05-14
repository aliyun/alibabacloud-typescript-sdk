// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetMultipartFileUploadInfosResponseBodyMultipartHeaderSignatureInfosHeaderSignatureInfo } from "./GetMultipartFileUploadInfosResponseBodyMultipartHeaderSignatureInfosHeaderSignatureInfo";


export class GetMultipartFileUploadInfosResponseBodyMultipartHeaderSignatureInfos extends $dara.Model {
  headerSignatureInfo?: GetMultipartFileUploadInfosResponseBodyMultipartHeaderSignatureInfosHeaderSignatureInfo;
  /**
   * @example
   * 1
   */
  partNumber?: number;
  static names(): { [key: string]: string } {
    return {
      headerSignatureInfo: 'HeaderSignatureInfo',
      partNumber: 'PartNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headerSignatureInfo: GetMultipartFileUploadInfosResponseBodyMultipartHeaderSignatureInfosHeaderSignatureInfo,
      partNumber: 'number',
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

