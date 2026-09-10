// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteMaintainWindowResponseBody extends $dara.Model {
  /**
   * @example
   * 123-12-312-31-23123
   */
  maintainWindowId?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 8FDE2569-626B-5176-9844-28877A*****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      maintainWindowId: 'maintainWindowId',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maintainWindowId: 'string',
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

