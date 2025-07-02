// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Destination extends $dara.Model {
  /**
   * @example
   * acs:fc:cn-shanghai:xxx:functions/f1
   */
  destination?: string;
  static names(): { [key: string]: string } {
    return {
      destination: 'destination',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destination: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

