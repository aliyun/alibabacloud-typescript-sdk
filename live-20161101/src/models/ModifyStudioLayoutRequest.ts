// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyStudioLayoutRequest extends $dara.Model {
  /**
   * @remarks
   * The background material configurations. The value is a JSON string. For more information, see **BgImageConfig**.
   * 
   * >  This parameter is required only if you set LayoutType to studio.
   * 
   * @example
   * { "Id":"k12kj31****", "MaterialId":"f080575eb5f4427684fc0715159a****" }
   */
  bgImageConfig?: string;
  /**
   * @remarks
   * The ID of the production studio.
   * 
   * >  The production studio must be a virtual studio that you create in advance.
   * 
   * *   If the production studio was created by calling the [CreateCaster](https://help.aliyun.com/document_detail/2848009.html) operation, check the value of the response parameter CasterId to obtain the ID.
   * *   If the production studio was created by using the ApsaraVideo Live console, obtain the ID on the **Production Studio Management** page. To go to the page, log on to the **ApsaraVideo Live console** and click **Production Studios** in the left-side navigation pane.
   * 
   * >  You can find the ID of the production studio in the Instance ID/Name column.
   * 
   * This parameter is required.
   * 
   * @example
   * a2b8e671-2fe5-4642-a2ec-bf93880e****
   */
  casterId?: string;
  /**
   * @remarks
   * The common layout configurations. The value is a JSON string. For more information, see **CommonConfig**.
   * 
   * >  This parameter is required only if you set LayoutType to common.
   * 
   * @example
   * {  "ChannelId":"RV01" }
   */
  commonConfig?: string;
  /**
   * @remarks
   * The layer sorting configurations. The value is a JSON string. For more information, see **layerOrderConfig**. You can sort layers of background and multimedia materials. The chroma key layer cannot be sorted. A layer that is in the front of the code is placed behind other layers in the layout.
   * 
   * @example
   * [ { "Type":"media", "Id":"k12kj31****" }, { "Type":"media", "Id":"k12kj31****" } ]
   */
  layerOrderConfigList?: string;
  /**
   * @remarks
   * The ID of the layout. If the layout was added by calling the [AddStudioLayout](https://help.aliyun.com/document_detail/2848062.html) operation, check the value of the response parameter LayoutId to obtain the ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 445409ec-7eaa-461d-8f29-4bec2eb9****
   */
  layoutId?: string;
  /**
   * @remarks
   * The name of the layout.
   * 
   * @example
   * The name of the layout.
   */
  layoutName?: string;
  /**
   * @remarks
   * The multimedia input configurations. The value is a JSON string. For more information, see **MediaInputConfig**.
   * 
   * >  This parameter is optional and takes effect only if you set LayoutType to studio.
   * 
   * @example
   * [ { "Id":"k12kj31****", "Index":"1", "ChannelId":"RV01", "FillMode":"none", "PositionRefer":"topLeft", "WidthNormalized":"0.4", "HeightNormalized":"0.4", "PositionNormalized":"[0.1, 0.2]" }, { "Id":"k12kj31****", "Index":"2", "ImageMaterialId":"lkajsdfsa8fd89asd8****", "FillMode":"none", "PositionRefer":"topLeft", "WidthNormalized":"0.6", "HeightNormalized":"0.4", "PositionNormalized":"[0.1, 0.2]" } ]
   */
  mediaInputConfigList?: string;
  ownerId?: number;
  regionId?: string;
  /**
   * @remarks
   * The input configurations for chroma key. The value is a JSON string. For more information, see **ScreenInputConfig**.
   * 
   * >  This parameter is required only if you set LayoutType to studio.
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

