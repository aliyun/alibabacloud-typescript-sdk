// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class RdAccountDTOTags extends $dara.Model {
  tagKey?: string;
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RdAccountDTO extends $dara.Model {
  accountType?: string;
  checked?: boolean;
  displayName?: string;
  id?: number;
  name?: string;
  tags?: RdAccountDTOTags[];
  static names(): { [key: string]: string } {
    return {
      accountType: 'AccountType',
      checked: 'Checked',
      displayName: 'DisplayName',
      id: 'Id',
      name: 'Name',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountType: 'string',
      checked: 'boolean',
      displayName: 'string',
      id: 'number',
      name: 'string',
      tags: { 'type': 'array', 'itemType': RdAccountDTOTags },
    };
  }

  validate() {
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

