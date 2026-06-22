// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { InsightsConfig } from "./InsightsConfig";
import { ReverseImageConfig } from "./ReverseImageConfig";
import { SmartClusterConfig } from "./SmartClusterConfig";


export class DatasetConfig extends $dara.Model {
  /**
   * @remarks
   * The content awareness configuration.
   */
  insights?: InsightsConfig;
  reverseImage?: ReverseImageConfig;
  /**
   * @remarks
   * The intelligent clustering configuration.
   */
  smartCluster?: SmartClusterConfig;
  static names(): { [key: string]: string } {
    return {
      insights: 'Insights',
      reverseImage: 'ReverseImage',
      smartCluster: 'SmartCluster',
    };
  }

  static types(): { [key: string]: any } {
    return {
      insights: InsightsConfig,
      reverseImage: ReverseImageConfig,
      smartCluster: SmartClusterConfig,
    };
  }

  validate() {
    if(this.insights && typeof (this.insights as any).validate === 'function') {
      (this.insights as any).validate();
    }
    if(this.reverseImage && typeof (this.reverseImage as any).validate === 'function') {
      (this.reverseImage as any).validate();
    }
    if(this.smartCluster && typeof (this.smartCluster as any).validate === 'function') {
      (this.smartCluster as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

