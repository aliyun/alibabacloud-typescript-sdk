// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { IncidentResourceDetail } from "./IncidentResourceDetail";


export class IncidentResourceStruct extends $dara.Model {
  /**
   * @remarks
   * The description.
   * 
   * @example
   * 生产环境 Web 服务器
   */
  description?: string;
  /**
   * @remarks
   * The event ID.
   * 
   * @example
   * incident-001
   */
  incidentId?: string;
  /**
   * @remarks
   * The unique ID of the resource in the event.
   * 
   * @example
   * res-001
   */
  incidentResourceId?: string;
  /**
   * @remarks
   * The details object for the event resource.
   */
  resource?: IncidentResourceDetail;
  /**
   * @remarks
   * The source.
   * 
   * @example
   * cloudmonitor
   */
  source?: string;
  /**
   * @remarks
   * The timestamp.
   * 
   * @example
   * 1741234567890
   */
  time?: number;
  /**
   * @remarks
   * The user ID.
   * 
   * @example
   * user-12345
   */
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

