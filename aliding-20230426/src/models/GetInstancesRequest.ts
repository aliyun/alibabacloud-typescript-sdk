// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetInstancesRequest extends $dara.Model {
  /**
   * @example
   * APP_PBxxx
   */
  appType?: string;
  /**
   * @example
   * agree
   */
  approvedResult?: string;
  /**
   * @example
   * 2021-05-01
   */
  createFromTimeGMT?: string;
  /**
   * @example
   * 2021-05-01
   */
  createToTimeGMT?: string;
  /**
   * @example
   * FORM-EF6Yxxx
   */
  formUuid?: string;
  /**
   * @example
   * RUNNING
   */
  instanceStatus?: string;
  /**
   * @example
   * zh_CN
   */
  language?: string;
  /**
   * @example
   * 2021-05-01
   */
  modifiedFromTimeGMT?: string;
  /**
   * @example
   * 2021-09-10
   */
  modifiedToTimeGMT?: string;
  /**
   * @example
   * {}
   */
  orderConfigJson?: string;
  /**
   * @example
   * 012345
   */
  originatorId?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * {\\"textField\\":\\"123\\"}
   */
  searchFieldJson?: string;
  /**
   * @example
   * hexxyy
   */
  systemToken?: string;
  /**
   * @example
   * 1045001
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      appType: 'AppType',
      approvedResult: 'ApprovedResult',
      createFromTimeGMT: 'CreateFromTimeGMT',
      createToTimeGMT: 'CreateToTimeGMT',
      formUuid: 'FormUuid',
      instanceStatus: 'InstanceStatus',
      language: 'Language',
      modifiedFromTimeGMT: 'ModifiedFromTimeGMT',
      modifiedToTimeGMT: 'ModifiedToTimeGMT',
      orderConfigJson: 'OrderConfigJson',
      originatorId: 'OriginatorId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      searchFieldJson: 'SearchFieldJson',
      systemToken: 'SystemToken',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appType: 'string',
      approvedResult: 'string',
      createFromTimeGMT: 'string',
      createToTimeGMT: 'string',
      formUuid: 'string',
      instanceStatus: 'string',
      language: 'string',
      modifiedFromTimeGMT: 'string',
      modifiedToTimeGMT: 'string',
      orderConfigJson: 'string',
      originatorId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      searchFieldJson: 'string',
      systemToken: 'string',
      taskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

