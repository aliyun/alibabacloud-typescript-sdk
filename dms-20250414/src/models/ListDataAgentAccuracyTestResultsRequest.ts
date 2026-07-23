// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDataAgentAccuracyTestResultsRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID of the accuracy test.
   * 
   * @example
   * at-106n4rg17gv9fxxxxxxxxxx
   */
  accuracyTestInsId?: string;
  /**
   * @remarks
   * The result ID used to retrieve a single record.
   * 
   * @example
   * at-emhnbwewfngrxxxxxxxxxx
   */
  accuracyTestResultId?: string;
  /**
   * @remarks
   * The subtask ID used to filter results.
   * 
   * @example
   * f1eb8728-xxxx-xxxx-xxxx-xxxxxxxxxxxx
   */
  accuracyTestSubtaskId?: string;
  /**
   * @remarks
   * The ID of the accuracy test task.
   * 
   * @example
   * 692abb8f-xxxx-xxxx-xxxx-xxxxxxxxxxxx
   */
  accuracyTestTaskId?: string;
  /**
   * @remarks
   * The maximum number of entries per page.
   * 
   * @example
   * nu use
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token.
   * 
   * @example
   * NesLoKLEdIZrKhDT7I2gS****
   */
  nextToken?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: string;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The workspace ID.
   * 
   * @example
   * 8wfig6l33n4f4xxxxxxxxxx
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      accuracyTestInsId: 'AccuracyTestInsId',
      accuracyTestResultId: 'AccuracyTestResultId',
      accuracyTestSubtaskId: 'AccuracyTestSubtaskId',
      accuracyTestTaskId: 'AccuracyTestTaskId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accuracyTestInsId: 'string',
      accuracyTestResultId: 'string',
      accuracyTestSubtaskId: 'string',
      accuracyTestTaskId: 'string',
      maxResults: 'number',
      nextToken: 'string',
      pageNumber: 'string',
      pageSize: 'string',
      regionId: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

