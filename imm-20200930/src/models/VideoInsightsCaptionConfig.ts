// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { PersonReferenceConfig } from "./PersonReferenceConfig";


export class VideoInsightsCaptionConfig extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable video captioning.
   */
  enable?: boolean;
  /**
   * @remarks
   * The person reference configuration.
   */
  personReference?: PersonReferenceConfig;
  /**
   * @remarks
   * The custom prompt for video captioning.
   * 
   * @example
   * 请用一句话描述这个视频
   */
  prompt?: string;
  static names(): { [key: string]: string } {
    return {
      enable: 'Enable',
      personReference: 'PersonReference',
      prompt: 'Prompt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enable: 'boolean',
      personReference: PersonReferenceConfig,
      prompt: 'string',
    };
  }

  validate() {
    if(this.personReference && typeof (this.personReference as any).validate === 'function') {
      (this.personReference as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

