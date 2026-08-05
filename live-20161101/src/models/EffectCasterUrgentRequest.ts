// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EffectCasterUrgentRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the production studio.
   * 
   * - If you created a production studio by calling the [CreateCaster](https://help.aliyun.com/document_detail/2848009.html) operation, use the returned CasterId value.
   * 
   * - If you created a production studio in the ApsaraVideo Live console, go to the **Production Studio** > **Cloud Production Studio** page to obtain the ID.
   * 
   * > The name of the production studio in the list on the Cloud Production Studio page is the production studio ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 80787064-1c94-4dc1-85ce-9409960a****
   */
  casterId?: string;
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
   * The ID of the scene. This parameter is valid only for PGM scenes.
   * 
   * Call the [DescribeCasterScenes](https://help.aliyun.com/document_detail/2848039.html) operation to query the scene ID of the production studio.
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
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      sceneId: 'SceneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      casterId: 'string',
      ownerId: 'number',
      regionId: 'string',
      sceneId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

