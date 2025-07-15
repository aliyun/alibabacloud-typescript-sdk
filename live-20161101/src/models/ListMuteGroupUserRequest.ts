// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMuteGroupUserRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the interactive messaging application.
   * 
   * This parameter is required.
   * 
   * @example
   * VKL3***
   */
  appId?: string;
  /**
   * @remarks
   * The ID of the messaging group.
   * 
   * This parameter is required.
   * 
   * @example
   * AE35-****-T95F
   */
  groupId?: string;
  /**
   * @remarks
   * The ID of the user who performs the operation.
   * 
   * @example
   * de1**a0
   */
  operatorUserId?: string;
  /**
   * @remarks
   * The page number. Default value: 1. Valid values: 1 to 100000.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageNum?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 20. Valid values: 1 to 50.
   * 
   * This parameter is required.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      groupId: 'GroupId',
      operatorUserId: 'OperatorUserId',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      groupId: 'string',
      operatorUserId: 'string',
      pageNum: 'number',
      pageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

