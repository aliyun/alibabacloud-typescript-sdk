// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetQualityRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the DataWorks workspace.
   * 
   * @example
   * 12345
   */
  projectId?: number;
  /**
   * @remarks
   * The name of the engine or data source.
   * 
   * This parameter is required.
   * 
   * @example
   * autotest
   */
  projectName?: string;
  /**
   * @remarks
   * The ID of the quality rule. You can call the [ListQualityRules](https://help.aliyun.com/document_detail/173995.html) operation to obtain the ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 1234
   */
  ruleId?: number;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      projectName: 'ProjectName',
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'number',
      projectName: 'string',
      ruleId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

