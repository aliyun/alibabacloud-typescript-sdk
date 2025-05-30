// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateHotwordLibraryShrinkRequest extends $dara.Model {
  /**
   * @example
   * 存放名人的词库
   */
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  hotwordsShrink?: string;
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
      hotwordsShrink: 'Hotwords',
      name: 'Name',
      usageScenario: 'UsageScenario',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      hotwordsShrink: 'string',
      name: 'string',
      usageScenario: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

