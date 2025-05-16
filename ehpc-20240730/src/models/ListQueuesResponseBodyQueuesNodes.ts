// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListQueuesResponseBodyQueuesNodes extends $dara.Model {
  /**
   * @remarks
   * The number of compute nodes that are not ready.
   * 
   * @example
   * 2
   */
  creatingCounts?: number;
  /**
   * @remarks
   * The number of malfunctioning compute nodes.
   * 
   * @example
   * 0
   */
  exceptionCounts?: number;
  /**
   * @remarks
   * The number of running compute nodes.
   * 
   * @example
   * 1
   */
  runningCounts?: number;
  static names(): { [key: string]: string } {
    return {
      creatingCounts: 'CreatingCounts',
      exceptionCounts: 'ExceptionCounts',
      runningCounts: 'RunningCounts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creatingCounts: 'number',
      exceptionCounts: 'number',
      runningCounts: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

