// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeAlarmsResponseBodyDatapointsAlarmEscalationsCritical } from "./DescribeAlarmsResponseBodyDatapointsAlarmEscalationsCritical";
import { DescribeAlarmsResponseBodyDatapointsAlarmEscalationsInfo } from "./DescribeAlarmsResponseBodyDatapointsAlarmEscalationsInfo";
import { DescribeAlarmsResponseBodyDatapointsAlarmEscalationsWarn } from "./DescribeAlarmsResponseBodyDatapointsAlarmEscalationsWarn";


export class DescribeAlarmsResponseBodyDatapointsAlarmEscalations extends $dara.Model {
  critical?: DescribeAlarmsResponseBodyDatapointsAlarmEscalationsCritical;
  info?: DescribeAlarmsResponseBodyDatapointsAlarmEscalationsInfo;
  warn?: DescribeAlarmsResponseBodyDatapointsAlarmEscalationsWarn;
  static names(): { [key: string]: string } {
    return {
      critical: 'Critical',
      info: 'Info',
      warn: 'Warn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      critical: DescribeAlarmsResponseBodyDatapointsAlarmEscalationsCritical,
      info: DescribeAlarmsResponseBodyDatapointsAlarmEscalationsInfo,
      warn: DescribeAlarmsResponseBodyDatapointsAlarmEscalationsWarn,
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

