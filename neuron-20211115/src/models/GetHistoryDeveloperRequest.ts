// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetHistoryDeveloperRequest extends $dara.Model {
  enterpriseId?: number;
  static names(): { [key: string]: string } {
    return {
      enterpriseId: 'enterpriseId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enterpriseId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

