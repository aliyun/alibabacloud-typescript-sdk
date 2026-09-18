// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GenerateRelayPollerScriptRequest extends $dara.Model {
  /**
   * @remarks
   * The target platform in the "operating system-architecture" format. Only linux-amd64 and linux-arm64 are supported. Compatible architecture values include amd64, x86_64, x86, arm64, and aarch64. If only the architecture is specified, the operating system defaults to linux. Other operating systems such as macOS and Windows return HTTP status code 400. If this parameter is not specified, the default value is linux-amd64.
   * 
   * @example
   * linux-amd64
   */
  platform?: string;
  /**
   * @remarks
   * The unique identifier of the scan target. The target must use the enterprise_relay connection method (see CreateAttackTarget). Otherwise, HTTP status code 400 is returned. If the target does not exist or belongs to another tenant, HTTP status code 400 is returned without exposing whether the resource exists. This parameter is registered as optional but is required in practice.
   * 
   * @example
   * target-abc123def4567
   */
  targetId?: string;
  static names(): { [key: string]: string } {
    return {
      platform: 'Platform',
      targetId: 'TargetId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      platform: 'string',
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

