// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVsStreamsNotifyUrlConfigResponseBodyLiveStreamsNotifyConfig extends $dara.Model {
  authKey?: string;
  authType?: string;
  /**
   * @example
   * example.aliyundoc.com
   */
  domainName?: string;
  notifyUrl?: string;
  static names(): { [key: string]: string } {
    return {
      authKey: 'AuthKey',
      authType: 'AuthType',
      domainName: 'DomainName',
      notifyUrl: 'NotifyUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authKey: 'string',
      authType: 'string',
      domainName: 'string',
      notifyUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

