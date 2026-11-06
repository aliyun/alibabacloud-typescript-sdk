// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDataProcessJobAttributeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The time when the task was created, in RFC 3339 format.
   * 
   * @example
   * 2025-01-01T00:00:00Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The JSON string of the destination database connection configuration.
   * 
   * @example
   * {"Account":"example_user","Password":"example_password"}
   */
  destinationConfig?: string;
  /**
   * @remarks
   * The ID of the destination PolarDB cluster.
   * 
   * @example
   * pc-test123456
   */
  destinationId?: string;
  /**
   * @remarks
   * The name of the destination database.
   * 
   * @example
   * testdb
   */
  destinationPath?: string;
  /**
   * @remarks
   * The type of the destination. Currently, only PolarDB is supported.
   * 
   * @example
   * PolarDB
   */
  destinationType?: string;
  /**
   * @remarks
   * The ID of the data processing task.
   * 
   * @example
   * job-123456
   */
  jobId?: string;
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
   * The data processing mode. Valid values: Full, Incremental, and Both.
   * 
   * @example
   * Full
   */
  processingMode?: string;
  /**
   * @remarks
   * The region ID of the region where the data processing task is located.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 2921D843-433A-5FB3-A03B-4EC093B219F8
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the source PolarFS instance.
   * 
   * @example
   * pfs-123456
   */
  sourceId?: string;
  /**
   * @remarks
   * The source data path in PolarFS.
   * 
   * @example
   * /data/input
   */
  sourcePath?: string;
  /**
   * @remarks
   * The type of the data source. Currently, only PolarFS is supported.
   * 
   * @example
   * PolarFS
   */
  sourceType?: string;
  /**
   * @remarks
   * The status of the data processing task.
   * 
   * @example
   * Running
   */
  status?: string;
  /**
   * @remarks
   * The ID of the template used by the task.
   * 
   * @example
   * tpl-123456
   */
  templateId?: string;
  /**
   * @remarks
   * The node templatetype. Currently, only image is supported.
   * 
   * @example
   * image
   */
  templateType?: string;
  static names(): { [key: string]: string } {
    return {
      creationTime: 'CreationTime',
      destinationConfig: 'DestinationConfig',
      destinationId: 'DestinationId',
      destinationPath: 'DestinationPath',
      destinationType: 'DestinationType',
      jobId: 'JobId',
      modelName: 'ModelName',
      processingMode: 'ProcessingMode',
      regionId: 'RegionId',
      requestId: 'RequestId',
      sourceId: 'SourceId',
      sourcePath: 'SourcePath',
      sourceType: 'SourceType',
      status: 'Status',
      templateId: 'TemplateId',
      templateType: 'TemplateType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationTime: 'string',
      destinationConfig: 'string',
      destinationId: 'string',
      destinationPath: 'string',
      destinationType: 'string',
      jobId: 'string',
      modelName: 'string',
      processingMode: 'string',
      regionId: 'string',
      requestId: 'string',
      sourceId: 'string',
      sourcePath: 'string',
      sourceType: 'string',
      status: 'string',
      templateId: 'string',
      templateType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

