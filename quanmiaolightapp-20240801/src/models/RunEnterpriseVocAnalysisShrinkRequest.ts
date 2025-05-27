// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunEnterpriseVocAnalysisShrinkRequest extends $dara.Model {
  akProxy?: string;
  apiKey?: string;
  /**
   * @remarks
   * 需要进行VOC分析的文本内容（content、contents、url、fileKey 四选一。优先级从小到大）
   * 
   * @example
   * 这是一段需要分析的文本内容
   */
  content?: string;
  extraInfo?: string;
  /**
   * @remarks
   * 过滤标签，用于筛选符合条件的内容。
   */
  filterTagsShrink?: string;
  /**
   * @example
   * qwen-max
   */
  modelId?: string;
  /**
   * @remarks
   * 指定返回结果的格式，支持json或text
   * 
   * @example
   * 按照如下格式输出：{"text1": "xxxx", "text2": "xxxx"}
   */
  outputFormat?: string;
  sourceTrace?: boolean;
  /**
   * @remarks
   * 业务标签体系，用于对文本内容进行分类和分析。
   */
  tagsShrink?: string;
  /**
   * @example
   * 你是一名经验丰富的数据分析师，擅长从文本评论中提取结构化信息。你需要从用户评论列表中识别和提取出与以下四个维度相关的关键词和短语：
   *             
   *             索引：输入评论JSON数组中的索引（从零开始）表示针对该条索引抽取的维度。
   *             购买动机：描述用户购买产品的原因、需求或驱动力的关键词或短语。
   *             未满足需求点：用户在使用产品过程中提到的未满足需求或问题的关键词或短语。
   *             使用场景：用户提到的具体使用场景、使用方式或环境的关键词或短语。
   *             正负面观点：明确表示用户对产品或服务的正面或负面看法的关键词或短语。
   */
  taskDescription?: string;
  static names(): { [key: string]: string } {
    return {
      akProxy: 'akProxy',
      apiKey: 'apiKey',
      content: 'content',
      extraInfo: 'extraInfo',
      filterTagsShrink: 'filterTags',
      modelId: 'modelId',
      outputFormat: 'outputFormat',
      sourceTrace: 'sourceTrace',
      tagsShrink: 'tags',
      taskDescription: 'taskDescription',
    };
  }

  static types(): { [key: string]: any } {
    return {
      akProxy: 'string',
      apiKey: 'string',
      content: 'string',
      extraInfo: 'string',
      filterTagsShrink: 'string',
      modelId: 'string',
      outputFormat: 'string',
      sourceTrace: 'boolean',
      tagsShrink: 'string',
      taskDescription: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

