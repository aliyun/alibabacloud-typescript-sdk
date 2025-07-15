// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetShowListBackgroundRequest extends $dara.Model {
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
   * The ID of the material in ApsaraVideo VOD.
   * 
   * >  Specify either this parameter or the ResourceUrl parameter.
   * 
   * @example
   * a2b8e671-2fe5-4642-a2ec-bf93880e****
   */
  materialId?: string;
  ownerId?: number;
  regionId?: string;
  /**
   * @remarks
   * The resource type. Valid values:
   * 
   * *   LIVE: live stream. You can add a live stream from ApsaraVideo Live or by using a third-party URL.
   * *   VOD: on-demand video. You can add an on-demand video from ApsaraVideo VOD or by using a third-party URL.
   * *   PIC: image. You can add an image from ApsaraVideo VOD or by using a third-party URL.
   * 
   * >  Set this parameter to one of the preceding values, or leave this parameter empty.
   * 
   * @example
   * VOD
   */
  resourceType?: string;
  /**
   * @remarks
   * The URL of the third-party material.
   */
  resourceUrl?: string;
  static names(): { [key: string]: string } {
    return {
      casterId: 'CasterId',
      materialId: 'MaterialId',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceType: 'ResourceType',
      resourceUrl: 'ResourceUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      casterId: 'string',
      materialId: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceType: 'string',
      resourceUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

