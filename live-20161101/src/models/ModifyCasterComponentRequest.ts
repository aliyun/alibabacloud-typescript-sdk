// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyCasterComponentRequest extends $dara.Model {
  /**
   * @remarks
   * The information about the subtitle component. The value must be a JSON string. This parameter contains the following fields:
   * 
   * >  This parameter is required if you set ComponentType to caption.
   * 
   * *   **SizeNormalized**: the normalized value of the font size. The value of this field equals the font size divided by the output height. Valid values: `0 to 1`. The maximum font size is 1,024, even if the font size calculated based on this field is greater than 1,024.
   * *   **BorderWidthNormalized**: the normalized value of the border width. The value of this field equals the border width divided by the font size. Valid values: `0 to 1`. Default value: 0. The maximum border width is 16, even if the border width calculated based on this field is greater than 16.
   * *   **FontName**: the font name. Default value: KaiTi. For more information about the valid values, see **Fonts used in a production studio**.
   * *   **BorderColor**: the color of the text border. Valid values: 0x000000 to 0xffffff. By default, this parameter is left empty. In this case, the color of the text border is transparent.
   * *   **LocationId**: the channel ID of the source subtitles.
   * *   **SourceLan**: the source language of the subtitles in the video. Valid values: en (English), cn (Chinese), es (Spanish), and ru (Russian). Default value: cn.
   * *   **TargetLan**: the target language of the subtitles in the video. If you do not specify this field, speech recognition is used. If you specify this field, translation is used. Valid values: en (English), cn (Chinese), es (Spanish), and ru (Russian).
   * *   **ShowSourceLan**: specifies whether to display the source language. A value of true specifies that the source language is displayed. A value of false specifies that the source language is not displayed. Default value: false.
   * *   **Truncation**: specifies whether to allow subtitle truncation. A value of true specifies that the subtitles can be truncated. A value of false specifies that the subtitles cannot be truncated. Default value: false.
   * *   **SourceLanPerLineWordCount**: the number of words displayed in each line of the source language. This field takes effect only if you set Truncation to true. Default value: 20.
   * *   **TargetLanPerLineWordCount**: the number of words displayed in each line of the target language. This field takes effect only if you set Truncation to true. Default value: 20.
   * 
   * @example
   * {"BorderWidthNormalized":0.01,"SizeNormalized":0.05,"Color":"0x000000","LocationId":"RV01","SourceLan":"cn","FontName":"KaiTi","BorderColor":"0xffffff"}
   */
  captionLayerContent?: string;
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
   * The ID of the component. If the component was added by calling the [AddCasterComponent](https://help.aliyun.com/document_detail/2848030.html) operation, check the value of the response parameter ComponentId to obtain the ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 05ab713c-676e-49c0-96ce-cc408da1****
   */
  componentId?: string;
  /**
   * @remarks
   * The information about the component layer, such as the size and layout, The value must be a JSON string. This parameter contains the following fields:
   * 
   * *   **HeightNormalized**: the normalized value of the height of the component layer.
   * *   **WidthNormalized**: the normalized value of the width of the component layer.
   * *   **PositionNormalized**: the normalized value of the position of the component layer.
   * *   **PositionRefer**: the reference coordinates of the component layer.
   * 
   * @example
   * {"HeightNormalized":"1","PositionRefer":"topRight","WidthNormalized":"0","PositionNormalized":["0.1","0.2"]}
   */
  componentLayer?: string;
  /**
   * @remarks
   * The name of the component. By default, the name is the ID of the component.
   * 
   * @example
   * text01
   */
  componentName?: string;
  /**
   * @remarks
   * The type of the component. Valid values:
   * 
   * *   **text**: text component. The TextLayerContent parameter is required if you set ComponentType to text.
   * *   **image**: image component. The ImageLayerContent parameter is required if you set ComponentType to image.
   * *   **caption**: subtitle component. The CaptionLayerContent parameter is required if you set ComponentType to caption.
   * 
   * @example
   * text
   */
  componentType?: string;
  /**
   * @remarks
   * The display effect for the component. Valid values:
   * 
   * *   **none** (default)
   * *   **animateH**: horizontal scrolling
   * *   **animateV**: vertical scrolling
   * 
   * @example
   * animateV
   */
  effect?: string;
  /**
   * @remarks
   * The information about the image component. The value must be a JSON string.
   * 
   * >  This parameter is required if you set ComponentType to image.
   * 
   * The MaterialId field specifies the ID of the material from the media asset library.
   * 
   * @example
   * {"MaterialId":"6cf724c6ebfd4a59b5b3cec6f10d5ecf"}
   */
  imageLayerContent?: string;
  ownerId?: number;
  regionId?: string;
  /**
   * @remarks
   * The information about the text component. The value must be a JSON string. This parameter contains the following fields:
   * 
   * >  This parameter is required if you set ComponentType to text.
   * 
   * *   **SizeNormalized**: the normalized value of the font size. The value of this field equals the font size divided by the output height. Valid values: `0 to 1`. The maximum font size is 1,024, even if the font size calculated based on this field is greater than 1,024.
   * *   **BorderWidthNormalized**: the normalized value of the border width. The value of this field equals the border width divided by the font size. Valid values: `0 to 1`. Default value: 0. The maximum border width is 16, even if the border width calculated based on this field is greater than 16.
   * *   **FontName**: the font name. Default value: KaiTi. For more information about the valid values, see **Fonts used in a production studio**.
   * *   **BorderColor**: the color of the text border. Valid values: 0x000000 to 0xffffff. By default, this parameter is left empty. In this case, the color of the text border is transparent.
   * *   **Text**: the content of the text. By default, this parameter is left empty. In this case, the text contains no content.
   * *   **Color**: the color of the text. The default value is 0xff0000, which indicates that the text is in red.
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

