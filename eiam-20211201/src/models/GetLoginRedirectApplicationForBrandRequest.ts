// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetLoginRedirectApplicationForBrandRequest extends $dara.Model {
  /**
   * @remarks
   * The brand ID.
   * 
   * This parameter is required.
   * 
   * @example
   * brand_xxxx
   */
  brandId?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      brandId: 'BrandId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      brandId: 'string',
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

