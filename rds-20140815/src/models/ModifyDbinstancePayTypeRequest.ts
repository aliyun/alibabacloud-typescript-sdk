// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDBInstancePayTypeRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  payType?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  period?: string;
  resourceOwnerId?: number;
  usedTime?: number;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      payType: 'PayType',
      period: 'Period',
      resourceOwnerId: 'ResourceOwnerId',
      usedTime: 'UsedTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      payType: 'string',
      period: 'string',
      resourceOwnerId: 'number',
      usedTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

