// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetOptionValueForProjectResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data returned In the example, cuNumber is a custom key.
   * 
   * @example
   * {"cuNumber":"0"}
   */
  optionValue?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * E6F0DBDD-5AD****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      optionValue: 'OptionValue',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      optionValue: 'string',
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

