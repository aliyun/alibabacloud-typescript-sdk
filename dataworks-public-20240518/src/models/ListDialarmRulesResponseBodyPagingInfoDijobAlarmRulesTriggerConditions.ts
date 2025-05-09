// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDIAlarmRulesResponseBodyPagingInfoDIJobAlarmRulesTriggerConditions extends $dara.Model {
  /**
   * @remarks
   * This parameter is deprecated and replaced by the DdlTypes parameter.
   * 
   * @deprecated
   */
  ddlReportTags?: string[];
  /**
   * @remarks
   * The types of DDL operations for which the alert rule takes effect. This parameter is returned only if the MetricType parameter is set to DdlReport.
   */
  ddlTypes?: string[];
  /**
   * @remarks
   * The time interval for alert calculation. Unit: minutes.
   * 
   * @example
   * 1
   */
  duration?: number;
  /**
   * @remarks
   * The severity level. Valid values:
   * 
   * *   Warning
   * *   Critical
   * 
   * @example
   * Critical
   */
  severity?: string;
  /**
   * @remarks
   * The alert threshold.
   * 
   * *   If the alert rule is for task status, no threshold is used.
   * *   If the alert rule is for failovers, the threshold is the number of failovers.
   * *   If the alert rule is for latency, the threshold is the latency duration, in seconds.
   * 
   * @example
   * 5
   */
  threshold?: number;
  static names(): { [key: string]: string } {
    return {
      ddlReportTags: 'DdlReportTags',
      ddlTypes: 'DdlTypes',
      duration: 'Duration',
      severity: 'Severity',
      threshold: 'Threshold',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ddlReportTags: { 'type': 'array', 'itemType': 'string' },
      ddlTypes: { 'type': 'array', 'itemType': 'string' },
      duration: 'number',
      severity: 'string',
      threshold: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.ddlReportTags)) {
      $dara.Model.validateArray(this.ddlReportTags);
    }
    if(Array.isArray(this.ddlTypes)) {
      $dara.Model.validateArray(this.ddlTypes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

