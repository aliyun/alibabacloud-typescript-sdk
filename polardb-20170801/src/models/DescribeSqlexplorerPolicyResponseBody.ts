// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSQLExplorerPolicyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 3655211B-4D74-4E13-91E6-FF2AFE******
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the SQL Explorer feature is enabled. Valid values:
   * * **Enable**: Enabled.
   * * **Disabled**: Disabled.
   * 
   * @example
   * Enable
   */
  SQLCollectorStatus?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      SQLCollectorStatus: 'SQLCollectorStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      SQLCollectorStatus: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

