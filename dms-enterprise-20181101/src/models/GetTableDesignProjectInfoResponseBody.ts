// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTableDesignProjectInfoResponseBodyProjectInfoBaseDatabase extends $dara.Model {
  /**
   * @remarks
   * The alias of the database instance.
   * 
   * @example
   * poc_test
   */
  alias?: string;
  /**
   * @remarks
   * The database ID.
   * 
   * @example
   * 11****
   */
  dbId?: number;
  /**
   * @remarks
   * The type of the database. For more information about the valid values of this parameter, see [DbType parameter](https://help.aliyun.com/document_detail/198106.html).
   * 
   * @example
   * POLARDB
   */
  dbType?: string;
  /**
   * @remarks
   * The type of the environment in which the database instance is deployed. Valid values:
   * 
   * *   **product**: production environment.
   * *   **dev**: development environment.
   * *   **pre**: pre-release environment.
   * *   **test**: test environment.
   * *   **sit**: system integration testing (SIT) environment.
   * *   **uat**: user acceptance testing (UAT) environment.
   * *   **pet**: stress testing environment.
   * *   **stag**: staging environment.
   * 
   * @example
   * dev
   */
  envType?: string;
  /**
   * @remarks
   * Indicates whether the database is a logical database. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * false
   */
  logic?: boolean;
  /**
   * @remarks
   * The database name.
   * 
   * @example
   * bk_atc020
   */
  schemaName?: string;
  /**
   * @remarks
   * The name that is used to search for the database.
   * 
   * @example
   * schema_name@127.0.XX.XX
   */
  searchName?: string;
  static names(): { [key: string]: string } {
    return {
      alias: 'Alias',
      dbId: 'DbId',
      dbType: 'DbType',
      envType: 'EnvType',
      logic: 'Logic',
      schemaName: 'SchemaName',
      searchName: 'SearchName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alias: 'string',
      dbId: 'number',
      dbType: 'string',
      envType: 'string',
      logic: 'boolean',
      schemaName: 'string',
      searchName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTableDesignProjectInfoResponseBodyProjectInfo extends $dara.Model {
  /**
   * @remarks
   * The information about the change base database of the schema design ticket.
   */
  baseDatabase?: GetTableDesignProjectInfoResponseBodyProjectInfoBaseDatabase;
  /**
   * @remarks
   * The ID of the user who created the ticket.
   * 
   * @example
   * 71****
   */
  creatorId?: number;
  /**
   * @remarks
   * The description of the schema design project.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The time when the ticket was created.
   * 
   * @example
   * 2024-04-23 02:57:01
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The time when the ticket was last modified.
   * 
   * @example
   * 2024-04-23 02:57:01
   */
  gmtModified?: string;
  /**
   * @remarks
   * The ticket ID.
   * 
   * @example
   * 95****
   */
  orderId?: number;
  /**
   * @remarks
   * The project ID.
   * 
   * @example
   * 12****
   */
  projectId?: number;
  /**
   * @remarks
   * The state of the schema design project. Valid values:
   * 
   * *   **DESIGN**: The schema is being designed.
   * *   **PUBLISHED**: The schema is published.
   * *   **CLOSE**: The ticket is closed.
   * 
   * @example
   * DESIGN
   */
  status?: string;
  /**
   * @remarks
   * The name of the schema design project.
   * 
   * @example
   * test
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      baseDatabase: 'BaseDatabase',
      creatorId: 'CreatorId',
      description: 'Description',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      orderId: 'OrderId',
      projectId: 'ProjectId',
      status: 'Status',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseDatabase: GetTableDesignProjectInfoResponseBodyProjectInfoBaseDatabase,
      creatorId: 'number',
      description: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      orderId: 'number',
      projectId: 'number',
      status: 'string',
      title: 'string',
    };
  }

  validate() {
    if(this.baseDatabase && typeof (this.baseDatabase as any).validate === 'function') {
      (this.baseDatabase as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTableDesignProjectInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code returned if the request failed.
   * 
   * @example
   * UnknownError
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message returned if the request failed.
   * 
   * @example
   * UnknownError
   */
  errorMessage?: string;
  /**
   * @remarks
   * The information about the schema design project.
   */
  projectInfo?: GetTableDesignProjectInfoResponseBodyProjectInfo;
  /**
   * @remarks
   * The request ID. You can use the request ID to query logs and troubleshoot issues.
   * 
   * @example
   * 48778434-5796-571A-8455-A59146588401
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      projectInfo: 'ProjectInfo',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      projectInfo: GetTableDesignProjectInfoResponseBodyProjectInfo,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.projectInfo && typeof (this.projectInfo as any).validate === 'function') {
      (this.projectInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

