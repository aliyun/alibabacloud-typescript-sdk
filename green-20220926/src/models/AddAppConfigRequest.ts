// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddAppConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The category.
   * 
   * @example
   * guard-scene
   */
  classify?: string;
  /**
   * @remarks
   * The name.
   * 
   * @example
   * example
   */
  name?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * The resource type.
   * 
   * @example
   * text
   */
  resourceType?: string;
  /**
   * @remarks
   * appId
   * 
   * @example
   * xxx
   */
  sysAppId?: string;
  /**
   * @remarks
   * The type.
   * 
   * @example
   * plus
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      classify: 'Classify',
      name: 'Name',
      regionId: 'RegionId',
      resourceType: 'ResourceType',
      sysAppId: 'SysAppId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      classify: 'string',
      name: 'string',
      regionId: 'string',
      resourceType: 'string',
      sysAppId: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

