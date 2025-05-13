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

