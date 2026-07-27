// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DsgGetVisitStatRequest extends $dara.Model {
  /**
   * @remarks
   * The start time in the format of "2026-06-30 03:59:59".
   * 
   * This parameter is required.
   * 
   * @example
   * 2026-06-30 03:59:59
   */
  beginTime?: string;
  /**
   * @remarks
   * The end time in the format of "2026-06-30 23:59:59".
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
   * The node ID. You can call the [ListNodes](https://help.aliyun.com/document_detail/173979.html) operation to query the node ID.
   * 
   * @example
   * d0c72253-8eea-435b-91fc-163a90a54b33
   */
  nodeId?: string;
  /**
   * @remarks
   * The page number. Minimum value: 1.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 10. Maximum value: 100.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The name of the project space. Example value: dsg_demo_gw.
   * 
   * @example
   * dsg_demo_gw
   */
  projectId?: string;
  /**
   * @remarks
   * The name of the sensitive field.
   * 
   * @example
   * Name.
   */
  ruleName?: string;
  /**
   * @remarks
   * The classification level. Example value: 3.
   * 
   * @example
   * 3
   */
  sensLevel?: string;
  static names(): { [key: string]: string } {
    return {
      beginTime: 'BeginTime',
      endTime: 'EndTime',
      engineName: 'EngineName',
      nodeId: 'NodeId',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      projectId: 'ProjectId',
      ruleName: 'RuleName',
      sensLevel: 'SensLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beginTime: 'string',
      endTime: 'string',
      engineName: 'string',
      nodeId: 'string',
      pageNo: 'number',
      pageSize: 'number',
      projectId: 'string',
      ruleName: 'string',
      sensLevel: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

