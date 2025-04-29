// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GenerateBroadcastNewsRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  prompt?: string;
  static names(): { [key: string]: string } {
    return {
      prompt: 'prompt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      prompt: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

