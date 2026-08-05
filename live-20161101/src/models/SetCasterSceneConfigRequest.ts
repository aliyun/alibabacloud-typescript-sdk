// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetCasterSceneConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The production studio ID.
   * - If you created the production studio by calling the [CreateCaster](https://help.aliyun.com/document_detail/2848009.html) operation, check the CasterId parameter returned by the CreateCaster operation.
   * 
   * - If you created the production studio in the ApsaraVideo Live console, go to **ApsaraVideo Live console** > **Production Studios** > **China Cloud Production Studio** to view the ID.
   * 
   * > The name of the production studio in the production studio list on the China Cloud Production Studio page is the production studio ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 80787064-1c94-4dc1-85ce-9409960a****
   */
  casterId?: string;
  /**
   * @remarks
   * The list of component IDs. The components are arranged in bottom-to-top order within the array.
   * 
   * >N indicates the sequence number. For example:<br>ComponentId.1 indicates the first component ID.<br>ComponentId.2 indicates the second component ID.
   * 
   * @example
   * [ "a2b8e671-2fe5-4642-a2ec-bf931826****", "a2b8e671-2fe5-4642-a2ec-28374657****"]
   */
  componentId?: string[];
  /**
   * @remarks
   * The layout ID. If you call the [DescribeCasterLayouts](https://help.aliyun.com/document_detail/2848028.html) operation to query the layout list of a production studio, check the LayoutId parameter returned by the DescribeCasterLayouts operation.
   * 
   * @example
   * 0c6da077-f037-49e8-8440-3be13393****
   */
  layoutId?: string;
  ownerId?: number;
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
   * The scene ID. The scene must have been started by calling StartCasterScene. Otherwise, the IncorrectSceneStatus error is returned.
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

