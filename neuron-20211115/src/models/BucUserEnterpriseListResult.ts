// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { BucEnterprise } from "./BucEnterprise";


export class BucUserEnterpriseListResult extends $dara.Model {
  data?: BucEnterprise[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': BucEnterprise },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

