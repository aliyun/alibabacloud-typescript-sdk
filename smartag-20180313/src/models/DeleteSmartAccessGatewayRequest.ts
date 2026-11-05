// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteSmartAccessGatewayRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID of the Smart Access Gateway instance that you want to delete.
   * 
   * This parameter is required.
   * 
   * @example
   * sag-far8v6owtdxlua****
   */
  instanceId?: string;
  /**
   * @remarks
   * The region ID of the Smart Access Gateway instance.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      regionId: 'string',
      resourceOwnerId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

