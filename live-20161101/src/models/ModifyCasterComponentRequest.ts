// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyCasterComponentRequest extends $dara.Model {
  /**
   * @remarks
   * The properties of the caption layer. The value is a JSON string. The following properties are supported:
   * 
   * >Notice: 
   * 
   * This parameter is required if you set ComponentType to caption.
   * 
   * 
   * 
   * - **SizeNormalized**: The normalized font size. The font size is calculated using the formula: font_size/output_height. The value must be in the range of `[0,1]`. If the calculated font size is greater than 1024, the value 1024 is used.
   * 
   * - **BorderWidthNormalized**: The normalized width of the text border. The normalized width is calculated based on the font size using the formula: BorderWidth/FontSize. The value must be in the range of `[0,1]`. If the calculated value is greater than 16, the value 16 is used. Default value: 0.
   * 
   * - **FontName**: The font name. For more information about valid values, see **Production studio fonts**. Default value: KaiTi.
   * 
   * - **BorderColor**: The color of the text border. Valid values are from 0x000000 to 0xffffff. The default value is an empty string, which indicates that this parameter is not used.
   * 
   * - **LocationId**: The channel ID of the translation source.
   * 
   * - **SourceLan**: The source language of the audio in the video source. Valid values are en (English), cn (Chinese), es (Spanish), and ru (Russian). Default value: cn.
   * 
   * - **TargetLan**: The target language for translation. If you do not set this parameter, only speech recognition is performed. If you set this parameter, translation is also performed. Valid values are en (English), cn (Chinese), es (Spanish), and ru (Russian).
   * 
   * - **ShowSourceLan**: Specifies whether to display the source language. Valid values are true (display) and false (do not display). Default value: false.
   * 
   * - **Truncation**: Specifies whether to truncate the caption. Valid values are true (truncate) and false (do not truncate). Default value: false.
   * 
   * - **SourceLanPerLineWordCount**: The number of words per line for the source language. This parameter takes effect only if Truncation is set to true. Default value: 20.
   * 
   * - **TargetLanPerLineWordCount**: The number of words per line for the target language. This parameter takes effect only if Truncation is set to true. Default value: 20.
   * 
   * @example
   * {"BorderWidthNormalized":0.01,"SizeNormalized":0.05,"Color":"0x000000","LocationId":"RV01","SourceLan":"cn","FontName":"KaiTi","BorderColor":"0xffffff"}
   */
  captionLayerContent?: string;
  /**
   * @remarks
   * The ID of the production studio.
   * 
   * - The ID is returned after you call the [CreateCaster](https://help.aliyun.com/document_detail/2848009.html) operation.
   * 
   * - If you create a production studio in the LIVE console, go to the **LIVE** > **Production Studio** > **Cloud Production Studio** page to find the ID.
   * 
   * > The name of the production studio in the list on the Cloud Production Studio page is the production studio ID.
   * 
   * This parameter is required.
   * 
   * @example
   * LIVEPRODUCER_POST-cn-0pp1czt****
   */
  casterId?: string;
  /**
   * @remarks
   * The component ID. The ID is returned after you call the [AddCasterComponent](https://help.aliyun.com/document_detail/2848030.html) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * 05ab713c-676e-49c0-96ce-cc408da1****
   */
  componentId?: string;
  /**
   * @remarks
   * The size and layout of the layer. The value is a JSON string. The following properties are supported:
   * 
   * - **HeightNormalized**: The normalized height.
   * 
   * - **WidthNormalized**: The normalized width.
   * 
   * - **PositionNormalized**: The normalized position of the layer.
   * 
   * - **PositionRefer**: The reference point for the position of the layer.
   * 
   * @example
   * {"HeightNormalized":"1","PositionRefer":"topRight","WidthNormalized":"0","PositionNormalized":["0.1","0.2"]}
   */
  componentLayer?: string;
  /**
   * @remarks
   * The name of the component. The default value is the component ID.
   * 
   * @example
   * text01
   */
  componentName?: string;
  /**
   * @remarks
   * The type of the component. Valid values:
   * 
   * - **text**: A text component. The TextLayerContent parameter is required only if you set ComponentType to text.
   * 
   * - **image**: An image component. The ImageLayerContent parameter is required only if you set ComponentType to image.
   * 
   * - **caption**: A translation caption component. The CaptionLayerContent parameter is required only if you set ComponentType to caption.
   * 
   * @example
   * text
   */
  componentType?: string;
  /**
   * @remarks
   * The display effect of the component. Valid values:
   * 
   * - **none** (default): no effect.
   * 
   * - **animateH**: horizontal scroll.
   * 
   * - **animateV**: vertical scroll.
   * 
   * @example
   * animateV
   */
  effect?: string;
  /**
   * @remarks
   * The properties of the image layer. The value is a JSON string.
   * 
   * >Notice: 
   * 
   * This parameter is required if you set ComponentType to image.
   * 
   * 
   * 
   * MaterialId is the ID of the material in the media asset library.
   * 
   * @example
   * {"MaterialId":"6cf724c6ebfd4a59b5b3cec6f10d5ecf"}
   */
  imageLayerContent?: string;
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
   * The properties of the text layer. The value is a JSON string. The following properties are supported:
   * 
   * >Notice: 
   * 
   * This parameter is required if you set ComponentType to text.
   * 
   * 
   * 
   * - **SizeNormalized**: The normalized font size. The font size is calculated using the formula: font_size/output_height. The value must be in the range of `[0,1]`. If the calculated font size is greater than 1024, the value 1024 is used.
   * 
   * - **BorderWidthNormalized**: The normalized width of the text border. The normalized width is calculated based on the font size using the formula: BorderWidth/FontSize. The value must be in the range of `[0,1]`. If the calculated value is greater than 16, the value 16 is used. Default value: 0.
   * 
   * - **FontName**: The font name. For more information about valid values, see **Production studio fonts**. Default value: KaiTi.
   * 
   * - **BorderColor**: The color of the text border. Valid values are from 0x000000 to 0xffffff. The default value is an empty string, which indicates that this parameter is not used.
   * 
   * - **Text**: The text content. The default value is an empty string.
   * 
   * - **Color**: The color of the text. Default value: 0xff0000, which is red.
   * 
   * @example
   * {"BorderWidthNormalized":"1","SizeNormalized":"0.2","Color":"0x000000","FontName":"KaiTi","BorderColor":"0x000000","Text":"hello world!"}
   */
  textLayerContent?: string;
  static names(): { [key: string]: string } {
    return {
      captionLayerContent: 'CaptionLayerContent',
      casterId: 'CasterId',
      componentId: 'ComponentId',
      componentLayer: 'ComponentLayer',
      componentName: 'ComponentName',
      componentType: 'ComponentType',
      effect: 'Effect',
      imageLayerContent: 'ImageLayerContent',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      textLayerContent: 'TextLayerContent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      captionLayerContent: 'string',
      casterId: 'string',
      componentId: 'string',
      componentLayer: 'string',
      componentName: 'string',
      componentType: 'string',
      effect: 'string',
      imageLayerContent: 'string',
      ownerId: 'number',
      regionId: 'string',
      textLayerContent: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

