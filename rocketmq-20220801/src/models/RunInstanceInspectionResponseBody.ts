// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunInstanceInspectionResponseBody extends $dara.Model {
  /**
   * @example
   * inspection-run-001
   */
  runId?: string;
  static names(): { [key: string]: string } {
    return {
      runId: 'runId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      runId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

