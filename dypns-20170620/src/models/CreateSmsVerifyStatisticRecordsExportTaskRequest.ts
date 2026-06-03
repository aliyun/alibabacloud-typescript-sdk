// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSmsVerifyStatisticRecordsExportTaskRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1772294400000
   */
  fromDate?: number;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @example
   * 示例值示例值
   */
  schemeName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1772899200000
   */
  toDate?: number;
  static names(): { [key: string]: string } {
    return {
      fromDate: 'FromDate',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      schemeName: 'SchemeName',
      toDate: 'ToDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fromDate: 'number',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      schemeName: 'string',
      toDate: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

