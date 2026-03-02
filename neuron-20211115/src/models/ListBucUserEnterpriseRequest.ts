// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListBucUserEnterpriseRequest extends $dara.Model {
  empId?: string;
  static names(): { [key: string]: string } {
    return {
      empId: 'empId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      empId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

