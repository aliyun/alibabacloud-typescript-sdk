// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteAIDBClusterDatasetResponseBody extends $dara.Model {
  /**
   * @example
   * pcs-2zeei***
   */
  dataServiceId?: string;
  /**
   * @example
   * pds-xxxxxxxxxxxxxxxx
   */
  datasetId?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * CD35F3-F3-44CA-AFFF-BAF869******
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      dataServiceId: 'DataServiceId',
      datasetId: 'DatasetId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataServiceId: 'string',
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

