// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Group extends $dara.Model {
  /**
   * @remarks
   * The time when the group was created. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 2019-08-20T06:51:27.292Z
   */
  createdAt?: number;
  /**
   * @remarks
   * The ID of the user who created the group.
   * 
   * @example
   * c9b7a5aa04d14ae3867fdc886fa01da4
   */
  creator?: string;
  /**
   * @remarks
   * The description of the group.
   * 
   * @example
   * created by system
   */
  description?: string;
  /**
   * @remarks
   * The ID of the domain.
   * 
   * @example
   * bj1
   */
  domainId?: string;
  /**
   * @remarks
   * The ID of the group.
   * 
   * @example
   * b45c0c0c373c41ec9ebb5c85a025a08f
   */
  groupId?: string;
  /**
   * @remarks
   * The name of the group.
   * 
   * @example
   * test group
   */
  groupName?: string;
  /**
   * @remarks
   * The time when the group was modified. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 2019-08-20T06:51:27.292Z
   */
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

