// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDataArchiveOrderRequestParamVariables extends $dara.Model {
  name?: string;
  pattern?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      pattern: 'Pattern',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      pattern: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

