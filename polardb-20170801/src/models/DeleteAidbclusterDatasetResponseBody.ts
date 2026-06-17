// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteAIDBClusterDatasetResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the Data Service instance.
   * 
   * @example
   * pcs-2zeei***
   */
  dataServiceId?: string;
  /**
   * @remarks
   * The dataset ID.
   * 
   * @example
   * pds-xxxxxxxxxxxxxxxx
   */
  datasetId?: string;
  /**
   * @remarks
   * The request ID.
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

