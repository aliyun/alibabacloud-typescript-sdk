// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeAlarmsForResourcesResponseBodyDatapointsAlarmEscalationsCritical } from "./DescribeAlarmsForResourcesResponseBodyDatapointsAlarmEscalationsCritical";
import { DescribeAlarmsForResourcesResponseBodyDatapointsAlarmEscalationsInfo } from "./DescribeAlarmsForResourcesResponseBodyDatapointsAlarmEscalationsInfo";
import { DescribeAlarmsForResourcesResponseBodyDatapointsAlarmEscalationsWarn } from "./DescribeAlarmsForResourcesResponseBodyDatapointsAlarmEscalationsWarn";


export class DescribeAlarmsForResourcesResponseBodyDatapointsAlarmEscalations extends $dara.Model {
  critical?: DescribeAlarmsForResourcesResponseBodyDatapointsAlarmEscalationsCritical;
  info?: DescribeAlarmsForResourcesResponseBodyDatapointsAlarmEscalationsInfo;
  warn?: DescribeAlarmsForResourcesResponseBodyDatapointsAlarmEscalationsWarn;
  static names(): { [key: string]: string } {
    return {
      critical: 'Critical',
      info: 'Info',
      warn: 'Warn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      critical: DescribeAlarmsForResourcesResponseBodyDatapointsAlarmEscalationsCritical,
      info: DescribeAlarmsForResourcesResponseBodyDatapointsAlarmEscalationsInfo,
      warn: DescribeAlarmsForResourcesResponseBodyDatapointsAlarmEscalationsWarn,
    };
  }

  validate() {
    if(this.critical && typeof (this.critical as any).validate === 'function') {
      (this.critical as any).validate();
    }
    if(this.info && typeof (this.info as any).validate === 'function') {
      (this.info as any).validate();
    }
    if(this.warn && typeof (this.warn as any).validate === 'function') {
      (this.warn as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

