// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDatasetResourceUrlRequest extends $dara.Model {
  /**
   * @remarks
   * The dataset ID. You can view this in the dataset list on the console.
   * 
   * @example
   * 730
   */
  datasetId?: string;
  /**
   * @remarks
   * The primary key value of the data record in the dataset.
   * 
   * This parameter is required.
   * 
   * @example
   * 01KQCJBPM9JVDTXWV50G2AKXXX
   */
  primaryKey?: string;
  static names(): { [key: string]: string } {
    return {
      datasetId: 'datasetId',
      primaryKey: 'primaryKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasetId: 'string',
      primaryKey: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

