// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateExperimentResponseBody extends $dara.Model {
  /**
   * @remarks
   * If the call is asynchronous, the API returns a JobId.
   * 
   * @example
   * ExperimentId-example-id-****
   */
  experimentId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * Request ID
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      experimentId: 'ExperimentId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      experimentId: 'string',
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

