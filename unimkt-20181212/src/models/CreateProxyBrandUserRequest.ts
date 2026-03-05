// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateProxyBrandUserRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  brandUserNick?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  channelId?: string;
  clientToken?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  company?: string;
  contactName?: string;
  contactPhone?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  industry?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  proxyUserId?: number;
  static names(): { [key: string]: string } {
    return {
      brandUserNick: 'BrandUserNick',
      channelId: 'ChannelId',
      clientToken: 'ClientToken',
      company: 'Company',
      contactName: 'ContactName',
      contactPhone: 'ContactPhone',
      industry: 'Industry',
      proxyUserId: 'ProxyUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      brandUserNick: 'string',
      channelId: 'string',
      clientToken: 'string',
      company: 'string',
      contactName: 'string',
      contactPhone: 'string',
      industry: 'string',
      proxyUserId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

