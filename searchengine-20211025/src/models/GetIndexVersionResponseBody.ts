// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetIndexVersionResponseBodyResultIndexVersions extends $dara.Model {
  /**
   * @remarks
   * The ID of the offline deployment.
   * 
   * @example
   * " "
   */
  buildDeployId?: string;
  /**
   * @remarks
   * The current online version number.
   * 
   * @example
   * 1
   */
  currentVersion?: number;
  /**
   * @remarks
   * The name of the index table.
   * 
   * @example
   * table4
   */
  indexName?: string;
  /**
   * @remarks
   * The index versions.
   */
  versions?: number[];
  static names(): { [key: string]: string } {
    return {
      buildDeployId: 'buildDeployId',
      currentVersion: 'currentVersion',
      indexName: 'indexName',
      versions: 'versions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      buildDeployId: 'string',
      currentVersion: 'number',
      indexName: 'string',
      versions: { 'type': 'array', 'itemType': 'number' },
    };
  }

  validate() {
    if(Array.isArray(this.versions)) {
      $dara.Model.validateArray(this.versions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIndexVersionResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The cluster name.
   * 
   * @example
   * ayoss-cn-zhangjiakou-b
   */
  cluster?: string;
  /**
   * @remarks
   * The index versions.
   */
  indexVersions?: GetIndexVersionResponseBodyResultIndexVersions[];
  static names(): { [key: string]: string } {
    return {
      cluster: 'cluster',
      indexVersions: 'indexVersions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cluster: 'string',
      indexVersions: { 'type': 'array', 'itemType': GetIndexVersionResponseBodyResultIndexVersions },
    };
  }

  validate() {
    if(Array.isArray(this.indexVersions)) {
      $dara.Model.validateArray(this.indexVersions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIndexVersionResponseBody extends $dara.Model {
  /**
   * @remarks
   * id of request
   * 
   * @example
   * E7B7D598-B080-5C8E-AA35-D43EC0D5F886
   */
  requestId?: string;
  /**
   * @remarks
   * The clusters.
   */
  result?: GetIndexVersionResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: GetIndexVersionResponseBodyResult,
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

