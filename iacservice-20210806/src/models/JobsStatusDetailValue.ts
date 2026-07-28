// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class JobsStatusDetailValue extends $dara.Model {
  /**
   * @remarks
   * 备注
   * 
   * @example
   * comment
   */
  comment?: string;
  /**
   * @remarks
   * 作业执行结果
   * 
   * @example
   * Apply complete! Resources: 0 added, 0 changed, 0 destroyed.
   */
  jobResult?: string;
  /**
   * @remarks
   * 到达状态时间
   * 
   * @example
   * 2022-06-13 17:11:34
   */
  timeStamps?: string;
  static names(): { [key: string]: string } {
    return {
      comment: 'comment',
      jobResult: 'jobResult',
      timeStamps: 'timeStamps',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      jobResult: 'string',
      timeStamps: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

