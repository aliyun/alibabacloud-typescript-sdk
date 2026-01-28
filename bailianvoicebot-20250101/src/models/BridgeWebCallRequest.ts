// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BridgeWebCallRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * a395011f-a247-400f-bc69-28796749fd52
   */
  applicationId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * llm-c11iig67g863rih8
   */
  businessUnitId?: string;
  /**
   * @example
   * 13052253537
   */
  caller?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 467539456766097392-cn-shenzhen
   */
  deviceId?: string;
  /**
   * @example
   * 8000
   */
  sampleRate?: number;
  /**
   * @example
   * true
   */
  sandbox?: boolean;
  /**
   * @example
   * {\\"ENV\\": \\"production\\"}
   */
  tags?: string;
  /**
   * @example
   * 3
   */
  timeoutSeconds?: number;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      businessUnitId: 'BusinessUnitId',
      caller: 'Caller',
      deviceId: 'DeviceId',
      sampleRate: 'SampleRate',
      sandbox: 'Sandbox',
      tags: 'Tags',
      timeoutSeconds: 'TimeoutSeconds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      businessUnitId: 'string',
      caller: 'string',
      deviceId: 'string',
      sampleRate: 'number',
      sandbox: 'boolean',
      tags: 'string',
      timeoutSeconds: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

