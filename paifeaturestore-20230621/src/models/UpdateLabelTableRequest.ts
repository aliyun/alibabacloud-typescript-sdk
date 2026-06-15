// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateLabelTableRequestFields extends $dara.Model {
  /**
   * @example
   * item
   */
  alignedEntityName?: string;
  /**
   * @remarks
   * The field\\"s attributes.
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
   * DOUBLE
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

export class UpdateLabelTableRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the data source for the label table.
   * 
   * @example
   * 3
   */
  datasourceId?: string;
  /**
   * @remarks
   * The fields to modify.
   * 
   * This parameter is required.
   */
  fields?: UpdateLabelTableRequestFields[];
  /**
   * @remarks
   * The name of the label table.
   * 
   * @example
   * rec_test
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      datasourceId: 'DatasourceId',
      fields: 'Fields',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasourceId: 'string',
      fields: { 'type': 'array', 'itemType': UpdateLabelTableRequestFields },
      name: 'string',
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

