// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class VideoGenerationShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The product input.
   * 
   * This parameter is required.
   */
  inputShrink?: string;
  /**
   * @remarks
   * The intent parameters. Currently unavailable.
   */
  intentShrink?: string;
  /**
   * @remarks
   * The output parameters.
   * 
   * This parameter is required.
   */
  outputShrink?: string;
  static names(): { [key: string]: string } {
    return {
      inputShrink: 'Input',
      intentShrink: 'Intent',
      outputShrink: 'Output',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inputShrink: 'string',
      intentShrink: 'string',
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

