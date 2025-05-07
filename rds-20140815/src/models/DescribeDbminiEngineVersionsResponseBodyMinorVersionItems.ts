// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBMiniEngineVersionsResponseBodyMinorVersionItems extends $dara.Model {
  /**
   * @remarks
   * The PostgreSQL version to which the minor engine version corresponds. For more information, see [Release notes for AliPG](https://help.aliyun.com/document_detail/126002.html).
   * 
   * >  This parameter is available only for instances that run **PostgreSQL**.
   * 
   * @example
   * 13.6
   */
  communityMinorVersion?: string;
  /**
   * @remarks
   * The database engine that corresponds to the minor engine version.
   * 
   * @example
   * MySQL
   */
  engine?: string;
  /**
   * @remarks
   * The database engine version that corresponds to the minor engine version.
   * 
   * @example
   * 5.7
   */
  engineVersion?: string;
  /**
   * @remarks
   * The expiration time of the minor engine version.
   * 
   * @example
   * 20231213
   */
  expireDate?: string;
  /**
   * @remarks
   * The expiration status of the minor engine version. Valid values:
   * 
   * *   **vaild**
   * *   **expired**
   * 
   * >  If the minor engine version is in the Offline state, the minor engine version is discontinued. In this case, ignore the expiration status. If the minor engine version is in the Online state and the expiration state is expired, the minor engine version expires. If the expiration state is vaild, the minor engine version is still in its lifecycle.
   * 
   * @example
   * vaild
   */
  expireStatus?: string;
  /**
   * @remarks
   * An internal parameter. You do not need to specify this parameter.
   * 
   * @example
   * True
   */
  isHotfixVersion?: boolean;
  /**
   * @remarks
   * The minor engine version.
   * 
   * @example
   * rds_20220731
   */
  minorVersion?: string;
  /**
   * @remarks
   * The RDS edition of the instance that runs the minor engine version. Valid values:
   * 
   * *   **Basic**: RDS Basic Edition
   * *   **HighAvailability**: RDS High-availability Edition
   * *   **Finance**: RDS Enterprise Edition
   * 
   * @example
   * HighAvailability
   */
  nodeType?: string;
  /**
   * @remarks
   * The URL of the release notes for the minor engine version.
   * 
   * @example
   * https://example.com
   */
  releaseNote?: string;
  /**
   * @remarks
   * The release type. Valid values:
   * 
   * *   **LTS**: a long-term version
   * *   **BETA**: a preview version
   * 
   * @example
   * BETA
   */
  releaseType?: string;
  /**
   * @remarks
   * The status of the minor engine version. Valid values:
   * 
   * *   **Offline**: discontinued
   * *   **Online**: available
   * 
   * >  If the minor engine version is in the Offline state, the minor engine version is discontinued. In this case, ignore the expiration status. If the minor engine version is in the Online state and the expiration state is expired, the minor engine version expires. If the expiration state is vaild, the minor engine version is still in its lifecycle.
   * 
   * @example
   * Online
   */
  statusDesc?: string;
  /**
   * @remarks
   * The tag that corresponds to the minor engine version. Valid values:
   * 
   * *   **pgsql_docker_image**: tag of common instances
   * *   **pgsql_babelfish_image**: tag of instances for which Babelfish is enabled
   * 
   * >  This parameter is available only for instances that run **PostgreSQL**.
   * 
   * @example
   * pgsql_babelfish_image
   */
  tag?: string;
  static names(): { [key: string]: string } {
    return {
      communityMinorVersion: 'CommunityMinorVersion',
      engine: 'Engine',
      engineVersion: 'EngineVersion',
      expireDate: 'ExpireDate',
      expireStatus: 'ExpireStatus',
      isHotfixVersion: 'IsHotfixVersion',
      minorVersion: 'MinorVersion',
      nodeType: 'NodeType',
      releaseNote: 'ReleaseNote',
      releaseType: 'ReleaseType',
      statusDesc: 'StatusDesc',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      communityMinorVersion: 'string',
      engine: 'string',
      engineVersion: 'string',
      expireDate: 'string',
      expireStatus: 'string',
      isHotfixVersion: 'boolean',
      minorVersion: 'string',
      nodeType: 'string',
      releaseNote: 'string',
      releaseType: 'string',
      statusDesc: 'string',
      tag: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

