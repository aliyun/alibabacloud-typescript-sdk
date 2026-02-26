// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { InsightsConfig } from "./InsightsConfig";


export class DatasetConfig extends $dara.Model {
  insights?: InsightsConfig;
  static names(): { [key: string]: string } {
    return {
      insights: 'Insights',
    };
  }

  static types(): { [key: string]: any } {
    return {
      insights: InsightsConfig,
    };
  }

  validate() {
    if(this.insights && typeof (this.insights as any).validate === 'function') {
      (this.insights as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

