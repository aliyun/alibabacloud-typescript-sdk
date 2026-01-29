// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunMarketingInformationWritingShrinkRequest extends $dara.Model {
  apiKey?: string;
  /**
   * @example
   * 标题长度不超过30个字符
   */
  customLimitation?: string;
  /**
   * @example
   * 请根据商品特点生成吸引人的标题
   */
  customPrompt?: string;
  /**
   * @example
   * {
   *               "minWordLength": "10",
   *               "maxWordLength": "50",
   *               "enableThinking": "true",
   *               "thinkingBudget": "2000"
   *             }
   */
  extParametersShrink?: string;
  /**
   * @example
   * 5
   */
  generateCount?: string;
  /**
   * @example
   * 商品特点：透气、减震、舒适
   */
  inputExample?: string;
  /**
   * @example
   * 运动鞋 透气 减震 跑步
   */
  keywords?: string;
  /**
   * @example
   * en
   */
  language?: string;
  /**
   * @example
   * qwen-max
   * qwen-plus
   */
  modelId?: string;
  /**
   * @example
   * 要求标题简洁有力，突出产品特点
   */
  otherRequirements?: string;
  /**
   * @example
   * 透气减震运动鞋，舒适跑步首选
   */
  outputExample?: string;
  /**
   * @example
   * 请根据关键词生成吸引人的商品标题
   */
  prompt?: string;
  /**
   * @example
   * 时尚休闲运动鞋
   */
  sourceMaterial?: string;
  /**
   * @example
   * 10-20
   */
  wordCountRange?: string;
  /**
   * @example
   * generateProductTitle
   */
  writingType?: string;
  static names(): { [key: string]: string } {
    return {
      apiKey: 'apiKey',
      customLimitation: 'customLimitation',
      customPrompt: 'customPrompt',
      extParametersShrink: 'extParameters',
      generateCount: 'generateCount',
      inputExample: 'inputExample',
      keywords: 'keywords',
      language: 'language',
      modelId: 'modelId',
      otherRequirements: 'otherRequirements',
      outputExample: 'outputExample',
      prompt: 'prompt',
      sourceMaterial: 'sourceMaterial',
      wordCountRange: 'wordCountRange',
      writingType: 'writingType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiKey: 'string',
      customLimitation: 'string',
      customPrompt: 'string',
      extParametersShrink: 'string',
      generateCount: 'string',
      inputExample: 'string',
      keywords: 'string',
      language: 'string',
      modelId: 'string',
      otherRequirements: 'string',
      outputExample: 'string',
      prompt: 'string',
      sourceMaterial: 'string',
      wordCountRange: 'string',
      writingType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

