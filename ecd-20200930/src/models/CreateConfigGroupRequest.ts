// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateConfigGroupRequestConfigTimers } from "./CreateConfigGroupRequestConfigTimers";


export class CreateConfigGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The scheduled task groups.
   */
  configTimers?: CreateConfigGroupRequestConfigTimers[];
  /**
   * @remarks
   * The description of the configuration group.
   * 
   * @example
   * ScheduledTask
   */
  description?: string;
  /**
   * @remarks
   * The name of the configuration group.
   * 
   * This parameter is required.
   * 
   * @example
   * ScheduledTask
   */
  name?: string;
  /**
   * @remarks
   * The service type of the configuration group.
   * 
   * Valid value:
   * 
   * *   CLOUD_DESKTOP: the cloud computer service.
   * 
   * This parameter is required.
   * 
   * @example
   * CLOUD_DESKTOP
   */
  productType?: string;
  /**
   * @remarks
   * The ID of the region. Set the value to `cn-shanghai`.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The group type.
   * 
   * Valid value:
   * 
   * *   Timer: a scheduled task group.
   * 
   * This parameter is required.
   * 
   * @example
   * Timer
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      configTimers: 'ConfigTimers',
      description: 'Description',
      name: 'Name',
      productType: 'ProductType',
      regionId: 'RegionId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configTimers: { 'type': 'array', 'itemType': CreateConfigGroupRequestConfigTimers },
      description: 'string',
      name: 'string',
      productType: 'string',
      regionId: 'string',
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.configTimers)) {
      $dara.Model.validateArray(this.configTimers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

