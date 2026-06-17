// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePolicyAdvancedConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status of strict mode. Valid values:
   * 
   * - **on**: Strict mode is enabled.
   * - **off**: Strict mode is disabled.
   * 
   * @example
   * off
   */
  internetSwitch?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 850A84D6-0DE4-4797-A1E8-00090125EEB1
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      internetSwitch: 'InternetSwitch',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      internetSwitch: 'string',
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

