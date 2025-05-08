// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteWaitingRoomRuleRequest extends $dara.Model {
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
   * The ID of the waiting room bypass rule.
   * 
   * This parameter is required.
   * 
   * @example
   * 3672886****
   */
  waitingRoomRuleId?: number;
  static names(): { [key: string]: string } {
    return {
      siteId: 'SiteId',
      waitingRoomRuleId: 'WaitingRoomRuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      siteId: 'number',
      waitingRoomRuleId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

