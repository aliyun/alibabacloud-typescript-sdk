// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { MaintainWindowForView } from "./MaintainWindowForView";


export class GetMaintainWindowResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the silence policy, including the policy ID, name, description, enabled status, filterSetting, effective period configuration, creation time, and update time. workspaceFilterSetting is not returned.
   */
  maintainWindow?: MaintainWindowForView;
  /**
   * @remarks
   * The unique ID of the request. You can use this ID for troubleshooting and ticket submission.
   * 
   * @example
   * 0CEC5375-C554-562B-A65F-9A629907C1F0
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      maintainWindow: 'maintainWindow',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maintainWindow: MaintainWindowForView,
      requestId: 'string',
    };
  }

  validate() {
    if(this.maintainWindow && typeof (this.maintainWindow as any).validate === 'function') {
      (this.maintainWindow as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

