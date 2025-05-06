// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyPrepayInstanceSpecShrinkRequest extends $dara.Model {
  /**
   * **if can be null:**
   * true
   */
  ha?: boolean;
  /**
   * **if can be null:**
   * true
   */
  haResourceSpecShrink?: string;
  /**
   * **if can be null:**
   * true
   */
  haVSwitchIdsShrink?: string;
  /**
   * **if can be null:**
   * true
   */
  haZoneId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * f-cn-wwo36qj4g06
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-beijing
   */
  region?: string;
  /**
   * @remarks
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

