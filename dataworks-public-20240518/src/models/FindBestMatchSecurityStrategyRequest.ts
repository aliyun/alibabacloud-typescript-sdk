// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FindBestMatchSecurityStrategyRequest extends $dara.Model {
  /**
   * @example
   * DataQuery
   */
  controlModule?: string;
  /**
   * @example
   * MyCatalog
   */
  controlSubModule?: string;
  /**
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

