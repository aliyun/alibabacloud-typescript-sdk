// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListGeneratedContentsRequest extends $dara.Model {
  /**
   * @remarks
   * Workspace ID: [AgentKey](https://help.aliyun.com/document_detail/2587494.html)
   * 
   * This parameter is required.
   * 
   * @example
   * xxxxx_p_efm
   */
  agentKey?: string;
  /**
   * @remarks
   * Content domain (content category)
   * 
   * - media: Media writing
   * 
   * - government: Government document writing
   * 
   * - office: Office writing
   * 
   * - market: Marketing writing
   * 
   * - custom: Custom writing
   * 
   * - commentGenerate: Opinion generation
   * 
   * @example
   * media
   */
  contentDomain?: string;
  /**
   * @remarks
   * Page number
   * 
   * @example
   * 1
   */
  current?: number;
  /**
   * @remarks
   * Data type filter
   * 
   * - plainText: Plain text
   * 
   * - richText: Rich text
   * 
   * - html: HTML
   * 
   * - pdf: PDF
   * 
   * - word: Word
   * 
   * - excel: Excel
   * 
   * - csv: CSV
   * 
   * - image: Image
   * 
   * - video: Video
   * 
   * - audio: Audio
   * 
   * @example
   * plainText
   */
  dataType?: string;
  /**
   * @remarks
   * End time
   * 
   * @example
   * 2024-01-04 11:46:07
   */
  endTime?: string;
  /**
   * @remarks
   * Search keyword: Supports fuzzy search on titles and content
   * 
   * @example
   * 检索Query
   */
  query?: string;
  /**
   * @remarks
   * Items per page. Default is 10.
   * 
   * @example
   * 10
   */
  size?: number;
  /**
   * @remarks
   * Start time
   * 
   * @example
   * 2024-01-04 11:46:07
   */
  startTime?: string;
  /**
   * @remarks
   * Task ID
   * 
   * > You do not need to specify TaskId. The system generates it automatically. If you use the same TaskId for multiple tasks, those tasks belong to the same conversation.
   * 
   * @example
   * task-03d46184ee7d8749
   */
  taskId?: string;
  /**
   * @remarks
   * Title text
   * 
   * @example
   * 杭州亚运会
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      contentDomain: 'ContentDomain',
      current: 'Current',
      dataType: 'DataType',
      endTime: 'EndTime',
      query: 'Query',
      size: 'Size',
      startTime: 'StartTime',
      taskId: 'TaskId',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      contentDomain: 'string',
      current: 'number',
      dataType: 'string',
      endTime: 'string',
      query: 'string',
      size: 'number',
      startTime: 'string',
      taskId: 'string',
      title: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

