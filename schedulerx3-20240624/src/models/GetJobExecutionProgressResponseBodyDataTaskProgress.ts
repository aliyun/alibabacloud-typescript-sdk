// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetJobExecutionProgressResponseBodyDataTaskProgress extends $dara.Model {
  /**
   * @example
   * 100
   */
  failed?: number;
  /**
   * @example
   * calendar_test_2
   */
  name?: string;
  /**
   * @example
   * 10
   */
  pulled?: number;
  /**
   * @example
   * 100
   */
  queue?: number;
  /**
   * @example
   * 1
   */
  running?: number;
  /**
   * @example
   * 100
   */
  success?: number;
  /**
   * @example
   * 1000
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      failed: 'Failed',
      name: 'Name',
      pulled: 'Pulled',
      queue: 'Queue',
      running: 'Running',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failed: 'number',
      name: 'string',
      pulled: 'number',
      queue: 'number',
      running: 'number',
      success: 'number',
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

