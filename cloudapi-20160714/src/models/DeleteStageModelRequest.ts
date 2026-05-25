// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteStageModelRequest extends $dara.Model {
  securityToken?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 3294sdufo3nenexxx
   */
  stageModelId?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      stageModelId: 'StageModelId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
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

