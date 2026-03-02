// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { BasicResourceSetting } from "./BasicResourceSetting";
import { ExpertResourceSetting } from "./ExpertResourceSetting";


export class StreamingResourceSetting extends $dara.Model {
  /**
   * @remarks
   * The resource parameters in basic mode.
   */
  basicResourceSetting?: BasicResourceSetting;
  /**
   * @remarks
   * The resource parameters in expert mode.
   */
  expertResourceSetting?: ExpertResourceSetting;
  /**
   * @remarks
   * The resource configuration mode used by a deployment that runs in streaming mode. Valid values:
   * 
   * *   EXPERT
   * *   BASIC
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

