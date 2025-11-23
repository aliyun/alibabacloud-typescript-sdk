// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DLCatalog } from "./Dlcatalog";


export class GetDataLakeCatalogResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the catalog.
   */
  catalog?: DLCatalog;
  /**
   * @remarks
   * The error code that is returned if the request failed.
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
   * code: 404, can not find catalog, name : hiv request id: 6090E571-E5B1-1E6D-BF44-F9E10E8B7EB1
   */
  errorMessage?: string;
  /**
   * @remarks
   * The request ID. You can use the request ID to locate logs and troubleshoot issues.
   * 
   * @example
   * FE8EE2F1-4880-46BC-A704-5CF63EAF9A04
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
      catalog: 'Catalog',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      catalog: DLCatalog,
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.catalog && typeof (this.catalog as any).validate === 'function') {
      (this.catalog as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

