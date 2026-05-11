// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateJobRecordDurationRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30
   */
  jobRecordDuration?: number;
  static names(): { [key: string]: string } {
    return {
      jobRecordDuration: 'JobRecordDuration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobRecordDuration: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

