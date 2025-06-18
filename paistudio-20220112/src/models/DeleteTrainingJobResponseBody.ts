// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteTrainingJobResponseBody extends $dara.Model {
  /**
   * @example
   * 4cc83062-9bcb-4ab3-979e-2e571a35834f
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

