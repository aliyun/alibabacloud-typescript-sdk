// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteTemplatesRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to delete the related executions when a template is deleted.
   * 
   * @example
   * false
   */
  autoDeleteExecutions?: boolean;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The names of the templates to be deleted.
   * 
   * This parameter is required.
   * 
   * @example
   * ["t1","t2"]
   */
  templateNames?: string;
  static names(): { [key: string]: string } {
    return {
      autoDeleteExecutions: 'AutoDeleteExecutions',
      regionId: 'RegionId',
      templateNames: 'TemplateNames',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoDeleteExecutions: 'boolean',
      regionId: 'string',
      templateNames: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

