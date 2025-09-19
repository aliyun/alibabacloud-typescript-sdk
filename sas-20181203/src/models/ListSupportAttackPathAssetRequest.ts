// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSupportAttackPathAssetRequest extends $dara.Model {
  /**
   * @remarks
   * Node type, with values:
   * - **start**: Start point.
   * - **end**: End point.
   * 
   * @example
   * end
   */
  nodeType?: string;
  /**
   * @remarks
   * Path name.
   * 
   * > You can call [ListAvailableAttackPath](~~ListAvailableAttackPath~~) to query the path names.
   * 
   * @example
   * ecs_get_credential_by_create_login_profile
   */
  pathName?: string;
  /**
   * @remarks
   * Path type.
   * > You can call [ListAvailableAttackPath](~~ListAvailableAttackPath~~) to query the path types.
   * 
   * @example
   * role_escalation
   */
  pathType?: string;
  /**
   * @remarks
   * Support type, with values:
   * - **event**: Attack path alert event.
   * - **whitelist**: Attack path whitelist.
   * - **sensitive**: Sensitive assets in the attack path.
   * 
   * This parameter is required.
   * 
   * @example
   * event
   */
  supportType?: string;
  static names(): { [key: string]: string } {
    return {
      nodeType: 'NodeType',
      pathName: 'PathName',
      pathType: 'PathType',
      supportType: 'SupportType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeType: 'string',
      pathName: 'string',
      pathType: 'string',
      supportType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

