// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSafStartStepsResponseBodyResultObject extends $dara.Model {
  /**
   * @remarks
   * Step content
   * 
   * @example
   * https://help.aliyun.com/document_detail/177689.html
   */
  content?: string;
  /**
   * @remarks
   * Step title
   * 
   * @example
   * ios
   */
  id?: string;
  /**
   * @remarks
   * Type
   * 
   * @example
   * URL
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      id: 'id',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      id: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSafStartStepsResponseBody extends $dara.Model {
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * A32FE941-35F2-5378-B37C-4B8FDB16F094
   */
  requestId?: string;
  /**
   * @remarks
   * Return object
   */
  resultObject?: DescribeSafStartStepsResponseBodyResultObject[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resultObject: 'resultObject',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resultObject: { 'type': 'array', 'itemType': DescribeSafStartStepsResponseBodyResultObject },
    };
  }

  validate() {
    if(Array.isArray(this.resultObject)) {
      $dara.Model.validateArray(this.resultObject);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

