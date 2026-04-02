// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ApmThresholdConfig extends $dara.Model {
  /**
   * @remarks
   * 告警等级
   * 
   * This parameter is required.
   */
  severity?: string;
  /**
   * @remarks
   * 阈值
   * 
   * This parameter is required.
   */
  threshold?: number;
  static names(): { [key: string]: string } {
    return {
      severity: 'severity',
      threshold: 'threshold',
    };
  }

  static types(): { [key: string]: any } {
    return {
      severity: 'string',
      threshold: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

