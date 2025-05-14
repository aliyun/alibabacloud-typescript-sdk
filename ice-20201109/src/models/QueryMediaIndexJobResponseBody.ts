// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryMediaIndexJobResponseBodyIndexJobInfoList } from "./QueryMediaIndexJobResponseBodyIndexJobInfoList";


export class QueryMediaIndexJobResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The indexing jobs enabled for the media asset.
   */
  indexJobInfoList?: QueryMediaIndexJobResponseBodyIndexJobInfoList[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 4E84BE44-58A7-****-****-FBEBEA16EF94
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  success?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      indexJobInfoList: 'IndexJobInfoList',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      indexJobInfoList: { 'type': 'array', 'itemType': QueryMediaIndexJobResponseBodyIndexJobInfoList },
      requestId: 'string',
      success: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.indexJobInfoList)) {
      $dara.Model.validateArray(this.indexJobInfoList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

