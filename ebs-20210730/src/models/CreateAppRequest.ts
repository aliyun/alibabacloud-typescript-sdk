// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class CreateAppRequestAppTags extends $dara.Model {
  /**
   * @example
   * controlledBy
   */
  tagKey?: string;
  /**
   * @example
   * ear
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

export class CreateAppRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
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
  appTags?: CreateAppRequestAppTags[];
  /**
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
  /**
   * @example
   * test
   */
  description?: string;
  /**
   * @example
   * 1/0
   */
  owner?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * false
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
      appName: 'string',
      appTags: { 'type': 'array', 'itemType': CreateAppRequestAppTags },
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

