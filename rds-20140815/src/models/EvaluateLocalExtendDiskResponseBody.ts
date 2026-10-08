// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EvaluateLocalExtendDiskResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the expansion is available. Valid values:
   * 
   * - **true**: Available.
   * 
   * - **false**: Not available.
   * 
   * @example
   * true
   */
  available?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * rm-wz9s06u4drm******
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The transfer type of the database instance.
   * 
   * @example
   * 0
   */
  DBInstanceTransType?: string;
  /**
   * @remarks
   * The maximum capacity of the local disk. Unit: GB.
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

