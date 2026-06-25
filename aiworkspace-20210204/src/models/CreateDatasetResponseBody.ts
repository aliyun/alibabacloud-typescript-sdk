// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDatasetResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the dataset.
   * 
   * @example
   * d-rbvg5*****jhc9ks92
   */
  datasetId?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * B2C51F93-1C07-5477-9705-5FDB****F19F
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

