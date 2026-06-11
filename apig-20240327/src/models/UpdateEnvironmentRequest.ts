// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateEnvironmentRequest extends $dara.Model {
  /**
   * @remarks
   * Schema of Response
   * 
   * This parameter is required.
   * 
   * @example
   * 测试环境
   */
  alias?: string;
  /**
   * @remarks
   * The status code returned.
   * 
   * @example
   * 这是xx的xx项目测试环境
   */
  description?: string;
  static names(): { [key: string]: string } {
    return {
      alias: 'alias',
      description: 'description',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alias: 'string',
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

