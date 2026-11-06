// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateCodeReviewRequest extends $dara.Model {
  /**
   * @remarks
   * The unique identifier of the review.
   * 
   * This parameter is required.
   * 
   * @example
   * review-id
   */
  id?: string;
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
   * The final decision. Valid values: Accepted, Rejected.
   * 
   * This parameter is required.
   * 
   * @example
   * Accepted
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      projectId: 'ProjectId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      projectId: 'number',
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

