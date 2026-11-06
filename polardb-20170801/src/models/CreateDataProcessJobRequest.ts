// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDataProcessJobRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the data processing task.
   * 
   * @example
   * Image data processing task
   */
  description?: string;
  /**
   * @remarks
   * The JSON string for the destination database connection configuration, which includes the account and password.
   * 
   * @example
   * {"Account":"example_user","Password":"example_password"}
   */
  destinationConfig?: string;
  /**
   * @remarks
   * The ID of the destination PolarDB cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * pc-test123456
   */
  destinationId?: string;
  /**
   * @remarks
   * The name of the destination database.
   * 
   * This parameter is required.
   * 
   * @example
   * testdb
   */
  destinationPath?: string;
  /**
   * @remarks
   * The destination type. Currently, only PolarDB is supported.
   * 
   * This parameter is required.
   * 
   * @example
   * PolarDB
   */
  destinationType?: string;
  /**
   * @remarks
   * The name of the model used for feature extraction.
   * 
   * @example
   * model-v1
   */
  modelName?: string;
  /**
   * @remarks
   * The processing mode. Valid values: Full, Incremental, and Both.
   * 
   * This parameter is required.
   * 
   * @example
   * Full
   */
  processingMode?: string;
  /**
   * @remarks
   * The ID of the region where the task resides.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The additional configuration for the data source in JSON string format. You can leave this parameter empty.
   * 
   * @example
   * {}
   */
  sourceConfig?: string;
  /**
   * @remarks
   * The ID of the PolarFS instance that serves as the data source.
   * 
   * This parameter is required.
   * 
   * @example
   * pfs-123456
   */
  sourceId?: string;
  /**
   * @remarks
   * The source data path in PolarFS. An empty string indicates the default path.
   * 
   * This parameter is required.
   * 
   * @example
   * /images
   */
  sourcePath?: string;
  /**
   * @remarks
   * The data source type. Currently, only PolarFS is supported.
   * 
   * This parameter is required.
   * 
   * @example
   * PolarFS
   */
  sourceType?: string;
  /**
   * @remarks
   * The ID of the task template used to process data.
   * 
   * This parameter is required.
   * 
   * @example
   * tpl-123456
   */
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      destinationConfig: 'DestinationConfig',
      destinationId: 'DestinationId',
      destinationPath: 'DestinationPath',
      destinationType: 'DestinationType',
      modelName: 'ModelName',
      processingMode: 'ProcessingMode',
      regionId: 'RegionId',
      sourceConfig: 'SourceConfig',
      sourceId: 'SourceId',
      sourcePath: 'SourcePath',
      sourceType: 'SourceType',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      destinationConfig: 'string',
      destinationId: 'string',
      destinationPath: 'string',
      destinationType: 'string',
      modelName: 'string',
      processingMode: 'string',
      regionId: 'string',
      sourceConfig: 'string',
      sourceId: 'string',
      sourcePath: 'string',
      sourceType: 'string',
      templateId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

