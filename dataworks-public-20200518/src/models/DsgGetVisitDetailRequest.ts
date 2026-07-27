// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DsgGetVisitDetailRequest extends $dara.Model {
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
   * The keyword of the table or project name. DataWorks supports fuzzy match. You can enter a keyword to query table or project names that contain the keyword.
   * 
   * @example
   * ods
   */
  keyword?: string;
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
   * The page size.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The project name (ProjectName is easier to understand). Example: dsg_demo_gw.
   * 
   * This parameter is required.
   * 
   * @example
   * dsg_demo_gw
   */
  projectId?: string;
  /**
   * @remarks
   * The name of the sensitive field.
   * 
   * This parameter is required.
   * 
   * @example
   * Name.
   */
  ruleName?: string;
  /**
   * @remarks
   * The sensitivity level. Example: 3.
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
      keyword: 'Keyword',
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
      keyword: 'string',
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

