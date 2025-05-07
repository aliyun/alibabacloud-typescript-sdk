// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPropertiesResponseBodyDataWanxiangImageStyleConfig extends $dara.Model {
  name?: string;
  /**
   * @example
   * https://img.alicdn.com/imgextra/i4/O1CN01RzKicz1W0YWzYkWcK_!!6000000002726-2-tps-132-104.png
   */
  pic?: string;
  /**
   * @example
   * <auto>
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      pic: 'Pic',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      pic: 'string',
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

