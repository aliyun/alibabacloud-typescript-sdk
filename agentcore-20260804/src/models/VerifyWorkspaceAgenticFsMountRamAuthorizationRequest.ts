// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class VerifyWorkspaceAgenticFsMountRamAuthorizationRequest extends $dara.Model {
  /**
   * @remarks
   * The domain name of the target AccessPoint, obtained from the DomainName field of NAS ListAccessPoints. Do not include the protocol, port, or path.
   * 
   * This parameter is required.
   * 
   * @example
   * ap-0123456789abcdef0.0123456789-vlm36.cn-hangzhou.nas.aliyuncs.com
   */
  server?: string;
  static names(): { [key: string]: string } {
    return {
      server: 'server',
    };
  }

  static types(): { [key: string]: any } {
    return {
      server: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

