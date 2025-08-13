// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeModelDetailsByIdRequest extends $dara.Model {
  /**
   * @remarks
   * Model ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 20619
   */
  modelId?: string;
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
      modelId: 'ModelId',
      regId: 'RegId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      modelId: 'string',
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

