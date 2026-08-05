// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCasterSceneAudioRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the production studio.
   * 
   * - If you create a production studio by calling the [CreateCaster](https://help.aliyun.com/document_detail/2848009.html) operation, obtain the value of CasterId from the response.
   * 
   * - If you create a production studio in the ApsaraVideo Live console, view the ID on the **Production Studio** > **Cloud Production Studio** page.
   * 
   * > The name of a production studio in the list on the Cloud Production Studio page is the ID of the production studio.
   * 
   * This parameter is required.
   * 
   * @example
   * 97df6b7f-3490-47d2-ac50-88338765****
   */
  casterId?: string;
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
   * The ID of the scenario.
   * 
   * This parameter is required.
   * 
   * @example
   * 97df6b7f-3490-47d2-ac50-88339087****
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

