// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TensorboardDataSourceSpec extends $dara.Model {
  /**
   * @example
   * OSS
   */
  dataSourceType?: string;
  /**
   * @example
   * dlcJobName
   */
  directoryName?: string;
  /**
   * @example
   * oss://xxxxx/tensorboard/run1
   */
  fullSummaryPath?: string;
  /**
   * @example
   * d-vf2fdhxxxxxx
   */
  id?: string;
  /**
   * @example
   * dlcJobName
   */
  name?: string;
  /**
   * @example
   * datasource
   */
  sourceType?: string;
  /**
   * @example
   * /tensorboard/run1
   */
  summaryPath?: string;
  /**
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

