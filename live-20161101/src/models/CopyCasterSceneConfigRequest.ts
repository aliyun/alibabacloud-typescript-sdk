// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CopyCasterSceneConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the production studio.
   * 
   * - If you create a production studio by calling the [CreateCaster](https://help.aliyun.com/document_detail/2848009.html) operation, use the CasterId value that is returned in the response.
   * 
   * - If you create a production studio in the ApsaraVideo Live console, go to the **Production Studio** > **Cloud Production Studio** page. The ID of the production studio is in the **Instance ID/Name** column.
   * 
   * > The production studio name in the list on the Cloud Production Studio page of the ApsaraVideo Live console is the production studio ID.
   * 
   * This parameter is required.
   * 
   * @example
   * LIVEPRODUCER_POST-cn-0pp1czt****
   */
  casterId?: string;
  /**
   * @remarks
   * The ID of the source scene. The scene must be a PVW scene.
   * 
   * This parameter is required.
   * 
   * @example
   * f1a361f4-bee3-436d-ae6e-d38e6943****
   */
  fromSceneId?: string;
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
   * The ID of the destination scene. The scene must be a PGM scene.
   * 
   * This parameter is required.
   * 
   * @example
   * 05ab713c-676e-49c0-96ce-cc408da1****
   */
  toSceneId?: string;
  static names(): { [key: string]: string } {
    return {
      casterId: 'CasterId',
      fromSceneId: 'FromSceneId',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      toSceneId: 'ToSceneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      casterId: 'string',
      fromSceneId: 'string',
      ownerId: 'number',
      regionId: 'string',
      toSceneId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

