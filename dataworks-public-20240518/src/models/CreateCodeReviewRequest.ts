// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCodeReviewRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the code review. The maximum length is 1,024 characters.
   * 
   * @example
   * Code review
   */
  description?: string;
  /**
   * @remarks
   * The ID of a single release pipeline.
   * 
   * This parameter is required.
   * 
   * @example
   * pipeline-id
   */
  pipelineRunId?: string;
  /**
   * @remarks
   * The workspace ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 23620
   */
  projectId?: number;
  /**
   * @remarks
   * Specifies the reviewers. Separate multiple accounts with commas (,). At least one reviewer is required, and the maximum length is 512 characters after deduplication.
   * 
   * This parameter is required.
   * 
   * @example
   * 1234567890123456,2345678901234567
   */
  reviewers?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      pipelineRunId: 'PipelineRunId',
      projectId: 'ProjectId',
      reviewers: 'Reviewers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      pipelineRunId: 'string',
      projectId: 'number',
      reviewers: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

