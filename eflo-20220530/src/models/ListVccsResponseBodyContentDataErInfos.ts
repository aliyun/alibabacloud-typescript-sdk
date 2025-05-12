// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListVccsResponseBodyContentDataErInfos extends $dara.Model {
  /**
   * @remarks
   * Connections
   * 
   * @example
   * 2
   */
  connections?: number;
  /**
   * @remarks
   * The time when the data address was created.
   * 
   * @example
   * 1678273219000
   */
  createTime?: string;
  /**
   * @remarks
   * Description
   * 
   * @example
   * test_api_coverage
   */
  description?: string;
  /**
   * @remarks
   * Elastic Router ID
   * 
   * @example
   * er-a7rqv1rq
   */
  erId?: string;
  /**
   * @remarks
   * ER instance name
   * 
   * @example
   * er-1
   */
  erName?: string;
  /**
   * @remarks
   * The time when the agent was last modified.
   * 
   * @example
   * 1678273219000
   */
  gmtModified?: string;
  /**
   * @remarks
   * Primary Zone
   * 
   * @example
   * cn-wulanchabu-b
   */
  masterZoneId?: string;
  /**
   * @remarks
   * The message that is returned.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * ER region information
   * 
   * @example
   * cn-wulanchabu
   */
  regionId?: string;
  /**
   * @remarks
   * Number of routing policy
   * 
   * @example
   * 2
   */
  routeMaps?: number;
  /**
   * @remarks
   * The status of the intervention entry. Valid value:
   * 
   * @example
   * Available
   */
  status?: string;
  /**
   * @remarks
   * The ID of the tenant.
   * 
   * @example
   * 1620939556166277
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      connections: 'Connections',
      createTime: 'CreateTime',
      description: 'Description',
      erId: 'ErId',
      erName: 'ErName',
      gmtModified: 'GmtModified',
      masterZoneId: 'MasterZoneId',
      message: 'Message',
      regionId: 'RegionId',
      routeMaps: 'RouteMaps',
      status: 'Status',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connections: 'number',
      createTime: 'string',
      description: 'string',
      erId: 'string',
      erName: 'string',
      gmtModified: 'string',
      masterZoneId: 'string',
      message: 'string',
      regionId: 'string',
      routeMaps: 'number',
      status: 'string',
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

