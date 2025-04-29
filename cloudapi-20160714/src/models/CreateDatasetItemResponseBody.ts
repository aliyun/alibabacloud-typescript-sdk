// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDatasetItemResponseBody extends $dara.Model {
  /**
   * @example
   * 5045****
   */
  datasetItemId?: string;
  /**
   * @example
   * 8A5E2053-4D9F-5280-B7A9-D357********
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      datasetItemId: 'DatasetItemId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasetItemId: 'string',
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

