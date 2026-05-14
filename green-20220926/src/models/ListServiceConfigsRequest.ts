// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListServiceConfigsRequest extends $dara.Model {
  /**
   * @remarks
   * Category.
   * 
   * @example
   * guard-scene
   */
  classify?: string;
  protectionType?: string;
  /**
   * @remarks
   * Region ID.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * Resource type.
   * 
   * @example
   * text
   */
  resourceType?: string;
  /**
   * @remarks
   * Usage status.
   * 
   * @example
   * in
   */
  useStatus?: string;
  static names(): { [key: string]: string } {
    return {
      classify: 'Classify',
      protectionType: 'ProtectionType',
      regionId: 'RegionId',
      resourceType: 'ResourceType',
      useStatus: 'UseStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      classify: 'string',
      protectionType: 'string',
      regionId: 'string',
      resourceType: 'string',
      useStatus: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

