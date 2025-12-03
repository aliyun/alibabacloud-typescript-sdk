// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ReviewMergeRequestRequest extends $dara.Model {
  /**
   * @example
   * f0b1e61db5961df5975a93f9129d2513
   */
  accessToken?: string;
  draftCommentIds?: string[];
  reviewComment?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * PASS
   */
  reviewOpinion?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 60de7a6852743a5162b5f957
   */
  organizationId?: string;
  static names(): { [key: string]: string } {
    return {
      accessToken: 'accessToken',
      draftCommentIds: 'draftCommentIds',
      reviewComment: 'reviewComment',
      reviewOpinion: 'reviewOpinion',
      organizationId: 'organizationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessToken: 'string',
      draftCommentIds: { 'type': 'array', 'itemType': 'string' },
      reviewComment: 'string',
      reviewOpinion: 'string',
      organizationId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.draftCommentIds)) {
      $dara.Model.validateArray(this.draftCommentIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

