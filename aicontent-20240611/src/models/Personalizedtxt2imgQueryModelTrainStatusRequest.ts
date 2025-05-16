// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Personalizedtxt2imgQueryModelTrainStatusRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * modelId-xxxx-xxxx-xxxx
   */
  modelId?: string;
  static names(): { [key: string]: string } {
    return {
      modelId: 'modelId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      modelId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

