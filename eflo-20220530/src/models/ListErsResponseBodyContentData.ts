// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListErsResponseBodyContentDataTags } from "./ListErsResponseBodyContentDataTags";


export class ListErsResponseBodyContentData extends $dara.Model {
  /**
   * @remarks
   * The number of connections to the Lingjun HUB network instance.
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
   * 1640930671000
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
   * The ID of the Lingjun HUB instance.
   * 
   * @example
   * er-kkopgtne
   */
  erId?: string;
  /**
   * @remarks
   * The name of the Lingjun HUB instance.
   * 
   * @example
   * er-wulanchabu-main
   */
  erName?: string;
  /**
   * @remarks
   * The time when the O\\&M task was modified.
   * 
   * @example
   * 1640930671000
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
   * test
   */
  message?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-wulanchabu
   */
  regionId?: string;
  /**
   * @remarks
   * Resource group instance ID
   * 
   * @example
   * rg-acfmv2m2w43japa
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * Number of Lingjun HUB routing policy.
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
  tags?: ListErsResponseBodyContentDataTags[];
  /**
   * @remarks
   * The tenant ID.
   * 
   * @example
   * 1655449505171
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
      resourceGroupId: 'ResourceGroupId',
      routeMaps: 'RouteMaps',
      status: 'Status',
      tags: 'Tags',
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
      resourceGroupId: 'string',
      routeMaps: 'number',
      status: 'string',
      tags: { 'type': 'array', 'itemType': ListErsResponseBodyContentDataTags },
      tenantId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

