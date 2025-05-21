// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AnchorResponse } from "./AnchorResponse";


export class ListAnchorResponseBody extends $dara.Model {
  /**
   * @remarks
   * code
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @example
   * Deduct.DeductTaskAlreadySuccess
   */
  errorCode?: string;
  /**
   * @example
   * Failed to proxy flink ui request, message: An error occurred: Invalid UUID string: jobsn
   */
  errorMessage?: string;
  list?: AnchorResponse[];
  /**
   * @remarks
   * requestId
   * 
   * @example
   * 5389BE87-571B-573C-90ED-F07C5E68760B
   */
  requestId?: string;
  /**
   * @example
   * True
   */
  success?: boolean;
  /**
   * @example
   * 10
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
      list: 'list',
      requestId: 'requestId',
      success: 'success',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      errorCode: 'string',
      errorMessage: 'string',
      list: { 'type': 'array', 'itemType': AnchorResponse },
      requestId: 'string',
      success: 'boolean',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.list)) {
      $dara.Model.validateArray(this.list);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

