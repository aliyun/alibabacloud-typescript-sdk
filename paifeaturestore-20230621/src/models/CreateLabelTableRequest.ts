// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateLabelTableRequestFields extends $dara.Model {
  /**
   * @example
   * item
   */
  alignedEntityName?: string;
  /**
   * @remarks
   * The field attributes. Valid values include:
   * 
   * ● `Partition`: A partition field.
   * 
   * ● `FeatureField`: A feature field.
   * 
   * ● `FeatureGenerationReserveField`: A reserved field for Feature Generation (FG).
   * 
   * ● `EventTime`: The event time.
   * 
   * ● `LabelField`: A label field.
   * 
   * This parameter is required.
   */
  attributes?: string[];
  /**
   * @remarks
   * The name of the field.
   * 
   * This parameter is required.
   * 
   * @example
   * lat
   */
  name?: string;
  /**
   * @remarks
   * The data type of the field.
   * 
   * This parameter is required.
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

export class CreateLabelTableRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the data source that contains the label table. Call the ListDatasources operation to obtain this ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 3
   */
  datasourceId?: string;
  /**
   * @remarks
   * The field list.
   * 
   * This parameter is required.
   */
  fields?: CreateLabelTableRequestFields[];
  /**
   * @remarks
   * The name of the label table.
   * 
   * This parameter is required.
   * 
   * @example
   * rec_test
   */
  name?: string;
  /**
   * @remarks
   * The project ID. Call the ListProjects operation to obtain this ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 3
   */
  projectId?: string;
  static names(): { [key: string]: string } {
    return {
      datasourceId: 'DatasourceId',
      fields: 'Fields',
      name: 'Name',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasourceId: 'string',
      fields: { 'type': 'array', 'itemType': CreateLabelTableRequestFields },
      name: 'string',
      projectId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.fields)) {
      $dara.Model.validateArray(this.fields);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

