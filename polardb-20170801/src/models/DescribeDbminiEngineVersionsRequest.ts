// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBMiniEngineVersionsRequest extends $dara.Model {
  /**
   * @remarks
   * The CPU architecture. Valid values:
   * 
   * - **X86**
   * 
   * - **ARM**
   * 
   * @example
   * X86
   */
  architecture?: string;
  /**
   * @remarks
   * The product series. Valid values:
   * 
   * - **Normal**: Cluster Edition (default)
   * 
   * - **SENormal**: Standard Edition
   * 
   * For more information about product series, see [Product series](https://help.aliyun.com/document_detail/183258.html).
   * 
   * @example
   * Normal
   */
  creationCategory?: string;
  /**
   * @remarks
   * The minor version of the database engine.
   * 
   * - If `DBVersion` is set to **8.0**, valid values are:
   * 
   *   - **8.0.2**
   * 
   *   - **8.0.1**
   * 
   * - If `DBVersion` is set to **5.7**, the valid value is **5.7.28**.
   * 
   * - If `DBVersion` is set to **5.6**, the valid value is **5.6.16**.
   * 
   * @example
   * 8.0.1
   */
  DBMinorVersion?: string;
  /**
   * @remarks
   * The database type. The only valid value is **MySQL**.
   * 
   * - **MySQL**.
   * 
   * This parameter is required.
   * 
   * @example
   * MySQL
   */
  DBType?: string;
  /**
   * @remarks
   * The major version of the database engine. Valid values:
   * 
   * - **8.0**
   * 
   * - **5.7**
   * 
   * - **5.6**
   * 
   * This parameter is required.
   * 
   * @example
   * 5.6
   */
  DBVersion?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The zone.
   * 
   * @example
   * cn-hangzhou-g
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      architecture: 'Architecture',
      creationCategory: 'CreationCategory',
      DBMinorVersion: 'DBMinorVersion',
      DBType: 'DBType',
      DBVersion: 'DBVersion',
      regionId: 'RegionId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      architecture: 'string',
      creationCategory: 'string',
      DBMinorVersion: 'string',
      DBType: 'string',
      DBVersion: 'string',
      regionId: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

