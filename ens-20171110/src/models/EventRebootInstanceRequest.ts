// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EventRebootInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * e-9d992570200d86b9126d78aa8c37b54b
   */
  eventId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * immediate
   */
  opsType?: string;
  /**
   * @example
   * 1742452232000
   */
  planTime?: number;
  /**
   * @remarks
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

