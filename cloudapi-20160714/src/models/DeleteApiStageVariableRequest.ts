// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteApiStageVariableRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the API group.
   * 
   * This parameter is required.
   * 
   * @example
   * 523e8dc7bbe04613b5b1d726c2a7889d
   */
  groupId?: string;
  securityToken?: string;
  /**
   * @remarks
   * The ID of the environment.
   * 
   * This parameter is required.
   * 
   * @example
   * 6EF60BEC-0242-43AF-BB20-270359FB54A7
   */
  stageId?: string;
  /**
   * @remarks
   * The name of the variable to be deleted. This parameter is case-sensitive.
   * 
   * This parameter is required.
   * 
   * @example
   * serverName
   */
  variableName?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      securityToken: 'SecurityToken',
      stageId: 'StageId',
      variableName: 'VariableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      securityToken: 'string',
      stageId: 'string',
      variableName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

