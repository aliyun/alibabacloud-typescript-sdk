// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListAnalysisTagDetailByTaskIdResponseBodyData } from "./ListAnalysisTagDetailByTaskIdResponseBodyData";


export class ListAnalysisTagDetailByTaskIdResponseBody extends $dara.Model {
  /**
   * @example
   * DataNotExists
   */
  code?: string;
  data?: ListAnalysisTagDetailByTaskIdResponseBodyData[];
  /**
   * @example
   * 100
   */
  maxResults?: number;
  /**
   * @example
   * 成功
   */
  message?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxxxx
   */
  nextToken?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * xxxxxxx
   */
  requestId?: string;
  /**
   * @example
   * false
   */
  success?: boolean;
  /**
   * @example
   * 200
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      maxResults: 'maxResults',
      message: 'message',
      nextToken: 'nextToken',
      requestId: 'requestId',
      success: 'success',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': ListAnalysisTagDetailByTaskIdResponseBodyData },
      maxResults: 'number',
      message: 'string',
      nextToken: 'string',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

