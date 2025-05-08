// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateOrUpdateSwimmingLaneGroupResponseBodyData extends $dara.Model {
  /**
   * @example
   * abcd1@abcde123,abcd1@abcde124
   */
  appIds?: string;
  canaryModel?: number;
  /**
   * @example
   * true
   */
  dbGrayEnable?: string;
  /**
   * @example
   * mse:abcd1@a2345
   */
  entryApp?: string;
  id?: number;
  /**
   * @example
   * Client
   */
  messageQueueFilterSide?: string;
  messageQueueGrayEnable?: boolean;
  /**
   * @example
   * example-app
   */
  name?: string;
  /**
   * @example
   * prod
   */
  namespace?: string;
  paths?: string;
  recordCanaryDetail?: boolean;
  /**
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @example
   * 12345
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      appIds: 'AppIds',
      canaryModel: 'CanaryModel',
      dbGrayEnable: 'DbGrayEnable',
      entryApp: 'EntryApp',
      id: 'Id',
      messageQueueFilterSide: 'MessageQueueFilterSide',
      messageQueueGrayEnable: 'MessageQueueGrayEnable',
      name: 'Name',
      namespace: 'Namespace',
      paths: 'Paths',
      recordCanaryDetail: 'RecordCanaryDetail',
      region: 'Region',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appIds: 'string',
      canaryModel: 'number',
      dbGrayEnable: 'string',
      entryApp: 'string',
      id: 'number',
      messageQueueFilterSide: 'string',
      messageQueueGrayEnable: 'boolean',
      name: 'string',
      namespace: 'string',
      paths: 'string',
      recordCanaryDetail: 'boolean',
      region: 'string',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

