// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDeploymentPackageResponseBodyDataDeployment extends $dara.Model {
  /**
   * @example
   * 7
   */
  checkingStatus?: number;
  /**
   * @example
   * 1593877765000
   */
  createTime?: number;
  /**
   * @example
   * 20030****
   */
  creatorId?: string;
  /**
   * @example
   * Success
   */
  errorMessage?: string;
  /**
   * @example
   * 1593877765000
   */
  executeTime?: number;
  /**
   * @example
   * 0
   */
  fromEnvironment?: number;
  /**
   * @example
   * 2003****
   */
  handlerId?: string;
  /**
   * @example
   * ods_user_info_d-2020-07-04_20030****
   */
  name?: string;
  /**
   * @example
   * 1
   */
  status?: number;
  /**
   * @example
   * 1
   */
  toEnvironment?: number;
  static names(): { [key: string]: string } {
    return {
      checkingStatus: 'CheckingStatus',
      createTime: 'CreateTime',
      creatorId: 'CreatorId',
      errorMessage: 'ErrorMessage',
      executeTime: 'ExecuteTime',
      fromEnvironment: 'FromEnvironment',
      handlerId: 'HandlerId',
      name: 'Name',
      status: 'Status',
      toEnvironment: 'ToEnvironment',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkingStatus: 'number',
      createTime: 'number',
      creatorId: 'string',
      errorMessage: 'string',
      executeTime: 'number',
      fromEnvironment: 'number',
      handlerId: 'string',
      name: 'string',
      status: 'number',
      toEnvironment: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

