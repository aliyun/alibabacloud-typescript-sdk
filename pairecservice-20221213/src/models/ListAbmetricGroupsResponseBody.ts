// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListABMetricGroupsResponseBodyABMetricGroups extends $dara.Model {
  /**
   * @remarks
   * The A/B metric group ID.
   * 
   * @example
   * 1
   */
  ABMetricGroupId?: string;
  /**
   * @remarks
   * The comma-separated IDs of the A/B metrics in the group.
   * 
   * @example
   * 1,2
   */
  ABMetricIds?: string;
  /**
   * @remarks
   * The comma-separated names of the A/B metrics in the group.
   * 
   * @example
   * pv,uv
   */
  ABMetricNames?: string;
  /**
   * @remarks
   * The description of the A/B metric group.
   * 
   * @example
   * 访问量相关指标
   */
  description?: string;
  /**
   * @remarks
   * The A/B metric group name.
   * 
   * @example
   * visits
   */
  name?: string;
  /**
   * @remarks
   * The owner.
   * 
   * @example
   * 2799614***
   */
  owner?: string;
  /**
   * @remarks
   * Indicates whether the A/B metric group is a real-time group.
   * 
   * @example
   * false
   */
  realtime?: boolean;
  /**
   * @remarks
   * The scene ID.
   * 
   * @example
   * 1
   */
  sceneId?: string;
  static names(): { [key: string]: string } {
    return {
      ABMetricGroupId: 'ABMetricGroupId',
      ABMetricIds: 'ABMetricIds',
      ABMetricNames: 'ABMetricNames',
      description: 'Description',
      name: 'Name',
      owner: 'Owner',
      realtime: 'Realtime',
      sceneId: 'SceneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ABMetricGroupId: 'string',
      ABMetricIds: 'string',
      ABMetricNames: 'string',
      description: 'string',
      name: 'string',
      owner: 'string',
      realtime: 'boolean',
      sceneId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListABMetricGroupsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The A/B metric groups.
   */
  ABMetricGroups?: ListABMetricGroupsResponseBodyABMetricGroups[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * E15A1443-7917-5BE0-AE70-25538ECF398D
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of A/B metric groups.
   * 
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      ABMetricGroups: 'ABMetricGroups',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ABMetricGroups: { 'type': 'array', 'itemType': ListABMetricGroupsResponseBodyABMetricGroups },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.ABMetricGroups)) {
      $dara.Model.validateArray(this.ABMetricGroups);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

