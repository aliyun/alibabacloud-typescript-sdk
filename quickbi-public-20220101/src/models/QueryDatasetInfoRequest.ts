// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryDatasetInfoRequest extends $dara.Model {
  /**
   * @remarks
   * Queries information about a specified dataset.
   * 
   * This parameter is required.
   * 
   * @example
   * a201c85c-******
   */
  datasetId?: string;
  static names(): { [key: string]: string } {
    return {
      datasetId: 'DatasetId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasetId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

