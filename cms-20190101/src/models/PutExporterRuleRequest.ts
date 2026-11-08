// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PutExporterRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the export rules.
   * 
   * @example
   * desc_******
   */
  describe?: string;
  /**
   * @remarks
   * The destinations for data export.
   * 
   * This parameter is required.
   */
  dstNames?: string[];
  /**
   * @remarks
   * The name of the metric. >For more information, see [Alibaba Cloud service metrics](https://help.aliyun.com/document_detail/163515.html).
   * 
   * @example
   * CPUUtilization
   */
  metricName?: string;
  /**
   * @remarks
   * The data namespace of the Alibaba Cloud service. For more information, see [Alibaba Cloud service metrics](https://help.aliyun.com/document_detail/163515.html).
   * 
   * @example
   * acs_ecs_dashboard
   */
  namespace?: string;
  regionId?: string;
  /**
   * @remarks
   * The name of the rule.
   * 
   * > If the specified rule name is the same as an existing rule name, the existing rule is modified. Otherwise, a new rule is created.
   * 
   * @example
   * rule1_****
   */
  ruleName?: string;
  /**
   * @remarks
   * The time window for exporting data. Unit: seconds.
   * 
   * > - To export data for multiple time windows, separate the values with commas (,).
   * - Exporting data for a time window of less than 60 seconds is not supported.
   * 
   * @example
   * 60,300
   */
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

