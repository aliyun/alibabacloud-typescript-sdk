// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeployApplicationResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The application ID.
   * 
   * @example
   * 7171a6ca-d1cd-4928-8642-7d5cfe69****
   */
  appId?: string;
  /**
   * @remarks
   * The ID of the change order. It can be used to query the task status.
   * 
   * @example
   * 01db03d3-3ee9-48b3-b3d0-dfce2d88****
   */
  changeOrderId?: string;
  /**
   * @remarks
   * Specifies whether approval is required when a RAM user performs release. Take note of the following rules:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  isNeedApproval?: boolean;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      changeOrderId: 'ChangeOrderId',
      isNeedApproval: 'IsNeedApproval',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      changeOrderId: 'string',
      isNeedApproval: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

