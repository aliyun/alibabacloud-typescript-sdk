// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TensorboardDataSourceSpec extends $dara.Model {
  /**
   * @remarks
   * The file type that corresponds to the URI in the dataset configurations.
   * 
   * @example
   * OSS
   */
  dataSourceType?: string;
  /**
   * @remarks
   * The directory prefix of the dataset in the TensorBoard task.
   * 
   * @example
   * dlcJobName
   */
  directoryName?: string;
  /**
   * @remarks
   * The full summary path.
   * 
   * @example
   * oss://xxxxx/tensorboard/run1
   */
  fullSummaryPath?: string;
  /**
   * @remarks
   * The ID of the dataset configurations. In most cases, the ID of the dataset configurations is the ID of a dataset or task.
   * 
   * @example
   * d-vf2fdhxxxxxx
   */
  id?: string;
  /**
   * @remarks
   * The name of the dataset configurations. In most cases, the name of the dataset configurations is the name of a dataset or task.
   * 
   * @example
   * dlcJobName
   */
  name?: string;
  /**
   * @remarks
   * The dataset type.
   * 
   * *   datasource: configure a dataset based on the dataset type.
   * *   dlcjob: configure a dataset based on the task type.
   * 
   * @example
   * datasource
   */
  sourceType?: string;
  /**
   * @remarks
   * The summary path.
   * 
   * @example
   * /tensorboard/run1
   */
  summaryPath?: string;
  /**
   * @remarks
   * The file system URI in the dataset configurations.
   * 
   * @example
   * oss://.oss-cn-shanghai-finance-1.aliyuncs.com/
   */
  uri?: string;
  static names(): { [key: string]: string } {
    return {
      dataSourceType: 'DataSourceType',
      directoryName: 'DirectoryName',
      fullSummaryPath: 'FullSummaryPath',
      id: 'Id',
      name: 'Name',
      sourceType: 'SourceType',
      summaryPath: 'SummaryPath',
      uri: 'Uri',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataSourceType: 'string',
      directoryName: 'string',
      fullSummaryPath: 'string',
      id: 'string',
      name: 'string',
      sourceType: 'string',
      summaryPath: 'string',
      uri: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

