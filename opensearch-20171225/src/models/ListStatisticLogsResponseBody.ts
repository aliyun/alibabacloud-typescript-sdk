// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListStatisticLogsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F76ACE3D-E510-EE2C-B7B1-39B3136A61EE
   */
  requestId?: string;
  /**
   * @remarks
   * The returned result. For more information, see
   * 
   * *   [Parameters of hotwords rankings](https://help.aliyun.com/document_detail/421248.html).
   * 
   * @example
   * []
   */
  result?: { [key: string]: any }[];
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      totalCount: 'number',
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

