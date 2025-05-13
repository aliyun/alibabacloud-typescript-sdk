// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class IncidentEventStruct extends $dara.Model {
  autoRecoverTime?: number;
  content?: string;
  count?: number;
  dimension?: { [key: string]: string };
  groupBy?: { [key: string]: string };
  incidentEventId?: string;
  incidentId?: string;
  lastTime?: number;
  recoverTime?: number;
  resource?: { [key: string]: string };
  status?: number;
  time?: string;
  title?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      autoRecoverTime: 'autoRecoverTime',
      content: 'content',
      count: 'count',
      dimension: 'dimension',
      groupBy: 'groupBy',
      incidentEventId: 'incidentEventId',
      incidentId: 'incidentId',
      lastTime: 'lastTime',
      recoverTime: 'recoverTime',
      resource: 'resource',
      status: 'status',
      time: 'time',
      title: 'title',
      userId: 'userId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoRecoverTime: 'number',
      content: 'string',
      count: 'number',
      dimension: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      groupBy: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      incidentEventId: 'string',
      incidentId: 'string',
      lastTime: 'number',
      recoverTime: 'number',
      resource: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      status: 'number',
      time: 'string',
      title: 'string',
      userId: 'string',
    };
  }

  validate() {
    if(this.dimension) {
      $dara.Model.validateMap(this.dimension);
    }
    if(this.groupBy) {
      $dara.Model.validateMap(this.groupBy);
    }
    if(this.resource) {
      $dara.Model.validateMap(this.resource);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

