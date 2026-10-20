// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EventRedeployInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The system event ID.
   * 
   * This parameter is required.
   * 
   * @example
   * e-d71ff150945b9c02eb6ebc0016328468
   */
  eventId?: string;
  /**
   * @remarks
   * The O\\&M task type. Valid values:
   * 
   * - immediate: Immediate execution.
   * 
   * - scheduled: Scheduled execution.
   * 
   * This parameter is required.
   * 
   * @example
   * immediate
   */
  opsType?: string;
  /**
   * @remarks
   * The scheduled execution time, specified as a timestamp in milliseconds. This parameter is required if \\"OpsType\\" is set to \\"scheduled\\".
   * 
   * @example
   * 1742452232000
   */
  planTime?: number;
  planUtcTime?: string;
  /**
   * @remarks
   * The resource ID.
   * 
   * This parameter is required.
   * 
   * @example
   * i-55qi8m11rr53c4i964md8a00l
   */
  resourceId?: string;
  static names(): { [key: string]: string } {
    return {
      eventId: 'EventId',
      opsType: 'OpsType',
      planTime: 'PlanTime',
      planUtcTime: 'PlanUtcTime',
      resourceId: 'ResourceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventId: 'string',
      opsType: 'string',
      planTime: 'number',
      planUtcTime: 'string',
      resourceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

