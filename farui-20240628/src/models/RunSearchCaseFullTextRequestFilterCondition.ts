// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunSearchCaseFullTextRequestFilterCondition extends $dara.Model {
  caseNo?: string;
  caseTitle?: string;
  static names(): { [key: string]: string } {
    return {
      caseNo: 'caseNo',
      caseTitle: 'caseTitle',
    };
  }

  static types(): { [key: string]: any } {
    return {
      caseNo: 'string',
      caseTitle: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

