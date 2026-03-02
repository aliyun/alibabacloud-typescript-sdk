// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class LibraryReview extends $dara.Model {
  applicant?: string;
  artificatId?: string;
  developerName?: string;
  feedbackLibraryInstruction?: string;
  feedbackLibrarySchema?: string;
  gmtCreate?: string;
  groupId?: string;
  id?: number;
  libraryName?: string;
  libraryUrl?: string;
  marketId?: string;
  marketName?: string;
  remainTime?: string;
  requestId?: string;
  reviewerId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      applicant: 'applicant',
      artificatId: 'artificatId',
      developerName: 'developerName',
      feedbackLibraryInstruction: 'feedbackLibraryInstruction',
      feedbackLibrarySchema: 'feedbackLibrarySchema',
      gmtCreate: 'gmtCreate',
      groupId: 'groupId',
      id: 'id',
      libraryName: 'libraryName',
      libraryUrl: 'libraryUrl',
      marketId: 'marketId',
      marketName: 'marketName',
      remainTime: 'remainTime',
      requestId: 'requestId',
      reviewerId: 'reviewerId',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicant: 'string',
      artificatId: 'string',
      developerName: 'string',
      feedbackLibraryInstruction: 'string',
      feedbackLibrarySchema: 'string',
      gmtCreate: 'string',
      groupId: 'string',
      id: 'number',
      libraryName: 'string',
      libraryUrl: 'string',
      marketId: 'string',
      marketName: 'string',
      remainTime: 'string',
      requestId: 'string',
      reviewerId: 'string',
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

