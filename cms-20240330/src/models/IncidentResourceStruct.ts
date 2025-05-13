// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { IncidentResourceDetail } from "./IncidentResourceDetail";


export class IncidentResourceStruct extends $dara.Model {
  description?: string;
  incidentId?: string;
  incidentResourceId?: string;
  resource?: IncidentResourceDetail;
  source?: string;
  time?: number;
  userId?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      incidentId: 'incidentId',
      incidentResourceId: 'incidentResourceId',
      resource: 'resource',
      source: 'source',
      time: 'time',
      userId: 'userId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      incidentId: 'string',
      incidentResourceId: 'string',
      resource: IncidentResourceDetail,
      source: 'string',
      time: 'number',
      userId: 'number',
    };
  }

  validate() {
    if(this.resource && typeof (this.resource as any).validate === 'function') {
      (this.resource as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

