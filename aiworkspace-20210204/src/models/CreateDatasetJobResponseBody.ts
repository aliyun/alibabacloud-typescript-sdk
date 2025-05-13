// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDatasetJobResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the dataset job.
   * 
   * @example
   * dsjob-9jx1******uj9e
   */
  datasetJobId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 99341606-****-0757724D97EE
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      datasetJobId: 'DatasetJobId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasetJobId: 'string',
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

