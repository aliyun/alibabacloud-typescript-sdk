// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModelNameIsDuplicationRequest extends $dara.Model {
  /**
   * @remarks
   * Model name.
   * 
   * This parameter is required.
   * 
   * @example
   * text-embedding-v2
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

