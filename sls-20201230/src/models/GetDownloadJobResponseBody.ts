// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetDownloadJobResponseBodyConfiguration } from "./GetDownloadJobResponseBodyConfiguration";
import { GetDownloadJobResponseBodyExecutionDetails } from "./GetDownloadJobResponseBodyExecutionDetails";


export class GetDownloadJobResponseBody extends $dara.Model {
  /**
   * @remarks
   * 下载配置
   */
  configuration?: GetDownloadJobResponseBodyConfiguration;
  /**
   * @remarks
   * 代表创建时间的资源属性字段
   * 
   * @example
   * 1722411060
   */
  createTime?: string;
  /**
   * @remarks
   * 任务描述
   * 
   * @example
   * a download job
   */
  description?: string;
  /**
   * @remarks
   * 任务显示名称
   * 
   * @example
   * download-123456
   */
  displayName?: string;
  /**
   * @remarks
   * 任务执行细节
   */
  executionDetails?: GetDownloadJobResponseBodyExecutionDetails;
  /**
   * @remarks
   * 代表资源名称的资源属性字段
   * 
   * @example
   * download-123
   */
  name?: string;
  /**
   * @remarks
   * The status of the log download task.
   * 
   * @example
   * running
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      configuration: 'configuration',
      createTime: 'createTime',
      description: 'description',
      displayName: 'displayName',
      executionDetails: 'executionDetails',
      name: 'name',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configuration: GetDownloadJobResponseBodyConfiguration,
      createTime: 'string',
      description: 'string',
      displayName: 'string',
      executionDetails: GetDownloadJobResponseBodyExecutionDetails,
      name: 'string',
      status: 'string',
    };
  }

  validate() {
    if(this.configuration && typeof (this.configuration as any).validate === 'function') {
      (this.configuration as any).validate();
    }
    if(this.executionDetails && typeof (this.executionDetails as any).validate === 'function') {
      (this.executionDetails as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

