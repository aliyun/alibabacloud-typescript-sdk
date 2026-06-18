// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSlowLogRecordsRequest extends $dara.Model {
  /**
   * @remarks
   * The node type.
   * 
   * This parameter is required.
   * 
   * @example
   * polarx_cn
   */
  characterType?: string;
  /**
   * @remarks
   * The instance name.
   * 
   * This parameter is required.
   * 
   * @example
   * pxc-bjxxxxxxxx
   */
  DBInstanceName?: string;
  /**
   * @remarks
   * The database name.
   * 
   * @example
   * testdb
   */
  DBName?: string;
  /**
   * @remarks
   * The node ID. You can specify multiple node IDs separated by commas (`,`). This parameter is required when you query storage nodes.
   * 
   * @example
   * pxc-i-mezcj4ejdz
   */
  DBNodeIds?: string;
  /**
   * @remarks
   * The start time of the query. Specify the time in the YYYY-MM-ddTHH:mmZ format (UTC).
   * 
   * This parameter is required.
   * 
   * @example
   * 2024-11-22T02:22Z
   */
  endTime?: string;
  /**
   * @remarks
   * The page number. Default value: 1.
   * 
   * @example
   * 1
   */
  page?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 100.
   * 
   * Limit: A maximum of 100 entries can be returned at a time.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The start time of the query. Specify the time in the YYYY-MM-ddTHH:mmZ format (UTC).
   * 
   * This parameter is required.
   * 
   * @example
   * 2024-10-09T02:26
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      characterType: 'CharacterType',
      DBInstanceName: 'DBInstanceName',
      DBName: 'DBName',
      DBNodeIds: 'DBNodeIds',
      endTime: 'EndTime',
      page: 'Page',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      characterType: 'string',
      DBInstanceName: 'string',
      DBName: 'string',
      DBNodeIds: 'string',
      endTime: 'string',
      page: 'number',
      pageSize: 'number',
      regionId: 'string',
      startTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

