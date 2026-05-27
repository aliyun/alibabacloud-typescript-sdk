// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ImportDatasetDataRequest extends $dara.Model {
  /**
   * @example
   * 730
   */
  datasetId?: string;
  /**
   * @remarks
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

