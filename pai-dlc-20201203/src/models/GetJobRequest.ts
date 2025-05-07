// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetJobRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to return the job details. Default value: true.
   * 
   * @example
   * true
   */
  needDetail?: boolean;
  static names(): { [key: string]: string } {
    return {
      needDetail: 'NeedDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      needDetail: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

