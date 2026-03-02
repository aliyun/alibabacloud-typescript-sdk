// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PbcInvokeReview extends $dara.Model {
  applicant?: string;
  gmtCreate?: string;
  id?: number;
  invokeId?: number;
  invokePbcId?: number;
  invokePbcName?: string;
  pbcId?: number;
  pbcName?: string;
  requestId?: string;
  reviewer?: string;
  reviewerId?: string;
  status?: string;
  usage?: string;
  static names(): { [key: string]: string } {
    return {
      applicant: 'applicant',
      gmtCreate: 'gmtCreate',
      id: 'id',
      invokeId: 'invokeId',
      invokePbcId: 'invokePbcId',
      invokePbcName: 'invokePbcName',
      pbcId: 'pbcId',
      pbcName: 'pbcName',
      requestId: 'requestId',
      reviewer: 'reviewer',
      reviewerId: 'reviewerId',
      status: 'status',
      usage: 'usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicant: 'string',
      gmtCreate: 'string',
      id: 'number',
      invokeId: 'number',
      invokePbcId: 'number',
      invokePbcName: 'string',
      pbcId: 'number',
      pbcName: 'string',
      requestId: 'string',
      reviewer: 'string',
      reviewerId: 'string',
      status: 'string',
      usage: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

