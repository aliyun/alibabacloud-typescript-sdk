// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetWorkspaceAgenticFsMountRamAuthorizeUrlRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the target NAS access point. This parameter corresponds to the server and fileSystemId parameters.
   * 
   * This parameter is required.
   * 
   * @example
   * ap-0123456789abcdef0
   */
  accessPointId?: string;
  /**
   * @remarks
   * The ID of the NAS file system to which the target access point belongs. This parameter corresponds to the server and accessPointId parameters.
   * 
   * This parameter is required.
   * 
   * @example
   * 0123456789
   */
  fileSystemId?: string;
  /**
   * @remarks
   * The domain name of the target access point. Obtain this value from the DomainName field in the NAS ListAccessPoints response. Do not include the protocol, port, or path.
   * 
   * This parameter is required.
   * 
   * @example
   * ap-0123456789abcdef0.0123456789-vlm36.cn-hangzhou.nas.aliyuncs.com
   */
  server?: string;
  static names(): { [key: string]: string } {
    return {
      accessPointId: 'accessPointId',
      fileSystemId: 'fileSystemId',
      server: 'server',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessPointId: 'string',
      fileSystemId: 'string',
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

