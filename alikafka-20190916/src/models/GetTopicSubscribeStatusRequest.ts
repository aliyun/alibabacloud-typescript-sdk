// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTopicSubscribeStatusRequest extends $dara.Model {
  /**
   * @remarks
   * Instance ID.
   * 
   * You can call [GetInstanceList](https://help.aliyun.com/document_detail/437663.html) to obtain it.
   * 
   * This parameter is required.
   * 
   * @example
   * alikafka_pre-cn-v0h1cng0***
   */
  instanceId?: string;
  /**
   * @remarks
   * Region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * Topic name.
   * 
   * You can call [GetTopicList](https://help.aliyun.com/document_detail/437677.html) to obtain it.
   * 
   * This parameter is required.
   * 
   * @example
   * topic_name
   */
  topic?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      topic: 'Topic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      regionId: 'string',
      topic: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

