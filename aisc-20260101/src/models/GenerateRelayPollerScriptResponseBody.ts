// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GenerateRelayPollerScriptResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The normalized target platform in the operating system-architecture format.
   * 
   * @example
   * linux-amd64
   */
  platform?: string;
  /**
   * @remarks
   * The installation script content (bash). The script contains a one-time access code, a temporary download link for the poller binary (signed and valid for 1 hour), and a checksum. The script does not contain the actual endpoint or credentials of the target, which are interactively entered during installation. The script carries access credential semantics. Transmit it through a trusted channel and re-download the script to obtain a new one after use.
   * 
   * @example
   * #!/bin/bash
   */
  script?: string;
  /**
   * @remarks
   * The scan target identifier echoed from the request.
   * 
   * @example
   * target-abc123def4567
   */
  targetId?: string;
  static names(): { [key: string]: string } {
    return {
      platform: 'Platform',
      script: 'Script',
      targetId: 'TargetId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      platform: 'string',
      script: 'string',
      targetId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateRelayPollerScriptResponseBody extends $dara.Model {
  /**
   * @remarks
   * The generation result, which contains the target identifier, the normalized platform, and the installation script.
   */
  data?: GenerateRelayPollerScriptResponseBodyData;
  /**
   * @remarks
   * The request ID. You can use this ID for troubleshooting and log tracing.
   * 
   * @example
   * 1EBD0C05-6C1F-4C95-9C63-B7AB7B5A9C8E
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GenerateRelayPollerScriptResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

