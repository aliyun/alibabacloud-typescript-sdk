// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BridgeWebCallRequest extends $dara.Model {
  /**
   * @remarks
   * The Bailian application ID.
   * 
   * This parameter is required.
   * 
   * @example
   * a395011f-a247-400f-bc69-28796749fd52
   */
  applicationId?: string;
  /**
   * @remarks
   * The encoding type. If this parameter is not specified, PCM encoding is used by default. Valid values:
   * - PCM
   * - OPUS
   * 
   * @example
   * PCM
   */
  audioCodec?: string;
  /**
   * @remarks
   * The Bailian business space ID.
   * 
   * This parameter is required.
   * 
   * @example
   * llm-c11iig67g863rih8
   */
  businessUnitId?: string;
  /**
   * @remarks
   * The caller number for inbound calls (used for display purposes).
   * 
   * @example
   * 13052253537
   */
  caller?: string;
  /**
   * @remarks
   * The device ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 467539456766097392-cn-shenzhen
   */
  deviceId?: string;
  /**
   * @remarks
   * The sampling rate.
   * 
   * @example
   * 8000
   */
  sampleRate?: number;
  /**
   * @remarks
   * Specifies whether the call is in a test environment.
   * 
   * @example
   * true
   */
  sandbox?: boolean;
  /**
   * @remarks
   * The pass-through data.
   * 
   * @example
   * {\\"ENV\\": \\"production\\"}
   */
  tags?: string;
  /**
   * @remarks
   * The timeout period. If the call is not connected within the specified time, the call is automatically hung up. Unit: seconds.
   * 
   * @example
   * 3
   */
  timeoutSeconds?: number;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      audioCodec: 'AudioCodec',
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
      audioCodec: 'string',
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

