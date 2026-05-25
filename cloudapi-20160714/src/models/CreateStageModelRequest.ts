// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateStageModelRequest extends $dara.Model {
  /**
   * @example
   * Model Description
   */
  description?: string;
  securityToken?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  stageAlias?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * RELEASE
   */
  stageName?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      securityToken: 'SecurityToken',
      stageAlias: 'StageAlias',
      stageName: 'StageName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      securityToken: 'string',
      stageAlias: 'string',
      stageName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

