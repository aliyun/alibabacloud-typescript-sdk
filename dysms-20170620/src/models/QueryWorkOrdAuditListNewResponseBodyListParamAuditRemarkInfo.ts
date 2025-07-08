// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryWorkOrdAuditListNewResponseBodyListParamAuditRemarkInfo extends $dara.Model {
  rejectDate?: string;
  rejectInfo?: string;
  rejectSubInfo?: string;
  static names(): { [key: string]: string } {
    return {
      rejectDate: 'RejectDate',
      rejectInfo: 'RejectInfo',
      rejectSubInfo: 'RejectSubInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rejectDate: 'string',
      rejectInfo: 'string',
      rejectSubInfo: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

