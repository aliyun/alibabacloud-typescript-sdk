// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateExperimentResponseBody extends $dara.Model {
  /**
   * @remarks
   * The Job ID returned if the creation API is implemented asynchronously.
   * 
   * @example
   * ID of the experiment created by the API request
   */
  experimentId?: string;
  /**
   * @remarks
   * Id of the request
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

