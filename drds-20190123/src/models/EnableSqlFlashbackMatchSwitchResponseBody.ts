// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EnableSqlFlashbackMatchSwitchResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 463A5F0F-12AD-4544-A902-B2B983******
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether SqlFlashbackMatchSwitch is enabled or not.
   * 
   * @example
   * true
   */
  result?: boolean;
  /**
   * @remarks
   * Indicates whether the request was sent successfully or not.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'boolean',
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

