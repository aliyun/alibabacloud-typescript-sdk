// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAppServiceDetailResponseBodyDataMethodsParameterDefinitions extends $dara.Model {
  /**
   * @remarks
   * The description of the parameter.
   * 
   * @example
   * description
   */
  description?: string;
  /**
   * @remarks
   * The name of the parameter.
   * 
   * @example
   * arg0
   */
  name?: string;
  /**
   * @remarks
   * The type of the parameter.
   * 
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

