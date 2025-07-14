// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDataSourceConnectionInfoResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * Database connection string address (domain or IP).
   * 
   * @example
   * 172.**.**.48
   */
  address?: string;
  /**
   * @remarks
   * Permission level:
   * 
   * - 0 -- Private
   * - 1 -- Collaborative Editing (old)
   * - 11 -- Collaborative Editing - Space Members
   * - 12 -- Collaborative Editing - Specified to Individuals
   * 
   * @example
   * 0
   */
  authLevel?: string;
  /**
   * @remarks
   * Quick BI user ID of the creator.
   * 
   * @example
   * U240****0880C6095
   */
  creatorId?: string;
  /**
   * @remarks
   * Data source ID.
   * 
   * @example
   * a201c85c-******
   */
  dsId?: string;
  /**
   * @remarks
   * Data source type.
   * 
   * @example
   * mysql
   */
  dsType?: string;
  /**
   * @remarks
   * Version of the data source.
   * 
   * @example
   * 5.7
   */
  dsVersion?: string;
  /**
   * @remarks
   * Database instance, corresponding to the database name, and for ODPS, it is the project.
   * 
   * @example
   * rm*********t44ju1
   */
  instance?: string;
  /**
   * @remarks
   * Instance ID.
   * 
   * @example
   * rm*********t44ju1
   */
  instanceId?: string;
  /**
   * @remarks
   * Quick BI user ID of the modifier.
   * 
   * @example
   * U240****0880C6095
   */
  modifyUser?: string;
  /**
   * @remarks
   * Whether the impala data source requires authentication to log in:
   * 
   * - true - Requires account and password login  
   * - false - No authentication required (default)
   * 
   * @example
   * true
   */
  noSasl?: boolean;
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
   * Port.
   * 
   * @example
   * 3306
   */
  port?: string;
  /**
   * @remarks
   * Used for front-end display when obtaining connection details for ODPS.
   * 
   * @example
   * prod-ossdoc
   */
  project?: string;
  /**
   * @remarks
   * Database schema, only needs to be set for databases that support schemas.
   * 
   * @example
   * Analysis
   */
  schema?: string;
  /**
   * @remarks
   * Display name of the data source on the front end.
   * 
   * @example
   * 0327
   */
  showName?: string;
  /**
   * @remarks
   * Workspace ID to which the data source belongs.
   * 
   * @example
   * 0de6**2-d**-4720-8836-0cc****1394c
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
      authLevel: 'AuthLevel',
      creatorId: 'CreatorId',
      dsId: 'DsId',
      dsType: 'DsType',
      dsVersion: 'DsVersion',
      instance: 'Instance',
      instanceId: 'InstanceId',
      modifyUser: 'ModifyUser',
      noSasl: 'NoSasl',
      parentDsType: 'ParentDsType',
      port: 'Port',
      project: 'Project',
      schema: 'Schema',
      showName: 'ShowName',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      authLevel: 'string',
      creatorId: 'string',
      dsId: 'string',
      dsType: 'string',
      dsVersion: 'string',
      instance: 'string',
      instanceId: 'string',
      modifyUser: 'string',
      noSasl: 'boolean',
      parentDsType: 'string',
      port: 'string',
      project: 'string',
      schema: 'string',
      showName: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataSourceConnectionInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * 7AAB95D-*****-****-*4FC0C976
   */
  requestId?: string;
  /**
   * @remarks
   * Data source information.
   */
  result?: GetDataSourceConnectionInfoResponseBodyResult;
  /**
   * @remarks
   * Indicates whether the operation was successful.
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
      result: GetDataSourceConnectionInfoResponseBodyResult,
      success: 'boolean',
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

