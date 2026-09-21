// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetFullRequestSampleByInstanceIdRequest extends $dara.Model {
  /**
   * @remarks
   * The end of the time range to query. Specify a UNIX timestamp in milliseconds.
   * 
   * > The end time must be later than the start time, and the interval between the start time and end time cannot be less than 1 hour.
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
   * The node information of a PolarDB-X 2.0 database instance.
   * 
   * - **polarx_cn**: compute node.
   * - **polarx_en**: data node.
   * 
   * @example
   * polarx_cn
   */
  role?: string;
  /**
   * @remarks
   * SQL ID。
   * 
   * This parameter is required.
   * 
   * @example
   * 651b56fe9418d48edb8fdf0980ec****
   */
  sqlId?: string;
  /**
   * @remarks
   * The beginning of the time range to query. Specify a UNIX timestamp in milliseconds.
   * 
   * > The start time must be within the storage duration of SQL Explorer for the database instance and cannot be earlier than 90 days before the current time.
   * 
   * This parameter is required.
   * 
   * @example
   * 1660097421000
   */
  start?: number;
  static names(): { [key: string]: string } {
    return {
      end: 'End',
      instanceId: 'InstanceId',
      role: 'Role',
      sqlId: 'SqlId',
      start: 'Start',
    };
  }

  static types(): { [key: string]: any } {
    return {
      end: 'number',
      instanceId: 'string',
      role: 'string',
      sqlId: 'string',
      start: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

