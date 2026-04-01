// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyRCSecurityGroupPermissionResponseBody extends $dara.Model {
  /**
   * @example
   * AB44DC0A-7E77-442A-97A9-C6418694CB22
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

