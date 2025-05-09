// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateDIAlarmRuleRequestTriggerConditions extends $dara.Model {
  /**
   * @remarks
   * This parameter is deprecated and replaced by the DdlTypes parameter.
   * 
   * @deprecated
   */
  ddlReportTags?: string[];
  /**
   * @remarks
   * The types of DDL operations for which the alert rule takes effect.
   */
  ddlTypes?: string[];
  /**
   * @remarks
   * The time interval for alert calculation. Unit: minutes.
   * 
   * @example
   * 15
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
   * Warning
   */
  severity?: string;
  /**
   * @remarks
   * The alert threshold.
   * 
   * *   If the alert rule is for task status, you do not need to specify a threshold.
   * *   If the alert rule is for failovers, you must specify the number of failovers.
   * *   If the alert rule is for latency, you must specify the latency duration, in seconds.
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

