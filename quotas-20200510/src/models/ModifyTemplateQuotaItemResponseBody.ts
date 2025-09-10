// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyTemplateQuotaItemResponseBody extends $dara.Model {
  /**
   * @example
   * 1****
   */
  id?: string;
  /**
   * @example
   * D47B3A10-CDAC-5412-B2EE-EC9A3DBE9053
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
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

