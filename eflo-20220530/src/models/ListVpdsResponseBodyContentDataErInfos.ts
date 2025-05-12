// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListVpdsResponseBodyContentDataErInfos extends $dara.Model {
  /**
   * @remarks
   * The number of connections.
   * 
   * @example
   * 2
   */
  connections?: number;
  /**
   * @remarks
   * The time when the activation code was created.
   * 
   * @example
   * 2023-12-26 20:16:36
   */
  createTime?: string;
  /**
   * @remarks
   * The description of the synchronization task.
   * 
   * @example
   * No description
   */
  description?: string;
  /**
   * @remarks
   * The ID of the Elastic Router (ER) instance.
   * 
   * @example
   * er-63vzm0fw
   */
  erId?: string;
  /**
   * @remarks
   * The name of the Lingjun HUB(ER) instance.
   * 
   * @example
   * er-1
   */
  erName?: string;
  /**
   * @remarks
   * The time when the O\\&M task was modified.
   * 
   * @example
   * 2023-12-26 20:16:36
   */
  gmtModified?: string;
  /**
   * @remarks
   * The primary zone.
   * 
   * @example
   * cn-wulanchabu-b
   */
  masterZoneId?: string;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The supported region.
   * 
   * @example
   * cn-wulanchabu
   */
  regionId?: string;
  /**
   * @remarks
   * The number of routing policy.
   * 
   * @example
   * 2
   */
  routeMaps?: number;
  /**
   * @remarks
   * The task status.
   * 
   * @example
   * Available
   */
  status?: string;
  /**
   * @remarks
   * The tenant ID.
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

