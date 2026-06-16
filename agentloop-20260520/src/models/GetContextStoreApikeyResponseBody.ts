// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetContextStoreAPIKeyResponseBody extends $dara.Model {
  /**
   * @example
   * my-agent-space
   */
  agentSpace?: string;
  /**
   * @example
   * sk-abcd****
   */
  apiKey?: string;
  /**
   * @example
   * my-context-store
   */
  contextStoreName?: string;
  /**
   * @remarks
   * Use the UTC time format: yyyy-MM-ddTHH:mm:ssZ
   * 
   * @example
   * 2026-01-01T00:00:00Z
   */
  createTime?: string;
  /**
   * @example
   * my-api-key
   */
  name?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * 9ACFB10A-1B2C-3D4E-5F6G-7H8I9J0K1L2M
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      agentSpace: 'agentSpace',
      apiKey: 'apiKey',
      contextStoreName: 'contextStoreName',
      createTime: 'createTime',
      name: 'name',
      regionId: 'regionId',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentSpace: 'string',
      apiKey: 'string',
      contextStoreName: 'string',
      createTime: 'string',
      name: 'string',
      regionId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

