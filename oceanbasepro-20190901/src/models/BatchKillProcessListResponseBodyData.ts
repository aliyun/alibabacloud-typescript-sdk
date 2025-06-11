// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchKillProcessListResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the calling is successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

