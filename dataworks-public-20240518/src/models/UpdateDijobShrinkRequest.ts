// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateDIJobShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is deprecated. Use the Id parameter instead.
   * 
   * @example
   * 11588
   * 
   * @deprecated
   */
  DIJobId?: number;
  description?: string;
  /**
   * @remarks
   * The ID of the synchronization task.
   * 
   * @example
   * 11588
   */
  id?: number;
  jobSettingsShrink?: string;
  /**
   * @remarks
   * The DataWorks workspace ID. You can call the [ListProjects](https://help.aliyun.com/document_detail/178393.html) operation to obtain the ID.
   * 
   * @example
   * 10000
   */
  projectId?: number;
  resourceSettingsShrink?: string;
  tableMappingsShrink?: string;
  transformationRulesShrink?: string;
  static names(): { [key: string]: string } {
    return {
      DIJobId: 'DIJobId',
      description: 'Description',
      id: 'Id',
      jobSettingsShrink: 'JobSettings',
      projectId: 'ProjectId',
      resourceSettingsShrink: 'ResourceSettings',
      tableMappingsShrink: 'TableMappings',
      transformationRulesShrink: 'TransformationRules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DIJobId: 'number',
      description: 'string',
      id: 'number',
      jobSettingsShrink: 'string',
      projectId: 'number',
      resourceSettingsShrink: 'string',
      tableMappingsShrink: 'string',
      transformationRulesShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

