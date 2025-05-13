// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateApmRequest extends $dara.Model {
  /**
   * @example
   * APMtest
   */
  description?: string;
  /**
   * @example
   * es-cn-i7m2fsfhc001x****
   */
  outputES?: string;
  /**
   * @example
   * ESPassword****
   */
  outputESPassword?: string;
  /**
   * @example
   * elastic
   */
  outputESUserName?: string;
  /**
   * @example
   * AMPPassword****
   */
  token?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      outputES: 'outputES',
      outputESPassword: 'outputESPassword',
      outputESUserName: 'outputESUserName',
      token: 'token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      outputES: 'string',
      outputESPassword: 'string',
      outputESUserName: 'string',
      token: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

