// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { InsightsLabel } from "./InsightsLabel";


export class VideoInsightsHighlightLabelConfig extends $dara.Model {
  /**
   * @remarks
   * Specifies whether highlight labels are supported.
   * 
   * @example
   * false
   */
  enable?: boolean;
  /**
   * @remarks
   * The list of labels.
   */
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

