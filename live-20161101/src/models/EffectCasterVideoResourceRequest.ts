// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EffectCasterVideoResourceRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the production studio.
   * 
   * - If you create a production studio using the [CreateCaster](https://help.aliyun.com/document_detail/2848009.html) operation, use the CasterId value from the response.
   * 
   * - If you create a production studio in the ApsaraVideo Live console, find the ID on the **Production Studio** > **Cloud Production Studio** page.
   * 
   * > The name of the production studio in the list is the ID.
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
   * The ID of the resource. To get this ID, call the [DescribeCasterChannels](https://help.aliyun.com/document_detail/2848046.html) operation and check the ResourceId value in the response.
   * 
   * This parameter is required.
   * 
   * @example
   * f096e8d6-0319-4c96-82bc-ecbc79cf****
   */
  resourceId?: string;
  /**
   * @remarks
   * The ID of the scenario.
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

