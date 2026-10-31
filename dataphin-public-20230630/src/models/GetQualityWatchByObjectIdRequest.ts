// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetQualityWatchByObjectIdRequest extends $dara.Model {
  /**
   * @remarks
   * The tenant ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  /**
   * @remarks
   * The ID of the operator.
   * 
   * @example
   * 30001011
   */
  opUserId?: string;
  /**
   * @remarks
   * The ID of the object, such as the table ID, data source ID, or metric ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cc
   */
  watchObjectId?: string;
  /**
   * @remarks
   * The monitored object type. Valid values:
   * - TABLE: Dataphin table.
   * - DATASOURCE_TABLE: Global table.
   * - DATASOURCE: Data source.
   * - INDEX: Metric.
   * - REALTIME_LOGICAL_TABLE: Real-time metatable.
   * 
   * This parameter is required.
   * 
   * @example
   * TABLE
   */
  watchType?: string;
  static names(): { [key: string]: string } {
    return {
      opTenantId: 'OpTenantId',
      opUserId: 'OpUserId',
      watchObjectId: 'WatchObjectId',
      watchType: 'WatchType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      opTenantId: 'number',
      opUserId: 'string',
      watchObjectId: 'string',
      watchType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

