// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDBClusterVersionResponseBodyDBRevisionVersionList } from "./DescribeDbclusterVersionResponseBodyDbrevisionVersionList";
import { DescribeDBClusterVersionResponseBodyProxyRevisionVersionList } from "./DescribeDbclusterVersionResponseBodyProxyRevisionVersionList";


export class DescribeDBClusterVersionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of cluster.
   * 
   * @example
   * pc-****************
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The latest version of the database engine.
   * 
   * @example
   * 8.0.1.1.16
   */
  DBLatestVersion?: string;
  /**
   * @remarks
   * The minor version of the database engine.
   * 
   * - If DBVersion is 8.0, the valid values of this parameter are:
   *   - 8.0.2
   *   - 8.0.1
   * - If DBVersion is 5.7, set the value of this parameter to 5.7.28.
   * - If DBVersion is 5.6, the value of this parameter is 5.6.16.
   * 
   * @example
   * 8.0.1
   */
  DBMinorVersion?: string;
  /**
   * @remarks
   * The revision version of the database engine.
   * >For a cluster of the PolarDB for MySQL 5.6, the DBRevisionVersion parameter returns the revision version information only if the Revision Version is released later than August 31, 2020. Otherwise, this parameter returns an empty value.
   * 
   * @example
   * 8.0.1.1.7
   */
  DBRevisionVersion?: string;
  /**
   * @remarks
   * The versions to which the cluster can be upgraded.
   */
  DBRevisionVersionList?: DescribeDBClusterVersionResponseBodyDBRevisionVersionList[];
  /**
   * @remarks
   * The version of the database engine. Valid values:
   * 
   * - 5.6
   * - 5.7
   * - 8.0
   * 
   * @example
   * 8.0
   */
  DBVersion?: string;
  /**
   * @remarks
   * The status of the minor version. Valid values:
   * 
   * *   **Stable**: The minor version is stable.
   * *   **Old**: The minor version is outdated. We recommend that you upgrade the cluster to the latest version.
   * *   **HighRisk**: The minor version has critical defects. We recommend that you immediately update the cluster to the latest minor version.
   * 
   * >  For more information about how to update the minor version, see [Minor version update](https://help.aliyun.com/document_detail/158572.html).
   * 
   * @example
   * Stable
   */
  DBVersionStatus?: string;
  /**
   * @remarks
   * Indicates whether the kernel is of the latest version. Valid values:
   * 
   * - true
   * - false
   * 
   * @example
   * true
   */
  isLatestVersion?: string;
  /**
   * @remarks
   * Indicates whether PolarProxy uses the latest version. Valid values:
   * 
   * - true
   * - false
   * 
   * @example
   * true
   */
  isProxyLatestVersion?: string;
  /**
   * @remarks
   * The latest version of PolarProxy.
   * 
   * @example
   * 2.4.17
   */
  proxyLatestVersion?: string;
  /**
   * @remarks
   * The revision version of the database engine.
   * 
   * @example
   * 2.4.15
   */
  proxyRevisionVersion?: string;
  /**
   * @remarks
   * The release status of the PolarProxy version. Valid values:
   * 
   * *   **Stable**: The PolarProxy revision version is stable.
   * *   **Old**: The PolarProxy revision version is outdated. We recommend that you do not update the PolarProxy to this revision version.
   * *   **HighRisk**: The PolarProxy revision version has critical defects. We recommend that you do not update the PolarProxy to this revision version.
   * *   **Beta**: The PolarProxy revision version is a Beta version.
   */
  proxyRevisionVersionList?: DescribeDBClusterVersionResponseBodyProxyRevisionVersionList[];
  /**
   * @remarks
   * The status of PolarProxy. Valid values:
   * 
   * - Stable: The minor version is stable.
   * - Old: The minor version is outdated. We recommend that you upgrade the cluster to the latest version.
   * - HighRisk: The minor version has critical defects. We recommend that you immediately upgrade the cluster to the latest version.
   * - Beta: The minor version is a beta version.
   * 
   * @example
   * Stable
   */
  proxyVersionStatus?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 47921222-0D37-4133-8C0D-017DC3******
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      DBLatestVersion: 'DBLatestVersion',
      DBMinorVersion: 'DBMinorVersion',
      DBRevisionVersion: 'DBRevisionVersion',
      DBRevisionVersionList: 'DBRevisionVersionList',
      DBVersion: 'DBVersion',
      DBVersionStatus: 'DBVersionStatus',
      isLatestVersion: 'IsLatestVersion',
      isProxyLatestVersion: 'IsProxyLatestVersion',
      proxyLatestVersion: 'ProxyLatestVersion',
      proxyRevisionVersion: 'ProxyRevisionVersion',
      proxyRevisionVersionList: 'ProxyRevisionVersionList',
      proxyVersionStatus: 'ProxyVersionStatus',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      DBLatestVersion: 'string',
      DBMinorVersion: 'string',
      DBRevisionVersion: 'string',
      DBRevisionVersionList: { 'type': 'array', 'itemType': DescribeDBClusterVersionResponseBodyDBRevisionVersionList },
      DBVersion: 'string',
      DBVersionStatus: 'string',
      isLatestVersion: 'string',
      isProxyLatestVersion: 'string',
      proxyLatestVersion: 'string',
      proxyRevisionVersion: 'string',
      proxyRevisionVersionList: { 'type': 'array', 'itemType': DescribeDBClusterVersionResponseBodyProxyRevisionVersionList },
      proxyVersionStatus: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.DBRevisionVersionList)) {
      $dara.Model.validateArray(this.DBRevisionVersionList);
    }
    if(Array.isArray(this.proxyRevisionVersionList)) {
      $dara.Model.validateArray(this.proxyRevisionVersionList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

