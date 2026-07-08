// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateAppInstanceShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The application type.
   * 
   * @example
   * Application
   */
  applicationType?: string;
  /**
   * @remarks
   * The business ID.
   * 
   * @example
   * WD20250703155602000001
   */
  bizId?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. Generate a unique value from your client. The ClientToken value can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * 123
   */
  clientToken?: string;
  /**
   * @remarks
   * The deployment region.
   * 
   * @example
   * ChineseMainland
   */
  deployArea?: string;
  /**
   * @remarks
   * The application description.
   * 
   * @example
   * description
   */
  description?: string;
  /**
   * @remarks
   * The extended information.
   * 
   * @example
   * {\\"user_device_id\\":\\"6bef45cb0c76de284d24de074c088b73\\"}\\n
   */
  extend?: string;
  /**
   * @remarks
   * The application icon URL.
   * 
   * @example
   * https://app-center-icon-prod-shanghai.oss-cn-shanghai.aliyuncs.com/tenant/1864953777494693/1753841032702_WX20250729-171155%402x.png
   */
  iconUrl?: string;
  /**
   * @remarks
   * The application name.
   * 
   * @example
   * 大角鹿
   */
  name?: string;
  /**
   * @remarks
   * The payment type.
   * 
   * @example
   * AUTO_PAY
   */
  paymentType?: string;
  /**
   * @remarks
   * The ID of the resource group to which the instance belongs.
   * 
   * @example
   * rg-aek3cqkrqibqkby
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The website version.
   * 
   * @example
   * Basic_Edition
   */
  siteVersion?: string;
  /**
   * @remarks
   * The tags.
   */
  tagsShrink?: string;
  /**
   * @remarks
   * The application thumbnail URL.
   * 
   * @example
   * http://www.aliyun.com
   */
  thumbnailUrl?: string;
  static names(): { [key: string]: string } {
    return {
      applicationType: 'ApplicationType',
      bizId: 'BizId',
      clientToken: 'ClientToken',
      deployArea: 'DeployArea',
      description: 'Description',
      extend: 'Extend',
      iconUrl: 'IconUrl',
      name: 'Name',
      paymentType: 'PaymentType',
      resourceGroupId: 'ResourceGroupId',
      siteVersion: 'SiteVersion',
      tagsShrink: 'Tags',
      thumbnailUrl: 'ThumbnailUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationType: 'string',
      bizId: 'string',
      clientToken: 'string',
      deployArea: 'string',
      description: 'string',
      extend: 'string',
      iconUrl: 'string',
      name: 'string',
      paymentType: 'string',
      resourceGroupId: 'string',
      siteVersion: 'string',
      tagsShrink: 'string',
      thumbnailUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

