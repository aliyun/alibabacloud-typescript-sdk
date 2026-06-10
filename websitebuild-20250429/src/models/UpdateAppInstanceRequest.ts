// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateAppInstanceRequestTags extends $dara.Model {
  /**
   * @remarks
   * The tag key of the instance. Valid values for N: **1** to **20**. If you specify this parameter, it cannot be an empty string.
   * 
   * It can contain up to 64 characters, must not start with `aliyun` or `acs:`, and must not contain `http://` or `https://`.
   * 
   * @example
   * Group
   */
  tagKey?: string;
  /**
   * @remarks
   * The tag value of the instance. Valid values for N: **1** to **20**. If you specify this parameter, it can be an empty string.
   * 
   * It can contain up to 128 characters, must not start with `aliyun` or `acs:`, and must not contain `http://` or `https://`.
   * 
   * @example
   * 15
   */
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAppInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * Application type
   * 
   * @example
   * Application
   */
  applicationType?: string;
  /**
   * @remarks
   * Business ID
   * 
   * @example
   * WD20250703155602000001
   */
  bizId?: string;
  /**
   * @remarks
   * Ensures the idempotence of the request. Generate a unique value from your client for this parameter to guarantee uniqueness across different requests. ClientToken supports only ASCII characters and must not exceed 64 characters.
   * 
   * @example
   * 123
   */
  clientToken?: string;
  /**
   * @remarks
   * Deployment area
   * 
   * @example
   * ChineseMainland
   */
  deployArea?: string;
  /**
   * @remarks
   * Application description
   * 
   * @example
   * description
   */
  description?: string;
  /**
   * @remarks
   * Extension information
   * 
   * @example
   * {\\"user_device_id\\":\\"6bef45cb0c76de284d24de074c088b73\\"}\\n
   */
  extend?: string;
  /**
   * @remarks
   * Application icon
   * 
   * @example
   * https://app-center-icon-prod-shanghai.oss-cn-shanghai.aliyuncs.com/tenant/1864953777494693/1753841032702_WX20250729-171155%402x.png
   */
  iconUrl?: string;
  /**
   * @remarks
   * Application name
   * 
   * @example
   * 大角鹿
   */
  name?: string;
  /**
   * @remarks
   * Payment type
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
   * Website version
   * 
   * @example
   * Basic_Edition
   */
  siteVersion?: string;
  /**
   * @remarks
   * Tags.
   */
  tags?: UpdateAppInstanceRequestTags[];
  /**
   * @remarks
   * Application thumbnail
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
      tags: 'Tags',
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
      tags: { 'type': 'array', 'itemType': UpdateAppInstanceRequestTags },
      thumbnailUrl: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

