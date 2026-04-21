// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UserAPICountInfo } from "./UserApicountInfo";


export class NormalServiceConfigResult extends $dara.Model {
  availableTime?: string;
  gmtCreate?: string;
  status?: string;
  userAPICountInfos?: UserAPICountInfo[];
  static names(): { [key: string]: string } {
    return {
      availableTime: 'availableTime',
      gmtCreate: 'gmtCreate',
      status: 'status',
      userAPICountInfos: 'userAPICountInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      availableTime: 'string',
      gmtCreate: 'string',
      status: 'string',
      userAPICountInfos: { 'type': 'array', 'itemType': UserAPICountInfo },
    };
  }

  validate() {
    if(Array.isArray(this.userAPICountInfos)) {
      $dara.Model.validateArray(this.userAPICountInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

