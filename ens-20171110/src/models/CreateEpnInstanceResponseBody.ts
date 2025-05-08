// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateEpnInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the EPN instance.
   * 
   * @example
   * epn-xxxxx
   */
  EPNInstanceId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * CEF72CEB-54B6-4AE8-B225-F876FF7BA984
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      EPNInstanceId: 'EPNInstanceId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      EPNInstanceId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

