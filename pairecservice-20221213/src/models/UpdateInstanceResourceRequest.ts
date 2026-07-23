// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateInstanceResourceRequest extends $dara.Model {
  /**
   * @remarks
   * The resource configuration.
   * 
   * @example
   * {}
   */
  config?: string;
  /**
   * @remarks
   * The resource address.
   * 
   * @example
   * bucket-test-123
   */
  uri?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
      uri: 'Uri',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: 'string',
      uri: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

