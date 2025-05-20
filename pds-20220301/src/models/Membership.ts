// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Membership extends $dara.Model {
  createdAt?: number;
  creator?: string;
  description?: string;
  domainId?: string;
  groupId?: string;
  memberRole?: string;
  memberType?: string;
  subGroupId?: string;
  updatedAt?: number;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      createdAt: 'created_at',
      creator: 'creator',
      description: 'description',
      domainId: 'domain_id',
      groupId: 'group_id',
      memberRole: 'member_role',
      memberType: 'member_type',
      subGroupId: 'sub_group_id',
      updatedAt: 'updated_at',
      userId: 'user_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdAt: 'number',
      creator: 'string',
      description: 'string',
      domainId: 'string',
      groupId: 'string',
      memberRole: 'string',
      memberType: 'string',
      subGroupId: 'string',
      updatedAt: 'number',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

