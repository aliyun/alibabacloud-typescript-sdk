// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTranslationTasksRequest extends $dara.Model {
  /**
   * @remarks
   * The API key that identifies the identity of member accounts. You can obtain it from the RuiYiBao console.
   * 
   * @example
   * sk-1***s
   */
  APIKey?: string;
  /**
   * @remarks
   * The end time of the task.
   * - Format: YYYY-MM-dd HH:mm:ss.
   * 
   * @example
   * 2026-06-27 00:00:00
   */
  endTime?: string;
  /**
   * @remarks
   * The maximum number of results to return per request when using the NextToken-based pagination.
   * 
   * Valid values: 1 to 100.
   * 
   * Default value: 10.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token.
   * 
   * @example
   * AAAAAV3MpHK1AP0pfERHZN5pu6lkCoZlXVoygoU1omMcKBVc
   */
  nextToken?: string;
  /**
   * @remarks
   * The name of the source file.
   * 
   * @example
   * translated_a_file.pptx
   */
  originalFileName?: string;
  /**
   * @remarks
   * The language of the source file.
   * 
   * @example
   * zh
   */
  sourceLanguage?: string;
  /**
   * @remarks
   * The start time of the task.
   * - Format: YYYY-MM-dd HH:mm:ss.
   * 
   * @example
   * 2026-06-26 00:00:00
   */
  startTime?: string;
  /**
   * @remarks
   * The task status. Valid values:
   * - CANCELLED: Cancelled.
   * - COMPLETED: Completed.
   * - FAILED: Failed.
   * - PROCESSING: Processing.
   * - PENDING: Pending.
   * - ANALYZED: Analyzed.
   * 
   * @example
   * PROCESSING
   */
  status?: string;
  /**
   * @remarks
   * The target language.
   * 
   * @example
   * en
   */
  targetLanguage?: string;
  /**
   * @remarks
   * The translation task ID, which is the TaskId obtained from UploadTranslationFile.
   * 
   * @example
   * f9c35b0453b
   */
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

