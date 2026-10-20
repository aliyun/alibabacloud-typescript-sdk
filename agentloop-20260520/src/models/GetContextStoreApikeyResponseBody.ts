// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetContextStoreAPIKeyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The name of the associated AgentSpace.
   * 
   * @example
   * my-agent-space
   */
  agentSpace?: string;
  /**
   * @remarks
   * The masked prefix of the API key, such as sk-abcd****. The full plaintext is not returned for security reasons.
   * 
   * @example
   * sk-abcd****
   */
  apiKey?: string;
  /**
   * @remarks
   * The name of the associated context store.
   * 
   * @example
   * my-context-store
   */
  contextStoreName?: string;
  /**
   * @remarks
   * The time when the API key was created, in ISO 8601 UTC format.
   * 
   * Use the UTC time format: yyyy-MM-ddTHH:mm:ssZ
   * 
   * @example
   * 2026-01-01T00:00:00Z
   */
  createTime?: string;
  /**
   * @remarks
   * The display name of the API key.
   * 
   * @example
   * my-api-key
   */
  name?: string;
  /**
   * @remarks
   * The region ID of the API key.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The request ID, which is used to locate the request during troubleshooting.
   * 
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

