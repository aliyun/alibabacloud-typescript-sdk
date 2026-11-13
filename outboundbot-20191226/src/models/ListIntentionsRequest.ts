// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListIntentionsRequest extends $dara.Model {
  /**
   * @remarks
   * <notice>This parameter is required. Select a value based on the scenario.</notice>
   * 
   * The data source of the annotation. Valid values:
   * - 1: outbound call
   * - 2: navigation
   * 
   * @example
   * 1
   */
  annotationMissionDataSourceType?: number;
  /**
   * @remarks
   * The ID of the bot. You can obtain the ID from the ChatbotId parameter in the response of the DescribeScript operation.
   * 
   * @example
   * chatbot-cn-n7QmzrUnNe
   */
  botId?: string;
  /**
   * @remarks
   * The environment. Valid values:
   * - 1: private cloud
   * - 2: public cloud
   * 
   * @example
   * 2
   */
  environment?: number;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * e5035654-1745-484a-8c5b-165f7c7bcd79
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the intent.
   * 
   * @example
   * 10717802
   */
  intentId?: number;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageIndex?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the scenario.
   * 
   * @example
   * c5c5d8c0-c0f1-48a7-be2b-dc46006d888a
   */
  scriptId?: string;
  /**
   * @remarks
   * The name of the intent. You can use keywords to perform a fuzzy match.
   * 
   * @example
   * Know
   */
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

