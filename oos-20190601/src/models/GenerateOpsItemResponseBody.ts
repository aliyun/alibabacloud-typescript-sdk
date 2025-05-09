// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GenerateOpsItemResponseBody extends $dara.Model {
  /**
   * @remarks
   * The O\\&M item list.
   */
  opsItemIds?: string[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * DA4F08D4-DA54-5407-84B9-108C71D75B17
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      opsItemIds: 'OpsItemIds',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      opsItemIds: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.opsItemIds)) {
      $dara.Model.validateArray(this.opsItemIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

