// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { BatchGetMediaInfosResponseBodyMediaInfos } from "./BatchGetMediaInfosResponseBodyMediaInfos";


export class BatchGetMediaInfosResponseBody extends $dara.Model {
  /**
   * @remarks
   * The queried media assets.
   */
  mediaInfos?: BatchGetMediaInfosResponseBodyMediaInfos[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * ******11-DB8D-4A9A-875B-275798******
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      mediaInfos: 'MediaInfos',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mediaInfos: { 'type': 'array', 'itemType': BatchGetMediaInfosResponseBodyMediaInfos },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.mediaInfos)) {
      $dara.Model.validateArray(this.mediaInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

