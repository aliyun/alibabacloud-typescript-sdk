// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeExtensionRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * >  You can call the [DescribeDBInstances](https://help.aliyun.com/document_detail/86911.html) Interface to query the details of all AnalyticDB PostgreSQL Instances in the target region, including Instance IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * gp-xxxxxxxxx
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * Database name.
   * 
   * *   Only contain letters, digits, and underscores (_).
   * *   Must start with a letter.
   * *   Up to 63 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * test01
   */
  databaseName?: string;
  /**
   * @remarks
   * The extension name.
   * 
   * This parameter is required.
   * 
   * @example
   * zhparser
   */
  extensionName?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      databaseName: 'DatabaseName',
      extensionName: 'ExtensionName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      databaseName: 'string',
      extensionName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

