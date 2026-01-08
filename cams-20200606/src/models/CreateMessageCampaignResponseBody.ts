// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateMessageCampaignResponseBody extends $dara.Model {
  /**
   * @example
   * None
   */
  accessDeniedDetail?: string;
  /**
   * @example
   * 39***
   */
  campaignId?: string;
  /**
   * @example
   * OK
   */
  code?: string;
  /**
   * @example
   * 示例值示例值
   */
  message?: string;
  /**
   * @example
   * 示例值示例值
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      campaignId: 'CampaignId',
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      campaignId: 'string',
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

