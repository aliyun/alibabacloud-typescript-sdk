// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryExportSendRecordListNewResponseBodyListFcFileUpInsResponse } from "./QueryExportSendRecordListNewResponseBodyListFcFileUpInsResponse";


export class QueryExportSendRecordListNewResponseBodyList extends $dara.Model {
  fcFileUpInsResponse?: QueryExportSendRecordListNewResponseBodyListFcFileUpInsResponse[];
  static names(): { [key: string]: string } {
    return {
      fcFileUpInsResponse: 'FcFileUpInsResponse',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fcFileUpInsResponse: { 'type': 'array', 'itemType': QueryExportSendRecordListNewResponseBodyListFcFileUpInsResponse },
    };
  }

  validate() {
    if(Array.isArray(this.fcFileUpInsResponse)) {
      $dara.Model.validateArray(this.fcFileUpInsResponse);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

