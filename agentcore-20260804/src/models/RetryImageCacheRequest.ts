// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RetryImageCacheRequestBody extends $dara.Model {
  static names(): { [key: string]: string } {
    return {
    };
  }

  static types(): { [key: string]: any } {
    return {
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RetryImageCacheRequest extends $dara.Model {
  /**
   * @remarks
   * The request body for retrying image cache creation.
   */
  body?: RetryImageCacheRequestBody;
  /**
   * @remarks
   * The non-empty client token passed as a query parameter. The current implementation does not guarantee deduplication by this token or restoration of the original acceptance result.
   * 
   * This parameter is required.
   * 
   * @example
   * 550e8400-e29b-41d4-a716-446655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * The region ID. This parameter is passed as a query parameter and must match the selected region endpoint and the workspace region.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The workspace ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ws-example
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
      clientToken: 'clientToken',
      regionId: 'regionId',
      workspaceId: 'workspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: RetryImageCacheRequestBody,
      clientToken: 'string',
      regionId: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

