// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ResetApiKeyRequest extends $dara.Model {
  /**
   * @remarks
   * Api Key
   * 
   * @example
   * sk-rds-*****
   */
  apiKey?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * rds_copilot***_public_cn-*********6
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      apiKey: 'ApiKey',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiKey: 'string',
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

