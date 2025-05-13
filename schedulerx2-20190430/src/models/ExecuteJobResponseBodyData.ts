// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExecuteJobResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The job instance ID.
   * 
   * @example
   * 11111111
   */
  jobInstanceId?: number;
  static names(): { [key: string]: string } {
    return {
      jobInstanceId: 'JobInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobInstanceId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

