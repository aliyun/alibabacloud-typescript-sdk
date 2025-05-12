// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRepoTagScanResultResponseBodyVulnerabilities extends $dara.Model {
  /**
   * @remarks
   * The ID of the image layer where the vulnerability was detected.
   * 
   * @example
   * sha256:123456717b8e40b6480979b739010d8d549989602bcdd07922119aec6f9dbe57
   */
  addedBy?: string;
  /**
   * @remarks
   * The name of the vulnerability.
   * 
   * @example
   * Vulnerability
   */
  aliasName?: string;
  /**
   * @remarks
   * The URL of the vulnerability.
   * 
   * @example
   * https://security-tracker.debian.org/tracker/CVE-2009-5155
   */
  cveLink?: string;
  /**
   * @remarks
   * The directory of the vulnerability.
   * 
   * @example
   * /test.txt
   */
  cveLocation?: string;
  /**
   * @remarks
   * The name of the vulnerability.
   * 
   * @example
   * CVE-2009-5155
   */
  cveName?: string;
  /**
   * @remarks
   * The description of the vulnerability.
   * 
   * @example
   * description.
   */
  description?: string;
  /**
   * @remarks
   * The cause of the vulnerability.
   * 
   * @example
   * eglibc
   */
  feature?: string;
  /**
   * @remarks
   * The command used to fix the vulnerability.
   * 
   * @example
   * yum install -y xxx
   */
  fixCmd?: string;
  /**
   * @remarks
   * The type of the vulnerability. Valid values:
   * 
   * *   `cve`: image system vulnerability
   * *   `sca`: image application vulnerability
   * 
   * @example
   * cve
   */
  scanType?: string;
  /**
   * @remarks
   * The severity of the vulnerability.
   * 
   * @example
   * Medium
   */
  severity?: string;
  /**
   * @remarks
   * The version of the vulnerability.
   * 
   * @example
   * 2.19-6.9
   */
  version?: string;
  /**
   * @remarks
   * The version where the vulnerability was fixed.
   * 
   * @example
   * 2.19-18+deb8u5
   */
  versionFixed?: string;
  /**
   * @remarks
   * The format of the vulnerability.
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

