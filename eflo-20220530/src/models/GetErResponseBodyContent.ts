// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetErResponseBodyContentErAttachments } from "./GetErResponseBodyContentErAttachments";
import { GetErResponseBodyContentErRouteEntrys } from "./GetErResponseBodyContentErRouteEntrys";
import { GetErResponseBodyContentErRouteMaps } from "./GetErResponseBodyContentErRouteMaps";
import { GetErResponseBodyContentTags } from "./GetErResponseBodyContentTags";


export class GetErResponseBodyContent extends $dara.Model {
  /**
   * @remarks
   * The time when the data address was created.
   * 
   * @example
   * 1644283112720
   */
  createTime?: string;
  /**
   * @remarks
   * Description
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * Network instance information list
   */
  erAttachments?: GetErResponseBodyContentErAttachments[];
  /**
   * @remarks
   * Lingjun HUB Instance ID
   * 
   * @example
   * er-aueyxxsy
   */
  erId?: string;
  /**
   * @remarks
   * Lingjun HUB Instance Name
   * 
   * @example
   * er-heyuan-main
   */
  erName?: string;
  /**
   * @remarks
   * The list of route entry information.
   */
  erRouteEntrys?: GetErResponseBodyContentErRouteEntrys[];
  /**
   * @remarks
   * routing policy information list
   */
  erRouteMaps?: GetErResponseBodyContentErRouteMaps[];
  /**
   * @remarks
   * The time when the agent was last modified.
   * 
   * @example
   * 1627545952000
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
   * rg-aekzlki4ehfse4y
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The status of the intervention entry. Valid value:
   * 
   * @example
   * Available
   */
  status?: string;
  tags?: GetErResponseBodyContentTags[];
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
      createTime: 'CreateTime',
      description: 'Description',
      erAttachments: 'ErAttachments',
      erId: 'ErId',
      erName: 'ErName',
      erRouteEntrys: 'ErRouteEntrys',
      erRouteMaps: 'ErRouteMaps',
      gmtModified: 'GmtModified',
      masterZoneId: 'MasterZoneId',
      message: 'Message',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      status: 'Status',
      tags: 'Tags',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      description: 'string',
      erAttachments: { 'type': 'array', 'itemType': GetErResponseBodyContentErAttachments },
      erId: 'string',
      erName: 'string',
      erRouteEntrys: { 'type': 'array', 'itemType': GetErResponseBodyContentErRouteEntrys },
      erRouteMaps: { 'type': 'array', 'itemType': GetErResponseBodyContentErRouteMaps },
      gmtModified: 'string',
      masterZoneId: 'string',
      message: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      status: 'string',
      tags: { 'type': 'array', 'itemType': GetErResponseBodyContentTags },
      tenantId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.erAttachments)) {
      $dara.Model.validateArray(this.erAttachments);
    }
    if(Array.isArray(this.erRouteEntrys)) {
      $dara.Model.validateArray(this.erRouteEntrys);
    }
    if(Array.isArray(this.erRouteMaps)) {
      $dara.Model.validateArray(this.erRouteMaps);
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

