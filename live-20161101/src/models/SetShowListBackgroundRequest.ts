// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetShowListBackgroundRequest extends $dara.Model {
  /**
   * @remarks
   * The production studio ID.
   * - If you created the production studio by calling the [CreateCaster](https://help.aliyun.com/document_detail/2848009.html) operation, check the CasterId value returned by the CreateCaster operation.
   * 
   * - If you created the production studio in the ApsaraVideo Live console, navigate to **ApsaraVideo Live console** > **Production Studios** > **Cloud Production Studio** to view the production studio name.
   * 
   * > The production studio name in the production studio list on the Cloud Production Studio page is the production studio ID.
   * 
   * This parameter is required.
   * 
   * @example
   * LIVEPRODUCER_POST-cn-0pp1czt****
   */
  casterId?: string;
  /**
   * @remarks
   * The video-on-demand material ID.
   * 
   * > Specify either this parameter or ResourceUrl.
   * 
   * @example
   * a2b8e671-2fe5-4642-a2ec-bf93880e****
   */
  materialId?: string;
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
   * The material type. Valid values:
   * 
   * - LIVE: live streaming material. Supports live streaming materials and third-party URLs.
   * 
   * - VOD: video-on-demand material. Supports video-on-demand materials and third-party URLs.
   * 
   * - PIC: image material. Supports video-on-demand materials and third-party URLs.
   * 
   * > Specify one of the three values or leave this parameter empty.
   * 
   * @example
   * VOD
   */
  resourceType?: string;
  /**
   * @remarks
   * The URL of the external material.
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

