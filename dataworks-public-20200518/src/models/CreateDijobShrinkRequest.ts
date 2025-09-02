// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDIJobShrinkRequest extends $dara.Model {
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
   * The settings of the destination. Only a single destination is supported.
   */
  destinationDataSourceSettingsShrink?: string;
  /**
   * @remarks
   * The destination type. Valid values: Hologres and Hive.
   * 
   * @example
   * Hologres
   */
  destinationDataSourceType?: string;
  /**
   * @remarks
   * The name of the synchronization task.
   * 
   * @example
   * mysql_to_holo_sync_8772
   */
  jobName?: string;
  /**
   * @remarks
   * The settings for the dimension of the synchronization task. The settings include processing policies for DDL messages, policies for data type mappings between source fields and destination fields, and runtime parameters of the synchronization task.
   */
  jobSettingsShrink?: string;
  /**
   * @remarks
   * The synchronization type. Valid values:
   * 
   * *   FullAndRealtimeIncremental (one-time full synchronization and real-time incremental synchronization)
   * *   RealtimeIncremental (real-time incremental synchronization)
   * *   Full (full synchronization)
   * *   OfflineIncremental (batch incremental synchronization)
   * *   FullAndOfflineIncremental (one-time full synchronization and batch incremental synchronization)
   * 
   * @example
   * FullAndRealtimeIncremental
   */
  migrationType?: string;
  /**
   * @remarks
   * The DataWorks workspace ID. You can call the [ListProjects](https://help.aliyun.com/document_detail/178393.html) operation to obtain the ID.
   * 
   * @example
   * 10000
   */
  projectId?: number;
  /**
   * @remarks
   * The resource settings.
   */
  resourceSettingsShrink?: string;
  /**
   * @remarks
   * The settings of the source. Only a single source is supported.
   */
  sourceDataSourceSettingsShrink?: string;
  /**
   * @remarks
   * The source type. Set this parameter to MySQL.
   * 
   * @example
   * MySQL
   */
  sourceDataSourceType?: string;
  /**
   * @remarks
   * Specifies whether to perform system debugging. Valid values: true and false. Default value: false.
   * 
   * @example
   * false
   */
  systemDebug?: string;
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
      description: 'Description',
      destinationDataSourceSettingsShrink: 'DestinationDataSourceSettings',
      destinationDataSourceType: 'DestinationDataSourceType',
      jobName: 'JobName',
      jobSettingsShrink: 'JobSettings',
      migrationType: 'MigrationType',
      projectId: 'ProjectId',
      resourceSettingsShrink: 'ResourceSettings',
      sourceDataSourceSettingsShrink: 'SourceDataSourceSettings',
      sourceDataSourceType: 'SourceDataSourceType',
      systemDebug: 'SystemDebug',
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
      migrationType: 'string',
      projectId: 'number',
      resourceSettingsShrink: 'string',
      sourceDataSourceSettingsShrink: 'string',
      sourceDataSourceType: 'string',
      systemDebug: 'string',
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

