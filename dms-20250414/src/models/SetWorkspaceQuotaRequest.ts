// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetWorkspaceQuotaRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable automatic payment.
   * 
   * @example
   * false
   */
  autoPay?: boolean;
  /**
   * @remarks
   * Ensures the idempotence of the request. You can generate a parameter value from your client to ensure that the value is unique across different requests. ClientToken supports only ASCII characters and can be up to 64 characters in length. For more information, see How to ensure idempotence.
   * 
   * @example
   * acdxxx
   */
  clientToken?: string;
  /**
   * @remarks
   * The CU quota.
   * 
   * This parameter is required.
   * 
   * @example
   * 200
   */
  cuQuota?: number;
  /**
   * @remarks
   * The billing region.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @remarks
   * The DMS workspace ID.
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

