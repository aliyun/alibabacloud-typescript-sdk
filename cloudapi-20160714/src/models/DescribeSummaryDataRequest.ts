// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSummaryDataRequest extends $dara.Model {
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

