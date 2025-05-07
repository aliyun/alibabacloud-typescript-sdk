// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSQLCollectorPolicyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1AD222E9-E606-4A42-BF6D-8A4442913CEF
   */
  requestId?: string;
  /**
   * @remarks
   * The status of the SQL Explorer (SQL Audit) feature. Valid values:
   * 
   * *   **Enable**
   * *   **Disabled**
   * 
   * @example
   * Enable
   */
  SQLCollectorStatus?: string;
  /**
   * @remarks
   * A reserved parameter.
   * 
   * @example
   * 0
   */
  storagePeriod?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      SQLCollectorStatus: 'SQLCollectorStatus',
      storagePeriod: 'StoragePeriod',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      SQLCollectorStatus: 'string',
      storagePeriod: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

