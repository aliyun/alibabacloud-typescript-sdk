// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetSmartHandleJobResponseBodySmartJobInfoInputConfig } from "./GetSmartHandleJobResponseBodySmartJobInfoInputConfig";
import { GetSmartHandleJobResponseBodySmartJobInfoOutputConfig } from "./GetSmartHandleJobResponseBodySmartJobInfoOutputConfig";


export class GetSmartHandleJobResponseBodySmartJobInfo extends $dara.Model {
  /**
   * @remarks
   * The time when the job was created.
   * 
   * @example
   * 2020-12-26T04:11:10Z
   */
  createTime?: string;
  /**
   * @remarks
   * The job description.
   * 
   * @example
   * 测试描述
   */
  description?: string;
  /**
   * @remarks
   * The input configurations.
   */
  inputConfig?: GetSmartHandleJobResponseBodySmartJobInfoInputConfig;
  /**
   * @remarks
   * The job type.
   * 
   * @example
   * ASR
   */
  jobType?: string;
  /**
   * @remarks
   * The time when the job was last modified.
   * 
   * @example
   * 2020-12-26T04:11:10Z
   */
  modifiedTime?: string;
  /**
   * @remarks
   * The output configurations.
   */
  outputConfig?: GetSmartHandleJobResponseBodySmartJobInfoOutputConfig;
  /**
   * @remarks
   * The job title.
   * 
   * @example
   * 测试标题
   */
  title?: string;
  /**
   * @remarks
   * The user ID.
   * 
   * @example
   * 1974526429******
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      description: 'Description',
      inputConfig: 'InputConfig',
      jobType: 'JobType',
      modifiedTime: 'ModifiedTime',
      outputConfig: 'OutputConfig',
      title: 'Title',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      description: 'string',
      inputConfig: GetSmartHandleJobResponseBodySmartJobInfoInputConfig,
      jobType: 'string',
      modifiedTime: 'string',
      outputConfig: GetSmartHandleJobResponseBodySmartJobInfoOutputConfig,
      title: 'string',
      userId: 'string',
    };
  }

  validate() {
    if(this.inputConfig && typeof (this.inputConfig as any).validate === 'function') {
      (this.inputConfig as any).validate();
    }
    if(this.outputConfig && typeof (this.outputConfig as any).validate === 'function') {
      (this.outputConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

