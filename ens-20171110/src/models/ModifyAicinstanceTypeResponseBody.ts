// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyAICInstanceTypeResponseBody extends $dara.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * F590DD6C-B78B-571B-8FE9-B6ECEED9BE3C
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

