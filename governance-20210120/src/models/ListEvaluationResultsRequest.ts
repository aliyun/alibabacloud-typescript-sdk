// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListEvaluationResultsRequestFilters extends $dara.Model {
  /**
   * @remarks
   * Filter condition key. Valid values:
   * 
   * - ResourceId: Resource ID.
   * - ResourceName: Resource name.
   * - ResourceType: Resource type.
   * 
   * @example
   * ResourceId
   */
  key?: string;
  /**
   * @remarks
   * List of filter condition values.
   */
  values?: string[];
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      values: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.values)) {
      $dara.Model.validateArray(this.values);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEvaluationResultsRequest extends $dara.Model {
  /**
   * @remarks
   * Member account ID. This parameter is only applicable to multi-account evaluation mode.
   * 
   * @example
   * 176618589410****
   */
  accountId?: number;
  evaluationDomain?: string;
  /**
   * @remarks
   * Filter conditions.
   */
  filters?: ListEvaluationResultsRequestFilters[];
  /**
   * @remarks
   * Special evaluation code. Valid values:
   * 
   * - basic (default): Basic model (governance maturity) evaluation.
   * - ack: Container construction special evaluation.
   * - ai: Machine learning special evaluation.
   * - nis: Network service special evaluation.
   * 
   * @example
   * basic
   */
  lensCode?: string;
  /**
   * @remarks
   * Region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * Governance maturity evaluation scope. Valid values:
   * 
   * - Account (default): Performs single-account governance maturity evaluation, evaluating only the current account.
   * - ResourceDirectory: Performs multi-account governance maturity evaluation, evaluating all member accounts in the resource directory. Before performing this operation, you must first upgrade to multi-account governance maturity evaluation.
   * 
   * @example
   * ResourceDirectory
   */
  scope?: string;
  /**
   * @remarks
   * Evaluation snapshot ID.
   * 
   * @example
   * es-bp1r**************
   */
  snapshotId?: string;
  /**
   * @remarks
   * Governance topic code.
   * 
   * @example
   * IdentityAndAccessManagement
   */
  topicCode?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      evaluationDomain: 'EvaluationDomain',
      filters: 'Filters',
      lensCode: 'LensCode',
      regionId: 'RegionId',
      scope: 'Scope',
      snapshotId: 'SnapshotId',
      topicCode: 'TopicCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'number',
      evaluationDomain: 'string',
      filters: { 'type': 'array', 'itemType': ListEvaluationResultsRequestFilters },
      lensCode: 'string',
      regionId: 'string',
      scope: 'string',
      snapshotId: 'string',
      topicCode: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.filters)) {
      $dara.Model.validateArray(this.filters);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

