// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class VideoGenerationShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  inputShrink?: string;
  intentShrink?: string;
  /**
   * @remarks
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

