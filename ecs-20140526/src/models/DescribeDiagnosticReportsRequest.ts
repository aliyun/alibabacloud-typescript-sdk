// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDiagnosticReportsRequest extends $dara.Model {
  /**
   * @remarks
   * The number of entries per page for a paged query. Maximum value: 100.
   * 
   * Default value:
   * 
   * - If this parameter is not specified, the default value is 10.
   * - If the specified value is greater than 100, the default value is 100.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token. Set this parameter to the `NextToken` value returned in the previous call. You do not need to set this parameter for the first request.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a4883
   */
  nextToken?: string;
  /**
   * @remarks
   * The region ID. You can call [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The list of diagnostic report IDs.
   */
  reportIds?: string[];
  /**
   * @remarks
   * The list of resource IDs. A maximum of 100 IDs are supported.
   */
  resourceIds?: string[];
  /**
   * @remarks
   * The severity level. Valid values:
   * 
   * - Unknown: The initial state, which indicates that the diagnosis has not started or the diagnosis process exited unexpectedly. No diagnostic conclusion is available.
   * - Normal: The diagnosis is normal. No issues are found.
   * - Info: Related information is available and may be associated with exceptions.
   * - Warn: Related information is available and may cause exceptions.
   * - Critical: Critical exceptions exist.
   * 
   * @example
   * Normal
   */
  severity?: string;
  /**
   * @remarks
   * The report status. Valid values:
   * 
   * - InProgress: The diagnosis is in progress.
   * - Failed: The diagnosis failed.
   * - Finished: The diagnosis is complete.
   * 
   * @example
   * Finished
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      regionId: 'RegionId',
      reportIds: 'ReportIds',
      resourceIds: 'ResourceIds',
      severity: 'Severity',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      regionId: 'string',
      reportIds: { 'type': 'array', 'itemType': 'string' },
      resourceIds: { 'type': 'array', 'itemType': 'string' },
      severity: 'string',
      status: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.reportIds)) {
      $dara.Model.validateArray(this.reportIds);
    }
    if(Array.isArray(this.resourceIds)) {
      $dara.Model.validateArray(this.resourceIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

