// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EditRecognizeRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The Alibaba Cloud account that is used to create the sensitive data identification rule. Enter the username of the Alibaba Cloud account.
   * 
   * This parameter is required.
   * 
   * @example
   * dsg-uat
   */
  accountName?: string;
  /**
   * @remarks
   * Excludes fields. The system does not identify fields that are assigned with values.
   * 
   * *   The value must be in the ${Project name}.${Table name}.${Field name} or ${Project name}.${Schema name}.${Table name}.${Field name} format.
   * *   *Wildcards are supported. For example, the asterisk (\\*) in default.table.column1\\* can be used to match any content following default.table.column1, such as default.table.column10.
   * 
   * @example
   * default.qujian.*6
   */
  colExclude?: string;
  /**
   * @remarks
   * Scans fields. The system identifies only fields that are assigned with values.
   * 
   * *   The value must be in the ${Project name}.${Table name}.${Field name} or ${Project name}.${Schema name}.${Table name}.${Field name} format.
   * *   *Wildcards are supported. For example, the asterisk (\\*) in default.table.column1\\* can be used to match any content following default.table.column1, such as default.table.column10.
   * 
   * @example
   * default.qujian.*
   */
  colScan?: string;
  /**
   * @remarks
   * Scans content. The value is the text of each field comment in your data asset. Fuzzy match is supported.
   * 
   * @example
   * test
   */
  commentScan?: string;
  /**
   * @remarks
   * Identifies content. You can call the [QuerySensNodeInfo](https://help.aliyun.com/document_detail/2747189.html) operation to query the value of the current parameter for a built-in sensitive field.
   * 
   * @example
   * {"_clazz":"com.alipay.dsgclient.sdk.dsg.fastscan.engine.cond.NationalityCond"}
   */
  contentScan?: string;
  /**
   * @remarks
   * The hit ratio threshold. If more than 60%, which is a sample hit ratio threshold, of all sample data records hit the Name Entity Recognition (NER) model, the sensitive field is hit. The value can be an integer from 0 to 100.
   * 
   * @example
   * 50
   */
  hitThreshold?: number;
  /**
   * @remarks
   * The name of the sensitivity level. You can call the [QueryDefaultTemplate](https://help.aliyun.com/document_detail/2743948.html) operation to obtain the name of the sensitivity level in the related template.
   * 
   * @example
   * Confidential
   */
  levelName?: string;
  /**
   * @remarks
   * The ID of the data category. You can call the [QuerySensClassification](https://help.aliyun.com/document_detail/2746850.html) operation to query the ID of all data categories. Then, you can select a data category to create a sensitive field. Enter the ID of the selected data category.
   * 
   * This parameter is required.
   * 
   * @example
   * 0ce67949-0810-400f-a24a-cc5ffafe1024
   */
  nodeId?: string;
  /**
   * @remarks
   * The information about the parent data category of the current data category. You can call the [QuerySensClassification](https://help.aliyun.com/document_detail/2746850.html) operation to obtain the ID of a data category.
   * 
   * This parameter is required.
   * 
   * @example
   * Customer/personal/personal_Natural_Information/personal_basic_profile_information
   */
  nodeParent?: string;
  /**
   * @remarks
   * The type of the arithmetic operation. Valid values:
   * 
   * *   0: OR
   * *   1: AND
   * 
   * This parameter is required.
   * 
   * @example
   * 0
   */
  operationType?: number;
  /**
   * @remarks
   * The content of the sensitive data identification rule. You can call the [QuerySensNodeInfo](https://help.aliyun.com/document_detail/2747189.html) operation to query the value of the current parameter for a built-in sensitive field.
   * 
   * @example
   * {"contentRule":{"_clazz":"com.alipay.dsgclient.sdk.dsg.fastscan.engine.cond.GenderCond"},"_clazz":"com.alipay.dsg.dal.model.RuleContent"}
   */
  recognizeRules?: string;
  /**
   * @remarks
   * The type of the sensitive data identification rule. Valid values:
   * 
   * *   1: regular expression
   * *   2: built-in rule
   * *   3: sample library
   * *   4: self-generated data identification model
   * 
   * @example
   * 1
   */
  recognizeRulesType?: string;
  /**
   * @remarks
   * The description of the sensitive field. Enter a string that is less than 128 characters in length.
   * 
   * @example
   * This is a sensitive field that identifies the name.
   */
  sensitiveDescription?: string;
  /**
   * @remarks
   * The sensitive field ID. You can call the [QuerySensNodeInfo](https://help.aliyun.com/document_detail/2747189.html) operation to query the IDs of all sensitive fields. You can also call the [QueryRecognizeRuleDetail](https://help.aliyun.com/document_detail/2766023.html) operation to query the IDs of specific sensitive fields.
   * 
   * This parameter is required.
   * 
   * @example
   * 1a928de7-3962-4e07-93ac-e1973baa1024
   */
  sensitiveId?: string;
  /**
   * @remarks
   * The name of the custom sensitive field. Enter a string that is less than 128 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * name
   */
  sensitiveName?: string;
  /**
   * @remarks
   * The status of the sensitive field. Valid values:
   * 
   * *   0: draft
   * *   1: effective
   * 
   * @example
   * 0
   */
  status?: number;
  /**
   * @remarks
   * The template ID. You can call the [QueryDefaultTemplate](https://help.aliyun.com/document_detail/2743948.html) operation to obtain the template ID.
   * 
   * This parameter is required.
   * 
   * @example
   * e1970541-6cf5-4d23-b101-d5b66f6e1024
   */
  templateId?: string;
  /**
   * @remarks
   * The tenant ID. To obtain the tenant ID, perform the following steps: Log on to the [DataWorks console](https://workbench.data.aliyun.com/console). Find your workspace and go to the DataStudio page. On the DataStudio page, click the logon username in the upper-right corner and click User Info in the Menu section.
   * 
   * This parameter is required.
   * 
   * @example
   * 10241024
   */
  tenantId?: string;
  /**
   * @remarks
   * The sensitivity level of the sensitive field. You can select one from all sensitivity levels that are defined in a template as the sensitivity level of the sensitive field, such as level 1 to level 10.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  level?: string;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      colExclude: 'ColExclude',
      colScan: 'ColScan',
      commentScan: 'CommentScan',
      contentScan: 'ContentScan',
      hitThreshold: 'HitThreshold',
      levelName: 'LevelName',
      nodeId: 'NodeId',
      nodeParent: 'NodeParent',
      operationType: 'OperationType',
      recognizeRules: 'RecognizeRules',
      recognizeRulesType: 'RecognizeRulesType',
      sensitiveDescription: 'SensitiveDescription',
      sensitiveId: 'SensitiveId',
      sensitiveName: 'SensitiveName',
      status: 'Status',
      templateId: 'TemplateId',
      tenantId: 'TenantId',
      level: 'level',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      colExclude: 'string',
      colScan: 'string',
      commentScan: 'string',
      contentScan: 'string',
      hitThreshold: 'number',
      levelName: 'string',
      nodeId: 'string',
      nodeParent: 'string',
      operationType: 'number',
      recognizeRules: 'string',
      recognizeRulesType: 'string',
      sensitiveDescription: 'string',
      sensitiveId: 'string',
      sensitiveName: 'string',
      status: 'number',
      templateId: 'string',
      tenantId: 'string',
      level: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

