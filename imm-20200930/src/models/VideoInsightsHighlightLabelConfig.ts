// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { InsightsLabel } from "./InsightsLabel";


export class VideoInsightsHighlightLabelConfig extends $dara.Model {
  enable?: boolean;
  labels?: InsightsLabel[];
  static names(): { [key: string]: string } {
    return {
      enable: 'Enable',
      labels: 'Labels',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enable: 'boolean',
      labels: { 'type': 'array', 'itemType': InsightsLabel },
    };
  }

  validate() {
    if(Array.isArray(this.labels)) {
      $dara.Model.validateArray(this.labels);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

