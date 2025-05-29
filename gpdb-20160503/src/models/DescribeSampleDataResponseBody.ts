// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSampleDataResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * gp-bp12ga6v69h86****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The error message returned if an error occurs. This message does not affect the execution of the operation.
   * 
   * @example
   * ******
   */
  errorMessage?: string;
  /**
   * @remarks
   * Indicates whether a sample dataset is loaded to the instance. Valid values:
   * 
   * *   **true**: A sample dataset is loaded.
   * *   **false**: No sample dataset is loaded.
   * 
   * @example
   * true
   */
  hasSampleData?: boolean;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 84CD7CAF-FA7B-5178-B19F-D8CDE307D5FA_8111
   */
  requestId?: string;
  /**
   * @remarks
   * The loading status of the sample dataset. Valid values:
   * 
   * *   **loaded**
   * *   **loading**
   * *   **unload**
   * 
   * @example
   * loaded
   */
  sampleDataStatus?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      errorMessage: 'ErrorMessage',
      hasSampleData: 'HasSampleData',
      requestId: 'RequestId',
      sampleDataStatus: 'SampleDataStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      errorMessage: 'string',
      hasSampleData: 'boolean',
      requestId: 'string',
      sampleDataStatus: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

