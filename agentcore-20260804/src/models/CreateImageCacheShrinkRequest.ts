// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateImageCacheShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The business parameters for creating an image cache.
   * 
   * This parameter is required.
   */
  bodyShrink?: string;
  /**
   * @remarks
   * This parameter is required and cannot be empty. It is reserved to be compatible with the API. Currently, it does not provide the ability to deduplicate requests or recover the original result based on this field. If a timeout occurs or the result is unconfirmed, query the query cache status first before deciding whether to recommit.
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
   * The current routed workspace. The server verifies the account, region, and resource ownership. This parameter cannot be omitted or used to access other workspaces.
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

