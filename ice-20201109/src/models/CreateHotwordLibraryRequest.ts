// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Hotword } from "./Hotword";


export class CreateHotwordLibraryRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the hotword library. The maximum length is 200 characters.
   * 
   * @example
   * A lexicon of celebrity names
   */
  description?: string;
  /**
   * @remarks
   * The list of hotwords. The maximum number of hotwords is 300.
   * 
   * This parameter is required.
   */
  hotwords?: Hotword[];
  /**
   * @remarks
   * The name of the hotword library. The maximum length is 100 characters.
   * 
   * This parameter is required.
   * 
   * @example
   * my_hotwords
   */
  name?: string;
  /**
   * @remarks
   * The scenarios of the hotword library. Valid values:
   * 
   * - ASR: ASR intelligent text recognition.
   * 
   * - StructuredMediaAssets: structured media assets.
   * 
   * - VideoTranslation: video translation.
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

