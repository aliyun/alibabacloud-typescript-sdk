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
   * The object ID, such as a table ID, datasource ID, or metric ID.
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
   * - DATASOURCE_TABLE: global table.
   * - DATASOURCE: datasource.
   * - INDEX: metric.
   * - REALTIME_LOGICAL_TABLE: real-time meta table.
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
      watchObjectId: 'WatchObjectId',
      watchType: 'WatchType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      opTenantId: 'number',
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

