// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDomainsByLogConfigIdRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the custom configuration.
   * 
   * This parameter is required.
   * 
   * @example
   * 123
   */
  configId?: string;
  static names(): { [key: string]: string } {
    return {
      configId: 'ConfigId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

