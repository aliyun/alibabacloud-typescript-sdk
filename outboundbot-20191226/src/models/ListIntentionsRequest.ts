// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListIntentionsRequest extends $dara.Model {
  /**
   * @remarks
   * >Notice: 
   * 
   * This parameter is required. Select based on the scenario.
   * 
   * 
   * 
   * Annotation data source.
   * 
   * - 1: Outbound Call
   * 
   * - 2: Navigation
   * 
   * @example
   * 1
   */
  annotationMissionDataSourceType?: number;
  /**
   * @remarks
   * Bot ID
   * 
   * > Get this from the DescribeScript API. The corresponding parameter is ChatbotId.
   * 
   * @example
   * chatbot-cn-n7QmzrUnNe
   */
  botId?: string;
  /**
   * @remarks
   * Environment
   * 
   * - 1: Private Cloud
   * 
   * - 2: Public Cloud
   * 
   * @example
   * 2
   */
  environment?: number;
  /**
   * @remarks
   * Instance ID
   * 
   * @example
   * e5035654-1745-484a-8c5b-165f7c7bcd79
   */
  instanceId?: string;
  /**
   * @remarks
   * Intent ID
   * 
   * @example
   * 10717802
   */
  intentId?: number;
  /**
   * @remarks
   * Page Number
   * 
   * @example
   * 1
   */
  pageIndex?: number;
  /**
   * @remarks
   * Number.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Scenario ID
   * 
   * @example
   * c5c5d8c0-c0f1-48a7-be2b-dc46006d888a
   */
  scriptId?: string;
  /**
   * @remarks
   * Intent Name
   * 
   * > Use this for fuzzy queries based on keywords.
   * 
   * @example
   * 知道
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

