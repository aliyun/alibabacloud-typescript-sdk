// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UAIDVerificationResponseBodyData extends $dara.Model {
  /**
   * @example
   * B1E0C1********9F757AF52A035
   */
  uaid?: string;
  static names(): { [key: string]: string } {
    return {
      uaid: 'Uaid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      uaid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

