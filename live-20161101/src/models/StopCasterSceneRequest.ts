// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StopCasterSceneRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the production studio.
   * 
   * If you create a production studio through the [CreateCaster](~~69338#doc-api-live-CreateCaster~~ "Creates a production studio.") interface, check the value of the CasterId parameter in the response.
   * 
   * If you create a production studio through the ApsaraVideo Live Console, log in to the console, then check the ID of the production studio through the following path:
   * 
   * Production Studios > Production Studio Management
   * 
   * >  The CasterId is reflected in the Name column on the Production Studio Management page.
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
   * The ID of the scene.
   * 
   * This operation is available only when the scene is a preview scene. For more information about the scene types, see [Query the scenes of production studios](https://help.aliyun.com/document_detail/60262.html).
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

