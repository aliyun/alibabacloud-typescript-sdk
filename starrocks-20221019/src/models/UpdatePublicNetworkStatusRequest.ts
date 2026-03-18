// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdatePublicNetworkStatusRequest extends $dara.Model {
  /**
   * @example
   * BE
   */
  componentType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * c-b25e21e24388****
   */
  instanceId?: string;
  /**
   * @example
   * ng-3d5ce6454354****
   */
  nodeGroupId?: string;
  /**
   * @example
   * true
   */
  publicNetworkEnabled?: boolean;
  static names(): { [key: string]: string } {
    return {
      componentType: 'ComponentType',
      instanceId: 'InstanceId',
      nodeGroupId: 'NodeGroupId',
      publicNetworkEnabled: 'PublicNetworkEnabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      componentType: 'string',
      instanceId: 'string',
      nodeGroupId: 'string',
      publicNetworkEnabled: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

