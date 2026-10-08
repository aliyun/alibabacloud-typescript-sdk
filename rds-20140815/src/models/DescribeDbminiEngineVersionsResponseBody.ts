// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBMiniEngineVersionsResponseBodyMinorVersionItems extends $dara.Model {
  /**
   * @remarks
   * The community minor version that corresponds to the minor engine version.
   * 
   * @example
   * 5.7.38
   */
  communityMinorVersion?: string;
  /**
   * @remarks
   * The database engine that corresponds to the minor version.
   * 
   * @example
   * MySQL
   */
  engine?: string;
  /**
   * @remarks
   * The database engine version that corresponds to the minor version.
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
   * - **vaild**: Milvus version is valid.
   * - **expired**: Milvus version has expired.
   * 
   * > If the offline status is Offline, Milvus version has been taken offline and the expiration status is ignored. If the offline status is Online and the expiration status is expired, Milvus version has exceeded its lifecycle. If the offline status is Online and the expiration status is vaild, Milvus version is still within its lifecycle.
   * 
   * @example
   * vaild
   */
  expireStatus?: string;
  /**
   * @remarks
   * An internal parameter. You can ignore this parameter.
   * 
   * @example
   * True
   */
  isHotfixVersion?: boolean;
  /**
   * @remarks
   * The version number of the minor engine version.
   * 
   * @example
   * rds_20220731
   */
  minorVersion?: string;
  /**
   * @remarks
   * The instance edition that corresponds to the minor version. Valid values:
   * * **Basic**: Basic Edition.
   * * **HighAvailability**: high-availability series.
   * * **Finance**: RDS Enterprise Edition.
   * 
   * @example
   * HighAvailability
   */
  nodeType?: string;
  /**
   * @remarks
   * The URL of the release notes for the minor version.
   * 
   * @example
   * https://example.com
   */
  releaseNote?: string;
  /**
   * @remarks
   * The release type. Valid values:
   * * **LTS**: Long-term support version.
   * * **BETA**: Preview version.
   * 
   * @example
   * BETA
   */
  releaseType?: string;
  /**
   * @remarks
   * The offline status of the minor engine version. Valid values:
   * - **Offline**: Milvus version has been taken offline.
   * - **Online**: Milvus version is online.
   * 
   * > If the offline status is Offline, Milvus version has been taken offline and the expiration status is ignored. If the offline status is Online and the expiration status is expired, Milvus version has exceeded its lifecycle. If the offline status is Online and the expiration status is vaild, Milvus version is still within its lifecycle.
   * 
   * @example
   * Online
   */
  statusDesc?: string;
  /**
   * @remarks
   * The tag that corresponds to the minor engine version. Valid values:
   * 
   * - **pgsql_docker_image**: general instance tag.
   * - **pgsql_babelfish_image**: Babelfish instance tag.
   * 
   * > This value is returned only for **PostgreSQL**.
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

export class DescribeDBMiniEngineVersionsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * rm-uf6wjk5****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The number of records per page.
   * 
   * @example
   * 10
   */
  maxRecordsPerPage?: number;
  /**
   * @remarks
   * The list of minor engine versions.
   */
  minorVersionItems?: DescribeDBMiniEngineVersionsResponseBodyMinorVersionItems[];
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  pageNumbers?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * EFB6083A-7699-489B-8278-C0CB4793A96E
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of records.
   * 
   * @example
   * 2
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      maxRecordsPerPage: 'MaxRecordsPerPage',
      minorVersionItems: 'MinorVersionItems',
      pageNumbers: 'PageNumbers',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      maxRecordsPerPage: 'number',
      minorVersionItems: { 'type': 'array', 'itemType': DescribeDBMiniEngineVersionsResponseBodyMinorVersionItems },
      pageNumbers: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.minorVersionItems)) {
      $dara.Model.validateArray(this.minorVersionItems);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

