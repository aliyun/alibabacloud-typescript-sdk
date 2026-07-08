// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateAppInstanceRequestTags extends $dara.Model {
  /**
   * @remarks
   * The tag key of the instance. Valid values of N: **1** to **20**. The tag key cannot be an empty string.
   * 
   * The tag key can be up to 64 characters in length and cannot start with `aliyun` or `acs:`. The tag key cannot contain `http://` or `https://`.
   * 
   * @example
   * Group
   */
  tagKey?: string;
  /**
   * @remarks
   * The tag value of the instance. Valid values of N: **1** to **20**. The tag value can be an empty string.
   * 
   * The tag value can be up to 128 characters in length and cannot start with `aliyun` or `acs:`. The tag value cannot contain `http://` or `https://`.
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
  tags?: UpdateAppInstanceRequestTags[];
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

