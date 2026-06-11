// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ApmCompositeCompareConfig } from "./ApmCompositeCompareConfig";
import { ApmThresholdConfig } from "./ApmThresholdConfig";


export class ConditionConfigUnified extends $dara.Model {
  /**
   * @remarks
   * The aggregation method for metric data points over the evaluation period. Valid values include `AVG`, `SUM`, and `MAX`.
   */
  aggregate?: string;
  /**
   * @remarks
   * A list of composite comparison configurations for APM alerts. Each item is an `ApmCompositeCompareConfig` object.
   */
  compareList?: ApmCompositeCompareConfig[];
  /**
   * @remarks
   * The number of seconds a condition must be true before triggering an alert.
   */
  durationSecs?: number;
  /**
   * @remarks
   * The comparison operator used to evaluate the metric against the threshold.
   */
  operator?: string;
  /**
   * @remarks
   * The logical relationship between multiple conditions. Valid values are `AND` and `OR`.
   */
  relation?: string;
  /**
   * @remarks
   * The alert severity. Valid values are `CRITICAL`, `WARNING`, and `INFO`.
   */
  severity?: string;
  /**
   * @remarks
   * The value against which the metric is evaluated to trigger an alert.
   */
  threshold?: number;
  /**
   * @remarks
   * A list of threshold configurations for Application Performance Monitoring (APM) alerts. Each item is an `ApmThresholdConfig` object.
   */
  thresholdList?: ApmThresholdConfig[];
  /**
   * @remarks
   * The type of the alert condition.
   * 
   * This parameter is required.
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      aggregate: 'aggregate',
      compareList: 'compareList',
      durationSecs: 'durationSecs',
      operator: 'operator',
      relation: 'relation',
      severity: 'severity',
      threshold: 'threshold',
      thresholdList: 'thresholdList',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggregate: 'string',
      compareList: { 'type': 'array', 'itemType': ApmCompositeCompareConfig },
      durationSecs: 'number',
      operator: 'string',
      relation: 'string',
      severity: 'string',
      threshold: 'number',
      thresholdList: { 'type': 'array', 'itemType': ApmThresholdConfig },
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.compareList)) {
      $dara.Model.validateArray(this.compareList);
    }
    if(Array.isArray(this.thresholdList)) {
      $dara.Model.validateArray(this.thresholdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

