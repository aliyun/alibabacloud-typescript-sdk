// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListErsRequestTag } from "./ListErsRequestTag";


export class ListErsRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable paged query. Valid values:
   * 
   * *   true: enables paged query.
   * *   false: Paged query is disabled.
   * 
   * @example
   * false
   */
  enablePage?: boolean;
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
   * Lingjun HUB name.
   * 
   * @example
   * er-heyuan-main
   */
  erName?: string;
  /**
   * @remarks
   * The ID of the network instance.
   * 
   * @example
   * vcc-cn-209300qha01
   */
  instanceId?: string;
  /**
   * @remarks
   * The type of the attached network instance. Valid values:
   * 
   * *   **VPD**
   * *   **VCC**
   * 
   * @example
   * VCC
   */
  instanceType?: string;
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
   * The page number to return. Pages start from page 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
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
   * rg-acfmwfm33rlt6zi
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * List of tags.
   */
  tag?: ListErsRequestTag[];
  static names(): { [key: string]: string } {
    return {
      enablePage: 'EnablePage',
      erId: 'ErId',
      erName: 'ErName',
      instanceId: 'InstanceId',
      instanceType: 'InstanceType',
      masterZoneId: 'MasterZoneId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enablePage: 'boolean',
      erId: 'string',
      erName: 'string',
      instanceId: 'string',
      instanceType: 'string',
      masterZoneId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      tag: { 'type': 'array', 'itemType': ListErsRequestTag },
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

