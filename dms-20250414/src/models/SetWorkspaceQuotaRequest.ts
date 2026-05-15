// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetWorkspaceQuotaRequest extends $dara.Model {
  /**
   * @example
   * false
   */
  autoPay?: boolean;
  /**
   * @example
   * acdxxx
   */
  clientToken?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 200
   */
  cuQuota?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @remarks
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

