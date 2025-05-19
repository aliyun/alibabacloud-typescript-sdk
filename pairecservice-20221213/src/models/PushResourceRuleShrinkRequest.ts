// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PushResourceRuleShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  metricInfoShrink?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      metricInfoShrink: 'MetricInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      metricInfoShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

