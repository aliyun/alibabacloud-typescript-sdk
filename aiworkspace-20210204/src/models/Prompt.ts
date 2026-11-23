// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Prompt extends $dara.Model {
  /**
   * @example
   * PRIVATE
   */
  accessibility?: string;
  /**
   * @example
   * 2024-11-15T07:06:42Z
   */
  createTime?: string;
  /**
   * @example
   * 这是一个自动驾驶场景的提示词。
   */
  description?: string;
  /**
   * @example
   * {
   *   "context": "你是一个拥有十年驾龄的老司机，请你针对以下图片场景做出你的分析判断。",
   *   "inputData": "{\\n  \\"反光贴条\\": \\" 通常为黄色，或者黄黑间隔，贴在墙角等永久的突出障碍物上，用于提示车主避让。为条带状，不是锥筒，不是地锁，不是水马！\\",\\n  \\"地锁\\": \\"也叫车位锁，升起时可以阻止车位被占用。存在地锁时，务必输出地锁为升起还是降下状态。有升起架子时为升起状态,否则为降下状态。\\"\\n}"
   * }
   */
  frameworkContent?: string;
  /**
   * @example
   * ICIO
   */
  frameworkType?: string;
  /**
   * @example
   * 2024-12-26T02:17:18Z
   */
  modifyTime?: string;
  /**
   * @example
   * pmt-axbxtc****xxx
   */
  promptId?: string;
  /**
   * @example
   * 自动驾驶提示词
   */
  promptName?: string;
  static names(): { [key: string]: string } {
    return {
      accessibility: 'Accessibility',
      createTime: 'CreateTime',
      description: 'Description',
      frameworkContent: 'FrameworkContent',
      frameworkType: 'FrameworkType',
      modifyTime: 'ModifyTime',
      promptId: 'PromptId',
      promptName: 'PromptName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessibility: 'string',
      createTime: 'string',
      description: 'string',
      frameworkContent: 'string',
      frameworkType: 'string',
      modifyTime: 'string',
      promptId: 'string',
      promptName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

