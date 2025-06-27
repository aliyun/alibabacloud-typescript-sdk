// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { PreviewGtmRecoveryPlanResponseBodyPreviewsPreviewSwitchInfosSwitchInfo } from "./PreviewGtmRecoveryPlanResponseBodyPreviewsPreviewSwitchInfosSwitchInfo";


export class PreviewGtmRecoveryPlanResponseBodyPreviewsPreviewSwitchInfos extends $dara.Model {
  switchInfo?: PreviewGtmRecoveryPlanResponseBodyPreviewsPreviewSwitchInfosSwitchInfo[];
  static names(): { [key: string]: string } {
    return {
      switchInfo: 'SwitchInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      switchInfo: { 'type': 'array', 'itemType': PreviewGtmRecoveryPlanResponseBodyPreviewsPreviewSwitchInfosSwitchInfo },
    };
  }

  validate() {
    if(Array.isArray(this.switchInfo)) {
      $dara.Model.validateArray(this.switchInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

