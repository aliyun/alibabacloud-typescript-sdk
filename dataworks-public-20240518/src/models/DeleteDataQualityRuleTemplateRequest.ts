// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteDataQualityRuleTemplateRequest extends $dara.Model {
  /**
   * @remarks
   * The code for the template.
   * 
   * This parameter is required.
   * 
   * @example
   * USER_DEFINED:123
   */
  code?: string;
  /**
   * @remarks
   * The DataWorks workspace ID.
   * 
   * @example
   * 10001
   */
  projectId?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      projectId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

