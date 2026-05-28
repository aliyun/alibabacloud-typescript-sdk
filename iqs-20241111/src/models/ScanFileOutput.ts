// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ScanFileInfo } from "./ScanFileInfo";
import { UnifiedSearchInformation } from "./UnifiedSearchInformation";


export class ScanFileOutput extends $dara.Model {
  /**
   * @example
   * ECB2144C-E277-5434-80E6-12D26678D364
   */
  requestId?: string;
  scanFileInfoList?: ScanFileInfo[];
  searchInformation?: UnifiedSearchInformation;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      scanFileInfoList: 'scanFileInfoList',
      searchInformation: 'searchInformation',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      scanFileInfoList: { 'type': 'array', 'itemType': ScanFileInfo },
      searchInformation: UnifiedSearchInformation,
    };
  }

  validate() {
    if(Array.isArray(this.scanFileInfoList)) {
      $dara.Model.validateArray(this.scanFileInfoList);
    }
    if(this.searchInformation && typeof (this.searchInformation as any).validate === 'function') {
      (this.searchInformation as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

