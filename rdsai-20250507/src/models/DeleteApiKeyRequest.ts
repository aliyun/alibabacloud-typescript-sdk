// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteApiKeyRequest extends $dara.Model {
  /**
   * @remarks
   * Api Key
   * 
   * This parameter is required.
   * 
   * @example
   * sk-rds-*****
   */
  apiKey?: string;
  /**
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

