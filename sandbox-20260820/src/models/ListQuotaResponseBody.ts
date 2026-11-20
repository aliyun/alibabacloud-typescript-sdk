// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Quota } from "./Quota";


export class ListQuotaResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code. The value is 200 if the request succeeds.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The value of the maxResults parameter specified in the request. If a positive integer is specified for maxResults in the request, this value is returned. Otherwise, this field is not returned.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The response message. The value is success if the request succeeds.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The pagination token used to query the next page.
   * 
   * @example
   * qxGrXje86XMrYQ51aJMy
   */
  nextToken?: string;
  /**
   * @remarks
   * The list of quota configurations.
   */
  quotas?: Quota[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 7ADFF8D8-D4BA-5F79-AD49-DDABFEA59B6C
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      maxResults: 'maxResults',
      message: 'message',
      nextToken: 'nextToken',
      quotas: 'quotas',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      maxResults: 'number',
      message: 'string',
      nextToken: 'string',
      quotas: { 'type': 'array', 'itemType': Quota },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.quotas)) {
      $dara.Model.validateArray(this.quotas);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

