// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteCasterSceneConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The production studio ID.
   * - If you created the production studio by calling the [CreateCaster](https://help.aliyun.com/document_detail/2848009.html) operation, check the CasterId parameter value returned by the CreateCaster operation.
   * 
   * - If you created the production studio in the ApsaraVideo Live console, go to **ApsaraVideo Live console** > **Production Studios** > **China Cloud-based China Production Studio** to view the ID.
   * 
   * > The name of the production studio in the production studio list on the China Cloud-based Production Studio page is the production studio ID.
   * 
   * This parameter is required.
   * 
   * @example
   * b4810848-bcf9-4aef-bd4a-e6bba2d9****
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
   * The scene ID.
   * 
   * This parameter is required.
   * 
   * @example
   * b5f8c837-ceeb-424f-b30b-68e94e86****
   */
  sceneId?: string;
  /**
   * @remarks
   * The scene configuration type. Valid values:
   * 
   * - **Component**: component configuration.
   * - **Layout**: layout configuration.
   * - **All**: component and layout configuration.
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

