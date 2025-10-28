// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UnbindSlbRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the application.
   * 
   * This parameter is required.
   * 
   * @example
   * c627c157-560d-********************
   */
  appId?: string;
  /**
   * @remarks
   * Specifies whether to remove the configured listeners. Valid values:
   * 
   * *   true: removes the configured listeners.
   * *   false: does not remove the configured listeners.
   * 
   * @example
   * false
   */
  deleteListener?: string;
  /**
   * @remarks
   * The ID of the SLB instance.
   * 
   * This parameter is required.
   * 
   * @example
   * lb-wz9vo49****************
   */
  slbId?: string;
  /**
   * @remarks
   * The network type of the SLB instance. Valid values:
   * 
   * *   **internet**: Internet-facing SLB instance
   * *   **intranet**: internal-facing SLB instance
   * 
   * This parameter is required.
   * 
   * @example
   * internet
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      deleteListener: 'DeleteListener',
      slbId: 'SlbId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      deleteListener: 'string',
      slbId: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

