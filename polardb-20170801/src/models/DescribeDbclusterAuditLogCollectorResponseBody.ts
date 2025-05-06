// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBClusterAuditLogCollectorResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status of SQL collector. Valid values:
   * 
   * *   Enable
   * *   Disabled
   * 
   * @example
   * Disabled
   */
  collectorStatus?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 59011D2B-2A38-4207-A86C-72BC1F882D19
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      collectorStatus: 'CollectorStatus',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      collectorStatus: 'string',
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

