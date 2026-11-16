// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitVideoCreativeGenerationJobRequest extends $dara.Model {
  /**
   * @remarks
   * The aspect ratio. Valid values: 16:9 (default), 9:16, 4:3, and 3:4.
   * 
   * This parameter is required.
   * 
   * @example
   * 4:3
   */
  aspectRatio?: string;
  /**
   * @remarks
   * The digital human information. The value is a JSON string. This parameter is required for the `creator-talk`, `creator-sales`, and `avatar-broadcast` scenes. It includes the following fields:
   * - AvatarPortrait: The digital human portrait. This field is required. The value is a string that specifies the media asset ID of the portrait image or the image URL.
   * - AvatarVoice: The digital human voice. This field is optional. The value is a string that specifies the voice audio ID or the audio URL.
   * 
   * @example
   * {\\"AvatarPortrait\\":\\"xxxxxxx\\",\\"AvatarVoice\\":\\"https://ice-ai-saas.oss-cn-shanghai.aliyuncs.com/ice-ai-saas-prd/xxxxxxx\\"}
   */
  avatarData?: string;
  /**
   * @remarks
   * The job parameters. The value is a JSON string. This parameter includes the following fields:
   * - TextType: The text type. This field is required. The value is an integer. Valid values: 1 (original draft, such as product or news information, which the system automatically converts into a voiceover script) and 2 (voiceover script).
   * - TextContent: The text content. This field is required. The value is a string. The maximum length is 10,000 characters.
   * - VoiceDuration: The expected voiceover duration. This field is optional. The value is an integer. This field is configured when TextType is set to 1. Unit: seconds. Default value: 60. The final video duration will be slightly shorter than the expected duration.
   * - NarrationVoiceId: The narration voice ID. This field is only valid for the `briefing-voiceover` scene.
   * - SceneImage: The scene image. This field is optional. This field is only valid for the three creator marketing scenes (`creator-sales`, `creator-talk`, and `product-showcase`). If you pass valid fields for other scenes, an InvalidParameter error is returned. If both fields are empty (including not passed or passed as an empty object {}), it is equivalent to not providing this parameter. The behavior is consistent with the existing process, and the request is not rejected. The Prompt and BackgroundMediaId/BackgroundMediaUrl fields are both optional, can coexist, and are not mutually exclusive. If only Prompt is passed, the text mode is used to generate the scene image. If only the background image is passed, the background image mode is used to fuse based on the background image. If both are passed, the background image takes precedence. If both BackgroundMediaId and BackgroundMediaUrl are passed, BackgroundMediaUrl takes precedence. This field includes the following sub-fields:
   *   - Prompt: The text description of the scene image. This field is optional. The value is a string. The maximum length is 2,000 characters. If the length exceeds the limit, an InvalidParameter error is returned. An empty string is considered as not provided.
   *   - BackgroundMediaId: The media asset ID of the background image. This field is optional. The value is a string. During submission, it is parsed into a URL by ice-media. If the parsing fails, the request is immediately rejected.
   *   - BackgroundMediaUrl: The direct URL of the background image. This field is optional. The value is a string. The URL must be an HTTP or HTTPS URL. In this case, media asset parsing is not performed.
   * 
   * This parameter is required.
   * 
   * @example
   * {"TextType":2,"TextContent":"Today, Beijing held a press conference to announce plans to further optimize the city\\"s transportation network, including adding three new subway lines within the next three years....","SceneImage":{"Prompt":"Real shot of a modern minimalist home kitchen, built-in steam oven and under-counter water purifier, warm white soft lighting, light gray marble countertop with white cabinets, clean and transparent picture with a real life atmosphere, vertical screen composition","BackgroundMediaId":"<media asset ID>","BackgroundMediaUrl":"https://example.com/bg.jpg"}}
   */
  jobParams?: string;
  /**
   * @remarks
   * The output language. The value is a JSON array string. Valid values: CN, EN, and YUE. The `avatar-broadcast` and `creator-sales` scenes only support Chinese.
   * 
   * @example
   * [\\"CN\\",\\"EN\\",\\"YUE\\"]
   */
  outputLanguages?: string;
  /**
   * @remarks
   * The resolution. Valid values:
   * - 1080P
   * - 720P: The default value.
   * 
   * This parameter is required.
   * 
   * @example
   * 720P
   */
  resolution?: string;
  /**
   * @remarks
   * The scene type. Valid values:
   * - briefing-voiceover: News broadcast (supplements shot footage based on voiceover or without a digital human).
   * - creator-talk: Creator explanation (multi-shot, news, science, or finance).
   * - creator-sales: Creator product promotion (three-part structure, product promotion, review, or store visit).
   * - avatar-broadcast: Digital human broadcast (fixed single shot, broadcast, announcement, or template).
   * 
   * This parameter is required.
   * 
   * @example
   * creator-sales
   */
  sceneType?: string;
  /**
   * @remarks
   * The custom parameters. The value is a JSON string. The value is returned as-is in query or callback results. The maximum length is 8,192 characters. System reserved words:
   * * NotifyAddress: The callback URL. The URL must start with http(s):// and have a maximum length of 2,048 characters. The callback is triggered after the node reaches the desired state.
   * * UserId: The UID of the actual resource ownership. If this field is missing, the system falls back to CallerUid.
   * 
   * @example
   * 12374214127312673137132
   */
  userData?: string;
  /**
   * @remarks
   * The list of user materials. The value is a JSON array string. This parameter includes the following fields:
   * - MediaId: The media asset ID of the image or video uploaded to Wanjing Yike.
   * - Type: The media type.
   * - Action: The usage method of the material. Valid values: `match` (matches suitable clips from the video material based on the voiceover) and `insert` (inserts the selected video material before the CTA shot. This is intelligently analyzed after shots are generated based on the voiceover and is only valid for videos). Default value: `match`.
   * 
   * @example
   * [{\\"Type\\":\\"video\\",\\"MediaId\\":\\"xxxxxxxx\\",\\"Action\\":\\"match\\"}]
   */
  userMaterials?: string;
  /**
   * @remarks
   * Specifies whether to include subtitles. Default value: true.
   * 
   * @example
   * true
   */
  withSubtitles?: boolean;
  static names(): { [key: string]: string } {
    return {
      aspectRatio: 'AspectRatio',
      avatarData: 'AvatarData',
      jobParams: 'JobParams',
      outputLanguages: 'OutputLanguages',
      resolution: 'Resolution',
      sceneType: 'SceneType',
      userData: 'UserData',
      userMaterials: 'UserMaterials',
      withSubtitles: 'WithSubtitles',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aspectRatio: 'string',
      avatarData: 'string',
      jobParams: 'string',
      outputLanguages: 'string',
      resolution: 'string',
      sceneType: 'string',
      userData: 'string',
      userMaterials: 'string',
      withSubtitles: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

