// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTrainingJobResponseBody extends $dara.Model {
  /**
   * @example
   * E7C42CC7-2E85-508A-84F4-923B605FD10F
   */
  requestId?: string;
  /**
   * @example
   * traineyfz0m2hsfv
   */
  trainingJobId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      trainingJobId: 'TrainingJobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      trainingJobId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

