// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCheckWarningsResponseBodyCheckWarnings extends $dara.Model {
  /**
   * @remarks
   * The ID of the check item.
   * 
   * @example
   * 2546
   */
  checkId?: number;
  /**
   * @remarks
   * The ID of the alert that is generated for the baseline check result.
   * 
   * @example
   * 212251441
   */
  checkWarningId?: number;
  /**
   * @remarks
   * The ID of the container.
   * 
   * @example
   * 8de456b00ff0a2009ee8ef7fc59fd0457fa44f20b8282af3e79c2a0e2492****
   */
  containerId?: string;
  /**
   * @remarks
   * The name of the container.
   * 
   * @example
   * /svn-host
   */
  containerName?: string;
  /**
   * @remarks
   * The error message in the check result.
   * 
   * @example
   * ScriptKilledOfCpuHigh
   */
  execErrorMessage?: string;
  /**
   * @remarks
   * Indicates whether fixing is supported. Valid values:
   * 
   * *   **0**: Fixing is not supported.
   * *   **1**: Fixing is supported.
   * 
   * @example
   * 0
   */
  fixStatus?: number;
  /**
   * @remarks
   * The name of the check item.
   * 
   * @example
   * passwordExpire
   */
  item?: string;
  /**
   * @remarks
   * The timestamp of the latest processing of the check item risk of the machine. Unit: milliseconds.
   * 
   * @example
   * 1694692471000
   */
  lastHandleTime?: number;
  /**
   * @remarks
   * The risk level of the risk item. Valid values:
   * 
   * *   **high**
   * *   **medium**
   * *   **low**
   * 
   * @example
   * high
   */
  level?: string;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * ignore
   */
  reason?: string;
  /**
   * @remarks
   * The status of the check item. Valid values:
   * 
   * *   **1**: failed.
   * *   **2**: verifying.
   * *   **3**: passed.
   * *   **5**: expired.
   * *   **6**: ignored.
   * 
   * @example
   * 1
   */
  status?: number;
  /**
   * @remarks
   * The type of the check item.
   * 
   * @example
   * hc.check.type.identity_auth
   */
  type?: string;
  /**
   * @remarks
   * The ID of the server on which the baseline check is performed.
   * 
   * @example
   * d42f938c-d962-48a0-90f9-****
   */
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      checkId: 'CheckId',
      checkWarningId: 'CheckWarningId',
      containerId: 'ContainerId',
      containerName: 'ContainerName',
      execErrorMessage: 'ExecErrorMessage',
      fixStatus: 'FixStatus',
      item: 'Item',
      lastHandleTime: 'LastHandleTime',
      level: 'Level',
      reason: 'Reason',
      status: 'Status',
      type: 'Type',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkId: 'number',
      checkWarningId: 'number',
      containerId: 'string',
      containerName: 'string',
      execErrorMessage: 'string',
      fixStatus: 'number',
      item: 'string',
      lastHandleTime: 'number',
      level: 'string',
      reason: 'string',
      status: 'number',
      type: 'string',
      uuid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCheckWarningsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the check item.
   */
  checkWarnings?: DescribeCheckWarningsResponseBodyCheckWarnings[];
  /**
   * @remarks
   * The number of entries returned on the current page.
   * 
   * @example
   * 10
   */
  count?: number;
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The number of entries returned per page. Default value: **20**.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * 0DFCADBA-7065-42DA-AF17-6868B9C2A8CF
   */
  requestId?: string;
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
      checkWarnings: 'CheckWarnings',
      count: 'Count',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkWarnings: { 'type': 'array', 'itemType': DescribeCheckWarningsResponseBodyCheckWarnings },
      count: 'number',
      currentPage: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.checkWarnings)) {
      $dara.Model.validateArray(this.checkWarnings);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

