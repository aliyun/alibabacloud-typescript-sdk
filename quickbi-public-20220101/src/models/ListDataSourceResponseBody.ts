// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDataSourceResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * Quick BI user ID of the creator.
   * 
   * @example
   * 281*****-485******-8
   */
  creatorId?: string;
  /**
   * @remarks
   * Owner\\"s nickname.
   * 
   * @example
   * system
   */
  creatorName?: string;
  /**
   * @remarks
   * Data source ID.
   * 
   * @example
   * 7FC9A6A6-****-5CED-B*****E891E4075
   */
  datasourceId?: string;
  /**
   * @remarks
   * Data source type.
   * 
   * @example
   * odps
   */
  dsType?: string;
  /**
   * @remarks
   * Creation time of the data source, in yyyy-MM-dd HH:mm:ss format.
   * 
   * @example
   * 2024-04-16 13:17:39
   */
  gmtCreate?: string;
  /**
   * @remarks
   * Modification time.
   * 
   * @example
   * 2024-08-15 10:06:31
   */
  gmtModified?: string;
  /**
   * @remarks
   * Primary data source type for multi-engine data sources.
   * 
   * @example
   * dataphin
   */
  parentDsType?: string;
  /**
   * @remarks
   * Display name of the data source.
   * 
   * @example
   * 0327
   */
  showName?: string;
  static names(): { [key: string]: string } {
    return {
      creatorId: 'CreatorId',
      creatorName: 'CreatorName',
      datasourceId: 'DatasourceId',
      dsType: 'DsType',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      parentDsType: 'ParentDsType',
      showName: 'ShowName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creatorId: 'string',
      creatorName: 'string',
      datasourceId: 'string',
      dsType: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      parentDsType: 'string',
      showName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataSourceResponseBody extends $dara.Model {
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * 7FC9A6A6-****-5CED-B*****E891E4075
   */
  requestId?: string;
  /**
   * @remarks
   * Array of data source information.
   */
  result?: ListDataSourceResponseBodyResult[];
  /**
   * @remarks
   * Whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListDataSourceResponseBodyResult },
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

