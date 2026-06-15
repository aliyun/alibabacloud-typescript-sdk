// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetLabelTableResponseBodyFields extends $dara.Model {
  /**
   * @example
   * item
   */
  alignedEntityName?: string;
  /**
   * @remarks
   * A list of field attributes.
   */
  attributes?: string[];
  /**
   * @remarks
   * The field name.
   * 
   * @example
   * field1
   */
  name?: string;
  /**
   * @remarks
   * The field type.
   * 
   * @example
   * INT32
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      alignedEntityName: 'AlignedEntityName',
      attributes: 'Attributes',
      name: 'Name',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alignedEntityName: 'string',
      attributes: { 'type': 'array', 'itemType': 'string' },
      name: 'string',
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.attributes)) {
      $dara.Model.validateArray(this.attributes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLabelTableResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data source ID.
   * 
   * @example
   * 1
   */
  datasourceId?: string;
  /**
   * @remarks
   * The data source name.
   * 
   * @example
   * datasource1
   */
  datasourceName?: string;
  /**
   * @remarks
   * The fields in the label table.
   */
  fields?: GetLabelTableResponseBodyFields[];
  /**
   * @remarks
   * The time when the label table was created.
   * 
   * @example
   * 2021-12-15T23:24:33.132+08:00
   */
  gmtCreateTime?: string;
  /**
   * @remarks
   * The time when the label table was last modified.
   * 
   * @example
   * 2021-12-15T23:24:33.132+08:00
   */
  gmtModifiedTime?: string;
  /**
   * @remarks
   * The label table name.
   * 
   * @example
   * label_table1
   */
  name?: string;
  /**
   * @remarks
   * The Alibaba Cloud account ID of the creator.
   * 
   * @example
   * 12321312*****
   */
  owner?: string;
  /**
   * @remarks
   * The project ID.
   * 
   * @example
   * 1
   */
  projectId?: string;
  /**
   * @remarks
   * The project name.
   * 
   * @example
   * project1
   */
  projectName?: string;
  /**
   * @remarks
   * A list of related model feature names.
   */
  relatedModelFeatures?: string[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 728C5E01-ABF6-5AA8-B9FC-B3BA05DECC77
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      datasourceId: 'DatasourceId',
      datasourceName: 'DatasourceName',
      fields: 'Fields',
      gmtCreateTime: 'GmtCreateTime',
      gmtModifiedTime: 'GmtModifiedTime',
      name: 'Name',
      owner: 'Owner',
      projectId: 'ProjectId',
      projectName: 'ProjectName',
      relatedModelFeatures: 'RelatedModelFeatures',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasourceId: 'string',
      datasourceName: 'string',
      fields: { 'type': 'array', 'itemType': GetLabelTableResponseBodyFields },
      gmtCreateTime: 'string',
      gmtModifiedTime: 'string',
      name: 'string',
      owner: 'string',
      projectId: 'string',
      projectName: 'string',
      relatedModelFeatures: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.fields)) {
      $dara.Model.validateArray(this.fields);
    }
    if(Array.isArray(this.relatedModelFeatures)) {
      $dara.Model.validateArray(this.relatedModelFeatures);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

