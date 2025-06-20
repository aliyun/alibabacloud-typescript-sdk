// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryExecuteInfoRequestLevelTreeTreeData extends $dara.Model {
  data?: any[];
  dataSubType?: string;
  value?: string[];
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      dataSubType: 'DataSubType',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': 'any' },
      dataSubType: 'string',
      value: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    if(Array.isArray(this.value)) {
      $dara.Model.validateArray(this.value);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

