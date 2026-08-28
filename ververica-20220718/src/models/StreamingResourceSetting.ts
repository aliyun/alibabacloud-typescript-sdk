// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { BasicResourceSetting } from "./BasicResourceSetting";
import { ExpertResourceSetting } from "./ExpertResourceSetting";


export class StreamingResourceSetting extends $dara.Model {
  /**
   * @remarks
   * The resource settings for basic mode.
   */
  basicResourceSetting?: BasicResourceSetting;
  /**
   * @remarks
   * The resource settings for expert mode.
   */
  expertResourceSetting?: ExpertResourceSetting;
  /**
   * @remarks
   * The resource mode used in stream mode. Valid values:
   * - EXPERT: expert mode.
   * - BASIC: basic mode.
   * 
   * @example
   * EXPERT
   */
  resourceSettingMode?: string;
  static names(): { [key: string]: string } {
    return {
      basicResourceSetting: 'basicResourceSetting',
      expertResourceSetting: 'expertResourceSetting',
      resourceSettingMode: 'resourceSettingMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      basicResourceSetting: BasicResourceSetting,
      expertResourceSetting: ExpertResourceSetting,
      resourceSettingMode: 'string',
    };
  }

  validate() {
    if(this.basicResourceSetting && typeof (this.basicResourceSetting as any).validate === 'function') {
      (this.basicResourceSetting as any).validate();
    }
    if(this.expertResourceSetting && typeof (this.expertResourceSetting as any).validate === 'function') {
      (this.expertResourceSetting as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

