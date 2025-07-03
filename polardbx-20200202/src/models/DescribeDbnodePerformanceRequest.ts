// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBNodePerformanceRequest extends $dara.Model {
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
   * pxc-*******
   */
  DBInstanceName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * pxc-i-******,pxc-i-*******
   */
  DBNodeIds?: string;
  /**
   * @example
   * master
   */
  DBNodeRole?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2012-06-18T15:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Cpu_Usage,Mem_Usage
   */
  key?: string;
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
   * 2012-06-08T15:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      characterType: 'CharacterType',
      DBInstanceName: 'DBInstanceName',
      DBNodeIds: 'DBNodeIds',
      DBNodeRole: 'DBNodeRole',
      endTime: 'EndTime',
      key: 'Key',
      regionId: 'RegionId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      characterType: 'string',
      DBInstanceName: 'string',
      DBNodeIds: 'string',
      DBNodeRole: 'string',
      endTime: 'string',
      key: 'string',
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

