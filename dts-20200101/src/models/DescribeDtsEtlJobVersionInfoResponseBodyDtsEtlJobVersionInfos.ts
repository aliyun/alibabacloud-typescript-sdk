// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDtsEtlJobVersionInfoResponseBodyDtsEtlJobVersionInfos extends $dara.Model {
  /**
   * @remarks
   * The time when the ETL task was created. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1637229315000
   */
  createTime?: string;
  /**
   * @remarks
   * The ID of the creator.
   * 
   * @example
   * 10000000
   */
  creator?: string;
  /**
   * @remarks
   * The username of the creator.
   * 
   * @example
   * ***@****.com
   */
  creatorName?: string;
  /**
   * @remarks
   * The ID of the DTS instance.
   * 
   * @example
   * dtsg******gd
   */
  dtsInstanceId?: string;
  /**
   * @remarks
   * The ID of the ETL task.
   * 
   * @example
   * l5512es7w15****
   */
  dtsJobId?: string;
  /**
   * @remarks
   * The name of the ETL task.
   * 
   * @example
   * test_sql
   */
  dtsJobName?: string;
  /**
   * @remarks
   * The time when the ETL task was last modified. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1637230117000
   */
  modifyTime?: string;
  /**
   * @remarks
   * The safe checkpoint of the ETL task.
   * 
   * @example
   * 1637230117000
   */
  safeCheckpoint?: string;
  /**
   * @remarks
   * The log level. Valid values: ERROR, WARN, INFO, and DEBUG.
   * 
   * @example
   * INFO
   */
  status?: string;
  /**
   * @remarks
   * The version number of the ETL task.
   * 
   * @example
   * 9
   */
  version?: number;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      creator: 'Creator',
      creatorName: 'CreatorName',
      dtsInstanceId: 'DtsInstanceId',
      dtsJobId: 'DtsJobId',
      dtsJobName: 'DtsJobName',
      modifyTime: 'ModifyTime',
      safeCheckpoint: 'SafeCheckpoint',
      status: 'Status',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      creator: 'string',
      creatorName: 'string',
      dtsInstanceId: 'string',
      dtsJobId: 'string',
      dtsJobName: 'string',
      modifyTime: 'string',
      safeCheckpoint: 'string',
      status: 'string',
      version: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

