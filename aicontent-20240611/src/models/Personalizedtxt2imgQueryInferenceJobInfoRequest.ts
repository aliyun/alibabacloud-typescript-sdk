// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Personalizedtxt2imgQueryInferenceJobInfoRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 180
   */
  inferenceJobId?: string;
  static names(): { [key: string]: string } {
    return {
      inferenceJobId: 'inferenceJobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inferenceJobId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

