// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModelProviderSchema extends $dara.Model {
  detail?: string;
  /**
   * @example
   * OpenAPI
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      detail: 'detail',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detail: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

