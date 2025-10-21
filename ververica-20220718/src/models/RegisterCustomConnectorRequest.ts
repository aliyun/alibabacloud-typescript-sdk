// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RegisterCustomConnectorRequest extends $dara.Model {
  /**
   * @remarks
   * The URL in which the JAR package of the custom connector is stored. The platform must be able to access this address.
   * 
   * This parameter is required.
   * 
   * @example
   * oss://flink/connector/mysql123
   */
  jarUrl?: string;
  static names(): { [key: string]: string } {
    return {
      jarUrl: 'jarUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jarUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

