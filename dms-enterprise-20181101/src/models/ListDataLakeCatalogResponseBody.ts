// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DLCatalog } from "./Dlcatalog";


export class ListDataLakeCatalogResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of catalogs.
   */
  cataLogList?: DLCatalog[];
  /**
   * @remarks
   * The error code returned if the request failed.
   * 
   * @example
   * 400
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message that is returned if the request failed.
   * 
   * @example
   * UnknownError
   */
  errorMessage?: string;
  /**
   * @remarks
   * The ID of the request. You can use the request ID to locate logs and troubleshoot issues.
   * 
   * @example
   * E76DD2E7-EBAC-5724-B163-19AAC233F8F2
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   **true**: The request was successful.
   * *   **false**: The request failed.
   * 
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

