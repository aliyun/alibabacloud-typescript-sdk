// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyStageModelRequest extends $dara.Model {
  /**
   * @example
   * test
   */
  description?: string;
  securityToken?: string;
  stageAlias?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * sdljflsjflj324xxx
   */
  stageModelId?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      securityToken: 'SecurityToken',
      stageAlias: 'StageAlias',
      stageModelId: 'StageModelId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      securityToken: 'string',
      stageAlias: 'string',
      stageModelId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

