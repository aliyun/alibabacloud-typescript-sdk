// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCasterSceneAudioRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the production studio.
   * 
   * *   If the production studio was created by calling the [CreateCaster](https://help.aliyun.com/document_detail/69338.html) operation, check the value of the response parameter CasterId to obtain the ID.
   * *   If the production studio was created by using the ApsaraVideo Live console, obtain the ID on the **Production Studio Management** page. To go to the page, log on to the **ApsaraVideo Live console** and click **Production Studios** in the left-side navigation pane.
   * 
   * >  You can find the ID of the production studio in the Instance Name column.
   * 
   * This parameter is required.
   * 
   * @example
   * 97df6b7f-3490-47d2-ac50-88338765****
   */
  casterId?: string;
  ownerId?: number;
  regionId?: string;
  /**
   * @remarks
   * The ID of the scene.
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

