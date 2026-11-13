// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyPrepayInstanceSpecShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether cross-zone high-availability resources are enabled for the workspace.
   * 
   * @example
   * true
   * 
   * **if can be null:**
   * true
   */
  ha?: boolean;
  /**
   * @remarks
   * The resource specifications for cross-zone high availability.
   * 
   * **if can be null:**
   * true
   */
  haResourceSpecShrink?: string;
  /**
   * @remarks
   * The list of vSwitch IDs in the secondary zone for cross-zone high availability.
   * 
   * **if can be null:**
   * true
   */
  haVSwitchIdsShrink?: string;
  /**
   * @remarks
   * The ID of the secondary zone for cross-zone high availability.
   * 
   * @example
   * cn-hongkong-b
   * 
   * **if can be null:**
   * true
   */
  haZoneId?: string;
  /**
   * @remarks
   * The instance ID of the order.
   * 
   * This parameter is required.
   * 
   * @example
   * f-cn-wwo36qj4g06
   */
  instanceId?: string;
  /**
   * @remarks
   * The region.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-beijing
   */
  region?: string;
  /**
   * @remarks
   * The resource specifications.
   * 
   * This parameter is required.
   */
  resourceSpecShrink?: string;
  static names(): { [key: string]: string } {
    return {
      ha: 'Ha',
      haResourceSpecShrink: 'HaResourceSpec',
      haVSwitchIdsShrink: 'HaVSwitchIds',
      haZoneId: 'HaZoneId',
      instanceId: 'InstanceId',
      region: 'Region',
      resourceSpecShrink: 'ResourceSpec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ha: 'boolean',
      haResourceSpecShrink: 'string',
      haVSwitchIdsShrink: 'string',
      haZoneId: 'string',
      instanceId: 'string',
      region: 'string',
      resourceSpecShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

