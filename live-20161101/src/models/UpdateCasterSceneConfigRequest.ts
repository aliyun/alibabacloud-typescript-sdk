// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateCasterSceneConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the production studio.
   * 
   * *   If the production studio was created by calling the [CreateCaster](https://help.aliyun.com/document_detail/2848009.html) operation, check the value of the response parameter CasterId to obtain the ID.
   * *   If the production studio was created by using the ApsaraVideo Live console, obtain the ID on the **Production Studio Management** page. To go to the page, log on to the **ApsaraVideo Live console** and click **Production Studios** in the left-side navigation pane.
   * 
   * >  You can find the ID of the production studio in the Instance ID/Name column.
   * 
   * This parameter is required.
   * 
   * @example
   * 80787064-1c94-4dc1-85ce-9409960a****
   */
  casterId?: string;
  /**
   * @remarks
   * The IDs of the components. Components in the scene are listed from the bottom to the top in an array.
   * 
   * >  N indicates a sequence number. Examples:\\
   * ComponentId.1 indicates the ID of the first component.\\
   * ComponentId.2 indicates the ID of the second component.
   * 
   * @example
   * ["98778372-c30f-4442-85ba-2e3e4e3d****"]
   */
  componentId?: string[];
  /**
   * @remarks
   * The ID of the layout. If you call the [DescribeCasterLayouts](https://help.aliyun.com/document_detail/2848028.html) operation to query the layouts of the production studio, check the value of the response parameter LayoutId to obtain the ID.
   * 
   * This parameter is required.
   * 
   * @example
   * eeab74fb-379d-4599-a93d-86d16a05****
   */
  layoutId?: string;
  ownerId?: number;
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

