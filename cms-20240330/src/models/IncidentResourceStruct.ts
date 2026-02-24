// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { IncidentResourceDetail } from "./IncidentResourceDetail";


export class IncidentResourceStruct extends $dara.Model {
  /**
   * @remarks
   * Description information.
   * 
   * @example
   * Production environment web server.
   */
  description?: string;
  /**
   * @remarks
   * Incident ID.
   * 
   * @example
   * incident-001
   */
  incidentId?: string;
  /**
   * @remarks
   * The unique ID of this resource in the event.
   * 
   * @example
   * res-001
   */
  incidentResourceId?: string;
  /**
   * @remarks
   * Event resource details object.
   */
  resource?: IncidentResourceDetail;
  /**
   * @remarks
   * Source.
   * 
   * @example
   * cloudmonitor
   */
  source?: string;
  /**
   * @remarks
   * Time.
   * 
   * @example
   * 1741234567890
   */
  time?: number;
  /**
   * @remarks
   * User ID.
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

