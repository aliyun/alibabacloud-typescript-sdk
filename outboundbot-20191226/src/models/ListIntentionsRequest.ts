// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListIntentionsRequest extends $dara.Model {
  /**
   * @remarks
   * >Notice: This parameter is required. Select a value based on the scenario.
   * 
   * The annotation data source. Valid values:
   * - 1: outbound call
   * - 2: navigation
   * 
   * @example
   * 1
   */
  annotationMissionDataSourceType?: number;
  /**
   * @remarks
   * The robot ID.
   * 
   * > You can obtain this value from the DescribeScript operation, which corresponds to the ChatbotId parameter.
   * 
   * @example
   * chatbot-cn-n7QmzrUnNe
   */
  botId?: string;
  /**
   * @remarks
   * The environment. Valid values:
   * 
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
   * The intent ID.
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
   * The scenario ID.
   * 
   * @example
   * c5c5d8c0-c0f1-48a7-be2b-dc46006d888a
   */
  scriptId?: string;
  /**
   * @remarks
   * The intent name.
   * 
   * > Supports fuzzy match by keyword as a filter condition.
   * 
   * @example
   * know
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

