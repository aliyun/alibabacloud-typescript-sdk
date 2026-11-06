// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSQLExplorerRetentionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The retention period of SQL Explorer logs. Valid values:
   * * **30**: 30 days
   * * **180**: 180 days
   * * **365**: 1 year
   * * **1095**: 3 years
   * * **1825**: 5 years
   * 
   * @example
   * 30
   */
  configValue?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * 35707295
   */
  DBInstanceID?: number;
  /**
   * @remarks
   * The cluster name.
   * 
   * @example
   * pc-****************
   */
  DBInstanceName?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 6A2EE5B4-CC9F-46E1-A747-E43BC9******
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      configValue: 'ConfigValue',
      DBInstanceID: 'DBInstanceID',
      DBInstanceName: 'DBInstanceName',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configValue: 'string',
      DBInstanceID: 'number',
      DBInstanceName: 'string',
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

