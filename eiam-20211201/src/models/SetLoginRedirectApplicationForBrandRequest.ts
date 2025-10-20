// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetLoginRedirectApplicationForBrandRequest extends $dara.Model {
  /**
   * @remarks
   * 应用ID
   * 
   * This parameter is required.
   * 
   * @example
   * app_xxxx
   */
  applicationId?: string;
  /**
   * @remarks
   * 品牌化Id
   * 
   * This parameter is required.
   * 
   * @example
   * brand_xxxx
   */
  brandId?: string;
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
      applicationId: 'ApplicationId',
      brandId: 'BrandId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
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

