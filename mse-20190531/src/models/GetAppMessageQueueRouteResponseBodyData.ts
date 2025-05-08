// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAppMessageQueueRouteResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The ID of the application.
   * 
   * @example
   * hkhon1po62@54e1f42f37cd65a
   */
  appId?: string;
  /**
   * @remarks
   * Indicates whether the canary release for messaging feature is enabled.
   * 
   * *   `true`: enabled
   * *   `false`: disabled
   * 
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @remarks
   * The side for message filtering when the canary release for messaging feature is enabled.
   * 
   * @example
   * Server
   */
  filterSide?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @remarks
   * The tags used to ignore message consumption for nodes in untagged environments.
   */
  tags?: string[];
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      enable: 'Enable',
      filterSide: 'FilterSide',
      region: 'Region',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      enable: 'boolean',
      filterSide: 'string',
      region: 'string',
      tags: { 'type': 'array', 'itemType': 'string' },
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

