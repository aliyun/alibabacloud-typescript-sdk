// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { E2BVolume } from "./E2bvolume";


export class ListVolumesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code. A value of 200 indicates success.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The maximum number of entries per page for the current query.
   * 
   * @example
   * 4
   */
  maxResults?: number;
  /**
   * @remarks
   * The response message. The value is success if the request is successful.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The pagination token for the next page, which is used for subsequent queries.
   * 
   * @example
   * qxGrXje86XMrYQ51aJMy
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 7ADFF8D8-D4BA-5F79-AD49-DDABFEA59B6C
   */
  requestId?: string;
  /**
   * @remarks
   * The list of storage volumes.
   */
  volumes?: E2BVolume[];
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      maxResults: 'maxResults',
      message: 'message',
      nextToken: 'nextToken',
      requestId: 'requestId',
      volumes: 'volumes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      maxResults: 'number',
      message: 'string',
      nextToken: 'string',
      requestId: 'string',
      volumes: { 'type': 'array', 'itemType': E2BVolume },
    };
  }

  validate() {
    if(Array.isArray(this.volumes)) {
      $dara.Model.validateArray(this.volumes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

