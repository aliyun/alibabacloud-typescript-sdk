// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ImageInsightsCaptionConfig extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable this feature.
   */
  enable?: boolean;
  /**
   * @remarks
   * The prompt.
   * 
   * @example
   * Provide a concise title for this monitoring section, capturing the core subject and key event. Keep the title within 10 characters.
   */
  prompt?: string;
  static names(): { [key: string]: string } {
    return {
      enable: 'Enable',
      prompt: 'Prompt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enable: 'boolean',
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

