// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAccountAccessIdResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The AccessKey ID of the cloud account that is added to the threat analysis feature.
   * 
   * @example
   * ABCXXXXXXXX
   */
  accessId?: string;
  /**
   * @remarks
   * The MD5 hash value of the AccessKey ID.
   * 
   * @example
   * abcXXXXXXXX
   */
  accessIdMd5?: string;
  /**
   * @remarks
   * The ID of the cloud account.
   * 
   * @example
   * 123xxxxxxx
   */
  accountId?: string;
  /**
   * @remarks
   * The information about the cloud account to which the AccessKey ID belongs. The value is in the following format: Alibaba Cloud account ID|Alibaba Cloud account username|AccessKey ID.
   * 
   * @example
   * 123xxxxxx|xxxx|ABCXXXXX
   */
  accountStr?: string;
  /**
   * @remarks
   * Indicates whether the cloud account to which the AccessKey ID belongs is added to the threat analysis feature. Valid values:
   * 
   * *   0: no
   * *   1: yes
   * 
   * @example
   * 1
   */
  bound?: number;
  /**
   * @remarks
   * The code of the cloud service provider.
   * 
   * @example
   * hcloud
   */
  cloudCode?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account that is used to add the third-party cloud account.
   * 
   * @example
   * ABCXXXXXXXX
   */
  subUserId?: number;
  static names(): { [key: string]: string } {
    return {
      accessId: 'AccessId',
      accessIdMd5: 'AccessIdMd5',
      accountId: 'AccountId',
      accountStr: 'AccountStr',
      bound: 'Bound',
      cloudCode: 'CloudCode',
      subUserId: 'SubUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessId: 'string',
      accessIdMd5: 'string',
      accountId: 'string',
      accountStr: 'string',
      bound: 'number',
      cloudCode: 'string',
      subUserId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

