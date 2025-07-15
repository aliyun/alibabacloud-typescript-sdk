// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CopyCasterSceneConfigRequest extends $dara.Model {
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
   * LIVEPRODUCER_POST-cn-0pp1czt****
   */
  casterId?: string;
  /**
   * @remarks
   * The ID of the source scene, which must be a PVW scene.
   * 
   * This parameter is required.
   * 
   * @example
   * f1a361f4-bee3-436d-ae6e-d38e6943****
   */
  fromSceneId?: string;
  ownerId?: number;
  regionId?: string;
  /**
   * @remarks
   * The ID of the destination scene, which must be a PGM scene.
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

