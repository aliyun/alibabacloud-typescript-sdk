// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Personalizedtxt2imgQueryModelTrainStatusResponseBodyData extends $dara.Model {
  /**
   * @example
   * FINISHED
   */
  modelTrainStatus?: string;
  static names(): { [key: string]: string } {
    return {
      modelTrainStatus: 'modelTrainStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      modelTrainStatus: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

