// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AppStackInstanceParameters extends $dara.Model {
  /**
   * @example
   * regionId
   */
  name?: string;
  /**
   * @example
   * cn-hangzhou
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
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

