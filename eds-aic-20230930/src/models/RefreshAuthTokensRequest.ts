// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RefreshAuthTokensRequest extends $dara.Model {
  /**
   * @remarks
   * The validity period in seconds.
   * 
   * @example
   * 600
   */
  expireSeconds?: number;
  /**
   * @remarks
   * The list of instance IDs.
   * 
   * @example
   * acp-2zef0gov2nh2l3xxx,acp-2zef0gov2nh2l3yyy
   */
  instanceIds?: string;
  /**
   * @remarks
   * The list of license keys.
   * 
   * @example
   * lk-abcdef1234567890,lk-abcdef1234567891
   */
  licenseKeys?: string;
  static names(): { [key: string]: string } {
    return {
      expireSeconds: 'ExpireSeconds',
      instanceIds: 'InstanceIds',
      licenseKeys: 'LicenseKeys',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expireSeconds: 'number',
      instanceIds: 'string',
      licenseKeys: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

