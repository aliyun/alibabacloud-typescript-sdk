// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModelDeleteRequest extends $dara.Model {
  /**
   * @remarks
   * Model name.
   * 
   * This parameter is required.
   * 
   * @example
   * qwen-max
   */
  modelName?: string;
  /**
   * @remarks
   * Region code.
   * 
   * @example
   * cn-hangzhou
   */
  regId?: string;
  static names(): { [key: string]: string } {
    return {
      modelName: 'ModelName',
      regId: 'RegId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      modelName: 'string',
      regId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

