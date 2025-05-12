// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryMediaListByURLResponseBodyMediaListMediaSummaryListSummaryFile } from "./QueryMediaListByUrlresponseBodyMediaListMediaSummaryListSummaryFile";


export class QueryMediaListByURLResponseBodyMediaListMediaSummaryListSummary extends $dara.Model {
  /**
   * @remarks
   * The name of the workflow activity.
   * 
   * @example
   * example-activity-****
   */
  activityName?: string;
  /**
   * @remarks
   * The information about the input file.
   */
  file?: QueryMediaListByURLResponseBodyMediaListMediaSummaryListSummaryFile;
  /**
   * @remarks
   * The ID of the workflow that generates the summary.
   * 
   * @example
   * 93ab850b4f6f44eab54b6e91d24d****
   */
  mediaWorkflowId?: string;
  /**
   * @remarks
   * The name of the workflow that generates the summary.
   * 
   * @example
   * example-mediaworkflow-****
   */
  mediaWorkflowName?: string;
  /**
   * @remarks
   * The type of the summary. Valid values:
   * 
   * *   **Video**: video
   * *   **Gif**: dynamic image
   * 
   * @example
   * Gif
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      activityName: 'ActivityName',
      file: 'File',
      mediaWorkflowId: 'MediaWorkflowId',
      mediaWorkflowName: 'MediaWorkflowName',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activityName: 'string',
      file: QueryMediaListByURLResponseBodyMediaListMediaSummaryListSummaryFile,
      mediaWorkflowId: 'string',
      mediaWorkflowName: 'string',
      type: 'string',
    };
  }

  validate() {
    if(this.file && typeof (this.file as any).validate === 'function') {
      (this.file as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

