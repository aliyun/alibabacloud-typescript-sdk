// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BucUser extends $dara.Model {
  account?: string;
  empId?: string;
  empType?: string;
  enterpriseId?: number;
  name?: string;
  nickName?: string;
  personalPhotoUrl?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      account: 'account',
      empId: 'empId',
      empType: 'empType',
      enterpriseId: 'enterpriseId',
      name: 'name',
      nickName: 'nickName',
      personalPhotoUrl: 'personalPhotoUrl',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      account: 'string',
      empId: 'string',
      empType: 'string',
      enterpriseId: 'number',
      name: 'string',
      nickName: 'string',
      personalPhotoUrl: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

