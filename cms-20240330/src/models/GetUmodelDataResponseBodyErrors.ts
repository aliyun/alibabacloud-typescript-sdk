// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetUmodelDataResponseBodyErrors extends $dara.Model {
  /**
   * @example
   * ok
   */
  message?: string;
  /**
   * @example
   * external
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'message',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

