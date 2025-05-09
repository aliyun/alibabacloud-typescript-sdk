// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetLhSpaceByNameResponseBodyLakehouseSpace } from "./GetLhSpaceByNameResponseBodyLakehouseSpace";


export class GetLhSpaceByNameResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code returned if the request fails.
   * 
   * @example
   * UnknownError
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message returned if the request fails.
   * 
   * @example
   * UnknownError
   */
  errorMessage?: string;
  /**
   * @remarks
   * The workspace for data warehouse development.
   */
  lakehouseSpace?: GetLhSpaceByNameResponseBodyLakehouseSpace;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * FE8CA4A8-AB2D-55B7-BD30-01A4609F40D8
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:
   * 
   * *   **true**: The request is successful.
   * *   **false**: The request fails.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      lakehouseSpace: 'LakehouseSpace',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      lakehouseSpace: GetLhSpaceByNameResponseBodyLakehouseSpace,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.lakehouseSpace && typeof (this.lakehouseSpace as any).validate === 'function') {
      (this.lakehouseSpace as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

