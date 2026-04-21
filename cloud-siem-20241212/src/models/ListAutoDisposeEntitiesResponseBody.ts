// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAutoDisposeEntitiesResponseBodyAutoDecisionEntities extends $dara.Model {
  /**
   * @example
   * 20403189
   */
  alertId?: string;
  /**
   * @example
   * dispose
   */
  disposalMethod?: string;
  /**
   * @example
   * 1ec121479b341a61886dbd2c4ccd*****
   */
  disposeRecordId?: string;
  /**
   * @example
   * /apps/ext/ka****
   */
  entityName?: string;
  /**
   * @example
   * process
   */
  entityType?: string;
  /**
   * @example
   * 022ed6c601514a370cc9e3acd37a****
   */
  entityUuid?: string;
  /**
   * @example
   * 6fd2b143-e420-4c1b-a118-e764*****
   */
  playbookUuid?: string;
  /**
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
  autoDecisionEntities?: ListAutoDisposeEntitiesResponseBodyAutoDecisionEntities[];
  /**
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @example
   * AAAAAUqcj6VO4E3ECWIrFczs****
   */
  nextToken?: string;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 6276D891-*****-55B2-87B9-74D413F7****
   */
  requestId?: string;
  /**
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

