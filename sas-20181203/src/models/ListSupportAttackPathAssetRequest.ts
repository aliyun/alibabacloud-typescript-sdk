// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSupportAttackPathAssetRequest extends $dara.Model {
  /**
   * @remarks
   * The node type. Valid values:
   * - **start**: start node.
   * - **end**: end node.
   * 
   * @example
   * end
   */
  nodeType?: string;
  /**
   * @remarks
   * The path name.
   * 
   * > Call [ListAvailableAttackPath](~~ListAvailableAttackPath~~) to query path names.
   * 
   * @example
   * ecs_get_credential_by_create_login_profile
   */
  pathName?: string;
  /**
   * @remarks
   * The path type.
   * > Call [ListAvailableAttackPath](~~ListAvailableAttackPath~~) to query path types.
   * 
   * @example
   * role_escalation
   */
  pathType?: string;
  /**
   * @remarks
   * The support type. Valid values:
   * - **event**: attack path alert event.
   * - **whitelist**: attack path whitelist.
   * - **sensitive**: attack path sensitive asset.
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

