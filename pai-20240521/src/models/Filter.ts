// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Filter extends $dara.Model {
  filterBy?: string;
  filterCondition?: string;
  filterOperation?: string;
  static names(): { [key: string]: string } {
    return {
      filterBy: 'FilterBy',
      filterCondition: 'FilterCondition',
      filterOperation: 'FilterOperation',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filterBy: 'string',
      filterCondition: 'string',
      filterOperation: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

