// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { InsightsLabel } from "./InsightsLabel";


export class VideoInsightsUserDefinedLabelConfig extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable custom labels.
   * 
   * @example
   * false
   */
  enable?: boolean;
  /**
   * @remarks
   * The list of custom labels.
   */
  labels?: InsightsLabel[];
  /**
   * @remarks
   * The custom label matching mode. The SDK passes this as an optional string.
   * 
   * @example
   * Enhanced
   */
  mode?: string;
  static names(): { [key: string]: string } {
    return {
      enable: 'Enable',
      labels: 'Labels',
      mode: 'Mode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enable: 'boolean',
      labels: { 'type': 'array', 'itemType': InsightsLabel },
      mode: 'string',
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

