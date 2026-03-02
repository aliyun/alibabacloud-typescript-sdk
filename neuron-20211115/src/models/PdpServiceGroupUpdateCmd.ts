// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PdpServiceGroupUpdateCmd extends $dara.Model {
  /**
   * @example
   * 管理
   */
  alias?: string;
  /**
   * @example
   * 管理
   */
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  id?: number;
  static names(): { [key: string]: string } {
    return {
      alias: 'alias',
      description: 'description',
      id: 'id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alias: 'string',
      description: 'string',
      id: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

