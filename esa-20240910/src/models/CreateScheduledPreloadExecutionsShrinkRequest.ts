// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateScheduledPreloadExecutionsShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  executionsShrink?: string;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      executionsShrink: 'Executions',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      executionsShrink: 'string',
      id: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

