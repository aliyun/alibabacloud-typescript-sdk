// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListIntentionsRequest extends $dara.Model {
  /**
   * @example
   * 1
   */
  annotationMissionDataSourceType?: number;
  /**
   * @example
   * chatbot-cn-n7QmzrUnNe
   */
  botId?: string;
  /**
   * @example
   * 2
   */
  environment?: number;
  /**
   * @example
   * e5035654-1745-484a-8c5b-165f7c7bcd79
   */
  instanceId?: string;
  /**
   * @example
   * 10717802
   */
  intentId?: number;
  /**
   * @example
   * 1
   */
  pageIndex?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * c5c5d8c0-c0f1-48a7-be2b-dc46006d888a
   */
  scriptId?: string;
  userNick?: string;
  static names(): { [key: string]: string } {
    return {
      annotationMissionDataSourceType: 'AnnotationMissionDataSourceType',
      botId: 'BotId',
      environment: 'Environment',
      instanceId: 'InstanceId',
      intentId: 'IntentId',
      pageIndex: 'PageIndex',
      pageSize: 'PageSize',
      scriptId: 'ScriptId',
      userNick: 'UserNick',
    };
  }

  static types(): { [key: string]: any } {
    return {
      annotationMissionDataSourceType: 'number',
      botId: 'string',
      environment: 'number',
      instanceId: 'string',
      intentId: 'number',
      pageIndex: 'number',
      pageSize: 'number',
      scriptId: 'string',
      userNick: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

