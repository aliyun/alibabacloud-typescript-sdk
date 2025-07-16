// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateLabelTableRequestFields extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  attributes?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * lat
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * INT32
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      attributes: 'Attributes',
      name: 'Name',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
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
   * This parameter is required.
   * 
   * @example
   * 3
   */
  datasourceId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  fields?: CreateLabelTableRequestFields[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * rec_test
   */
  name?: string;
  /**
   * @remarks
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

