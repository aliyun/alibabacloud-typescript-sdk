// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SwitchOverMajorVersionUpgradeResponseBody extends $dara.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 17F57FEE-EA4F-4337-8D2E-9C23CAA63D74
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

