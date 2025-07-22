// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSlowLogStatisticRequestFilters extends $dara.Model {
  /**
   * @example
   * KeyWords
   */
  key?: string;
  /**
   * @example
   * select
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSlowLogStatisticRequest extends $dara.Model {
  /**
   * @example
   * true
   */
  asc?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1608888296000
   */
  endTime?: number;
  filters?: DescribeSlowLogStatisticRequestFilters[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * rm-2ze1jdv45i7l6****
   */
  instanceId?: string;
  /**
   * @example
   * r-x****-db-0
   */
  nodeId?: string;
  /**
   * @example
   * count
   */
  orderBy?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1568269711000
   */
  startTime?: number;
  /**
   * @example
   * 04ea3310df40c3fa8a6b4854db49f79a
   */
  templateId?: string;
  /**
   * @example
   * SQL
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      asc: 'Asc',
      endTime: 'EndTime',
      filters: 'Filters',
      instanceId: 'InstanceId',
      nodeId: 'NodeId',
      orderBy: 'OrderBy',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      startTime: 'StartTime',
      templateId: 'TemplateId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      asc: 'boolean',
      endTime: 'number',
      filters: { 'type': 'array', 'itemType': DescribeSlowLogStatisticRequestFilters },
      instanceId: 'string',
      nodeId: 'string',
      orderBy: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      startTime: 'number',
      templateId: 'string',
      type: 'string',
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

