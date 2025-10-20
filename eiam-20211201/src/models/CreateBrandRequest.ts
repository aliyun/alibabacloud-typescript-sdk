// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateBrandRequest extends $dara.Model {
  /**
   * @remarks
   * 品牌化名称
   * 
   * This parameter is required.
   * 
   * @example
   * Custom Brand
   */
  brandName?: string;
  /**
   * @remarks
   * IDaaS EIAM实例的ID。
   * 
   * This parameter is required.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      brandName: 'BrandName',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      brandName: 'string',
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

