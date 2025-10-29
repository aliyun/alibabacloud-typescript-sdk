// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EventRebootInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the system event.
   * 
   * This parameter is required.
   * 
   * @example
   * e-9d992570200d86b9126d78aa8c37b54b
   */
  eventId?: string;
  /**
   * @remarks
   * The type of the O\\&M task. Valid values:
   * 
   * *   immediate
   * *   scheduled
   * 
   * This parameter is required.
   * 
   * @example
   * immediate
   */
  opsType?: string;
  /**
   * @remarks
   * The execution time of the reservation. The timestamp is measured in milliseconds. If the OpsType parameter is set to scheduled, this parameter is required.
   * 
   * @example
   * 1742452232000
   */
  planTime?: number;
  /**
   * @remarks
   * The ID of the resource.
   * 
   * This parameter is required.
   * 
   * @example
   * i-5****
   */
  resourceId?: string;
  static names(): { [key: string]: string } {
    return {
      eventId: 'EventId',
      opsType: 'OpsType',
      planTime: 'PlanTime',
      resourceId: 'ResourceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventId: 'string',
      opsType: 'string',
      planTime: 'number',
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

