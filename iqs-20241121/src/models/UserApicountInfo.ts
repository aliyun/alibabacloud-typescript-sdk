// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UserAPICountInfo extends $dara.Model {
  apiType?: string;
  scope?: string;
  usedCount?: number;
  static names(): { [key: string]: string } {
    return {
      apiType: 'apiType',
      scope: 'scope',
      usedCount: 'usedCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiType: 'string',
      scope: 'string',
      usedCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

