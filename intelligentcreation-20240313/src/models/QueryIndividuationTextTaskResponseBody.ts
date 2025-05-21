// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryIndividuationTextTaskResponseBodyTextList } from "./QueryIndividuationTextTaskResponseBodyTextList";


export class QueryIndividuationTextTaskResponseBody extends $dara.Model {
  /**
   * @example
   * yyyy-MM-dd HH:mm:ss
   */
  createTime?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 56AC346B-AF40-5E4F-AFFE-FD8BA5E6FB3A
   */
  requestId?: string;
  /**
   * @example
   * 0
   */
  status?: number;
  textList?: QueryIndividuationTextTaskResponseBodyTextList[];
  /**
   * @example
   * yyyy-MM-dd HH:mm:ss
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'createTime',
      requestId: 'requestId',
      status: 'status',
      textList: 'textList',
      updateTime: 'updateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      requestId: 'string',
      status: 'number',
      textList: { 'type': 'array', 'itemType': QueryIndividuationTextTaskResponseBodyTextList },
      updateTime: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.textList)) {
      $dara.Model.validateArray(this.textList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

