// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckUserProjectNameResponseBody extends $dara.Model {
  check?: boolean;
  description?: string;
  projectName?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      check: 'Check',
      description: 'Description',
      projectName: 'ProjectName',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      check: 'boolean',
      description: 'string',
      projectName: 'string',
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

