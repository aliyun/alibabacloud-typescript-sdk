// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTranslationTasksRequest extends $dara.Model {
  APIKey?: string;
  endTime?: string;
  maxResults?: number;
  nextToken?: string;
  originalFileName?: string;
  sourceLanguage?: string;
  startTime?: string;
  status?: string;
  targetLanguage?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      APIKey: 'APIKey',
      endTime: 'EndTime',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      originalFileName: 'OriginalFileName',
      sourceLanguage: 'SourceLanguage',
      startTime: 'StartTime',
      status: 'Status',
      targetLanguage: 'TargetLanguage',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      APIKey: 'string',
      endTime: 'string',
      maxResults: 'number',
      nextToken: 'string',
      originalFileName: 'string',
      sourceLanguage: 'string',
      startTime: 'string',
      status: 'string',
      targetLanguage: 'string',
      taskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

