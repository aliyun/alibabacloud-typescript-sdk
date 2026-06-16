// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateConsumerAPIKeyInput extends $dara.Model {
  /**
   * @remarks
   * Indicates if the key is active.
   * 
   * @example
   * false
   */
  active?: boolean;
  /**
   * @remarks
   * A new description for the key.
   * 
   * @example
   * 更新后的密钥描述
   */
  description?: string;
  static names(): { [key: string]: string } {
    return {
      active: 'active',
      description: 'description',
    };
  }

  static types(): { [key: string]: any } {
    return {
      active: 'boolean',
      description: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

