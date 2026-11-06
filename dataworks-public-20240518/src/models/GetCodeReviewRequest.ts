// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCodeReviewRequest extends $dara.Model {
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
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      projectId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

