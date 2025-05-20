// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetFullRequestSampleByInstanceIdRequest extends $dara.Model {
  /**
   * @remarks
   * The end of the time range to query. Set this parameter to a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * >  The end time must be later than the start time. The interval between the start time and the end time must be equal to or greater than 1 hour.
   * 
   * This parameter is required.
   * 
   * @example
   * 1660104621000
   */
  end?: number;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * rm-2ze8g2am97624****
   */
  instanceId?: string;
  /**
   * @remarks
   * The role of the PolarDB-X 2.0 node. Valid values:
   * 
   * *   **polarx_cn**: compute node.
   * *   **polarx_en**: data node.
   * 
   * @example
   * polarx_cn
   */
  role?: string;
  /**
   * @remarks
   * The SQL statement ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 651b56fe9418d48edb8fdf0980ec****
   */
  sqlId?: string;
  /**
   * @remarks
   * The beginning of the time range to query. Set this parameter to a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * >  The start time must be within the storage duration of the SQL Explorer feature of the database instance, and can be up to 90 days earlier than the current time.
   * 
   * This parameter is required.
   * 
   * @example
   * 1660097421000
   */
  start?: number;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account that is used to create the database instance.
   * 
   * >  This parameter is optional. The system can automatically obtain the account ID based on the value of InstanceId when you call this operation.
   * 
   * @example
   * 196278346919****
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      end: 'End',
      instanceId: 'InstanceId',
      role: 'Role',
      sqlId: 'SqlId',
      start: 'Start',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      end: 'number',
      instanceId: 'string',
      role: 'string',
      sqlId: 'string',
      start: 'number',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

