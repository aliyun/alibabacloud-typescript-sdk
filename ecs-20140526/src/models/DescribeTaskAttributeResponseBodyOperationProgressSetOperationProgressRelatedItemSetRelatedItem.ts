// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTaskAttributeResponseBodyOperationProgressSetOperationProgressRelatedItemSetRelatedItem extends $dara.Model {
  /**
   * @remarks
   * The name of the related item.
   * 
   * @example
   * OSSObject
   */
  name?: string;
  /**
   * @remarks
   * The value of the related item.
   * 
   * @example
   * MYOSSPRE_m-23f8tcp***_t-23ym6mv***.vhd
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

