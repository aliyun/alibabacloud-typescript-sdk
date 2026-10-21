// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RetryImageCacheShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The request body is a fixed empty object {}. WorkspaceId is passed as a query parameter. Do not pass the Pool, role, Digest, or network parameters.
   */
  bodyShrink?: string;
  /**
   * @remarks
   * This parameter is required and cannot be empty. It is reserved to keep the API compatible. This field does not currently deduplicate requests or recover the original result. If a timeout occurs or the result is not confirmed, query the query cache status first before deciding whether to commit again.
   * 
   * This parameter is required.
   * 
   * @example
   * 550e8400-e29b-41d4-a716-446655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * The product entry region, which is determined by the selected region endpoint.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The current routed workspace. The server verifies the account, region, and resource ownership. You cannot omit this parameter or use it to access other workspaces.
   * 
   * This parameter is required.
   * 
   * @example
   * ws-example
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      bodyShrink: 'body',
      clientToken: 'clientToken',
      regionId: 'regionId',
      workspaceId: 'workspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bodyShrink: 'string',
      clientToken: 'string',
      regionId: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

