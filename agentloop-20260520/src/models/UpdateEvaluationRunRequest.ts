// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateEvaluationRunRequest extends $dara.Model {
  /**
   * @remarks
   * The target status. Currently, only stop-related statuses are supported.
   * 
   * @example
   * Terminated
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

