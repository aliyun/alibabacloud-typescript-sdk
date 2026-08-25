// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { E2BVolume } from "./E2bvolume";


export class ListVolumesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 4
   */
  maxResults?: number;
  /**
   * @remarks
   * The response message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The pagination token used to retrieve more results. You do not need to specify this parameter for the first request. For subsequent requests, use the token returned in the previous response.
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
   * The list of volumes.
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

