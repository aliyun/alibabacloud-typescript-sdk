// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateAssetScopeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The unique identifier of the request, used to troubleshoot and locate issues.
   * 
   * @example
   * 01A157FA-F957-3A5A-A6B8-5BBB8ADB****
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

