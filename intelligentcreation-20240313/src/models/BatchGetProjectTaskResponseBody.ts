// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { BatchGetProjectTaskResponseBodyResultList } from "./BatchGetProjectTaskResponseBodyResultList";


export class BatchGetProjectTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 11
   */
  requestId?: string;
  resultList?: BatchGetProjectTaskResponseBodyResultList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      resultList: 'resultList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resultList: { 'type': 'array', 'itemType': BatchGetProjectTaskResponseBodyResultList },
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

