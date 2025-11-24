// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetVmMetaResponseBodyVmMetaInfo extends $dara.Model {
  /**
   * @remarks
   * The content of the EnvoyEnv file.
   * 
   * @example
   * ....
   */
  envoyEnvContent?: string;
  /**
   * @remarks
   * The content of the hosts file.
   * 
   * @example
   * ....
   */
  hostsContent?: string;
  /**
   * @remarks
   * The content of the Token file.
   * 
   * @example
   * ....
   */
  tokenContent?: string;
  static names(): { [key: string]: string } {
    return {
      envoyEnvContent: 'EnvoyEnvContent',
      hostsContent: 'HostsContent',
      tokenContent: 'TokenContent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      envoyEnvContent: 'string',
      hostsContent: 'string',
      tokenContent: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVmMetaResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9522f7c9-63a1-4603-b850-37d12a****
   */
  requestId?: string;
  /**
   * @remarks
   * The metadata that is required to add a non-containerized application to the ASM instance.
   */
  vmMetaInfo?: GetVmMetaResponseBodyVmMetaInfo;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      vmMetaInfo: 'VmMetaInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      vmMetaInfo: GetVmMetaResponseBodyVmMetaInfo,
    };
  }

  validate() {
    if(this.vmMetaInfo && typeof (this.vmMetaInfo as any).validate === 'function') {
      (this.vmMetaInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

