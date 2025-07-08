// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchCreateSmsSignResponseBodyData extends $dara.Model {
  appliedNum?: number;
  availableNum?: number;
  batchCreateSmsSignResult?: string;
  static names(): { [key: string]: string } {
    return {
      appliedNum: 'AppliedNum',
      availableNum: 'AvailableNum',
      batchCreateSmsSignResult: 'BatchCreateSmsSignResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appliedNum: 'number',
      availableNum: 'number',
      batchCreateSmsSignResult: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

