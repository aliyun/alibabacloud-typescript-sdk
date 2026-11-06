// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBClusterModelEnhancementResponseBodyModelEnhancementKeys extends $dara.Model {
  /**
   * @remarks
   * The value of the API key.
   * 
   * @example
   * ak-12345
   */
  apiKey?: string;
  /**
   * @remarks
   * The ID of the API key.
   * 
   * @example
   * key-001
   */
  apiKeyId?: string;
  /**
   * @remarks
   * The time when the API key was created, in the ISO 8601 UTC format (YYYY-MM-DDThh:mm:ssZ).
   * 
   * @example
   * 2025-01-01T00:00:00Z
   */
  createTime?: string;
  /**
   * @remarks
   * The description of the API key.
   * 
   * @example
   * Model enhancement key
   */
  description?: string;
  /**
   * @remarks
   * The expiration time of the API key, in the ISO 8601 UTC format (YYYY-MM-DDThh:mm:ssZ).
   * 
   * @example
   * 2025-12-31T23:59:59Z
   */
  expireTime?: string;
  static names(): { [key: string]: string } {
    return {
      apiKey: 'ApiKey',
      apiKeyId: 'ApiKeyId',
      createTime: 'CreateTime',
      description: 'Description',
      expireTime: 'ExpireTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiKey: 'string',
      apiKeyId: 'string',
      createTime: 'string',
      description: 'string',
      expireTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterModelEnhancementResponseBody extends $dara.Model {
  /**
   * @remarks
   * The time when the model enhancement feature was enabled, in the ISO 8601 UTC format (YYYY-MM-DDThh:mm:ssZ).
   * 
   * @example
   * 2025-01-01T00:00:00Z
   */
  createTime?: string;
  /**
   * @remarks
   * The number of API keys for model enhancement.
   * 
   * @example
   * 1
   */
  modelEnhancementKeyNumber?: number;
  /**
   * @remarks
   * The list of API keys for model enhancement.
   */
  modelEnhancementKeys?: DescribeDBClusterModelEnhancementResponseBodyModelEnhancementKeys[];
  /**
   * @remarks
   * The status of the model enhancement feature. A value of ON indicates that the feature is enabled.
   * 
   * @example
   * ON
   */
  modelEnhancementStatus?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 2921D843-433A-5FB3-A03B-4EC093B219F8
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      modelEnhancementKeyNumber: 'ModelEnhancementKeyNumber',
      modelEnhancementKeys: 'ModelEnhancementKeys',
      modelEnhancementStatus: 'ModelEnhancementStatus',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      modelEnhancementKeyNumber: 'number',
      modelEnhancementKeys: { 'type': 'array', 'itemType': DescribeDBClusterModelEnhancementResponseBodyModelEnhancementKeys },
      modelEnhancementStatus: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.modelEnhancementKeys)) {
      $dara.Model.validateArray(this.modelEnhancementKeys);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

