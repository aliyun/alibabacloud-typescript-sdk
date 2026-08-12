// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetServiceLinkedRoleStatusRequest extends $dara.Model {
  /**
   * @remarks
   * The authorization type. Valid values:
   * 
   * - **SecuritySense**: security check authorization
   * - **DisposalTool**: threat removal tool authorization
   * - **SensePosture**: security posture authorization
   * 
   * This parameter is required.
   * 
   * @example
   * DisposalTool
   */
  authType?: string;
  static names(): { [key: string]: string } {
    return {
      authType: 'AuthType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

