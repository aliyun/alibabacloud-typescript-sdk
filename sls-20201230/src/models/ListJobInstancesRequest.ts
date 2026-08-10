// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListJobInstancesRequest extends $dara.Model {
  /**
   * @remarks
   * The owner of the job.
   * 
   * @example
   * 12312
   */
  callerOwner?: string;
  /**
   * @remarks
   * The end time.
   * 
   * @example
   * 1784237598
   */
  end?: number;
  /**
   * @remarks
   * The start row of the query.
   * 
   * @example
   * 0
   */
  offset?: number;
  /**
   * @remarks
   * The number of rows per page for a paged query.
   * 
   * @example
   * 100
   */
  size?: number;
  /**
   * @remarks
   * The start time.
   * 
   * @example
   * 1784151198
   */
  start?: number;
  /**
   * @remarks
   * The current execution status.
   * 
   * @example
   * Running
   */
  state?: string;
  static names(): { [key: string]: string } {
    return {
      callerOwner: 'callerOwner',
      end: 'end',
      offset: 'offset',
      size: 'size',
      start: 'start',
      state: 'state',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callerOwner: 'string',
      end: 'number',
      offset: 'number',
      size: 'number',
      start: 'number',
      state: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

