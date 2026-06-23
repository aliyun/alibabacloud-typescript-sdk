// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FindBestMatchSecurityStrategyRequest extends $dara.Model {
  /**
   * @remarks
   * Control module, used to match the security policy type.
   * 
   * @example
   * DataQuery
   */
  controlModule?: string;
  /**
   * @remarks
   * Control sub-module, used to match the security policy type.
   * 
   * @example
   * MyCatalog
   */
  controlSubModule?: string;
  /**
   * @remarks
   * **Workspace ID**, used to precisely match workspace-level policies.
   * 
   * @example
   * 12345
   */
  workspaceId?: number;
  static names(): { [key: string]: string } {
    return {
      controlModule: 'ControlModule',
      controlSubModule: 'ControlSubModule',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      controlModule: 'string',
      controlSubModule: 'string',
      workspaceId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

