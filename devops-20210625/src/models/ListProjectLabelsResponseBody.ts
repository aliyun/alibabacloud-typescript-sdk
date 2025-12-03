// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListProjectLabelsResponseBodyResult extends $dara.Model {
  /**
   * @example
   * #A16AD7
   */
  color?: string;
  description?: string;
  /**
   * @example
   * f2bf0e0b4ce34a348b2d971c69a1d11f
   */
  id?: string;
  name?: string;
  /**
   * @example
   * 1
   */
  openMergeRequestsCount?: number;
  static names(): { [key: string]: string } {
    return {
      color: 'color',
      description: 'description',
      id: 'id',
      name: 'name',
      openMergeRequestsCount: 'openMergeRequestsCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      color: 'string',
      description: 'string',
      id: 'string',
      name: 'string',
      openMergeRequestsCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectLabelsResponseBody extends $dara.Model {
  /**
   * @example
   * Openapi.RequestError
   */
  errorCode?: string;
  /**
   * @example
   * ""
   */
  errorMessage?: string;
  /**
   * @example
   * ASSDS-ASSASX-XSAXSA-XSAXSAXS
   */
  requestId?: string;
  result?: ListProjectLabelsResponseBodyResult[];
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @example
   * 30
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
      requestId: 'requestId',
      result: 'result',
      success: 'success',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListProjectLabelsResponseBodyResult },
      success: 'boolean',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

