// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRepoTagScanResultResponseBodyVulnerabilities extends $dara.Model {
  /**
   * @remarks
   * The image layer that introduced the vulnerability.
   * 
   * @example
   * sha256:123456717b8e40b6480979b739010d8d549989602bcdd07922119aec6f9dbe57
   */
  addedBy?: string;
  /**
   * @remarks
   * The vulnerability name.
   * 
   * @example
   * Vulnerability
   * 
   * @deprecated
   */
  aliasName?: string;
  /**
   * @remarks
   * The vulnerability link.
   * 
   * @example
   * https://security-tracker.debian.org/tracker/CVE-2009-5155
   */
  cveLink?: string;
  /**
   * @remarks
   * The vulnerability location.
   * 
   * @example
   * /test.txt
   */
  cveLocation?: string;
  /**
   * @remarks
   * The vulnerability name.
   * 
   * @example
   * CVE-2009-5155
   */
  cveName?: string;
  /**
   * @remarks
   * The vulnerability description.
   * 
   * @example
   * description.
   */
  description?: string;
  /**
   * @remarks
   * The feature that introduced the vulnerability.
   * 
   * @example
   * eglibc
   */
  feature?: string;
  /**
   * @remarks
   * The vulnerability fix command.
   * 
   * @example
   * yum install -y xxx
   */
  fixCmd?: string;
  /**
   * @remarks
   * The vulnerability type. Valid values:
   * 
   * - `cve`: System vulnerability
   * 
   * - `sca`: Application vulnerability
   * 
   * @example
   * cve
   */
  scanType?: string;
  /**
   * @remarks
   * The severity level of the scanned vulnerability. Valid values:
   * 
   * - `High`: High
   * 
   * - `Medium`: Medium
   * 
   * - `Low`: Low
   * 
   * - `Unknown`: Unknown
   * 
   * @example
   * Medium
   */
  severity?: string;
  /**
   * @remarks
   * The vulnerability version.
   * 
   * @example
   * 2.19-6.9
   */
  version?: string;
  /**
   * @remarks
   * The version that fixes the vulnerability.
   * 
   * @example
   * 2.19-18+deb8u5
   */
  versionFixed?: string;
  /**
   * @remarks
   * The version format.
   * 
   * @example
   * dpkg
   */
  versionFormat?: string;
  static names(): { [key: string]: string } {
    return {
      addedBy: 'AddedBy',
      aliasName: 'AliasName',
      cveLink: 'CveLink',
      cveLocation: 'CveLocation',
      cveName: 'CveName',
      description: 'Description',
      feature: 'Feature',
      fixCmd: 'FixCmd',
      scanType: 'ScanType',
      severity: 'Severity',
      version: 'Version',
      versionFixed: 'VersionFixed',
      versionFormat: 'VersionFormat',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addedBy: 'string',
      aliasName: 'string',
      cveLink: 'string',
      cveLocation: 'string',
      cveName: 'string',
      description: 'string',
      feature: 'string',
      fixCmd: 'string',
      scanType: 'string',
      severity: 'string',
      version: 'string',
      versionFixed: 'string',
      versionFormat: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRepoTagScanResultResponseBody extends $dara.Model {
  /**
   * @remarks
   * The return value.
   * 
   * @example
   * success
   */
  code?: string;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:
   * 
   * - `true`: Success
   * 
   * - `false`: Failure
   * 
   * @example
   * true
   */
  isSuccess?: boolean;
  /**
   * @remarks
   * The page number of the scan result list.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of entries per page in the scan result list.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 56B5C92F-F5D9-46E0-823F-EC71D1892DAA
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of scanned vulnerabilities.
   * 
   * @example
   * 196
   */
  totalCount?: number;
  /**
   * @remarks
   * The array of scanned vulnerabilities.
   */
  vulnerabilities?: ListRepoTagScanResultResponseBodyVulnerabilities[];
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      isSuccess: 'IsSuccess',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      vulnerabilities: 'Vulnerabilities',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      isSuccess: 'boolean',
      pageNo: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
      vulnerabilities: { 'type': 'array', 'itemType': ListRepoTagScanResultResponseBodyVulnerabilities },
    };
  }

  validate() {
    if(Array.isArray(this.vulnerabilities)) {
      $dara.Model.validateArray(this.vulnerabilities);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

