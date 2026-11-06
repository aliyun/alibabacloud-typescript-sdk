// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDataProcessJobsResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * The time when the job was created, in RFC 3339 format.
   * 
   * @example
   * 2025-01-01T00:00:00Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The description of the data processing job.
   * 
   * @example
   * Image data processing job
   */
  description?: string;
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
   * The destination type. Currently, only PolarDB is supported.
   * 
   * @example
   * PolarDB
   */
  destinationType?: string;
  /**
   * @remarks
   * The ID of the data processing job.
   * 
   * @example
   * job-123456
   */
  jobId?: string;
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
   * The ID of the region where the data processing job resides.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
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
   * The status of the data processing job.
   * 
   * @example
   * Running
   */
  status?: string;
  /**
   * @remarks
   * The ID of the template used by the job.
   * 
   * @example
   * tpl-123456
   */
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      creationTime: 'CreationTime',
      description: 'Description',
      destinationId: 'DestinationId',
      destinationPath: 'DestinationPath',
      destinationType: 'DestinationType',
      jobId: 'JobId',
      processingMode: 'ProcessingMode',
      regionId: 'RegionId',
      sourceId: 'SourceId',
      sourcePath: 'SourcePath',
      sourceType: 'SourceType',
      status: 'Status',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationTime: 'string',
      description: 'string',
      destinationId: 'string',
      destinationPath: 'string',
      destinationType: 'string',
      jobId: 'string',
      processingMode: 'string',
      regionId: 'string',
      sourceId: 'string',
      sourcePath: 'string',
      sourceType: 'string',
      status: 'string',
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

export class DescribeDataProcessJobsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of data processing jobs.
   */
  items?: DescribeDataProcessJobsResponseBodyItems[];
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  pageNumber?: string;
  /**
   * @remarks
   * The number of jobs returned on the current page.
   * 
   * @example
   * 1
   */
  pageRecordCount?: string;
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
   * The total number of jobs that meet the query conditions.
   * 
   * @example
   * 1
   */
  totalRecordCount?: string;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      pageNumber: 'PageNumber',
      pageRecordCount: 'PageRecordCount',
      requestId: 'RequestId',
      totalRecordCount: 'TotalRecordCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': DescribeDataProcessJobsResponseBodyItems },
      pageNumber: 'string',
      pageRecordCount: 'string',
      requestId: 'string',
      totalRecordCount: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

