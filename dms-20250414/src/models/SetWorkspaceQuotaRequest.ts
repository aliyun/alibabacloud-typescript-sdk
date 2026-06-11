// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetWorkspaceQuotaRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable auto-payment for the order.
   * 
   * @example
   * false
   */
  autoPay?: boolean;
  /**
   * @remarks
   * A unique, client-generated token to ensure request idempotence. The token can contain only ASCII characters and must be no longer than 64 characters. For more information, see How to ensure idempotence.
   * 
   * @example
   * acdxxx
   */
  clientToken?: string;
  /**
   * @remarks
   * The compute unit (CU) quota for the workspace.
   * 
   * This parameter is required.
   * 
   * @example
   * 200
   */
  cuQuota?: number;
  /**
   * @remarks
   * The ID of the region.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @remarks
   * The ID of the Data Management Service (DMS) workspace.
   * 
   * This parameter is required.
   * 
   * @example
   * 20923*****7291
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      autoPay: 'AutoPay',
      clientToken: 'ClientToken',
      cuQuota: 'CuQuota',
      region: 'Region',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoPay: 'boolean',
      clientToken: 'string',
      cuQuota: 'number',
      region: 'string',
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

