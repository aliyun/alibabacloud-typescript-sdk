// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EffectCasterVideoResourceRequest extends $dara.Model {
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
  ownerId?: number;
  regionId?: string;
  /**
   * @remarks
   * The resource ID. If you call the [DescribeCasterChannels](https://help.aliyun.com/document_detail/2848046.html) operation to query the channels of the production studio, you can obtain the ID of the resource in a specific channel from the ResourceId parameter in the response.
   * 
   * This parameter is required.
   * 
   * @example
   * f096e8d6-0319-4c96-82bc-ecbc79cf****
   */
  resourceId?: string;
  /**
   * @remarks
   * The ID of the scene. You can call the [DescribeCasterScenes](~~60262#doc-api-live-DescribeCasterScenes~~ "Queries information about the scenes of a production studio.") operation to get the ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 05ab713c-676e-49c0-96ce-cc408da1****
   */
  sceneId?: string;
  static names(): { [key: string]: string } {
    return {
      casterId: 'CasterId',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceId: 'ResourceId',
      sceneId: 'SceneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      casterId: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceId: 'string',
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

