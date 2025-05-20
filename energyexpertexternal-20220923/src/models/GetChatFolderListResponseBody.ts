// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ChatFolderItem } from "./ChatFolderItem";


export class GetChatFolderListResponseBody extends $dara.Model {
  /**
   * @remarks
   * Returned data
   */
  data?: ChatFolderItem[];
  /**
   * @remarks
   * ID of the request
   * 
   * @example
   * A8AEC6D9-A359-5169-BD1A-BD848BA60D65
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ChatFolderItem },
      requestId: 'string',
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

