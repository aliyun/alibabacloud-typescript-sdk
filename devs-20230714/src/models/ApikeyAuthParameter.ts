// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class APIKeyAuthParameter extends $dara.Model {
  encrypted?: boolean;
  /**
   * @example
   * header
   */
  in?: string;
  /**
   * @example
   * Authorization
   */
  key?: string;
  /**
   * @example
   * mock_value
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      encrypted: 'encrypted',
      in: 'in',
      key: 'key',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      encrypted: 'boolean',
      in: 'string',
      key: 'string',
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

