// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DsgQueryDetailsRequest extends $dara.Model {
  /**
   * @remarks
   * The start time of the query range. Example: "2026-06-26 00:00:00".
   * 
   * This parameter is required.
   * 
   * @example
   * 2026-06-26 00:00:00
   */
  beginTime?: string;
  /**
   * @remarks
   * The end time of the query range. Example: "2026-06-30 23:59:59".
   * 
   * This parameter is required.
   * 
   * @example
   * 2026-06-30 23:59:59
   */
  endTime?: string;
  /**
   * @remarks
   * The engine type. Valid values:
   * - ODPS.ODPS
   * - EMR
   * - HOLO.POSTGRES
   * 
   * This parameter is required.
   * 
   * @example
   * ODPS.ODPS
   */
  engineName?: string;
  /**
   * @remarks
   * The internal IP address of the ECU.
   * 
   * @example
   * 203.107.80.20
   */
  ip?: string;
  /**
   * @remarks
   * The region to which the IP address belongs. Example: China-Beijing-Beijing, or internal IP address.
   * 
   * @example
   * China-Beijing-Beijing.
   */
  ipAare?: string;
  /**
   * @remarks
   * The node ID.
   * 
   * @example
   * 123541234
   */
  nodeId?: string;
  /**
   * @remarks
   * The page number. Minimum value: 1.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of entries per page. Maximum value: 1000.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The project workspace name (essentially ProjectName). Example: dsg_demo_gw.
   * 
   * @example
   * dsg_demo_gw
   */
  projectId?: string;
  /**
   * @remarks
   * The minimum value of the export volume.
   * 
   * @example
   * 1
   */
  rows?: number;
  /**
   * @remarks
   * The type of triggered sensitive rule. Example: Name.
   * 
   * @example
   * Name.
   */
  ruleType?: string;
  /**
   * @remarks
   * The classification level. Example: 3.
   * 
   * @example
   * 3
   */
  sensLevel?: string;
  /**
   * @remarks
   * The operator account. Example: dsg_test.
   * 
   * @example
   * dsg_test
   */
  user?: string;
  static names(): { [key: string]: string } {
    return {
      beginTime: 'BeginTime',
      endTime: 'EndTime',
      engineName: 'EngineName',
      ip: 'Ip',
      ipAare: 'IpAare',
      nodeId: 'NodeId',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      projectId: 'ProjectId',
      rows: 'Rows',
      ruleType: 'RuleType',
      sensLevel: 'SensLevel',
      user: 'User',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beginTime: 'string',
      endTime: 'string',
      engineName: 'string',
      ip: 'string',
      ipAare: 'string',
      nodeId: 'string',
      pageNo: 'number',
      pageSize: 'number',
      projectId: 'string',
      rows: 'number',
      ruleType: 'string',
      sensLevel: 'string',
      user: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

