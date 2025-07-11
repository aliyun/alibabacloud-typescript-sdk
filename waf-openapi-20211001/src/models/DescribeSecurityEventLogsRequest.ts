// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSecurityEventLogsRequestFilterConditions extends $dara.Model {
  /**
   * @remarks
   * The field name. This operation supports all fields. For more information, see the **Supported field names** section below.
   * 
   * @example
   * matched_host
   */
  key?: string;
  /**
   * @remarks
   * The operator. For more information, see the **Supported operators** section below.
   * 
   * @example
   * eq
   */
  opValue?: string;
  /**
   * @remarks
   * The field content.
   * 
   * @example
   * test.waf-top
   */
  values?: any;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      opValue: 'OpValue',
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      opValue: 'string',
      values: 'any',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSecurityEventLogsRequestFilterDateRange extends $dara.Model {
  /**
   * @remarks
   * The end of the time range to query. The value is a UNIX timestamp. Unit: seconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1713888600
   */
  endDate?: number;
  /**
   * @remarks
   * The beginning of the time range to query. The value is a UNIX timestamp. Unit: seconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1713888000
   */
  startDate?: number;
  static names(): { [key: string]: string } {
    return {
      endDate: 'EndDate',
      startDate: 'StartDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endDate: 'number',
      startDate: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSecurityEventLogsRequestFilter extends $dara.Model {
  /**
   * @remarks
   * The filter conditions. Each object describes a filter condition.
   */
  conditions?: DescribeSecurityEventLogsRequestFilterConditions[];
  /**
   * @remarks
   * The time range for the query.
   * 
   * This parameter is required.
   */
  dateRange?: DescribeSecurityEventLogsRequestFilterDateRange;
  static names(): { [key: string]: string } {
    return {
      conditions: 'Conditions',
      dateRange: 'DateRange',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conditions: { 'type': 'array', 'itemType': DescribeSecurityEventLogsRequestFilterConditions },
      dateRange: DescribeSecurityEventLogsRequestFilterDateRange,
    };
  }

  validate() {
    if(Array.isArray(this.conditions)) {
      $dara.Model.validateArray(this.conditions);
    }
    if(this.dateRange && typeof (this.dateRange as any).validate === 'function') {
      (this.dateRange as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSecurityEventLogsRequest extends $dara.Model {
  /**
   * @remarks
   * The filter conditions for the query. Multiple conditions are evaluated by using a logical AND.
   * 
   * This parameter is required.
   */
  filter?: DescribeSecurityEventLogsRequestFilter;
  /**
   * @remarks
   * The ID of the Web Application Firewall (WAF) instance.
   * 
   * >  You can call the [DescribeInstanceInfo](https://help.aliyun.com/document_detail/140857.html) operation to query the ID of the WAF instance.
   * 
   * This parameter is required.
   * 
   * @example
   * waf_cdnsdf3****
   */
  instanceId?: string;
  /**
   * @remarks
   * The page number. Default value: **1**.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Maximum value: **100**.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID of the WAF instance. Valid values:
   * 
   * *   **cn-hangzhou**: The Chinese mainland.
   * *   **ap-southeast-1**: Outside the Chinese mainland.
   * 
   * @example
   * ap-southeast-1
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud resource group.
   * 
   * @example
   * rg-acfm***q
   */
  resourceManagerResourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      filter: 'Filter',
      instanceId: 'InstanceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filter: DescribeSecurityEventLogsRequestFilter,
      instanceId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceManagerResourceGroupId: 'string',
    };
  }

  validate() {
    if(this.filter && typeof (this.filter as any).validate === 'function') {
      (this.filter as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

