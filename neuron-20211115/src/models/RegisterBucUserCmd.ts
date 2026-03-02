// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RegisterBucUserCmd extends $dara.Model {
  enterpriseId?: number;
  enterpriseName?: string;
  static names(): { [key: string]: string } {
    return {
      enterpriseId: 'enterpriseId',
      enterpriseName: 'enterpriseName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enterpriseId: 'number',
      enterpriseName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

