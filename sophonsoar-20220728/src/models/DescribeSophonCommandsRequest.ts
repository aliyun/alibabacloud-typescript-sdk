// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSophonCommandsRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the command. Fuzzy match is supported.
   * 
   * @example
   * waf_process
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

