// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PutExporterRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the data export rule.
   * 
   * @example
   * Export CPU metrics
   */
  describe?: string;
  /**
   * @remarks
   * The destination to which the data is exported. Valid values of N: 1 to 20.
   * 
   * This parameter is required.
   * 
   * @example
   * distName1
   */
  dstNames?: string[];
  /**
   * @remarks
   * The name of the metric.
   * 
   * > 
   * 
   * For more information, see [Appendix 1: Metrics](https://help.aliyun.com/document_detail/163515.html).
   * 
   * @example
   * cpu_total
   */
  metricName?: string;
  /**
   * @remarks
   * The namespace of the cloud service.
   * 
   * > For more information, see [Appendix 1: Metrics](https://help.aliyun.com/document_detail/163515.html).
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
   * > If the specified rule exists, the existing rule is modified. Otherwise, a rule is created.
   * 
   * @example
   * MyRuleName
   */
  ruleName?: string;
  /**
   * @remarks
   * The time window of the exported data. Unit: seconds.
   * 
   * > 
   * 
   * *   Separate multiple time windows with commas (,).
   * 
   * *   Data in a time window of less than 60 seconds cannot be exported.
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

