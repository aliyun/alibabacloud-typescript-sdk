// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ImportDatasetDataRequest extends $dara.Model {
  /**
   * @remarks
   * The dataset ID. You can view this ID in the dataset list in the console.
   * 
   * @example
   * 730
   */
  datasetId?: string;
  /**
   * @remarks
   * The list of data records to add or update. A maximum of 100 records can be included in a single batch operation.
   * 
   * Note: The records must strictly follow the schema configured for the target dataset in the console. The add or update logic depends on the primary key type of the target dataset. For detailed example requests, see the Request Description section below.
   * 
   * This parameter is required.
   */
  records?: { [key: string]: any }[];
  static names(): { [key: string]: string } {
    return {
      datasetId: 'datasetId',
      records: 'records',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasetId: 'string',
      records: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
    };
  }

  validate() {
    if(Array.isArray(this.records)) {
      $dara.Model.validateArray(this.records);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

