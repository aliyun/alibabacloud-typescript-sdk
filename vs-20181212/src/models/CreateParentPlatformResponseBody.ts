// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateParentPlatformResponseBody extends $dara.Model {
  /**
   * @remarks
   * 上级平台ID。
   * 
   * @example
   * 359*****374-cn-qingdao
   */
  id?: string;
  /**
   * @remarks
   * 请求ID。
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

