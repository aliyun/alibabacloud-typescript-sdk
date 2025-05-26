// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Message extends $dara.Model {
  assistantType?: string;
  content?: string;
  createTime?: string;
  datasetName?: string;
  language?: string;
  regenerate?: boolean;
  reply?: string;
  score?: number;
  sourceURI?: string;
  suggestion?: string;
  tone?: string;
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

