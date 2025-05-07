// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPublishedServicesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The ID of the application.
   * 
   * @example
   * b2a8a925-477a-4ed7-b825-d5e22500****
   */
  appId?: string;
  /**
   * @remarks
   * The reserved parameter. This parameter does not take effect.
   * 
   * @example
   * {}
   */
  group2Ip?: string;
  /**
   * @remarks
   * The service group that corresponds to the consumed service.
   */
  groups?: string[];
  /**
   * @remarks
   * The addresses where services can be subscribed to.
   */
  ips?: string[];
  /**
   * @remarks
   * The name of the published service.
   * 
   * @example
   * com.alibaba.nodejs.ItemService
   */
  name?: string;
  /**
   * @remarks
   * The type of the published service.
   * 
   * @example
   * RPC
   */
  type?: string;
  /**
   * @remarks
   * The version of the published services.
   * 
   * @example
   * 1.0.0
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      group2Ip: 'Group2Ip',
      groups: 'Groups',
      ips: 'Ips',
      name: 'Name',
      type: 'Type',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      group2Ip: 'string',
      groups: { 'type': 'array', 'itemType': 'string' },
      ips: { 'type': 'array', 'itemType': 'string' },
      name: 'string',
      type: 'string',
      version: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.groups)) {
      $dara.Model.validateArray(this.groups);
    }
    if(Array.isArray(this.ips)) {
      $dara.Model.validateArray(this.ips);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

