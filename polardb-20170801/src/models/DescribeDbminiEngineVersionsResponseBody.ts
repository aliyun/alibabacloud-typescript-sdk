// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBMiniEngineVersionsResponseBodyDBRevisionVersionList extends $dara.Model {
  /**
   * @example
   * ReleaseNote
   */
  releaseNote?: string;
  /**
   * @example
   * Stable
   */
  releaseType?: string;
  /**
   * @example
   * 20230707
   */
  revisionVersionCode?: string;
  /**
   * @example
   * 8.0.1.1.35.1
   */
  revisionVersionName?: string;
  static names(): { [key: string]: string } {
    return {
      releaseNote: 'ReleaseNote',
      releaseType: 'ReleaseType',
      revisionVersionCode: 'RevisionVersionCode',
      revisionVersionName: 'RevisionVersionName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      releaseNote: 'string',
      releaseType: 'string',
      revisionVersionCode: 'string',
      revisionVersionName: 'string',
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
  DBRevisionVersionList?: DescribeDBMiniEngineVersionsResponseBodyDBRevisionVersionList[];
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 2921D843-433A-5FB3-A03B-4EC093B219F8
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      DBRevisionVersionList: 'DBRevisionVersionList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBRevisionVersionList: { 'type': 'array', 'itemType': DescribeDBMiniEngineVersionsResponseBodyDBRevisionVersionList },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.DBRevisionVersionList)) {
      $dara.Model.validateArray(this.DBRevisionVersionList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

