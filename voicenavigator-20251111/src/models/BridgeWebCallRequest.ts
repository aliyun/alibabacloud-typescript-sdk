// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BridgeWebCallRequest extends $dara.Model {
  /**
   * @remarks
   * The channel ID.
   * > This parameter is valid only when AccessChannelType is set to Web or Trial.
   * 
   * @example
   * 33606503-c22c-4547-a51c-dda5e8d87962
   */
  accessChannelId?: string;
  /**
   * @remarks
   * The channel type.
   * 
   * > - Text: text test window
   * > - Test: test window
   * > - Trial: trial link
   * 
   * @example
   * Text
   */
  accessChannelType?: string;
  /**
   * @remarks
   * The caller number.
   * 
   * @example
   * 010123*****
   */
  caller?: string;
  /**
   * @remarks
   * The device ID.
   * 
   * @example
   * d4c38420-****-43bc-b001-56bfc274****
   */
  deviceId?: string;
  /**
   * @remarks
   * Specifies whether the test environment is used.
   * >Default value: false.
   * 
   * @example
   * false
   */
  draftVersion?: boolean;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * 36e9a4cd-a821-4f78-86fa-a9a4aefeea2e
   */
  instanceId?: string;
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
   * The script ID.
   * 
   * @example
   * 0a88e269-01f5-49ac-97af-5830f0ccb271
   */
  scriptId?: string;
  /**
   * @remarks
   * The attached data.
   * 
   * @example
   * {"key":"value"}
   */
  tags?: string;
  /**
   * @remarks
   * The timeout period.
   * 
   * > 
   * > - If the call is not connected within the time specified by this parameter, the system actively hangs up the call. Unit: seconds. Default value: 60.
   * 
   * @example
   * 60
   */
  timeoutSeconds?: number;
  static names(): { [key: string]: string } {
    return {
      accessChannelId: 'AccessChannelId',
      accessChannelType: 'AccessChannelType',
      caller: 'Caller',
      deviceId: 'DeviceId',
      draftVersion: 'DraftVersion',
      instanceId: 'InstanceId',
      sampleRate: 'SampleRate',
      scriptId: 'ScriptId',
      tags: 'Tags',
      timeoutSeconds: 'TimeoutSeconds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessChannelId: 'string',
      accessChannelType: 'string',
      caller: 'string',
      deviceId: 'string',
      draftVersion: 'boolean',
      instanceId: 'string',
      sampleRate: 'number',
      scriptId: 'string',
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

