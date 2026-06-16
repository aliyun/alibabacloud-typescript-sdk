// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateLogoTaskRequest extends $dara.Model {
  logoVersion?: string;
  /**
   * @remarks
   * The negative prompt.
   * 
   * @example
   * 不生成政治相关图片内容
   */
  negativePrompt?: string;
  /**
   * @remarks
   * The task parameters.
   * 
   * @example
   * {\\"ehpcutilParam\\":\\"sched job_submit --commandline \\\\\\"/ehpcdata/data/usersTest/huangqiaoyi-1725933699384/huangqiaoyi-1725933699384.slurm\\\\\\" --runasuser TestGfjnSimworks\\"}
   */
  parameters?: string;
  /**
   * @remarks
   * The positive prompt.
   * 
   * @example
   * 请严格遵照原文提取稿件的摘要，不要随意捏造和修改文中出现的新闻数据，不要改变原文的意思和新闻事实，不要在摘要中添加自己的观点。生成的摘要不要出现语法和标点的错误。在生成摘要时请去掉里面的记者、通讯员、稿件来源等信息。
   */
  prompt?: string;
  static names(): { [key: string]: string } {
    return {
      logoVersion: 'LogoVersion',
      negativePrompt: 'NegativePrompt',
      parameters: 'Parameters',
      prompt: 'Prompt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logoVersion: 'string',
      negativePrompt: 'string',
      parameters: 'string',
      prompt: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

