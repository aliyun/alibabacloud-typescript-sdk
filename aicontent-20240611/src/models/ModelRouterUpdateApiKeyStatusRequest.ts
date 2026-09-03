// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModelRouterUpdateApiKeyStatusRequest extends $dara.Model {
  /**
   * @remarks
   * The status of the API key. Valid values:
   * 
   * - active: The API key is valid.
   * - disabled: The API key is invalid.
   * 
   * @example
   * active
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

