// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDataCenterDatabaseResponseBodyData extends $dara.Model {
  databaseDesc?: string;
  /**
   * @example
   * diamonds.csv
   */
  databaseName?: string;
  /**
   * @example
   * 6kv159u9vtpvl**********b8
   */
  dbId?: string;
  /**
   * @example
   * csv
   */
  dbType?: string;
  /**
   * @example
   * 2025-12-11T14:04:32.000+00:00
   */
  descUpdateTime?: string;
  /**
   * @example
   * 73088962
   */
  dmsDbId?: number;
  /**
   * @example
   * 2740966
   */
  dmsInstanceId?: number;
  /**
   * @example
   * 2025-12-11T14:04:32.000+00:00
   */
  gmtCreated?: string;
  /**
   * @example
   * FILE
   */
  importType?: string;
  /**
   * @example
   * f-ean8u5881qk4*********xh5y
   */
  instanceName?: string;
  /**
   * @example
   * N
   */
  isInternal?: string;
  /**
   * @example
   * 999
   */
  size?: number;
  static names(): { [key: string]: string } {
    return {
      databaseDesc: 'DatabaseDesc',
      databaseName: 'DatabaseName',
      dbId: 'DbId',
      dbType: 'DbType',
      descUpdateTime: 'DescUpdateTime',
      dmsDbId: 'DmsDbId',
      dmsInstanceId: 'DmsInstanceId',
      gmtCreated: 'GmtCreated',
      importType: 'ImportType',
      instanceName: 'InstanceName',
      isInternal: 'IsInternal',
      size: 'Size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databaseDesc: 'string',
      databaseName: 'string',
      dbId: 'string',
      dbType: 'string',
      descUpdateTime: 'string',
      dmsDbId: 'number',
      dmsInstanceId: 'number',
      gmtCreated: 'string',
      importType: 'string',
      instanceName: 'string',
      isInternal: 'string',
      size: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataCenterDatabaseResponseBody extends $dara.Model {
  data?: ListDataCenterDatabaseResponseBodyData[];
  /**
   * @example
   * success
   */
  errorCode?: string;
  /**
   * @example
   * Specified parameter Tid is not valid.
   */
  errorMessage?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 67E910F2-4B62-5B0C-ACA3-7547695C****
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListDataCenterDatabaseResponseBodyData },
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

