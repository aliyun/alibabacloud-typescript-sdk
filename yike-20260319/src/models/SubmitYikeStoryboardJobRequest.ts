// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitYikeStoryboardJobRequest extends $dara.Model {
  /**
   * @remarks
   * The aspect ratio of the output video. Valid values:
   * - 16:9
   * - 9:16
   * - 4:3
   * - 3:4.
   * 
   * @example
   * 4:3
   */
  aspectRatio?: string;
  /**
   * @remarks
   * The execution mode for storyboard generation. Valid values:
   * - FullPipeline: Full pipeline generation, which includes both storyboard generation and shot video generation.
   * - StoryboardOnly: Generates only the storyboard.
   * 
   * @example
   * FullPipeline
   */
  execMode?: string;
  /**
   * @remarks
   * The OSS URL of the file. Only URLs with the .txt or .doc file name extension are supported.
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
   * - sys_GracefulPoisedWoman: Graceful Poised Woman
   * - sys_ElderlyWistfulWoman: Elderly Wistful Woman
   * - sys_SweetBrightGirl: Sweet Bright Girl
   * - sys_YoungGracefulWoman: Young Graceful Woman
   * - sys_MaturePoisedWoman: Mature Poised Woman
   * - sys_MatureWiseWoman: Mature Wise Woman
   * - sys_CalmDeepMale: Calm Deep Male
   * - sys_SereneIntellect: Serene Intellect
   * - sys_MajesticBaritone: Majestic Baritone
   * - sys_GravellySoulful: Gravelly Soulful
   * - sys_ClassicYoungMan: Classic Young Man Narrator
   * - sys_WiseYoungMan: Wise Young Man Narrator
   * - sys_ClassicYoungWoman: Classic Young Woman Narrator
   * - sys_IntellectualYoungWoman: Intellectual Young Woman Narrator
   * - sys_GentleYoungMan: Gentle Young Man Narrator
   * - sys_thoughtfulBoy: Thoughtful Boy
   * - sys_RichBassMale: Rich Bass Male
   * - sys_ClassicMiddleAgedWoman: Classic Middle-Aged Woman Narrator.
   * 
   * @example
   * sys_YoungGracefulWoman
   */
  narrationVoiceId?: string;
  /**
   * @remarks
   * The resolution of the output video. Valid values:
   * - 720P
   * - 1080P
   * - 2K
   * - 4K.
   * 
   * @example
   * 720P
   */
  resolution?: string;
  /**
   * @remarks
   * The storyboard shot generation mode. Valid values:
   * - multi: multi-reference video generation
   * - default: image-to-video generation.
   * 
   * @example
   * multi
   */
  shotPromptMode?: string;
  /**
   * @remarks
   * The shot split mode. Valid values:
   * - firstPersonNarration: narration mode.
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
   * - Novel: novel.
   * 
   * @example
   * Novel
   */
  sourceType?: string;
  /**
   * @remarks
   * The storyboard style ID. Valid values:
   * - RealisticPhotographyPro: Realistic Photography Pro
   * - RealisticGuzhuangPro: Realistic Ancient Costume Pro
   * - RealisticXianxiaPro: Realistic Xianxia Pro
   * - RealisticWesternPro: Western Realism Pro
   * - RealisticPhotography: Realistic Photography
   * - RealisticGuzhuang: Realistic Ancient Costume
   * - RealisticXianxia: Realistic Xianxia
   * - RealisticWasteland: Realistic Wasteland
   * - RealisticEra: Realistic Vintage
   * - GuofengAnime: 2D Chinese-style Anime
   * - GuofengAnime3D: 3D Chinese-style Anime
   * - AncientRomanceAnime: Anime Ancient Romance
   * - PostApocalypticAnime: Anime Post-Apocalyptic
   * - Cartoon3D: 3D Cartoon
   * - Photorealistic3D: Photorealistic 3D Rendering
   * - SciFiRealism: Sci-Fi Realism
   * - Chibi3D: 3D Chibi
   * - ShojoManga: Japanese Manga
   * - NewPeriodAnime: New Era Japanese Anime
   * - FairyTale2D: 2D Fairy Tale
   * - Wasteland2D: 2D Wasteland
   * - InkWuxia: Ink Wash Wuxia
   * - ShadiaoMeme: Panda Head Meme
   * - Chibi2D: 2D Chibi
   * - Ghibli: Ghibli
   * - SciFiComic: Cyberpunk
   * - AmericanSuperhero: American Superhero.
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
   * The custom settings in JSON format.
   * - NotifyAddress specifies the callback for task completion. Both MNS callbacks and HTTP callbacks are supported.
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
   * - wan2.6-r2v-flash.
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
      resolution: 'Resolution',
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
      resolution: 'string',
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

