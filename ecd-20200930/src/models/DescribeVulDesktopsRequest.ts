// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVulDesktopsRequest extends $dara.Model {
  /**
   * @remarks
   * The connection status of the cloud desktop.
   * 
   * @example
   * Connected
   */
  connectionStatus?: string;
  /**
   * @remarks
   * The vulnerability ID.
   * 
   * @example
   * CVE-2026-43284
   */
  cveId?: string;
  /**
   * @remarks
   * The list of cloud desktop IDs.
   */
  desktopIdList?: string[];
  /**
   * @remarks
   * The running status of the cloud desktop.
   * 
   * @example
   * Running
   */
  desktopStatus?: string;
  /**
   * @remarks
   * Specifies whether to include the patch update results.
   * 
   * @example
   * false
   */
  includeFixResult?: boolean;
  /**
   * @remarks
   * Specifies whether to include cloud desktops that have scheduled patch tasks.
   */
  includePatchTask?: boolean;
  /**
   * @remarks
   * The language of the response.
   * 
   * @example
   * ch
   */
  language?: string;
  /**
   * @remarks
   * The number of entries per page for a paging query.
   * Maximum value: 100.
   * Default value: 10.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The token for the next page.
   * 
   * @example
   * AAAAAV3MpHK1AP0pfERHZN5pu6nmB7qrRFJ8vmttjxPL****
   */
  nextToken?: string;
  /**
   * @remarks
   * Specifies whether to include only cloud desktops for which fix tasks have been executed in the current month.
   * 
   * @example
   * false
   */
  onlyCurrentMonthFixAttempted?: boolean;
  /**
   * @remarks
   * The page number of the current page for a paging query.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The page size for a paging query.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The patch ID.
   * 
   * @example
   * KB5082063
   */
  patchId?: string;
  /**
   * @remarks
   * The region ID. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/196646.html) operation to query the list of regions supported by WUYING Workspace.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-f3s3dgt8dtb0vlqc8
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The search region ID. This parameter is used to filter cloud desktop information for a specified region.
   * 
   * @example
   * cn-shanghai
   */
  searchRegionId?: string;
  /**
   * @remarks
   * The list of vulnerability status details.
   */
  statusList?: string[];
  /**
   * @remarks
   * The security level of the intrusion prevention event. Valid values:
   * - **low**: low-risk.
   * - **medium**: medium-risk.
   * - **critical**: high-risk.
   * 
   * > If you do not specify this parameter, vulnerabilities of all security levels are queried.
   * 
   * @example
   * low
   */
  vulLevel?: string;
  static names(): { [key: string]: string } {
    return {
      connectionStatus: 'ConnectionStatus',
      cveId: 'CveId',
      desktopIdList: 'DesktopIdList',
      desktopStatus: 'DesktopStatus',
      includeFixResult: 'IncludeFixResult',
      includePatchTask: 'IncludePatchTask',
      language: 'Language',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      onlyCurrentMonthFixAttempted: 'OnlyCurrentMonthFixAttempted',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      patchId: 'PatchId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      searchRegionId: 'SearchRegionId',
      statusList: 'StatusList',
      vulLevel: 'VulLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectionStatus: 'string',
      cveId: 'string',
      desktopIdList: { 'type': 'array', 'itemType': 'string' },
      desktopStatus: 'string',
      includeFixResult: 'boolean',
      includePatchTask: 'boolean',
      language: 'string',
      maxResults: 'number',
      nextToken: 'string',
      onlyCurrentMonthFixAttempted: 'boolean',
      pageNumber: 'number',
      pageSize: 'number',
      patchId: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      searchRegionId: 'string',
      statusList: { 'type': 'array', 'itemType': 'string' },
      vulLevel: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.desktopIdList)) {
      $dara.Model.validateArray(this.desktopIdList);
    }
    if(Array.isArray(this.statusList)) {
      $dara.Model.validateArray(this.statusList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

