// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Incident extends $dara.Model {
  actionTime?: number;
  alertCount?: number;
  endTime?: number;
  groupingData?: { [key: string]: any };
  groupingId?: string;
  groupingKey?: string;
  incidentId?: string;
  incidentStatus?: string;
  severity?: string;
  startTime?: number;
  strategyUuid?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      actionTime: 'ActionTime',
      alertCount: 'AlertCount',
      endTime: 'EndTime',
      groupingData: 'GroupingData',
      groupingId: 'GroupingId',
      groupingKey: 'GroupingKey',
      incidentId: 'IncidentId',
      incidentStatus: 'IncidentStatus',
      severity: 'Severity',
      startTime: 'StartTime',
      strategyUuid: 'StrategyUuid',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionTime: 'number',
      alertCount: 'number',
      endTime: 'number',
      groupingData: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      groupingId: 'string',
      groupingKey: 'string',
      incidentId: 'string',
      incidentStatus: 'string',
      severity: 'string',
      startTime: 'number',
      strategyUuid: 'string',
      userId: 'string',
    };
  }

  validate() {
    if(this.groupingData) {
      $dara.Model.validateMap(this.groupingData);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

