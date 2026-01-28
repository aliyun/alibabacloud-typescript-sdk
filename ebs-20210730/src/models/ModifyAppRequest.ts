// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyAppRequestAppTags extends $dara.Model {
  /**
   * @example
   * key
   */
  tagKey?: string;
  /**
   * @example
   * value
   */
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAppRequest extends $dara.Model {
  /**
   * @example
   * app-xxx
   */
  appId?: string;
  /**
   * @example
   * App1
   */
  appName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * default
   */
  appTags?: ModifyAppRequestAppTags[];
  /**
   * @example
   * 0c593ea1-3bea-11e9-b96b-88e9fe63****
   */
  clientToken?: string;
  /**
   * @example
   * This is description.
   */
  description?: string;
  /**
   * @example
   * dev789`
   */
  owner?: string;
  /**
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @example
   * true
   */
  reportSendEnabled?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Weekly
   */
  subscribePeriod?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Subscribe
   */
  subscribeStatus?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appName: 'AppName',
      appTags: 'AppTags',
      clientToken: 'ClientToken',
      description: 'Description',
      owner: 'Owner',
      regionId: 'RegionId',
      reportSendEnabled: 'ReportSendEnabled',
      subscribePeriod: 'SubscribePeriod',
      subscribeStatus: 'SubscribeStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appName: 'string',
      appTags: { 'type': 'array', 'itemType': ModifyAppRequestAppTags },
      clientToken: 'string',
      description: 'string',
      owner: 'string',
      regionId: 'string',
      reportSendEnabled: 'boolean',
      subscribePeriod: 'string',
      subscribeStatus: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.appTags)) {
      $dara.Model.validateArray(this.appTags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

