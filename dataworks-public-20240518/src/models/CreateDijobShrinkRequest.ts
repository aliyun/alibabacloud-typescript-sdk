// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDIJobShrinkRequest extends $dara.Model {
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  destinationDataSourceSettingsShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  destinationDataSourceType?: string;
  /**
   * @deprecated
   */
  jobName?: string;
  jobSettingsShrink?: string;
  jobType?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  migrationType?: string;
  name?: string;
  projectId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  resourceSettingsShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  sourceDataSourceSettingsShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  sourceDataSourceType?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  tableMappingsShrink?: string;
  transformationRulesShrink?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      destinationDataSourceSettingsShrink: 'DestinationDataSourceSettings',
      destinationDataSourceType: 'DestinationDataSourceType',
      jobName: 'JobName',
      jobSettingsShrink: 'JobSettings',
      jobType: 'JobType',
      migrationType: 'MigrationType',
      name: 'Name',
      projectId: 'ProjectId',
      resourceSettingsShrink: 'ResourceSettings',
      sourceDataSourceSettingsShrink: 'SourceDataSourceSettings',
      sourceDataSourceType: 'SourceDataSourceType',
      tableMappingsShrink: 'TableMappings',
      transformationRulesShrink: 'TransformationRules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      destinationDataSourceSettingsShrink: 'string',
      destinationDataSourceType: 'string',
      jobName: 'string',
      jobSettingsShrink: 'string',
      jobType: 'string',
      migrationType: 'string',
      name: 'string',
      projectId: 'number',
      resourceSettingsShrink: 'string',
      sourceDataSourceSettingsShrink: 'string',
      sourceDataSourceType: 'string',
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

