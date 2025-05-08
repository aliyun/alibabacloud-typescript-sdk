// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteWaitingRoomRequest extends $dara.Model {
  /**
   * @remarks
   * The website ID, which can be obtained by calling the [ListSites](https://help.aliyun.com/document_detail/2850189.html) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * 123456****
   */
  siteId?: number;
  /**
   * @remarks
   * The waiting room ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 25133f536f1b1f6b6091f6a92c614dd4
   */
  waitingRoomId?: string;
  static names(): { [key: string]: string } {
    return {
      siteId: 'SiteId',
      waitingRoomId: 'WaitingRoomId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      siteId: 'number',
      waitingRoomId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

