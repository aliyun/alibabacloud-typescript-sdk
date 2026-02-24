// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRemediationsRequest extends $dara.Model {
  configRuleIds?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      configRuleIds: 'ConfigRuleIds',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configRuleIds: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

