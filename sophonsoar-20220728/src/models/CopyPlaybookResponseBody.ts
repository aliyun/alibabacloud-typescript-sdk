// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CopyPlaybookResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The status of the playbook. Valid values:
   * 
   * *   1: enabled.
   * *   0: disabled.
   * 
   * @example
   * 1
   */
  active?: number;
  /**
   * @remarks
   * The description of the playbook.
   * 
   * @example
   * This is a action of processing for WAF
   */
  description?: string;
  /**
   * @remarks
   * The name of the new playbook.
   * 
   * @example
   * 11111
   */
  displayName?: string;
  /**
   * @remarks
   * The number of playbook execution failures.
   * 
   * @example
   * 1
   */
  failNum?: number;
  /**
   * @remarks
   * The failure rate of playbook execution.
   * 
   * @example
   * 0.5
   */
  failRate?: number;
  /**
   * @remarks
   * The time when the playbook was created. The value is a 13-digit timestamp.
   * 
   * @example
   * 1655951601000
   */
  gmtCreate?: number;
  /**
   * @remarks
   * The time when the playbook was modified. The value is a 13-digit timestamp.
   * 
   * @example
   * 1638270967000
   */
  gmtModified?: number;
  /**
   * @remarks
   * The number of historical versions of the playbook.
   * 
   * @example
   * 1
   */
  historyMd5?: number;
  /**
   * @remarks
   * The input parameters of the playbook.
   * 
   * @example
   * [{\\"name\\":\\"1\\",\\"dataType\\":\\"String\\",\\"required\\":false,\\"isArray\\":false,\\"example\\":\\"\\",\\"description\\":\\"\\",\\"id\\":0,\\"typeName\\":\\"String\\",\\"dataClass\\":\\"normal\\"}]
   */
  inputParams?: string;
  /**
   * @remarks
   * The time when the playbook was last run. The value is a 13-digit timestamp.
   * 
   * @example
   * 1725258397847
   */
  lastRuntime?: number;
  /**
   * @remarks
   * The online version MD5 of the playbook.
   * 
   * @example
   * 037046****1b00c4717963818ccbf2xx
   */
  logicReleaseTaskflowMd5?: string;
  /**
   * @remarks
   * The output parameters of the playbook.
   * 
   * @example
   * []
   */
  outputParams?: string;
  /**
   * @remarks
   * The type of the playbook. Valid values:
   * 
   * *   preset: predefined playbook.
   * *   user: custom playbook.
   * 
   * @example
   * user
   */
  ownType?: string;
  /**
   * @remarks
   * The permission to operate the playbook. Valid values:
   * 
   * *   1: view.
   * *   2: edit.
   * 
   * @example
   * 1
   */
  permission?: number;
  /**
   * @remarks
   * The status of the playbook.
   * 
   * @example
   * 1
   */
  playbookStatus?: number;
  /**
   * @remarks
   * The UUID of the new playbook.
   * 
   * @example
   * 9e38111e-9794-4784-9ca8-xxxxxxx
   */
  playbookUuid?: string;
  /**
   * @remarks
   * The number of successful playbook executions.
   * 
   * @example
   * 1
   */
  succNum?: number;
  /**
   * @remarks
   * The ID of the user to which the playbook belongs.
   * 
   * @example
   * 13760*****8718726
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      active: 'Active',
      description: 'Description',
      displayName: 'DisplayName',
      failNum: 'FailNum',
      failRate: 'FailRate',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      historyMd5: 'HistoryMd5',
      inputParams: 'InputParams',
      lastRuntime: 'LastRuntime',
      logicReleaseTaskflowMd5: 'LogicReleaseTaskflowMd5',
      outputParams: 'OutputParams',
      ownType: 'OwnType',
      permission: 'Permission',
      playbookStatus: 'PlaybookStatus',
      playbookUuid: 'PlaybookUuid',
      succNum: 'SuccNum',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      active: 'number',
      description: 'string',
      displayName: 'string',
      failNum: 'number',
      failRate: 'number',
      gmtCreate: 'number',
      gmtModified: 'number',
      historyMd5: 'number',
      inputParams: 'string',
      lastRuntime: 'number',
      logicReleaseTaskflowMd5: 'string',
      outputParams: 'string',
      ownType: 'string',
      permission: 'number',
      playbookStatus: 'number',
      playbookUuid: 'string',
      succNum: 'number',
      tenantId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CopyPlaybookResponseBodyPage extends $dara.Model {
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CopyPlaybookResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response parameters.
   */
  data?: CopyPlaybookResponseBodyData;
  /**
   * @remarks
   * The pagination information.
   */
  page?: CopyPlaybookResponseBodyPage;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 2EC05B06-****-5F3E-****-3B1FAD76087A
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      page: 'Page',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: CopyPlaybookResponseBodyData,
      page: CopyPlaybookResponseBodyPage,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    if(this.page && typeof (this.page as any).validate === 'function') {
      (this.page as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

