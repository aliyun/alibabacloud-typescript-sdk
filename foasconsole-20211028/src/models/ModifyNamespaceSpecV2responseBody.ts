// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyNamespaceSpecV2ResponseBody extends $dara.Model {
  /**
   * @example
   * 23A9C718-DDAB-1696-B025-18FBC830F7C5
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
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

