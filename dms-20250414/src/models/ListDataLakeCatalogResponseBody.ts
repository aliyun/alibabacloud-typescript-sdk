// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DLCatalog } from "./Dlcatalog";


export class ListDataLakeCatalogResponseBody extends $dara.Model {
  cataLogList?: DLCatalog[];
  /**
   * @example
   * 400
   */
  errorCode?: string;
  /**
   * @example
   * UnknownError
   */
  errorMessage?: string;
  /**
   * @example
   * E76DD2E7-EBAC-5724-B163-19AAC233****
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      cataLogList: 'CataLogList',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cataLogList: { 'type': 'array', 'itemType': DLCatalog },
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.cataLogList)) {
      $dara.Model.validateArray(this.cataLogList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

