// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteQualityRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the DataWorks workspace. You can log on to the DataWorks console and go to the Workspace Management page to obtain the workspace ID.
   * 
   * @example
   * 10000
   */
  projectId?: number;
  /**
   * @remarks
   * The name of the compute engine or data source.
   * 
   * This parameter is required.
   * 
   * @example
   * autotest
   */
  projectName?: string;
  /**
   * @remarks
   * The ID of the data quality rule.
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

