// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCustomHotTopicBroadcastJobResponseBodyData extends $dara.Model {
  /**
   * @example
   * 错误信息
   */
  errorMessage?: string;
  /**
   * @example
   * 热点话题版本号标识
   */
  hotTopicVersion?: string;
  /**
   * @example
   * RUNNING
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      errorMessage: 'ErrorMessage',
      hotTopicVersion: 'HotTopicVersion',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMessage: 'string',
      hotTopicVersion: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

