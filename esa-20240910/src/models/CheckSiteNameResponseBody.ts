// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckSiteNameResponseBody extends $dara.Model {
  description?: string;
  isSubSite?: boolean;
  messeage?: string;
  passed?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      isSubSite: 'IsSubSite',
      messeage: 'Messeage',
      passed: 'Passed',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      isSubSite: 'boolean',
      messeage: 'string',
      passed: 'boolean',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

