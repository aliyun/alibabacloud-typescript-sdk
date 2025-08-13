// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModelIsUsingRequest extends $dara.Model {
  /**
   * @remarks
   * Model code.
   * 
   * This parameter is required.
   * 
   * @example
   * ebgdsa
   */
  modelCode?: string;
  /**
   * @remarks
   * Model ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 27269
   */
  modelId?: string;
  /**
   * @remarks
   * Model name.
   * 
   * This parameter is required.
   * 
   * @example
   * text-embedding-v1
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
  /**
   * @remarks
   * Model status.
   * 
   * This parameter is required.
   * 
   * @example
   * Disabled
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      modelCode: 'ModelCode',
      modelId: 'ModelId',
      modelName: 'ModelName',
      regId: 'RegId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      modelCode: 'string',
      modelId: 'string',
      modelName: 'string',
      regId: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

