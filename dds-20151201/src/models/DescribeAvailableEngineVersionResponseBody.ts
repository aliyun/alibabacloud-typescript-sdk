// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAvailableEngineVersionResponseBodyEngineVersions extends $dara.Model {
  engineVersion?: string[];
  static names(): { [key: string]: string } {
    return {
      engineVersion: 'EngineVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      engineVersion: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.engineVersion)) {
      $dara.Model.validateArray(this.engineVersion);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableEngineVersionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of one or more engine versions to which an ApsaraDB for MongoDB instance can be upgraded.
   * 
   * >  An empty string is returned if the latest version is being used.
   */
  engineVersions?: DescribeAvailableEngineVersionResponseBodyEngineVersions;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 52507B6B-003B-47A3-A0A3-9FE992C7A243
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      engineVersions: 'EngineVersions',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      engineVersions: DescribeAvailableEngineVersionResponseBodyEngineVersions,
      requestId: 'string',
    };
  }

  validate() {
    if(this.engineVersions && typeof (this.engineVersions as any).validate === 'function') {
      (this.engineVersions as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

