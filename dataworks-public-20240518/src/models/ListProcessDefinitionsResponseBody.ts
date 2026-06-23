// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListProcessDefinitionsResponseBodyPagingInfoProcessDefinitions extends $dara.Model {
  /**
   * @remarks
   * The description of the process definition.
   * 
   * @example
   * lwt_ide_simple 项目 MaxCompute 表审批策略
   */
  description?: string;
  /**
   * @remarks
   * Indicates whether the process definition is enabled.
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * The ID of the process definition.
   * 
   * @example
   * 10354346
   */
  id?: string;
  /**
   * @remarks
   * Indicates whether this is a default system policy. System policies have restricted update capabilities.
   * 
   * @example
   * false
   */
  isSystem?: boolean;
  /**
   * @remarks
   * The name of the process definition.
   * 
   * @example
   * MaxCompute 表审批
   */
  name?: string;
  /**
   * @remarks
   * The priority. A smaller value indicates a higher priority.
   * 
   * @example
   * 1
   */
  priority?: string;
  /**
   * @remarks
   * The phases in which the rule is effective. Valid values:
   * 
   * - `Deployment`: The policy is checked when an application is submitted.
   * 
   * - `Running`: The policy is checked during process execution to determine if approval can be skipped. (Supported only for the MaxCompute type)
   */
  scopes?: string[];
  /**
   * @remarks
   * The subtype. Valid values:
   * 
   * - Table
   * 
   * - Column
   * 
   * - Database
   * 
   * - Schema
   * 
   * - Default
   * 
   * @example
   * Table
   */
  subType?: string;
  /**
   * @remarks
   * The type of the process definition. Valid values:
   * 
   * - MaxCompute
   * 
   * - DataService
   * 
   * - Extension
   * 
   * - Hologres
   * 
   * - DlfV1 (You cannot create custom definitions for this type.)
   * 
   * - EMR (You cannot create custom definitions for this type.)
   * 
   * - DataAssetGovernance (You cannot create custom definitions for this type.)
   * 
   * - Lindorm (You cannot create custom definitions for this type.)
   * 
   * - StarRocks (You cannot create custom definitions for this type.)
   * 
   * - DlfNext (You cannot create custom definitions for this type.)
   * 
   * - DataWorks (You cannot create custom definitions for this type.)
   * 
   * @example
   * MaxCompute
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      enabled: 'Enabled',
      id: 'Id',
      isSystem: 'IsSystem',
      name: 'Name',
      priority: 'Priority',
      scopes: 'Scopes',
      subType: 'SubType',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      enabled: 'boolean',
      id: 'string',
      isSystem: 'boolean',
      name: 'string',
      priority: 'string',
      scopes: { 'type': 'array', 'itemType': 'string' },
      subType: 'string',
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.scopes)) {
      $dara.Model.validateArray(this.scopes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProcessDefinitionsResponseBodyPagingInfo extends $dara.Model {
  /**
   * @remarks
   * A list of process definitions. For more information, see the `ProcessDefinition` object.
   */
  processDefinitions?: ListProcessDefinitionsResponseBodyPagingInfoProcessDefinitions[];
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      processDefinitions: 'ProcessDefinitions',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      processDefinitions: { 'type': 'array', 'itemType': ListProcessDefinitionsResponseBodyPagingInfoProcessDefinitions },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.processDefinitions)) {
      $dara.Model.validateArray(this.processDefinitions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProcessDefinitionsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The pagination information.
   */
  pagingInfo?: ListProcessDefinitionsResponseBodyPagingInfo;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0bc5df3a17***903790e8e8a
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      pagingInfo: 'PagingInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pagingInfo: ListProcessDefinitionsResponseBodyPagingInfo,
      requestId: 'string',
    };
  }

  validate() {
    if(this.pagingInfo && typeof (this.pagingInfo as any).validate === 'function') {
      (this.pagingInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

