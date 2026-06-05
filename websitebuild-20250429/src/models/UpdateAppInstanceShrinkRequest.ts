// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateAppInstanceShrinkRequest extends $dara.Model {
  /**
   * @example
   * Application
   */
  applicationType?: string;
  /**
   * @example
   * WD20250703155602000001
   */
  bizId?: string;
  /**
   * @example
   * 123
   */
  clientToken?: string;
  /**
   * @example
   * ChineseMainland
   */
  deployArea?: string;
  /**
   * @example
   * description
   */
  description?: string;
  /**
   * @example
   * {\\"user_device_id\\":\\"6bef45cb0c76de284d24de074c088b73\\"}\\n
   */
  extend?: string;
  /**
   * @example
   * https://app-center-icon-prod-shanghai.oss-cn-shanghai.aliyuncs.com/tenant/1864953777494693/1753841032702_WX20250729-171155%402x.png
   */
  iconUrl?: string;
  name?: string;
  /**
   * @example
   * AUTO_PAY
   */
  paymentType?: string;
  /**
   * @example
   * rg-aek3cqkrqibqkby
   */
  resourceGroupId?: string;
  /**
   * @example
   * Basic_Edition
   */
  siteVersion?: string;
  tagsShrink?: string;
  /**
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

