// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAlertAggregationsRequest extends $dara.Model {
  /**
   * @example
   * avg
   */
  aggregationType?: string;
  /**
   * @example
   * 1773936020000
   */
  endTime?: number;
  /**
   * @example
   * zh
   */
  lang?: string;
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
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * {\\"Type\\":\\"cost\\",\\"Max\\":\\"200\\"}
   */
  queryCondition?: string;
  /**
   * @example
   * qv-a1b2c3d4e5f6g7****
   */
  queryViewId?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * 113091674488****
   */
  roleFor?: number;
  /**
   * @example
   * 1
   */
  roleType?: number;
  /**
   * @example
   * 2026-02-04T08:36:26Z
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      aggregationType: 'AggregationType',
      endTime: 'EndTime',
      lang: 'Lang',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      queryCondition: 'QueryCondition',
      queryViewId: 'QueryViewId',
      regionId: 'RegionId',
      roleFor: 'RoleFor',
      roleType: 'RoleType',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggregationType: 'string',
      endTime: 'number',
      lang: 'string',
      maxResults: 'number',
      nextToken: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      queryCondition: 'string',
      queryViewId: 'string',
      regionId: 'string',
      roleFor: 'number',
      roleType: 'number',
      startTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

