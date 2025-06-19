// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDefenseResourceResponseBody extends $dara.Model {
  /**
   * @example
   * 1738C613-D054-5191-888B-DC0CF4C3A4A0
   */
  requestId?: string;
  /**
   * @example
   * cdX.XXX-call.cn-alb
   */
  resource?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resource: 'Resource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resource: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

