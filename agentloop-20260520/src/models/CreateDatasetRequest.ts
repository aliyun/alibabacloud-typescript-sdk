// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { IndexKey } from "./IndexKey";


export class CreateDatasetRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  datasetName?: string;
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  schema?: { [key: string]: IndexKey };
  /**
   * @example
   * a1b2c3d4-1234-5678-90ab-cdef12345678
   */
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      datasetName: 'datasetName',
      description: 'description',
      schema: 'schema',
      clientToken: 'clientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasetName: 'string',
      description: 'string',
      schema: { 'type': 'map', 'keyType': 'string', 'valueType': IndexKey },
      clientToken: 'string',
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

