// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDatasetResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the dataset.
   * 
   * @example
   * a25a6589b2584ff490e891cc********
   */
  datasetId?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 4173F95B-360C-460C-9F6C-4A96********
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      datasetId: 'DatasetId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasetId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

