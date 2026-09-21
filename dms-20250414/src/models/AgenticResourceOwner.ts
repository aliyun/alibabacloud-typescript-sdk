// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AgenticResourceOwner extends $dara.Model {
  /**
   * @remarks
   * The UUID of the Catalog to which the resource belongs.
   * 
   * @example
   * mc-HZ-5d9fbt8wW4AnGZNddXg4f
   */
  catalogUuid?: string;
  /**
   * @remarks
   * The qualified name of the database. This field has a value only when ResourceType is DATABASE and the downstream backfills the value. This field is provided for direct display on the frontend. For MySQL, this is the database name itself. For PostgreSQL or SQL Server, this is in the format of DatabaseName.SchemaName.
   * 
   * @example
   * finance.public
   */
  databaseQualifiedName?: string;
  /**
   * @remarks
   * The UUID of the database. This field has a value only when ResourceType is DATABASE.
   * 
   * @example
   * md-HZ-vXR1ezNGjiDjiV13Gos1N
   */
  databaseUuid?: string;
  /**
   * @remarks
   * The principal ID of the operator who registered this ownership relationship. In the "My Assets" scenario, the downstream does not return this field, and the value is null.
   * 
   * @example
   * usr_6ieggks7zuy6gpfdmgzsjdso
   */
  grantBy?: string;
  /**
   * @remarks
   * The source channel of the ownership. Valid values:
   * - CONSOLE: Manually registered in the console.
   * - Other values: Written by the system built-in ownership mechanism.
   * 
   * In the "My Assets" scenario, the downstream does not return this field, and the value is null.
   * 
   * @example
   * CONSOLE
   */
  grantFrom?: string;
  /**
   * @remarks
   * The Owner principal ID. This is a gateway internal principal ID with the usr_ or agt_ prefix, not an Alibaba Cloud UID.
   * 
   * @example
   * usr_wlwp5a7uruanebg5bbdqqf5n
   */
  ownerPrincipalId?: string;
  /**
   * @remarks
   * The Owner principal type. Valid values:
   * - USER: Human user.
   * - AGENT: Managed Agent.
   * 
   * @example
   * USER
   */
  ownerPrincipalType?: string;
  /**
   * @remarks
   * The ownership level. Valid values:
   * - INSTANCE: Instance-level ownership. The coordinate contains only CatalogUuid.
   * - DATABASE: Database-level ownership. The coordinate contains CatalogUuid + DatabaseUuid.
   * 
   * @example
   * DATABASE
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      catalogUuid: 'CatalogUuid',
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
      catalogUuid: 'string',
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

