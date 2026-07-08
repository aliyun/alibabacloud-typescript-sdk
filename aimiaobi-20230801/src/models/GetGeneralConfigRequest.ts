// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetGeneralConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The unique identifier of the configuration.
   * 
   * This parameter is required.
   * 
   * @example
   * xx
   */
  configKey?: string;
  /**
   * @remarks
   * The unique identifier of the Model Studio workspace. For more information, see [Get workspaceId]().
   * 
   * This parameter is required.
   * 
   * @example
   * llm-
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      configKey: 'ConfigKey',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configKey: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

