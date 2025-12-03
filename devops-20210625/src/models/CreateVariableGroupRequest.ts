// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateVariableGroupRequest extends $dara.Model {
  /**
   * @example
   * 变量组
   */
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 变量组
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * [{"isEncrypted":true,"name":"name1","value":"vaue1"}]
   */
  variables?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      name: 'name',
      variables: 'variables',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      variables: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

