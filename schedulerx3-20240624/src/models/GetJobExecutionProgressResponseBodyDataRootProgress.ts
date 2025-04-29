// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetJobExecutionProgressResponseBodyDataRootProgress extends $dara.Model {
  /**
   * @example
   * 2
   */
  finished?: number;
  /**
   * @example
   * 2
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      finished: 'Finished',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      finished: 'number',
      total: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

