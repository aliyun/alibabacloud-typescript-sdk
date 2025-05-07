// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPropertiesResponseBodyDataWanxiangImageSizeConfig extends $dara.Model {
  /**
   * @example
   * 1:1
   */
  name?: string;
  /**
   * @example
   * 1024*1024
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

