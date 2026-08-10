// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetJobInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The owner of the job.
   * 
   * @example
   * 12312
   */
  callerOwner?: string;
  static names(): { [key: string]: string } {
    return {
      callerOwner: 'callerOwner',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callerOwner: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

