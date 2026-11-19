// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAppConfigsRequest extends $dara.Model {
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
   * The region ID.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * The resource type. Note: This parameter is actually required. If it is not provided, the API returns a 400 error (Code: 400, Message: resourceType may not be empty). Valid values: agent_text | agent_text_image | agent_image.
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

