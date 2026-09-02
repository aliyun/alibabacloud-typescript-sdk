// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EcomVideoRecreationShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The input parameters for video remix.
   * 
   * This parameter is required.
   */
  inputShrink?: string;
  /**
   * @remarks
   * The output specifications for the final video.
   */
  outputShrink?: string;
  static names(): { [key: string]: string } {
    return {
      inputShrink: 'Input',
      outputShrink: 'Output',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inputShrink: 'string',
      outputShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

