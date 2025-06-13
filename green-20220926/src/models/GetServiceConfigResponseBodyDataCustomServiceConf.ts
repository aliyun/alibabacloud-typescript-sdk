// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetServiceConfigResponseBodyDataCustomServiceConfManualMachineConfig } from "./GetServiceConfigResponseBodyDataCustomServiceConfManualMachineConfig";


export class GetServiceConfigResponseBodyDataCustomServiceConf extends $dara.Model {
  keywordFilterLibs?: string[];
  keywordHitLibs?: string[];
  manualMachineConfig?: GetServiceConfigResponseBodyDataCustomServiceConfManualMachineConfig;
  similarTextHitLibs?: string[];
  static names(): { [key: string]: string } {
    return {
      keywordFilterLibs: 'KeywordFilterLibs',
      keywordHitLibs: 'KeywordHitLibs',
      manualMachineConfig: 'ManualMachineConfig',
      similarTextHitLibs: 'SimilarTextHitLibs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keywordFilterLibs: { 'type': 'array', 'itemType': 'string' },
      keywordHitLibs: { 'type': 'array', 'itemType': 'string' },
      manualMachineConfig: GetServiceConfigResponseBodyDataCustomServiceConfManualMachineConfig,
      similarTextHitLibs: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.keywordFilterLibs)) {
      $dara.Model.validateArray(this.keywordFilterLibs);
    }
    if(Array.isArray(this.keywordHitLibs)) {
      $dara.Model.validateArray(this.keywordHitLibs);
    }
    if(this.manualMachineConfig && typeof (this.manualMachineConfig as any).validate === 'function') {
      (this.manualMachineConfig as any).validate();
    }
    if(Array.isArray(this.similarTextHitLibs)) {
      $dara.Model.validateArray(this.similarTextHitLibs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

