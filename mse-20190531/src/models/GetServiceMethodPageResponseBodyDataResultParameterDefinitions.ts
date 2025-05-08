// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetServiceMethodPageResponseBodyDataResultParameterDefinitions extends $dara.Model {
  /**
   * @example
   * 参数描述示例
   */
  description?: string;
  /**
   * @example
   * aParam
   */
  name?: string;
  /**
   * @example
   * java.lang.String
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
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

