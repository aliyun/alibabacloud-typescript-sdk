// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2024-01-01T00:00:00Z
   */
  createdAt?: string;
  /**
   * @remarks
   * The dynamic parameter name.
   * 
   * @example
   * model-config
   */
  key?: string;
  /**
   * @remarks
   * The update time.
   * 
   * @example
   * 2024-01-01T00:00:00Z
   */
  updatedAt?: string;
  /**
   * @remarks
   * The dynamic parameter value.
   * 
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

