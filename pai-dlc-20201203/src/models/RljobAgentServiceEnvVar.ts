// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RLJobAgentServiceEnvVar extends $dara.Model {
  /**
   * @remarks
   * The name of the environment variable, which must be non-empty and unique within the list.
   * 
   * This parameter is required.
   * 
   * @example
   * E2B_DOMAIN
   */
  name?: string;
  /**
   * @remarks
   * The value of the environment variable.
   * 
   * @example
   * example.com
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

