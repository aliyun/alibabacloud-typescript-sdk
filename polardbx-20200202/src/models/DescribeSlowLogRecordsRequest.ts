// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSlowLogRecordsRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * polarx_cn
   */
  characterType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * pxc-bjxxxxxxxx
   */
  DBInstanceName?: string;
  /**
   * @example
   * testdb
   */
  DBName?: string;
  /**
   * @example
   * pxc-i-mezcj4ejdz
   */
  DBNodeIds?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2024-11-22T02:22Z
   */
  endTime?: string;
  /**
   * @example
   * 1
   */
  page?: number;
  /**
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
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

