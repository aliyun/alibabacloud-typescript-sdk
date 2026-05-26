// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateConfigResponseBody extends $dara.Model {
  /**
   * @example
   * 2024-01-01T00:00:00Z
   */
  createdAt?: string;
  /**
   * @example
   * model-config
   */
  key?: string;
  /**
   * @example
   * 2024-01-01T00:00:00Z
   */
  updatedAt?: string;
  /**
   * @example
   * {"model": "gpt-4"}
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      createdAt: 'CreatedAt',
      key: 'Key',
      updatedAt: 'UpdatedAt',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdAt: 'string',
      key: 'string',
      updatedAt: 'string',
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

