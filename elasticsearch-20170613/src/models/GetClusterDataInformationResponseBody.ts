// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetClusterDataInformationResponseBodyResultMetaInfo extends $dara.Model {
  /**
   * @remarks
   * The fields in the Mapping for the index.
   */
  fields?: string[];
  /**
   * @remarks
   * The index list of the cluster.
   */
  indices?: string[];
  /**
   * @remarks
   * The Mapping configuration of the cluster.
   * 
   * @example
   * {\\"_doc\\":{\\"properties\\":{\\"user\\":{\\"properties\\":{\\"last\\":{\\"type\\":\\"text\\",...}}}}}}
   */
  mapping?: string;
  /**
   * @remarks
   * The Settings of the cluster.
   * 
   * @example
   * {\\n  \\"index\\": {\\n    \\"replication\\": {\\n}.....}}
   */
  settings?: string;
  /**
   * @remarks
   * Specifies the type of the index.
   */
  typeName?: string[];
  static names(): { [key: string]: string } {
    return {
      fields: 'fields',
      indices: 'indices',
      mapping: 'mapping',
      settings: 'settings',
      typeName: 'typeName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fields: { 'type': 'array', 'itemType': 'string' },
      indices: { 'type': 'array', 'itemType': 'string' },
      mapping: 'string',
      settings: 'string',
      typeName: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.fields)) {
      $dara.Model.validateArray(this.fields);
    }
    if(Array.isArray(this.indices)) {
      $dara.Model.validateArray(this.indices);
    }
    if(Array.isArray(this.typeName)) {
      $dara.Model.validateArray(this.typeName);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetClusterDataInformationResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * Whether it is connectable.
   * 
   * @example
   * true
   */
  connectable?: boolean;
  /**
   * @remarks
   * The metadata of the cluster.
   */
  metaInfo?: GetClusterDataInformationResponseBodyResultMetaInfo;
  static names(): { [key: string]: string } {
    return {
      connectable: 'connectable',
      metaInfo: 'metaInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectable: 'boolean',
      metaInfo: GetClusterDataInformationResponseBodyResultMetaInfo,
    };
  }

  validate() {
    if(this.metaInfo && typeof (this.metaInfo as any).validate === 'function') {
      (this.metaInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetClusterDataInformationResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 5FFD9ED4-C2EC-4E89-B22B-1ACB6FE1****
   */
  requestId?: string;
  /**
   * @remarks
   * The return results.
   */
  result?: GetClusterDataInformationResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: GetClusterDataInformationResponseBodyResult,
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

