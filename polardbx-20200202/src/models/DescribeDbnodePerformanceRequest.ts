// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBNodePerformanceRequest extends $dara.Model {
  /**
   * @remarks
   * The node type. Valid values: polarx_cn, polarx_dn, polarx_cdc, polarx_gms, and polarx_columnar.
   * 
   * This parameter is required.
   * 
   * @example
   * polarx_cn
   */
  characterType?: string;
  /**
   * @remarks
   * The name of the PolarDB-X instance.
   * 
   * This parameter is required.
   * 
   * @example
   * pxc-*******
   */
  DBInstanceName?: string;
  /**
   * @remarks
   * The node names. Separate multiple names with commas (,). You can specify up to 10 CDC nodes or compute nodes at a time, and up to 1 data node at a time.
   * 
   * This parameter is required.
   * 
   * @example
   * pxc-i-******,pxc-i-*******
   */
  DBNodeIds?: string;
  /**
   * @remarks
   * The node role. Valid values:
   * - master: primary node.
   * - slave: secondary node. Applies to DN and GMS nodes.
   * - standby: secondary node. Applies to CN nodes.
   * 
   * @example
   * master
   */
  DBNodeRole?: string;
  /**
   * @remarks
   * The end time of the query. Format: YYYY-MM-ddTHH:mmZ (UTC).
   * 
   * This parameter is required.
   * 
   * @example
   * 2012-06-18T15:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The metric names. Separate multiple names with commas (,). You can specify up to 6 metrics. For more information, see [Performance metrics](https://help.aliyun.com/document_detail/332726.html).
   * 
   * This parameter is required.
   * 
   * @example
   * Cpu_Usage,Mem_Usage
   */
  key?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The start time of the query. Format: YYYY-MM-ddTHH:mmZ (UTC).
   * 
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

