// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PrivilegeTransferResultEntrie extends $dara.Model {
  children?: PrivilegeTransferResultEntrie[];
  errMsg?: string;
  isLeaf?: boolean;
  privilege?: string;
  privilegeDisplayName?: string;
  status?: string;
  test?: string;
  static names(): { [key: string]: string } {
    return {
      children: 'Children',
      errMsg: 'ErrMsg',
      isLeaf: 'IsLeaf',
      privilege: 'Privilege',
      privilegeDisplayName: 'PrivilegeDisplayName',
      status: 'Status',
      test: 'Test',
    };
  }

  static types(): { [key: string]: any } {
    return {
      children: { 'type': 'array', 'itemType': PrivilegeTransferResultEntrie },
      errMsg: 'string',
      isLeaf: 'boolean',
      privilege: 'string',
      privilegeDisplayName: 'string',
      status: 'string',
      test: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.children)) {
      $dara.Model.validateArray(this.children);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

