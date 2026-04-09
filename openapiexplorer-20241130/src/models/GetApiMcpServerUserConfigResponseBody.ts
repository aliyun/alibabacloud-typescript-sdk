// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetApiMcpServerUserConfigResponseBody extends $dara.Model {
  /**
   * @example
   * 162302724684579*
   */
  accountId?: string;
  /**
   * @example
   * true
   */
  enablePublicAccess?: boolean;
  /**
   * @example
   * 2025-11-10T06:58:39Z
   */
  gmtCreate?: string;
  /**
   * @example
   * 2025-11-10T06:58:39Z
   */
  gmtModified?: string;
  /**
   * @example
   * A707AFA8-1A4C-5B2A-A165-8436C1EA38DB
   */
  requestId?: string;
  vpcWhitelists?: string[];
  static names(): { [key: string]: string } {
    return {
      accountId: 'accountId',
      enablePublicAccess: 'enablePublicAccess',
      gmtCreate: 'gmtCreate',
      gmtModified: 'gmtModified',
      requestId: 'requestId',
      vpcWhitelists: 'vpcWhitelists',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      enablePublicAccess: 'boolean',
      gmtCreate: 'string',
      gmtModified: 'string',
      requestId: 'string',
      vpcWhitelists: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.vpcWhitelists)) {
      $dara.Model.validateArray(this.vpcWhitelists);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

