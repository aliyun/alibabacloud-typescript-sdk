// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckImageExistsRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * demoinstance1
   */
  instanceName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2092061_1
   */
  picName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2092061_1
   */
  productId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceName: 'InstanceName',
      picName: 'PicName',
      productId: 'ProductId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceName: 'string',
      picName: 'string',
      productId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

