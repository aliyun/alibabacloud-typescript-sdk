// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAutoDisposeEntitiesResponseBodyAutoDecisionEntities extends $dara.Model {
  /**
   * @remarks
   * The alert rule ID.
   * 
   * @example
   * 20403189
   */
  alertId?: string;
  /**
   * @remarks
   * The disposal method. Valid values:
   * 
   * - `ignore`: Ignore.
   * 
   * - `dispose`: Playbook-based disposal.
   * 
   * @example
   * dispose
   */
  disposalMethod?: string;
  /**
   * @remarks
   * The disposal ID.
   * 
   * @example
   * 1ec121479b341a61886dbd2c4ccd*****
   */
  disposeRecordId?: string;
  /**
   * @remarks
   * The entity name.
   * 
   * @example
   * /apps/ext/ka****
   */
  entityName?: string;
  /**
   * @remarks
   * The entity type. Valid values:
   * 
   * - `ip`: An IP address.
   * 
   * - `domain`: A domain.
   * 
   * - `process`: A process.
   * 
   * - `file`: A file.
   * 
   * - `host`: A host.
   * 
   * @example
   * process
   */
  entityType?: string;
  /**
   * @remarks
   * The entity UUID.
   * 
   * @example
   * 022ed6c601514a370cc9e3acd37a****
   */
  entityUuid?: string;
  /**
   * @remarks
   * The playbook UUID.
   * 
   * @example
   * 6fd2b143-e420-4c1b-a118-e764*****
   */
  playbookUuid?: string;
  /**
   * @remarks
   * The unique identifier (UUID) of the entry.
   * 
   * @example
   * 0d23f133-22d7-4388-b738-ab******
   */
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      alertId: 'AlertId',
      disposalMethod: 'DisposalMethod',
      disposeRecordId: 'DisposeRecordId',
      entityName: 'EntityName',
      entityType: 'EntityType',
      entityUuid: 'EntityUuid',
      playbookUuid: 'PlaybookUuid',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertId: 'string',
      disposalMethod: 'string',
      disposeRecordId: 'string',
      entityName: 'string',
      entityType: 'string',
      entityUuid: 'string',
      playbookUuid: 'string',
      uuid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAutoDisposeEntitiesResponseBody extends $dara.Model {
  /**
   * @remarks
   * A list of AI-powered automated analysis entities.
   */
  autoDecisionEntities?: ListAutoDisposeEntitiesResponseBodyAutoDecisionEntities[];
  /**
   * @remarks
   * The current page number. The value must be greater than or equal to 1.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The maximum number of entries returned in this request.
   * 
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @remarks
   * The token used to retrieve the next page of results. An empty value indicates that all results have been returned.
   * 
   * @example
   * AAAAAUqcj6VO4E3ECWIrFczs****
   */
  nextToken?: string;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 6276D891-*****-55B2-87B9-74D413F7****
   */
  requestId?: string;
  /**
   * @remarks
   * The total count of entries.
   * 
   * @example
   * 57
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      autoDecisionEntities: 'AutoDecisionEntities',
      currentPage: 'CurrentPage',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoDecisionEntities: { 'type': 'array', 'itemType': ListAutoDisposeEntitiesResponseBodyAutoDecisionEntities },
      currentPage: 'number',
      maxResults: 'number',
      nextToken: 'string',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.autoDecisionEntities)) {
      $dara.Model.validateArray(this.autoDecisionEntities);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

