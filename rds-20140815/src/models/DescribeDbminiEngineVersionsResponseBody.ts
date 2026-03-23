// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBMiniEngineVersionsResponseBodyMinorVersionItems extends $dara.Model {
  communityMinorVersion?: string;
  engine?: string;
  engineVersion?: string;
  expireDate?: string;
  /**
   * @example
   * vaild
   */
  expireStatus?: string;
  isHotfixVersion?: boolean;
  minorVersion?: string;
  nodeType?: string;
  releaseNote?: string;
  releaseType?: string;
  statusDesc?: string;
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
  DBInstanceId?: string;
  maxRecordsPerPage?: number;
  minorVersionItems?: DescribeDBMiniEngineVersionsResponseBodyMinorVersionItems[];
  pageNumbers?: number;
  requestId?: string;
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

