// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateDIJobShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the synchronization task.
   * 
   * @example
   * 11588
   */
  DIJobId?: number;
  /**
   * @remarks
   * The description of the synchronization task.
   * 
   * @example
   * Synchronize mysql to hologres
   */
  description?: string;
  /**
   * @remarks
   * The settings for the dimension of the synchronization task. The settings include processing policies for DDL messages, policies for data type mappings between source fields and destination fields, and runtime parameters of the synchronization task.
   */
  jobSettingsShrink?: string;
  /**
   * @remarks
   * The resource settings.
   */
  resourceSettingsShrink?: string;
  /**
   * @remarks
   * The list of mappings between rules used to select synchronization objects in the source and transformation rules applied to the selected synchronization objects. Each entry in the list displays a mapping between a rule used to select synchronization objects and a transformation rule applied to the selected synchronization objects.
   */
  tableMappingsShrink?: string;
  /**
   * @remarks
   * The list of transformation rules that you want to apply to the synchronization objects selected from the source. Each entry in the list defines a transformation rule.
   */
  transformationRulesShrink?: string;
  static names(): { [key: string]: string } {
    return {
      DIJobId: 'DIJobId',
      description: 'Description',
      jobSettingsShrink: 'JobSettings',
      resourceSettingsShrink: 'ResourceSettings',
      tableMappingsShrink: 'TableMappings',
      transformationRulesShrink: 'TransformationRules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DIJobId: 'number',
      description: 'string',
      jobSettingsShrink: 'string',
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

