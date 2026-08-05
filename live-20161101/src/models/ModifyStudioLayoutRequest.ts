// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyStudioLayoutRequest extends $dara.Model {
  /**
   * @remarks
   * The configuration of the background resource. This parameter is a JSON string. For more information, see **BgImageConfig**.
   * 
   * >Notice: 
   * 
   * This parameter is required only when LayoutType is set to studio.
   * 
   * @example
   * { "Id":"k12kj31****", "MaterialId":"f080575eb5f4427684fc0715159a****" }
   */
  bgImageConfig?: string;
  /**
   * @remarks
   * The ID of the production studio. >Notice: The production studio must be created in advance and must be of the virtual studio type.
   * 
   * - If you create a production studio by calling the [CreateCaster](https://help.aliyun.com/document_detail/2848009.html) operation, use the CasterId value returned in the response.
   * 
   * - If you create a production studio in the ApsaraVideo Live console, go to the **ApsaraVideo Live console** > **Production Studio** > **Cloud Production Studio** page to view the ID.
   * 
   * > The name of the production studio in the list on the Cloud Production Studio page is the production studio ID.
   * 
   * This parameter is required.
   * 
   * @example
   * a2b8e671-2fe5-4642-a2ec-bf93880e****
   */
  casterId?: string;
  /**
   * @remarks
   * The configuration of the common layout. This parameter is a JSON string. For more information, see **CommonConfig**. >Notice: This parameter is required only when LayoutType is set to common.
   * 
   * @example
   * {  "ChannelId":"RV01" }
   */
  commonConfig?: string;
  /**
   * @remarks
   * The layer order settings. This parameter is a JSON string. For more information, see **layerOrderConfig**. You can sort background and multimedia materials. Chroma keying layers are not supported. The earlier an item appears in the list, the lower its layer.
   * 
   * @example
   * [ { "Type":"media", "Id":"k12kj31****" }, { "Type":"media", "Id":"k12kj31****" } ]
   */
  layerOrderConfigList?: string;
  /**
   * @remarks
   * The ID of the layout. If you add a layout for a production studio by calling the [AddStudioLayout](https://help.aliyun.com/document_detail/2848062.html) operation, use the LayoutId value returned in the response.
   * 
   * This parameter is required.
   * 
   * @example
   * 445409ec-7eaa-461d-8f29-4bec2eb9****
   */
  layoutId?: string;
  /**
   * @remarks
   * The name of the production studio layout.
   * 
   * @example
   * Test layout
   */
  layoutName?: string;
  /**
   * @remarks
   * The settings for the multimedia input resource. This parameter is a JSON string. For more information, see **MediaInputConfig**.
   * 
   * >Notice: 
   * 
   * This parameter is valid and optional only when LayoutType is set to studio.
   * 
   * @example
   * [ { "Id":"k12kj31****", "Index":"1", "ChannelId":"RV01", "FillMode":"none", "PositionRefer":"topLeft", "WidthNormalized":"0.4", "HeightNormalized":"0.4", "PositionNormalized":"[0.1, 0.2]" }, { "Id":"k12kj31****", "Index":"2", "ImageMaterialId":"lkajsdfsa8fd89asd8****", "FillMode":"none", "PositionRefer":"topLeft", "WidthNormalized":"0.6", "HeightNormalized":"0.4", "PositionNormalized":"[0.1, 0.2]" } ]
   */
  mediaInputConfigList?: string;
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
   * The settings for the chroma keying input. This parameter is a JSON string. For more information, see **ScreenInputConfig**.
   * 
   * >Notice: 
   * 
   * This parameter is required only when LayoutType is set to studio.
   * 
   * @example
   * [ { "Index":"1", "ChannelId":"RV01", "Color":"green", "PositionX":"0.1", "PositionY":"0.2", "HeightNormalized":"0.4" } ]
   */
  screenInputConfigList?: string;
  static names(): { [key: string]: string } {
    return {
      bgImageConfig: 'BgImageConfig',
      casterId: 'CasterId',
      commonConfig: 'CommonConfig',
      layerOrderConfigList: 'LayerOrderConfigList',
      layoutId: 'LayoutId',
      layoutName: 'LayoutName',
      mediaInputConfigList: 'MediaInputConfigList',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      screenInputConfigList: 'ScreenInputConfigList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bgImageConfig: 'string',
      casterId: 'string',
      commonConfig: 'string',
      layerOrderConfigList: 'string',
      layoutId: 'string',
      layoutName: 'string',
      mediaInputConfigList: 'string',
      ownerId: 'number',
      regionId: 'string',
      screenInputConfigList: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

