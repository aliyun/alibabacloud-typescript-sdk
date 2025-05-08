// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryAllSwimmingLaneGroupResponseBodyData extends $dara.Model {
  /**
   * @example
   * abcde@abcde,abcde@abcde
   */
  appIds?: string;
  canaryModel?: number;
  /**
   * @example
   * mse:abcde@abcde
   */
  entryApp?: string;
  /**
   * @example
   * 123
   */
  id?: number;
  /**
   * @example
   * Client
   */
  messageQueueFilterSide?: string;
  messageQueueGrayEnable?: boolean;
  /**
   * @example
   * swimmingGroup
   */
  name?: string;
  /**
   * @example
   * default
   */
  namespace?: string;
  paths?: string;
  recordCanaryDetail?: boolean;
  /**
   * @example
   * cn-hangzhou
   */
  region?: string;
  swimVersion?: number;
  /**
   * @example
   * 12345
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      appIds: 'AppIds',
      canaryModel: 'CanaryModel',
      entryApp: 'EntryApp',
      id: 'Id',
      messageQueueFilterSide: 'MessageQueueFilterSide',
      messageQueueGrayEnable: 'MessageQueueGrayEnable',
      name: 'Name',
      namespace: 'Namespace',
      paths: 'Paths',
      recordCanaryDetail: 'RecordCanaryDetail',
      region: 'Region',
      swimVersion: 'SwimVersion',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appIds: 'string',
      canaryModel: 'number',
      entryApp: 'string',
      id: 'number',
      messageQueueFilterSide: 'string',
      messageQueueGrayEnable: 'boolean',
      name: 'string',
      namespace: 'string',
      paths: 'string',
      recordCanaryDetail: 'boolean',
      region: 'string',
      swimVersion: 'number',
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

