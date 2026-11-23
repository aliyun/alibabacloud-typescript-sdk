// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVulDesktopsResponseBodyVulDesktopsCves extends $dara.Model {
  /**
   * @remarks
   * The vulnerability ID.
   * 
   * @example
   * CVE-2026-62690
   */
  cveId?: string;
  /**
   * @remarks
   * The severity level of the vulnerability.
   * 
   * @example
   * low
   */
  cveLevel?: string;
  /**
   * @remarks
   * The name of the vulnerability.
   * 
   * @example
   * Windows Push Notifications Elevation of Privilege Vulnerability
   */
  cveTitle?: string;
  /**
   * @remarks
   * The CVE link.
   * 
   * @example
   * https://avd.aliyun.com/detail/CVE-2026-62690
   */
  cveUrl?: string;
  /**
   * @remarks
   * The vulnerability score.
   * 
   * @example
   * 7.0
   */
  impactScore?: string;
  /**
   * @remarks
   * The reference link for the vulnerability details.
   * 
   * @example
   * https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-62690
   */
  referenceUrl?: string;
  /**
   * @remarks
   * The release time. The time is in the ISO 8601 standard UTC format: yyyy-MM-ddTHH:mm:ssZ.
   * 
   * @example
   * 2026-08-11 07:00:00
   */
  releaseTime?: string;
  static names(): { [key: string]: string } {
    return {
      cveId: 'CveId',
      cveLevel: 'CveLevel',
      cveTitle: 'CveTitle',
      cveUrl: 'CveUrl',
      impactScore: 'ImpactScore',
      referenceUrl: 'ReferenceUrl',
      releaseTime: 'ReleaseTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cveId: 'string',
      cveLevel: 'string',
      cveTitle: 'string',
      cveUrl: 'string',
      impactScore: 'string',
      referenceUrl: 'string',
      releaseTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVulDesktopsResponseBodyVulDesktopsFixRecords extends $dara.Model {
  /**
   * @remarks
   * The batch ID of the scheduled task execution.
   * 
   * @example
   * d7f3d7bc-b98b-4da8-95ae-fea21b604b34
   */
  batchId?: string;
  /**
   * @remarks
   * The reason for the failure.
   * 
   * @example
   * Update failed
   */
  fixFailureReason?: string;
  /**
   * @remarks
   * The fix result.
   * 
   * @example
   * SUCCEED
   */
  fixResult?: string;
  /**
   * @remarks
   * The timestamp when the fix task ended. Unit: milliseconds.
   * 
   * @example
   * 2026-08-05 13:57:31
   */
  fixTime?: string;
  /**
   * @remarks
   * The fix type.
   * 
   * @example
   * AutoTask
   */
  fixType?: string;
  static names(): { [key: string]: string } {
    return {
      batchId: 'BatchId',
      fixFailureReason: 'FixFailureReason',
      fixResult: 'FixResult',
      fixTime: 'FixTime',
      fixType: 'FixType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      batchId: 'string',
      fixFailureReason: 'string',
      fixResult: 'string',
      fixTime: 'string',
      fixType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVulDesktopsResponseBodyVulDesktops extends $dara.Model {
  /**
   * @remarks
   * The ID of the configuration task.
   * 
   * @example
   * ccg-0bbay4w7bwbxd****
   */
  configGroupId?: string;
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
   * The number of vulnerabilities.
   * 
   * @example
   * 60
   */
  cveCount?: number;
  /**
   * @remarks
   * The list of vulnerability details.
   */
  cves?: DescribeVulDesktopsResponseBodyVulDesktopsCves[];
  /**
   * @remarks
   * The ID of the cloud desktop affected by the vulnerability.
   * 
   * @example
   * ecd-0jtd4z5binubxe32e
   */
  desktopId?: string;
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
   * Indicates whether the activation code is disabled.
   * 
   * @example
   * False
   */
  disabled?: boolean;
  /**
   * @remarks
   * The time when the vulnerability was first detected. The time is in the yyyy-MM-dd HH:mm:ss format.
   * 
   * @example
   * 2026-08-05 00:00:00
   */
  firstFoundTime?: string;
  /**
   * @remarks
   * The list of fix details for the cloud desktop.
   */
  fixRecords?: DescribeVulDesktopsResponseBodyVulDesktopsFixRecords[];
  /**
   * @remarks
   * The list of patch IDs.
   */
  patchIds?: string[];
  /**
   * @remarks
   * The region ID. You can call the [DescribeRegions](~~DescribeRegions~~) operation to query the list of regions supported by WUYING Workspace.
   * 
   * @example
   * cn-shenzhen
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the enterprise resource group.
   * 
   * @example
   * rg-acfm2tswogr****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The fix status of the patch.
   * 
   * @example
   * Fixed
   */
  status?: string;
  /**
   * @remarks
   * The severity level of the patch.
   * 
   * @example
   * high
   */
  vulLevel?: string;
  static names(): { [key: string]: string } {
    return {
      configGroupId: 'ConfigGroupId',
      connectionStatus: 'ConnectionStatus',
      cveCount: 'CveCount',
      cves: 'Cves',
      desktopId: 'DesktopId',
      desktopStatus: 'DesktopStatus',
      disabled: 'Disabled',
      firstFoundTime: 'FirstFoundTime',
      fixRecords: 'FixRecords',
      patchIds: 'PatchIds',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      status: 'Status',
      vulLevel: 'VulLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configGroupId: 'string',
      connectionStatus: 'string',
      cveCount: 'number',
      cves: { 'type': 'array', 'itemType': DescribeVulDesktopsResponseBodyVulDesktopsCves },
      desktopId: 'string',
      desktopStatus: 'string',
      disabled: 'boolean',
      firstFoundTime: 'string',
      fixRecords: { 'type': 'array', 'itemType': DescribeVulDesktopsResponseBodyVulDesktopsFixRecords },
      patchIds: { 'type': 'array', 'itemType': 'string' },
      regionId: 'string',
      resourceGroupId: 'string',
      status: 'string',
      vulLevel: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.cves)) {
      $dara.Model.validateArray(this.cves);
    }
    if(Array.isArray(this.fixRecords)) {
      $dara.Model.validateArray(this.fixRecords);
    }
    if(Array.isArray(this.patchIds)) {
      $dara.Model.validateArray(this.patchIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVulDesktopsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of entries per page for a paged query. Maximum value: 100. Default value: 10.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The token for the next query. An empty NextToken indicates that no more results are available.
   * 
   * @example
   * AAAAAV3MpHK1AP0pfERHZN5pu6kRxd1mKkNnHlUy14zdjl/I
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 269BDB16-2CD8-4865-84BD-11C40BC21DB0
   */
  requestId?: string;
  /**
   * @remarks
   * The total count.
   * 
   * @example
   * 20
   */
  totalCount?: number;
  /**
   * @remarks
   * The list of details about cloud desktops affected by the vulnerability.
   */
  vulDesktops?: DescribeVulDesktopsResponseBodyVulDesktops[];
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      vulDesktops: 'VulDesktops',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
      vulDesktops: { 'type': 'array', 'itemType': DescribeVulDesktopsResponseBodyVulDesktops },
    };
  }

  validate() {
    if(Array.isArray(this.vulDesktops)) {
      $dara.Model.validateArray(this.vulDesktops);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

