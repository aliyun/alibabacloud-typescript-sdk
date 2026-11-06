// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCodeReviewsRequest extends $dara.Model {
  /**
   * @remarks
   * The account ID of the submitter.
   * 
   * @example
   * 209000000000000002
   */
  creator?: string;
  /**
   * @remarks
   * The page number. Pages start from 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 10. Maximum value: 100.
   * 
   * @example
   * 10
   */
  pageSize?: number;
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
   * The account ID of the specified reviewer. Exact match is used.
   * 
   * @example
   * 209000000000000001
   */
  reviewer?: string;
  /**
   * @remarks
   * The review status.
   * 
   * @example
   * Reviewing
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      creator: 'Creator',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      projectId: 'ProjectId',
      reviewer: 'Reviewer',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creator: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      projectId: 'number',
      reviewer: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

