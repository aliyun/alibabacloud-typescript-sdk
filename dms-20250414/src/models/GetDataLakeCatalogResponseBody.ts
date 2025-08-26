// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DLCatalog } from "./Dlcatalog";


export class GetDataLakeCatalogResponseBody extends $dara.Model {
  catalog?: DLCatalog;
  /**
   * @example
   * 400
   */
  errorCode?: string;
  /**
   * @example
   * code: 404, can not find catalog, name : hiv request id: 6090E571-E5B1-1E6D-BF44-F9E10E8B****
   */
  errorMessage?: string;
  /**
   * @example
   * FE8EE2F1-4880-46BC-A704-5CF63EAF****
   */
  requestId?: string;
  /**
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

