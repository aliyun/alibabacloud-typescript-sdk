// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateExperimentResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned data. If the operation is asynchronously implemented, the job ID is returned.
   */
  experimentId?: string;
  /**
   * @remarks
   * The ID of the request.
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

