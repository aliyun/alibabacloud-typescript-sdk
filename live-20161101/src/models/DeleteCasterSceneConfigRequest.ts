// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteCasterSceneConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the production studio.
   * 
   * *   If the production studio was created by calling the [CreateCaster](https://help.aliyun.com/document_detail/69338.html) operation, check the value of the response parameter CasterId to obtain the ID.
   * *   If the production studio was created by using the ApsaraVideo Live console, obtain the ID on the **Production Studio Management** page. To go to the page, log on to the **ApsaraVideo Live console** and click **Production Studios** in the left-side navigation pane.
   * 
   * >  You can find the ID of the production studio in the Instance ID/Name column.
   * 
   * This parameter is required.
   * 
   * @example
   * b4810848-bcf9-4aef-bd4a-e6bba2d9****
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
   * b5f8c837-ceeb-424f-b30b-68e94e86****
   */
  sceneId?: string;
  /**
   * @remarks
   * The type of the setting that you want to delete. Valid values:
   * 
   * *   **Component**: component setting
   * *   **Layout**: layout setting
   * *   **All**: component and layout settings
   * 
   * This parameter is required.
   * 
   * @example
   * Component
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      casterId: 'CasterId',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      sceneId: 'SceneId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      casterId: 'string',
      ownerId: 'number',
      regionId: 'string',
      sceneId: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

