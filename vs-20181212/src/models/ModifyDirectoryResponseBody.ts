// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDirectoryResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the directory.
   * 
   * @example
   * 399*****488-cn-qingdao
   */
  id?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * BEA5625F-8FCF-48F4-851B-CA63946DA664
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

