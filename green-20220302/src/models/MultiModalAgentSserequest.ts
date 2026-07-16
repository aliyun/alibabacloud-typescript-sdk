// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MultiModalAgentSSERequest extends $dara.Model {
  /**
   * @remarks
   * The unique identifier of the whiteboard application. To obtain the whiteboard application ID, see [CreateApp](https://help.aliyun.com/document_detail/204234.html).
   * 
   * @example
   * txt_check_pro_agent_01
   */
  appID?: string;
  /**
   * @remarks
   * The parameter set required by the moderation service, in JSON string format. The input parameter for text content is content (String), the custom data ID is DataId (String), and the cache type is CacheType (String, valid value: ephemeral).
   * 
   * @example
   * {
   *     "content": "这里待审核的文本内容",
   *     "DataId": "data123***",
   *     "CacheType":"ephemeral"
   *     }
   */
  serviceParameters?: string;
  /**
   * @remarks
   * Specifies whether to use streaming output.
   * 
   * @example
   * true
   */
  stream?: string;
  static names(): { [key: string]: string } {
    return {
      appID: 'AppID',
      serviceParameters: 'ServiceParameters',
      stream: 'Stream',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appID: 'string',
      serviceParameters: 'string',
      stream: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

