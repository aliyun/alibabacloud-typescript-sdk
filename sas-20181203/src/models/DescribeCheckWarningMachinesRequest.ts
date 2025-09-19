// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCheckWarningMachinesRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the check item.
   * 
   * > You can call the [DescribeCheckWarningSummary](~~DescribeCheckWarningSummary~~) operation to query the IDs of check items.
   * 
   * @example
   * 58
   */
  checkId?: number;
  /**
   * @remarks
   * The number of the page to return. Default value: **1**.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The instance ID of the asset that you don\\"t want to query.
   * 
   * @example
   * 2f64e1a0f9316c48*******
   */
  filterUuid?: string;
  /**
   * @remarks
   * The instance ID of the asset.
   * 
   * @example
   * cri-rv4nvbv8iju4****
   */
  instanceId?: string;
  /**
   * @remarks
   * The language of the content within the request and response. Default value: **zh**. Valid values:
   * 
   * *   **zh**: Chinese
   * *   **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The information about the server that you want to query. The value can be the name or the public IP address of the server.
   * 
   * @example
   * 1.2.XX.XX
   */
  remark?: string;
  /**
   * @remarks
   * The Alibaba Cloud account ID of the member in the resource directory.
   * 
   * >  You can call the [DescribeMonitorAccounts](~~DescribeMonitorAccounts~~) operation to obtain the IDs.
   * 
   * @example
   * 1232428423234****
   */
  resourceDirectoryAccountId?: number;
  /**
   * @remarks
   * The ID of the baseline.
   * 
   * > You can call the [DescribeCheckWarningSummary](~~DescribeCheckWarningSummary~~) operation to query the IDs of baselines.
   * 
   * @example
   * 43
   */
  riskId?: number;
  /**
   * @remarks
   * The risk status of the check item. Valid values:
   * 
   * *   **1**: failed
   * *   **3**: passed
   * 
   * @example
   * 1
   */
  status?: number;
  static names(): { [key: string]: string } {
    return {
      checkId: 'CheckId',
      currentPage: 'CurrentPage',
      filterUuid: 'FilterUuid',
      instanceId: 'InstanceId',
      lang: 'Lang',
      pageSize: 'PageSize',
      remark: 'Remark',
      resourceDirectoryAccountId: 'ResourceDirectoryAccountId',
      riskId: 'RiskId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkId: 'number',
      currentPage: 'number',
      filterUuid: 'string',
      instanceId: 'string',
      lang: 'string',
      pageSize: 'number',
      remark: 'string',
      resourceDirectoryAccountId: 'number',
      riskId: 'number',
      status: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

