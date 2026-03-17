// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EnableSmartAGDpiMonitorRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the value, but you must ensure that it is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * 02fb3da4-130e-11e9****
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to check the validity of the request without actually making the request. Valid values:
   * 
   * *   **true**: checks the validity of the request but does not enable or disables the DPI feature for the SAG instance. Check items include the request format, instance status, and whether the required parameters are set. If the request fails the check, an error message is returned. If the request passes the request, the ID of the request is returned.
   * *   **false**: makes the request and enables the DPI feature for the SAG instance after the request passes the check. This is the default value.
   * 
   * @example
   * true
   */
  dryRun?: boolean;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The ID of the region where the SAG instance is deployed.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The name of the Logstore.
   * 
   * This parameter is required.
   * 
   * @example
   * test2
   */
  slsLogStore?: string;
  /**
   * @remarks
   * The name of the Log Service project.
   * 
   * This parameter is required.
   * 
   * @example
   * test1
   */
  slsProjectName?: string;
  /**
   * @remarks
   * The ID of the SAG instance.
   * 
   * This parameter is required.
   * 
   * @example
   * sag-vwmylqc9521p5l****
   */
  smartAGId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      slsLogStore: 'SlsLogStore',
      slsProjectName: 'SlsProjectName',
      smartAGId: 'SmartAGId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      slsLogStore: 'string',
      slsProjectName: 'string',
      smartAGId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

