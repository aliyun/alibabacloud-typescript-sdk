// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeAppAgentTemplatesResponseBodyTemplatesAsrConfig } from "./DescribeAppAgentTemplatesResponseBodyTemplatesAsrConfig";
import { DescribeAppAgentTemplatesResponseBodyTemplatesLlmConfig } from "./DescribeAppAgentTemplatesResponseBodyTemplatesLlmConfig";
import { DescribeAppAgentTemplatesResponseBodyTemplatesTtsConfig } from "./DescribeAppAgentTemplatesResponseBodyTemplatesTtsConfig";


export class DescribeAppAgentTemplatesResponseBodyTemplates extends $dara.Model {
  asrConfig?: DescribeAppAgentTemplatesResponseBodyTemplatesAsrConfig;
  /**
   * @example
   * 1
   */
  chatMode?: number;
  /**
   * @example
   * 2020-09-04T06:22:15Z
   */
  createTime?: string;
  /**
   * @example
   * 你好，机器人。
   */
  greeting?: string;
  /**
   * @example
   * wv7N****
   */
  id?: string;
  /**
   * @example
   * 1
   */
  interruptMode?: number;
  llmConfig?: DescribeAppAgentTemplatesResponseBodyTemplatesLlmConfig;
  /**
   * @example
   * 测试
   */
  name?: string;
  ttsConfig?: DescribeAppAgentTemplatesResponseBodyTemplatesTtsConfig;
  /**
   * @example
   * 1
   */
  type?: number;
  static names(): { [key: string]: string } {
    return {
      asrConfig: 'AsrConfig',
      chatMode: 'ChatMode',
      createTime: 'CreateTime',
      greeting: 'Greeting',
      id: 'Id',
      interruptMode: 'InterruptMode',
      llmConfig: 'LlmConfig',
      name: 'Name',
      ttsConfig: 'TtsConfig',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      asrConfig: DescribeAppAgentTemplatesResponseBodyTemplatesAsrConfig,
      chatMode: 'number',
      createTime: 'string',
      greeting: 'string',
      id: 'string',
      interruptMode: 'number',
      llmConfig: DescribeAppAgentTemplatesResponseBodyTemplatesLlmConfig,
      name: 'string',
      ttsConfig: DescribeAppAgentTemplatesResponseBodyTemplatesTtsConfig,
      type: 'number',
    };
  }

  validate() {
    if(this.asrConfig && typeof (this.asrConfig as any).validate === 'function') {
      (this.asrConfig as any).validate();
    }
    if(this.llmConfig && typeof (this.llmConfig as any).validate === 'function') {
      (this.llmConfig as any).validate();
    }
    if(this.ttsConfig && typeof (this.ttsConfig as any).validate === 'function') {
      (this.ttsConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

