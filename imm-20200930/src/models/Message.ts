// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Message extends $dara.Model {
  /**
   * @remarks
   * Assistant type.
   * 
   * @example
   * doc/translate
   */
  assistantType?: string;
  /**
   * @remarks
   * The content of the question.
   * 
   * @example
   * Hello, which park is closest to me?
   */
  content?: string;
  /**
   * @remarks
   * The time when the message was created.
   * 
   * @example
   * 2022-01-14T10:10:52.83948013+08:00
   */
  createTime?: string;
  /**
   * @remarks
   * The dataset that the answer references to.
   * 
   * @example
   * test-dataset
   */
  datasetName?: string;
  /**
   * @remarks
   * The language of the answer.
   * 
   * @example
   * zh-Hans
   */
  language?: string;
  /**
   * @remarks
   * Indicates whether the message is a regenerated answer.
   * 
   * @example
   * false
   */
  regenerate?: boolean;
  /**
   * @remarks
   * The answer.
   * 
   * @example
   * Hello, I\\"m your assistant.
   */
  reply?: string;
  /**
   * @remarks
   * Rate
   * 
   * @example
   * 0.99
   */
  score?: number;
  /**
   * @remarks
   * The URI of the source file from which the answer was generated.
   * 
   * @example
   * oss://test-bucket/sample.docx
   */
  sourceURI?: string;
  /**
   * @remarks
   * The compliance check results. Valid values: pass block
   * 
   * @example
   * pass
   */
  suggestion?: string;
  /**
   * @remarks
   * The tone of the answer.
   * 
   * @example
   * professional
   */
  tone?: string;
  /**
   * @remarks
   * The topic in the question.
   * 
   * @example
   * The value varies based on the value of the AssistantType parameter.
   */
  topic?: string;
  static names(): { [key: string]: string } {
    return {
      assistantType: 'AssistantType',
      content: 'Content',
      createTime: 'CreateTime',
      datasetName: 'DatasetName',
      language: 'Language',
      regenerate: 'Regenerate',
      reply: 'Reply',
      score: 'Score',
      sourceURI: 'SourceURI',
      suggestion: 'Suggestion',
      tone: 'Tone',
      topic: 'Topic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assistantType: 'string',
      content: 'string',
      createTime: 'string',
      datasetName: 'string',
      language: 'string',
      regenerate: 'boolean',
      reply: 'string',
      score: 'number',
      sourceURI: 'string',
      suggestion: 'string',
      tone: 'string',
      topic: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

