// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SwitchoverInstanceResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The message of the switchover.
   * 
   * @example
   * delete tag-value success
   */
  message?: string;
  /**
   * @remarks
   * Whether the switchover is successful.
   * - true: the switchover succeeded.
   * - false: the switchover failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
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

