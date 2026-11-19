// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PutExporterRuleRequest extends $dara.Model {
  describe?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  dstNames?: string[];
  metricName?: string;
  namespace?: string;
  regionId?: string;
  ruleName?: string;
  targetWindows?: string;
  static names(): { [key: string]: string } {
    return {
      describe: 'Describe',
      dstNames: 'DstNames',
      metricName: 'MetricName',
      namespace: 'Namespace',
      regionId: 'RegionId',
      ruleName: 'RuleName',
      targetWindows: 'TargetWindows',
    };
  }

  static types(): { [key: string]: any } {
    return {
      describe: 'string',
      dstNames: { 'type': 'array', 'itemType': 'string' },
      metricName: 'string',
      namespace: 'string',
      regionId: 'string',
      ruleName: 'string',
      targetWindows: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.dstNames)) {
      $dara.Model.validateArray(this.dstNames);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

