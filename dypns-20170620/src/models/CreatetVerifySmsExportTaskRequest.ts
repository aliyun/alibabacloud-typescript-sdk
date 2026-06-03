// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatetVerifySmsExportTaskRequest extends $dara.Model {
  /**
   * @example
   * 2025-01-08
   */
  endDate?: string;
  ownerId?: number;
  /**
   * @example
   * 186***9399
   */
  phoneNumber?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @example
   * 示例值
   */
  schemeName?: string;
  /**
   * @example
   * 0
   */
  sendStatus?: number;
  /**
   * @example
   * 示例值示例值示例值
   */
  signName?: string;
  /**
   * @example
   * 2025-01-01
   */
  startDate?: string;
  /**
   * @example
   * 示例值示例值示例值
   */
  taskName?: string;
  /**
   * @example
   * SMS_483325498
   */
  templateCode?: string;
  static names(): { [key: string]: string } {
    return {
      endDate: 'EndDate',
      ownerId: 'OwnerId',
      phoneNumber: 'PhoneNumber',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      schemeName: 'SchemeName',
      sendStatus: 'SendStatus',
      signName: 'SignName',
      startDate: 'StartDate',
      taskName: 'TaskName',
      templateCode: 'TemplateCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endDate: 'string',
      ownerId: 'number',
      phoneNumber: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      schemeName: 'string',
      sendStatus: 'number',
      signName: 'string',
      startDate: 'string',
      taskName: 'string',
      templateCode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

