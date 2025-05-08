// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListClusterHealthCheckTaskResponseBodyDataResultRiskList extends $dara.Model {
  /**
   * @remarks
   * The description.
   * 
   * @example
   * {\\\\"desc\\\\":\\\\"The engine version is outdated and a large number of features are not supported. Upgrade the engine to the latest version at the earliest opportunity. \\\\"}
   */
  description?: string;
  descriptionEn?: string;
  /**
   * @remarks
   * The ID.
   * 
   * @example
   * 3426
   */
  id?: number;
  /**
   * @remarks
   * A redundant parameter.
   * 
   * @example
   * null
   */
  module?: string;
  /**
   * @remarks
   * Indicates whether the risk item notification feature is disabled.
   * 
   * *   true: disabled
   * *   false: enabled
   * 
   * @example
   * false
   */
  mute?: boolean;
  /**
   * @remarks
   * A redundant parameter.
   * 
   * @example
   * null
   */
  noticeFeature?: boolean;
  /**
   * @remarks
   * The ID of the user to which the cluster belongs.
   * 
   * @example
   * 123456
   */
  primaryUser?: string;
  /**
   * @remarks
   * The risk code.
   * 
   * @example
   * 22020010001
   */
  riskCode?: string;
  /**
   * @remarks
   * The severity of the risk. Valid values:
   * 
   * *   HIGH: high risk
   * *   MID: medium risk
   * *   LOW: low risk
   * 
   * @example
   * MID
   */
  riskLevel?: string;
  /**
   * @remarks
   * The name of the risk.
   * 
   * @example
   * The engine version is outdated.
   */
  riskName?: string;
  riskNameEn?: string;
  /**
   * @remarks
   * The type of the risk.
   * 
   * @example
   * Version risk
   */
  riskType?: string;
  /**
   * @remarks
   * The situation.
   * 
   * @example
   * {\\\\"desc\\\\":\\\\"The engine version is outdated and a large number of features are not supported.\\\\",\\\\"links\\\\":[{\\\\"type\\\\":\\\\"url\\\\",\\\\"value\\\\":\\\\"https://xxxx"\\\\",\\\\"desc\\\\":\\\\"Release notes\\\\"}]}
   */
  situation?: string;
  situationEn?: string;
  /**
   * @remarks
   * The suggestion.
   * 
   * @example
   * {"desc": "Upgrade to the latest version at the earliest opportunity.", "links":[{"type": "upgrade", "desc": "Click to upgrade"}]}
   */
  suggestion?: string;
  suggestionEn?: string;
  /**
   * @remarks
   * The ID of the associated parent task.
   * 
   * @example
   * 1
   */
  taskId?: number;
  /**
   * @remarks
   * A redundant parameter.
   * 
   * @example
   * null
   */
  type?: number;
  /**
   * @remarks
   * A redundant parameter.
   * 
   * @example
   * null
   */
  values?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      descriptionEn: 'DescriptionEn',
      id: 'Id',
      module: 'Module',
      mute: 'Mute',
      noticeFeature: 'NoticeFeature',
      primaryUser: 'PrimaryUser',
      riskCode: 'RiskCode',
      riskLevel: 'RiskLevel',
      riskName: 'RiskName',
      riskNameEn: 'RiskNameEn',
      riskType: 'RiskType',
      situation: 'Situation',
      situationEn: 'SituationEn',
      suggestion: 'Suggestion',
      suggestionEn: 'SuggestionEn',
      taskId: 'TaskId',
      type: 'Type',
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      descriptionEn: 'string',
      id: 'number',
      module: 'string',
      mute: 'boolean',
      noticeFeature: 'boolean',
      primaryUser: 'string',
      riskCode: 'string',
      riskLevel: 'string',
      riskName: 'string',
      riskNameEn: 'string',
      riskType: 'string',
      situation: 'string',
      situationEn: 'string',
      suggestion: 'string',
      suggestionEn: 'string',
      taskId: 'number',
      type: 'number',
      values: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

