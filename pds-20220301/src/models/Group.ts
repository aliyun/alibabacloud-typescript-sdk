// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Group extends $dara.Model {
  createdAt?: number;
  creator?: string;
  description?: string;
  domainId?: string;
  groupId?: string;
  groupName?: string;
  updatedAt?: number;
  static names(): { [key: string]: string } {
    return {
      createdAt: 'created_at',
      creator: 'creator',
      description: 'description',
      domainId: 'domain_id',
      groupId: 'group_id',
      groupName: 'group_name',
      updatedAt: 'updated_at',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdAt: 'number',
      creator: 'string',
      description: 'string',
      domainId: 'string',
      groupId: 'string',
      groupName: 'string',
      updatedAt: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

