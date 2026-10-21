// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AgenticResourceOwner extends $dara.Model {
  /**
   * @remarks
   * The instance alias. This display property comes from the catalog to which the resource belongs and is used only for frontend display to align with the data permission list. It is populated only in the My Assets or Managed Resources query scenarios and is null in other scenarios.
   * 
   * @example
   * Production database
   */
  catalogAlias?: string;
  /**
   * @remarks
   * The instance data source type, used only for frontend display. It is populated only in the My Assets or Managed Resources query scenarios and is null in other scenarios.
   * 
   * @example
   * MYSQL
   */
  catalogDataSourceType?: string;
  /**
   * @remarks
   * The instance environment type, used only for frontend display. It is populated only in the My Assets or Managed Resources query scenarios and is null in other scenarios.
   * 
   * @example
   * prod
   */
  catalogEnvType?: string;
  /**
   * @remarks
   * The instance host, used only for frontend display. Built-in sample data sources are masked as ******. It is populated only in the My Assets or Managed Resources query scenarios and is null in other scenarios.
   * 
   * @example
   * rm-xxxxxxxx.mysql.rds.aliyuncs.com
   */
  catalogHost?: string;
  /**
   * @remarks
   * The instance port, used only for frontend display. Built-in sample data sources are masked as ******. It is populated only in the My Assets or Managed Resources query scenarios and is null in other scenarios.
   * 
   * @example
   * 3306
   */
  catalogPort?: string;
  /**
   * @remarks
   * The UUID of the catalog to which the resource belongs.
   * 
   * @example
   * mc-HZ-5d9fbt8wW4AnGZNddXg4f
   */
  catalogUuid?: string;
  /**
   * @remarks
   * The UUID of the instance data source to which the resource belongs. It is used only for frontend display and instance locating. Non-sensitive connection information is not masked. It is populated only in the My Assets or Managed Resources query scenarios and is null in other scenarios.
   * 
   * @example
   * dsc-HZ-3f2b9a7c1d
   */
  dataSourceUuid?: string;
  /**
   * @remarks
   * The fully qualified name of the database. It has a value only when ResourceType is DATABASE and is populated by the downstream service, which facilitates direct frontend display. For MySQL, it is the database name itself. For PostgreSQL or SQL Server, it is in the format of DatabaseName.SchemaName.
   * 
   * @example
   * finance.public
   */
  databaseQualifiedName?: string;
  /**
   * @remarks
   * The UUID of the database. It has a value only when ResourceType is DATABASE.
   * 
   * @example
   * md-HZ-vXR1ezNGjiDjiV13Gos1N
   */
  databaseUuid?: string;
  /**
   * @remarks
   * The principal ID of the operator who registered the ownership relationship. The downstream service does not return this field in the My Assets query scenario, and the value is null.
   * 
   * @example
   * usr_6ieggks7zuy6gpfdmgzsjdso
   */
  grantBy?: string;
  /**
   * @remarks
   * The source channel of the ownership. CONSOLE indicates manual registration in the console. Other values indicate that the ownership is written by the built-in system. The downstream service does not return this field in the My Assets query scenario, and the value is null.
   * 
   * @example
   * CONSOLE
   */
  grantFrom?: string;
  /**
   * @remarks
   * The principal ID of the owner. This is the internal principal ID of the gateway with a usr_ or agt_ prefix, not the Alibaba Cloud UID.
   * 
   * @example
   * usr_wlwp5a7uruanebg5bbdqqf5n
   */
  ownerPrincipalId?: string;
  /**
   * @remarks
   * The principal type of the owner. Valid values:
   * - USER: Human user.
   * - AGENT: Managed agent.
   * 
   * @example
   * USER
   */
  ownerPrincipalType?: string;
  /**
   * @remarks
   * The ownership level. Valid values:
   * - INSTANCE: Instance-level ownership. The coordinate includes only CatalogUuid.
   * - DATABASE: Database-level ownership. The coordinate includes CatalogUuid and DatabaseUuid.
   * 
   * @example
   * DATABASE
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      catalogAlias: 'CatalogAlias',
      catalogDataSourceType: 'CatalogDataSourceType',
      catalogEnvType: 'CatalogEnvType',
      catalogHost: 'CatalogHost',
      catalogPort: 'CatalogPort',
      catalogUuid: 'CatalogUuid',
      dataSourceUuid: 'DataSourceUuid',
      databaseQualifiedName: 'DatabaseQualifiedName',
      databaseUuid: 'DatabaseUuid',
      grantBy: 'GrantBy',
      grantFrom: 'GrantFrom',
      ownerPrincipalId: 'OwnerPrincipalId',
      ownerPrincipalType: 'OwnerPrincipalType',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      catalogAlias: 'string',
      catalogDataSourceType: 'string',
      catalogEnvType: 'string',
      catalogHost: 'string',
      catalogPort: 'string',
      catalogUuid: 'string',
      dataSourceUuid: 'string',
      databaseQualifiedName: 'string',
      databaseUuid: 'string',
      grantBy: 'string',
      grantFrom: 'string',
      ownerPrincipalId: 'string',
      ownerPrincipalType: 'string',
      resourceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

