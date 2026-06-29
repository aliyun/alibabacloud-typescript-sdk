// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRegionsRequest extends $dara.Model {
  /**
   * @remarks
   * A parameter to ensure idempotence.
   * 
   * > This parameter ensures that each request is processed only once. Generate a unique value on the client for each request. The value can be up to 64 ASCII characters long and must not contain non-ASCII characters.
   * 
   * @example
   * ETnLKlblzczshOTUbOCzxxxxxxxxxx
   */
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

