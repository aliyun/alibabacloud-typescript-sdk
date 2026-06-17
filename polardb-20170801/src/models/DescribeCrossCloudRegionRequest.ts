// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCrossCloudRegionRequest extends $dara.Model {
  /**
   * @remarks
   * The cloud service provider. Valid values:
   * 
   * - HuaweiCloud
   * 
   * - Azure
   * 
   * @example
   * HuaweiCloud
   */
  cloudProvider?: string;
  /**
   * @remarks
   * The ID of the third-party cloud region.
   * 
   * @example
   * cn-east-3
   */
  crossCloudRegionId?: string;
  /**
   * @remarks
   * The database engine type. Valid values:
   * 
   * - MySQL
   * 
   * - PostgreSQL
   * 
   * - Oracle
   * 
   * @example
   * MySQL
   */
  DBType?: string;
  static names(): { [key: string]: string } {
    return {
      cloudProvider: 'CloudProvider',
      crossCloudRegionId: 'CrossCloudRegionId',
      DBType: 'DBType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cloudProvider: 'string',
      crossCloudRegionId: 'string',
      DBType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

