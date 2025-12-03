// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateGlobalResourceRequest extends $dara.Model {
  /**
   * @example
   * xxxxx-xxxxx-xxxxx
   */
  clientToken?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * hb-t4naqsay5gn****
   */
  clusterId?: string;
  regionId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * PubPhoenixSLBQueryServerVip
   */
  resourceName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * GLOBAL_VIP
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      clusterId: 'ClusterId',
      regionId: 'RegionId',
      resourceName: 'ResourceName',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      clusterId: 'string',
      regionId: 'string',
      resourceName: 'string',
      resourceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

