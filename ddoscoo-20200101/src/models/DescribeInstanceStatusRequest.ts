// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstanceStatusRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  productType?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      productType: 'ProductType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      productType: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

