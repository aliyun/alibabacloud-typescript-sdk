// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetAppResponseBodyResultNetwork } from "./GetAppResponseBodyResultNetwork";
import { GetAppResponseBodyResultPrivateNetwork } from "./GetAppResponseBodyResultPrivateNetwork";
import { GetAppResponseBodyResultTags } from "./GetAppResponseBodyResultTags";


export class GetAppResponseBodyResult extends $dara.Model {
  /**
   * @example
   * test-app-abc
   */
  appId?: string;
  /**
   * @example
   * es-severless-test-app
   */
  appName?: string;
  appType?: string;
  chargeType?: string;
  /**
   * @example
   * 2022-08-15T11:20:52.370Z
   */
  createTime?: string;
  description?: string;
  instanceId?: string;
  /**
   * @example
   * 2022-08-15T11:21:50.000Z
   */
  modifiedTime?: string;
  network?: GetAppResponseBodyResultNetwork[];
  /**
   * @example
   * *******7595
   */
  ownerId?: string;
  privateNetwork?: GetAppResponseBodyResultPrivateNetwork[];
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  scenario?: string;
  /**
   * @example
   * ACTIVE
   */
  status?: string;
  tags?: GetAppResponseBodyResultTags[];
  /**
   * @example
   * 7.10
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'appId',
      appName: 'appName',
      appType: 'appType',
      chargeType: 'chargeType',
      createTime: 'createTime',
      description: 'description',
      instanceId: 'instanceId',
      modifiedTime: 'modifiedTime',
      network: 'network',
      ownerId: 'ownerId',
      privateNetwork: 'privateNetwork',
      regionId: 'regionId',
      scenario: 'scenario',
      status: 'status',
      tags: 'tags',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appName: 'string',
      appType: 'string',
      chargeType: 'string',
      createTime: 'string',
      description: 'string',
      instanceId: 'string',
      modifiedTime: 'string',
      network: { 'type': 'array', 'itemType': GetAppResponseBodyResultNetwork },
      ownerId: 'string',
      privateNetwork: { 'type': 'array', 'itemType': GetAppResponseBodyResultPrivateNetwork },
      regionId: 'string',
      scenario: 'string',
      status: 'string',
      tags: { 'type': 'array', 'itemType': GetAppResponseBodyResultTags },
      version: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.network)) {
      $dara.Model.validateArray(this.network);
    }
    if(Array.isArray(this.privateNetwork)) {
      $dara.Model.validateArray(this.privateNetwork);
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

