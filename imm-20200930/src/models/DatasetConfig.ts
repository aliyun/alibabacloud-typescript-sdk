// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { InsightsConfig } from "./InsightsConfig";
import { SmartClusterConfig } from "./SmartClusterConfig";


export class DatasetConfig extends $dara.Model {
  insights?: InsightsConfig;
  smartCluster?: SmartClusterConfig;
  static names(): { [key: string]: string } {
    return {
      insights: 'Insights',
      smartCluster: 'SmartCluster',
    };
  }

  static types(): { [key: string]: any } {
    return {
      insights: InsightsConfig,
      smartCluster: SmartClusterConfig,
    };
  }

  validate() {
    if(this.insights && typeof (this.insights as any).validate === 'function') {
      (this.insights as any).validate();
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

