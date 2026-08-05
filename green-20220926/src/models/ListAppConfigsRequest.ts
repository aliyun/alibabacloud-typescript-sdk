// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAppConfigsRequest extends $dara.Model {
  /**
   * @remarks
   * The classification.
   * 
   * @example
   * guard-scene
   */
  classify?: string;
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
   * agent_text
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      classify: 'Classify',
      regionId: 'RegionId',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      classify: 'string',
      regionId: 'string',
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

