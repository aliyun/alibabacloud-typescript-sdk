// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDatasetJobConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * The configuration ID.
   * 
   * @example
   * dscfg-xxxxxxxxxxxxxx
   */
  datasetJobConfigId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 5A14FA81-DD4E-******-6343FE44B941
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      datasetJobConfigId: 'DatasetJobConfigId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasetJobConfigId: 'string',
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

