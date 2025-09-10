// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteTemplateQuotaItemResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the quota template.
   * 
   * @example
   * 1****
   */
  id?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
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

