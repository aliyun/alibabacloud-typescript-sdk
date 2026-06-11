// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { IndexKey } from "./IndexKey";


export class CreateDatasetRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the dataset.
   * 
   * This parameter is required.
   * 
   * @example
   * test_dataset
   */
  datasetName?: string;
  /**
   * @remarks
   * The description of the dataset.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The schema of the dataset.
   * 
   * This parameter is required.
   */
  schema?: { [key: string]: IndexKey };
  static names(): { [key: string]: string } {
    return {
      datasetName: 'datasetName',
      description: 'description',
      schema: 'schema',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasetName: 'string',
      description: 'string',
      schema: { 'type': 'map', 'keyType': 'string', 'valueType': IndexKey },
    };
  }

  validate() {
    if(this.schema) {
      $dara.Model.validateMap(this.schema);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

