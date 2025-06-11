// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateProjectModifyRecordsRequestTransferMappingWhiteTableRulesObjectMapping extends $dara.Model {
  mappedName?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      mappedName: 'MappedName',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mappedName: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

