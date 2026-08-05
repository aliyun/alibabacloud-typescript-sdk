// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddStudioLayoutRequest extends $dara.Model {
  /**
   * @remarks
   * The configuration of the background resource. The value is a JSON string. For more information, see **BgImageConfig**.
   * 
   * >Notice: 
   * 
   * This parameter is required only when you set LayoutType to studio.
   * 
   * @example
   * { "Id":"k12kj31****", "MaterialId":"f080575eb5f4427684fc0715159a****" }
   */
  bgImageConfig?: string;
  /**
   * @remarks
   * The ID of the production studio.
   * 
   * >Notice: 
   * 
   * Create a virtual production studio in advance. You can create a production studio in the console or by calling the [CreateCaster](https://help.aliyun.com/document_detail/69338.html) API operation. The production studio must be a virtual production studio.
   * 
   * 
   * 
   * - If you call the [CreateCaster](https://help.aliyun.com/document_detail/2848009.html) API operation to create a production studio, use the returned CasterId value.
   * 
   * - If you create a production studio in the ApsaraVideo Live console, go to the **ApsaraVideo Live console** > **Production Studio** > **Cloud Production Studio** page. The name of the production studio in the list is its ID.
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
   * The configuration of the common layout. The value is a JSON string. For more information, see **CommonConfig**.
   * 
   * >Notice: 
   * 
   * This parameter is required only when you set LayoutType to common.
   * 
   * @example
   * {"ChannelId":"RV01" }
   */
  commonConfig?: string;
  /**
   * @remarks
   * The layer order settings. The value is a JSON string. For more information, see **LayerOrderConfig**. You can sort background materials and multimedia materials. Chroma keying layers are not supported. The earlier a material appears in the list, the lower its layer.
   * 
   * @example
   * [ 	{ 	"Type":"media", 	"Id":"k12kj31****" 	}, 	{ 	"Type":"media", 	"Id":"k12kj31****" 	} ]
   */
  layerOrderConfigList?: string;
  /**
   * @remarks
   * The name of the studio layout.
   * 
   * This parameter is required.
   * 
   * @example
   * Test layout
   */
  layoutName?: string;
  /**
   * @remarks
   * The type of the studio layout. Valid values:
   * 
   * - **common**: A common layout. If you set LayoutType to common, you must also specify CommonConfig.
   * 
   * - **studio**: A studio layout. If you set LayoutType to studio, you must also specify BgImageConfig and ScreenInputConfigList. The MediaInputConfigList parameter is optional.
   * 
   * This parameter is required.
   * 
   * @example
   * studio
   */
  layoutType?: string;
  /**
   * @remarks
   * The settings for the multimedia input resource. The value is a JSON string. For more information, see **MediaInputConfig**.
   * 
   * >Notice: 
   * 
   * This parameter is valid and optional only when you set LayoutType to studio.
   * 
   * @example
   * [ 	{ 	"Id":"k12kj31****", 	"Index":"1", 	"ChannelId":"RV01", 	"FillMode":"none", 	"PositionRefer":"topLeft", 	"WidthNormalized":"0.4", 	"HeightNormalized":"0.4", 	"PositionNormalized":"[0.1, 0.2]" 	},   { 	"Id":"k12kj31****", 	"Index":"2", 	"ImageMaterialId":"lkajsdfsa8fd89asd8****", 	"FillMode":"none", 	"PositionRefer":"topLeft", 	"WidthNormalized":"0.6", 	"HeightNormalized":"0.4", 	"PositionNormalized":"[0.1, 0.2]" 	} ]
   */
  mediaInputConfigList?: string;
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
   * The settings for the chroma keying input. The value is a JSON string. For more information, see **ScreenInputConfig**.
   * 
   * >Notice: 
   * 
   * This parameter is required only when you set LayoutType to studio.
   * 
   * @example
   * [ 	{ 	"Index":"1", 	"ChannelId":"RV01", 	"Color":"green", 	"PositionX":"0.1", 	"PositionY":"0.2", 	"HeightNormalized":"0.4" 	} ]
   */
  screenInputConfigList?: string;
  static names(): { [key: string]: string } {
    return {
      bgImageConfig: 'BgImageConfig',
      casterId: 'CasterId',
      commonConfig: 'CommonConfig',
      layerOrderConfigList: 'LayerOrderConfigList',
      layoutName: 'LayoutName',
      layoutType: 'LayoutType',
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
      layoutName: 'string',
      layoutType: 'string',
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

