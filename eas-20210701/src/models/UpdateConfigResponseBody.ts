// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * The time the configuration was created.
   * 
   * @example
   * 2024-01-15T10:30:00Z
   */
  createdAt?: string;
  /**
   * @remarks
   * The dynamic parameter name.
   * 
   * @example
   * llm_gateway.route_policy
   */
  key?: string;
  /**
   * @remarks
   * The time the configuration was last updated.
   * 
   * @example
   * 2024-01-15T11:00:00Z
   */
  updatedAt?: string;
  /**
   * @remarks
   * The dynamic parameter value.
   * 
   * @example
   * {"model": "gpt-4-turbo"}
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

