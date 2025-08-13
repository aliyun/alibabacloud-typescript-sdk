// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UploadFileCheckResponseBodyResultObject extends $dara.Model {
  /**
   * @remarks
   * Number of effective rows
   * 
   * @example
   * 100
   */
  effectiveNumber?: number;
  /**
   * @remarks
   * Valid sample data
   */
  resultList?: string[];
  /**
   * @remarks
   * Total number of rows
   * 
   * @example
   * 100
   */
  totalNumber?: number;
  static names(): { [key: string]: string } {
    return {
      effectiveNumber: 'effectiveNumber',
      resultList: 'resultList',
      totalNumber: 'totalNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      effectiveNumber: 'number',
      resultList: { 'type': 'array', 'itemType': 'string' },
      totalNumber: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.resultList)) {
      $dara.Model.validateArray(this.resultList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadFileCheckResponseBody extends $dara.Model {
  /**
   * @remarks
   * ID of the request
   * 
   * @example
   * A32FE941-35F2-5378-B37C-4B8FDB16F094
   */
  requestId?: string;
  /**
   * @remarks
   * Returned object
   */
  resultObject?: UploadFileCheckResponseBodyResultObject;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resultObject: 'resultObject',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resultObject: UploadFileCheckResponseBodyResultObject,
    };
  }

  validate() {
    if(this.resultObject && typeof (this.resultObject as any).validate === 'function') {
      (this.resultObject as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

