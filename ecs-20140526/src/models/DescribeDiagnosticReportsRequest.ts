// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDiagnosticReportsRequest extends $dara.Model {
  /**
   * @remarks
   * The number of entries per page. Valid values: 1 to 100.
   * 
   * Default value:
   * 
   * *   If this parameter is left empty, the default value is 10.
   * *   If you set this parameter to a value that is greater than 100, the default value is 100.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token that is used in the request to retrieve a new page of results. You do not need to specify this parameter for the first request. You must specify the token that is obtained from the previous query as the value of `NextToken`.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a4883
   */
  nextToken?: string;
  /**
   * @remarks
   * The region ID. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The IDs of diagnostic reports.
   */
  reportIds?: string[];
  /**
   * @remarks
   * The IDs of resources. You can specify up to 100 resource IDs.
   */
  resourceIds?: string[];
  /**
   * @remarks
   * The severity level of the diagnostic report. Valid values:
   * 
   * *   Unknown: The diagnostic did not start, failed to run, or unexpectedly exited without a diagnosis.
   * *   Normal: No exceptions were detected.
   * *   Info: Diagnostic information was recorded and may be related to exceptions.
   * *   Warn: Diagnostic information was recorded and may indicate exceptions.
   * *   Critical: Critical exceptions were detected.
   * 
   * @example
   * Normal
   */
  severity?: string;
  /**
   * @remarks
   * The status of the diagnostic report. Valid values:
   * 
   * *   InProgress
   * *   Failed
   * *   Finished
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

