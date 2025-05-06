// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunSearchLawQueryRequestFilterCondition extends $dara.Model {
  lawName?: string;
  static names(): { [key: string]: string } {
    return {
      lawName: 'lawName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lawName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

