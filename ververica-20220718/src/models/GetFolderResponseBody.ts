// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Folder } from "./Folder";


export class GetFolderResponseBody extends $dara.Model {
  /**
   * @remarks
   * The folder information data structure.
   */
  data?: Folder;
  /**
   * @remarks
   * - When success is false, a business error code is returned.
   *  
   * - When success is true, an empty value is returned.
   * 
   * @example
   * ""
   */
  errorCode?: string;
  /**
   * @remarks
   * - When success is false, a business error message is returned.
   * 
   * - When success is true, an empty value is returned.
   * 
   * @example
   * ""
   */
  errorMessage?: string;
  /**
   * @remarks
   * The business status code. If this value is not empty and is not 200, the business request failed.
   * 
   * @example
   * 200
   */
  httpCode?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * CBC799F0-AS7S-1D30-8A4F-882ED4DD****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the business request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
      httpCode: 'httpCode',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: Folder,
      errorCode: 'string',
      errorMessage: 'string',
      httpCode: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

