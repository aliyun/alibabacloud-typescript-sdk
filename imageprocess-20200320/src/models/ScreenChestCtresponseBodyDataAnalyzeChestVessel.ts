// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ScreenChestCTResponseBodyDataAnalyzeChestVesselAortaInfo } from "./ScreenChestCtresponseBodyDataAnalyzeChestVesselAortaInfo";
import { ScreenChestCTResponseBodyDataAnalyzeChestVesselPulmonaryInfo } from "./ScreenChestCtresponseBodyDataAnalyzeChestVesselPulmonaryInfo";


export class ScreenChestCTResponseBodyDataAnalyzeChestVessel extends $dara.Model {
  aortaInfo?: ScreenChestCTResponseBodyDataAnalyzeChestVesselAortaInfo;
  pulmonaryInfo?: ScreenChestCTResponseBodyDataAnalyzeChestVesselPulmonaryInfo;
  /**
   * @example
   * http://vibktprfx-prod-prod-aic-med-cn-shanghai.oss-cn-shanghai.aliyuncs.com/ct_artery_aa_ph/local_test/2021-07-08/6C4713DF-F548-47DF-A456-5DA1C8334444_result_compressed.tgz?Expires=1625732732&OSSAccessKeyId=LTAI4FoLmvQ9urWXgSR****&Signature=5UKVmLfM7GWllIcPr9a6dKz%2B5h****
   */
  resultURL?: string;
  static names(): { [key: string]: string } {
    return {
      aortaInfo: 'AortaInfo',
      pulmonaryInfo: 'PulmonaryInfo',
      resultURL: 'ResultURL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aortaInfo: ScreenChestCTResponseBodyDataAnalyzeChestVesselAortaInfo,
      pulmonaryInfo: ScreenChestCTResponseBodyDataAnalyzeChestVesselPulmonaryInfo,
      resultURL: 'string',
    };
  }

  validate() {
    if(this.aortaInfo && typeof (this.aortaInfo as any).validate === 'function') {
      (this.aortaInfo as any).validate();
    }
    if(this.pulmonaryInfo && typeof (this.pulmonaryInfo as any).validate === 'function') {
      (this.pulmonaryInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

