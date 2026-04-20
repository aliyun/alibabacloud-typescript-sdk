// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BridgeWebCallRequest extends $dara.Model {
  /**
   * @example
   * 33606503-c22c-4547-a51c-dda5e8d87962
   */
  accessChannelId?: string;
  /**
   * @example
   * Text
   */
  accessChannelType?: string;
  /**
   * @example
   * 010123*****
   */
  caller?: string;
  /**
   * @example
   * d4c38420-****-43bc-b001-56bfc274****
   */
  deviceId?: string;
  /**
   * @example
   * false
   */
  draftVersion?: boolean;
  /**
   * @example
   * 36e9a4cd-a821-4f78-86fa-a9a4aefeea2e
   */
  instanceId?: string;
  /**
   * @example
   * 8000
   */
  sampleRate?: number;
  /**
   * @example
   * 0a88e269-01f5-49ac-97af-5830f0ccb271
   */
  scriptId?: string;
  /**
   * @example
   * {"key":"value"}
   */
  tags?: string;
  /**
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

