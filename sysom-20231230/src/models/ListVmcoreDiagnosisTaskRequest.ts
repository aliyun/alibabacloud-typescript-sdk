// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListVmcoreDiagnosisTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The number of past days for which to query tasks. Maximum value: 30.
   * 
   * This parameter is required.
   * 
   * @example
   * 3
   */
  days?: number;
  static names(): { [key: string]: string } {
    return {
      days: 'days',
    };
  }

  static types(): { [key: string]: any } {
    return {
      days: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

