// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeNodeMetricsRequest extends $dara.Model {
  /**
   * @remarks
   * $.parameters[7].schema.description
   * 
   * This parameter is required.
   * 
   * @example
   * 2021-09-13T15:40:43Z
   */
  endTime?: string;
  /**
   * @remarks
   * The list of nodes.
   * 
   * This parameter is required.
   * 
   * @example
   * ob317v4uif****
   */
  instanceId?: string;
  /**
   * @remarks
   * $.parameters[7].schema.enumValueTitles
   * 
   * This parameter is required.
   * 
   * @example
   * tps
   */
  metrics?: string;
  /**
   * @remarks
   * $.parameters[10].schema.description
   * 
   * @example
   * [i-bp16niirq4zdmgvm****,i-bp16n56hq4z4fgvm****]
   */
  nodeIdList?: string;
  /**
   * @remarks
   * $.parameters[8].schema.example
   * 
   * @example
   * i-bp16niirq4zdmgvm****
   */
  nodeName?: string;
  /**
   * @remarks
   * $.parameters[6].schema.description
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The ID of the tenant.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * $.parameters[9].schema.example
   * 
   * This parameter is required.
   * 
   * @example
   * 2021-06-13T15:40:43Z
   */
  startTime?: string;
  /**
   * @remarks
   * $.parameters[6].schema.enumValueTitles
   * 
   * @example
   * tfafd34fs****
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      instanceId: 'InstanceId',
      metrics: 'Metrics',
      nodeIdList: 'NodeIdList',
      nodeName: 'NodeName',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      startTime: 'StartTime',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      instanceId: 'string',
      metrics: 'string',
      nodeIdList: 'string',
      nodeName: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      startTime: 'string',
      tenantId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

