// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PublishFlowVersionInput extends $dara.Model {
  /**
   * @remarks
   * 工作流版本的描述信息
   * 
   * @example
   * Version 1.0 - Initial release
   */
  description?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

