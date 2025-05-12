// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListCdsFilesResponseBodyFileModels } from "./ListCdsFilesResponseBodyFileModels";


export class ListCdsFilesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The result of the operation. A value of success indicates that the operation is successful. If the operation failed, an error message is returned.
   * 
   * @example
   * success
   */
  code?: string;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 0
   */
  count?: string;
  /**
   * @remarks
   * The files.
   */
  fileModels?: ListCdsFilesResponseBodyFileModels[];
  /**
   * @remarks
   * The error message returned if the request failed. This parameter is empty if the value of Code is success.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The token used for the next query. If this parameter is empty, all results have been returned.
   * 
   * @example
   * WyI2MzhmMjA2ZTFmZGZlZGVjZDk3OTRlNzVhZmIwMDFiZmM5NWQ3YTgwIiwibiIsIm4iLDEsLTEsMTY3MDMyNDMzNTAzMSwiNjM4ZjIwNmZjNDFkMzIwOTZmZWU0NGYxODkwY2I5ZjI0Mjg0NzM2****
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID. An ID is the unique identifier of the request.
   * 
   * @example
   * 40D86754-20FD-53DC-A9B8-25F7FECC****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * Valid values:
   * 
   * *   true
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   <!-- -->
   * 
   *     false
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      count: 'Count',
      fileModels: 'FileModels',
      message: 'Message',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      count: 'string',
      fileModels: { 'type': 'array', 'itemType': ListCdsFilesResponseBodyFileModels },
      message: 'string',
      nextToken: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.fileModels)) {
      $dara.Model.validateArray(this.fileModels);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

