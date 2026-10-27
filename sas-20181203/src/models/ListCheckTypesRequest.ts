// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCheckTypesRequest extends $dara.Model {
  /**
   * @remarks
   * The page number. Default value: **1**.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The language of the content within the request and response. Default value: **zh**. Valid values:
   * 
   * *   **zh**: Chinese
   * *   **en**: English
   * 
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * The number of entries per page. Default value: 20. If you leave this parameter empty, 20 entries are returned per page.
   * 
   * >  We recommend that you do not leave this parameter empty.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the baseline.
   * 
   * >  You can call the [DescribeCheckWarningSummary](https://help.aliyun.com/document_detail/116179.html) operation to query the IDs of baselines.
   * 
   * @example
   * 34
   */
  riskId?: number;
  /**
   * @remarks
   * Whether to query the check item list. The default value is false. Valid values:
   * 
   * - **false**: Not Query
   * - **true**: Query
   * 
   * @example
   * false
   */
  showChecks?: boolean;
  /**
   * @remarks
   * The data source. Default value: **default**. Valid values:
   * 
   * *   **agentless**: The check items of baselines for agentless detection.
   * *   **default**: The check items of baselines for hosts.
   * 
   * @example
   * agentless
   */
  source?: string;
  /**
   * @remarks
   * The UUID of the server.
   * 
   * >  You can call the [DescribeCloudCenterInstances](~~DescribeCloudCenterInstances~~) operation to query the UUIDs of servers.
   * 
   * @example
   * 293b07cb-db2d-4f39-941f-b2e4abb8****
   */
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      lang: 'Lang',
      pageSize: 'PageSize',
      riskId: 'RiskId',
      showChecks: 'ShowChecks',
      source: 'Source',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      lang: 'string',
      pageSize: 'number',
      riskId: 'number',
      showChecks: 'boolean',
      source: 'string',
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

