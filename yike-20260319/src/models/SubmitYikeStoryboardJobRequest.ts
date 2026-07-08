// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitYikeStoryboardJobRequest extends $dara.Model {
  /**
   * @remarks
   * The aspect ratio of the output video. Valid values:
   * - 16:9
   * - 9:16
   * - 4:3
   * - 3:4
   * 
   * @example
   * 4:3
   */
  aspectRatio?: string;
  /**
   * @remarks
   * The execution mode for storyboard generation. Valid values:
   * - FullPipeline: full pipeline generation, which includes storyboard generation and shot video generation.
   * - StoryboardOnly: generates only the storyboard.
   * 
   * @example
   * FullPipeline
   */
  execMode?: string;
  /**
   * @remarks
   * The OSS URL of the file. The URL must point to a file with a .txt or .doc extension.
   * 
   * @example
   * http://test.oss-cn-shanghai.aliyuncs.com/test.txt
   */
  fileURL?: string;
  /**
   * @remarks
   * Specifies whether to retain the original dialogue during final video composition. Default value: True.
   * 
   * @example
   * True
   */
  keepOriginDialogue?: boolean;
  /**
   * @remarks
   * The model parameters in JSON format.
   * 
   * "AudioEnable": false disables audio.
   * 
   * @example
   * {
   *   "AudioEnable": false
   * }
   */
  modelParams?: string;
  /**
   * @remarks
   * The narration voice ID. Valid values:
   * - sys_GracefulPoisedWoman: mature graceful female
   * - sys_ElderlyWistfulWoman: wistful elderly female
   * - sys_SweetBrightGirl: sweet bright girl
   * - sys_YoungGracefulWoman: gentle graceful female
   * - sys_MaturePoisedWoman: poised mature female
   * - sys_MatureWiseWoman: elegant wise female
   * - sys_CalmDeepMale: calm deep male
   * - sys_SereneIntellect: serene intellectual male
   * - sys_MajesticBaritone: majestic baritone male
   * - sys_GravellySoulful: gravelly soulful male
   * - sys_ClassicYoungMan: classic narrator male
   * - sys_WiseYoungMan: wise narrator male
   * - sys_ClassicYoungWoman: classic narrator female
   * - sys_IntellectualYoungWoman: intellectual narrator female
   * - sys_GentleYoungMan: gentle narrator male
   * - sys_thoughtfulBoy: thoughtful boy
   * - sys_RichBassMale: rich bass male
   * - sys_ClassicMiddleAgedWoman: classic middle-aged narrator female
   * 
   * @example
   * sys_YoungGracefulWoman
   */
  narrationVoiceId?: string;
  needCaption?: boolean;
  /**
   * @remarks
   * The resolution of the output video. Valid values:
   * - 720P
   * - 1080P
   * - 2K
   * - 4K
   * 
   * @example
   * 720P
   */
  resolution?: string;
  shotPromptLang?: string;
  /**
   * @remarks
   * The storyboard shot generation mode. Valid values:
   * - multi: multi-reference video generation
   * - default: image-to-video generation
   * 
   * @example
   * multi
   */
  shotPromptMode?: string;
  /**
   * @remarks
   * The shot split mode. Valid values:
   * - firstPersonNarration: narration commentary mode
   * 
   * @example
   * firstPersonNarration
   */
  shotSplitMode?: string;
  /**
   * @remarks
   * Specifies whether to skip failed shots. Default value: True.
   * 
   * @example
   * True
   */
  skipFailureShot?: boolean;
  /**
   * @remarks
   * The type of the material source. Valid values:
   * - Novel: novel
   * 
   * @example
   * Novel
   */
  sourceType?: string;
  /**
   * @remarks
   * The storyboard style ID. Valid values:
   * - RealisticPhotographyPro: realistic photography Pro
   * - RealisticGuzhuangPro: realistic ancient costume Pro
   * - RealisticXianxiaPro: realistic Xianxia Pro
   * - RealisticWesternPro: Western realistic Pro
   * - RealisticPhotography: realistic photography
   * - RealisticGuzhuang: realistic ancient costume
   * - RealisticXianxia: realistic Xianxia
   * - RealisticWasteland: realistic wasteland
   * - RealisticEra: realistic vintage
   * - GuofengAnime: 2D Chinese-style anime
   * - GuofengAnime3D: 3D Chinese-style anime
   * - AncientRomanceAnime: anime ancient romance
   * - PostApocalypticAnime: anime post-apocalyptic
   * - Cartoon3D: 3D cartoon
   * - Photorealistic3D: photorealistic 3D rendering
   * - SciFiRealism: sci-fi realism
   * - Chibi3D: 3D chibi
   * - ShojoManga: Japanese manga
   * - NewPeriodAnime: new era Japanese anime
   * - FairyTale2D: 2D fairy tale
   * - Wasteland2D: 2D wasteland
   * - InkWuxia: ink wash Wuxia
   * - ShadiaoMeme: panda head meme style
   * - Chibi2D: 2D chibi
   * - Ghibli: Ghibli
   * - SciFiComic: cyberpunk
   * - AmericanSuperhero: American superhero
   * 
   * @example
   * RealisticPhotography
   */
  styleId?: string;
  /**
   * @remarks
   * The task title. If not specified, a default title is automatically generated based on the date. The title cannot exceed 128 bytes in length and must be UTF-8 encoded.
   * 
   * @example
   * test-title
   */
  title?: string;
  /**
   * @remarks
   * The custom settings in JSON format. Fields include:
   * - NotifyAddress: the callback URL for task completion. MNS callbacks and HTTP callbacks are supported.
   * 
   * @example
   * {
   *   "NotifyAddress": "https://www.callback.com"
   * }
   */
  userData?: string;
  /**
   * @remarks
   * The video model. Valid values:
   * - wan2.6-r2v-flash
   * 
   * @example
   * wan2.6-r2v-flash
   */
  videoModel?: string;
  static names(): { [key: string]: string } {
    return {
      aspectRatio: 'AspectRatio',
      execMode: 'ExecMode',
      fileURL: 'FileURL',
      keepOriginDialogue: 'KeepOriginDialogue',
      modelParams: 'ModelParams',
      narrationVoiceId: 'NarrationVoiceId',
      needCaption: 'NeedCaption',
      resolution: 'Resolution',
      shotPromptLang: 'ShotPromptLang',
      shotPromptMode: 'ShotPromptMode',
      shotSplitMode: 'ShotSplitMode',
      skipFailureShot: 'SkipFailureShot',
      sourceType: 'SourceType',
      styleId: 'StyleId',
      title: 'Title',
      userData: 'UserData',
      videoModel: 'VideoModel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aspectRatio: 'string',
      execMode: 'string',
      fileURL: 'string',
      keepOriginDialogue: 'boolean',
      modelParams: 'string',
      narrationVoiceId: 'string',
      needCaption: 'boolean',
      resolution: 'string',
      shotPromptLang: 'string',
      shotPromptMode: 'string',
      shotSplitMode: 'string',
      skipFailureShot: 'boolean',
      sourceType: 'string',
      styleId: 'string',
      title: 'string',
      userData: 'string',
      videoModel: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

