// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EvaluateLocalExtendDiskResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the instance is available. Valid values: true and false.
   * 
   * @example
   * True
   */
  available?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * rm-bp1375i66nd******
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The data transfer type supported by the instance.
   * 
   * @example
   * 0
   */
  DBInstanceTransType?: string;
  /**
   * @remarks
   * The maximum value of the local disk. Unit: GB.
   * 
   * @example
   * 100
   */
  localUpgradeDiskLimit?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A4C4D26F-E5CE-5A28-8C54-46A6FB318223
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      available: 'Available',
      DBInstanceId: 'DBInstanceId',
      DBInstanceTransType: 'DBInstanceTransType',
      localUpgradeDiskLimit: 'LocalUpgradeDiskLimit',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      available: 'string',
      DBInstanceId: 'string',
      DBInstanceTransType: 'string',
      localUpgradeDiskLimit: 'number',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

