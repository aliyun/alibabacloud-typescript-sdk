// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EnablePolicyTypeResponseBody extends $dara.Model {
  /**
   * @example
   * 6E27F22C-EDA3-132E-A53F-77DE3BC2343D
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

