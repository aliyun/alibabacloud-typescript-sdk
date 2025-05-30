// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Hotword } from "./Hotword";


export class CreateHotwordLibraryRequest extends $dara.Model {
  /**
   * @example
   * 存放名人的词库
   */
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  hotwords?: Hotword[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * my_hotwords
   */
  name?: string;
  /**
   * @remarks
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

