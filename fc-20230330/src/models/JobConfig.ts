// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class JobConfig extends $dara.Model {
  /**
   * @example
   * 3
   */
  maxRetryTime?: number;
  /**
   * @example
   * 60
   */
  triggerInterval?: number;
  static names(): { [key: string]: string } {
    return {
      maxRetryTime: 'maxRetryTime',
      triggerInterval: 'triggerInterval',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxRetryTime: 'number',
      triggerInterval: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

