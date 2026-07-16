// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MultiModalAgentRequest extends $dara.Model {
  /**
   * @remarks
   * The unique identifier of the whiteboard application. To get the whiteboard application ID, see [CreateApp](https://help.aliyun.com/document_detail/204234.html).
   * 
   * @example
   * txt_check_agent_01
   */
  appID?: string;
  /**
   * @remarks
   * The set of parameters for the auditing service. This includes the taskId of the detection task to query. You can specify only one taskId at a time.
   * 
   * @example
   * {"content":"测试文本","dataId":"img1234567"}
   */
  serviceParameters?: string;
  static names(): { [key: string]: string } {
    return {
      appID: 'AppID',
      serviceParameters: 'ServiceParameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appID: 'string',
      serviceParameters: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

