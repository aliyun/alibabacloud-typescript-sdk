// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Folder } from "./Folder";


export class GetFolderResponseBody extends $dara.Model {
  /**
   * @remarks
   * Folder data structure.
   */
  data?: Folder;
  /**
   * @remarks
   * - If success is false, the business error code is returned.
   * 
   * - If success is true, an empty value is returned.
   * 
   * @example
   * ""
   */
  errorCode?: string;
  /**
   * @remarks
   * - If success is false, the business error message is returned.
   * 
   * - If success is true, an empty value is returned.
   * 
   * @example
   * ""
   */
  errorMessage?: string;
  /**
   * @remarks
   * Indicates task success or failure. If the parameter is not empty and not 200, it means failure.
   * 
   * @example
   * 200
   */
  httpCode?: number;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * CBC799F0-AS7S-1D30-8A4F-882ED4DD****
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

