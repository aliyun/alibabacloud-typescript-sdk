// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Hotword } from "./Hotword";


export class CreateHotwordLibraryRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the hotword library. It can be up to 200 characters in length.
   * 
   * @example
   * 存放名人的词库
   */
  description?: string;
  /**
   * @remarks
   * The hotword list. You can add up to 300 hotword entries to a single library.
   * 
   * This parameter is required.
   */
  hotwords?: Hotword[];
  /**
   * @remarks
   * The name of the hotword library. It can be up to 100 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * my_hotwords
   */
  name?: string;
  /**
   * @remarks
   * The usage scenario of the hotword library. Valid values:
   * 
   * · ASR: Automatic Speech Recognition
   * 
   * · StructuredMediaAssets: structured media analysis
   * 
   * · VideoTranslation: Video translation.
   * 
   * This field cannot be modified after the hotword library is created.
   * 
   * This parameter is required.
   * 
   * @example
   * ASR
   */
  usageScenario?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      hotwords: 'Hotwords',
      name: 'Name',
      usageScenario: 'UsageScenario',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      hotwords: { 'type': 'array', 'itemType': Hotword },
      name: 'string',
      usageScenario: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.hotwords)) {
      $dara.Model.validateArray(this.hotwords);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

