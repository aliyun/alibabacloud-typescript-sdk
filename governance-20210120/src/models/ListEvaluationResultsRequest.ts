// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListEvaluationResultsRequestFilters extends $dara.Model {
  /**
   * @remarks
   * The key of the filter condition. Valid values:
   * 
   * *   ResourceId: the resource ID.
   * *   ResourceName: the name of the resource.
   * *   ResourceType: the resource type.
   * 
   * @example
   * ResourceId
   */
  key?: string;
  /**
   * @remarks
   * The list of filter condition values.
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
   * The Alibaba Cloud account ID of the member. This parameter takes effect only when a multi-account governance maturity check is performed.
   * 
   * @example
   * 176618589410****
   */
  accountId?: number;
  /**
   * @remarks
   * The filter conditions.
   */
  filters?: ListEvaluationResultsRequestFilters[];
  /**
   * @example
   * basic
   */
  lensCode?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * ResourceDirectory
   */
  scope?: string;
  /**
   * @example
   * es-bp1r**************
   */
  snapshotId?: string;
  /**
   * @example
   * IdentityAndAccessManagement
   */
  topicCode?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
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

