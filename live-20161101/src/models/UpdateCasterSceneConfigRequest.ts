// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateCasterSceneConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the production studio.
   * 
   * - If you create a production studio by calling the [CreateCaster](https://help.aliyun.com/document_detail/2848009.html) operation, use the CasterId value from the response.
   * 
   * - If you create a production studio in the ApsaraVideo Live console, find the ID on the **Cloud Production Studio** page. Navigate to this page by choosing **Production Studio** > **Cloud Production Studio** in the ApsaraVideo Live console.
   * 
   * > The name of the production studio in the list is its ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 80787064-1c94-4dc1-85ce-9409960a****
   */
  casterId?: string;
  /**
   * @remarks
   * A list of component IDs. The components in the array are layered from bottom to top.
   * 
   * > N indicates the sequence number. For example, ComponentId.1 is the ID of the first component and ComponentId.2 is the ID of the second component.
   * 
   * @example
   * ["98778372-c30f-4442-85ba-2e3e4e3d****"]
   */
  componentId?: string[];
  /**
   * @remarks
   * The ID of the layout. If you query the layout list for the production studio by calling the [DescribeCasterLayouts](https://help.aliyun.com/document_detail/2848028.html) operation, use the LayoutId value from the response.
   * 
   * This parameter is required.
   * 
   * @example
   * eeab74fb-379d-4599-a93d-86d16a05****
   */
  layoutId?: string;
  ownerId?: number;
  /**
   * @remarks
   * The ID of the region.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the scene.
   * 
   * This parameter is required.
   * 
   * @example
   * 242b4e2c-c30f-4442-85ba-2e3e4e3d****
   */
  sceneId?: string;
  static names(): { [key: string]: string } {
    return {
      casterId: 'CasterId',
      componentId: 'ComponentId',
      layoutId: 'LayoutId',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      sceneId: 'SceneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      casterId: 'string',
      componentId: { 'type': 'array', 'itemType': 'string' },
      layoutId: 'string',
      ownerId: 'number',
      regionId: 'string',
      sceneId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.componentId)) {
      $dara.Model.validateArray(this.componentId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

