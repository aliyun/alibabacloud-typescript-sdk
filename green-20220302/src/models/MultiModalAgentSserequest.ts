// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MultiModalAgentSSERequest extends $dara.Model {
  /**
   * @remarks
   * The unique identifier of the whiteboard application. To obtain the whiteboard application ID, refer to [CreateApp](https://help.aliyun.com/document_detail/204234.html).
   * 
   * @example
   * txt_check_pro_agent_01
   */
  appID?: string;
  /**
   * @remarks
   * The parameter set required by the moderation service, in JSON string format. The text content input parameter is content (String), the custom data ID is DataId (String), and the cache type is CacheType (String, valid value: ephemeral).
   * 
   * @example
   * {
   *     "content": "Text content to be moderated",
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

