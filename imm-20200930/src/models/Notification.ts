// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { MNS } from "./Mns";
import { RocketMQ } from "./RocketMq";


export class Notification extends $dara.Model {
  /**
   * @remarks
   * Use an Object Storage Service (OSS) file to receive task notifications. If you provide the URI of this file, detailed task execution information is written to the file in a JSON structure. Normally, you receive notifications through [EventBridge](https://help.aliyun.com/document_detail/161886.html), [MNS](https://help.aliyun.com/document_detail/27412.html), or [RocketMQ](https://help.aliyun.com/document_detail/29530.html). However, some tasks generate large amounts of information, such as archive previews or decompression tasks. For these tasks, provide this file to get the complete execution results.
   * 
   * The OSS URI format is oss\\://${Bucket}/${Object}. `${Bucket}` is the name of an OSS bucket in the same region as the current project. `${Object}` is the full path of the file, including the file name extension.
   * 
   * >Notice: 
   * 
   * This file is not a notification method. It only serves as a medium to receive detailed task execution information. Task status is sent through standard message notifications. This file contains only the detailed execution information.
   * 
   * @example
   * oss://test-bucket/test-object.json
   */
  extendedMessageURI?: string;
  /**
   * @remarks
   * The MNS notification parameter object.
   */
  MNS?: MNS;
  /**
   * @remarks
   * The RocketMQ notification parameter object.
   */
  rocketMQ?: RocketMQ;
  static names(): { [key: string]: string } {
    return {
      extendedMessageURI: 'ExtendedMessageURI',
      MNS: 'MNS',
      rocketMQ: 'RocketMQ',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extendedMessageURI: 'string',
      MNS: MNS,
      rocketMQ: RocketMQ,
    };
  }

  validate() {
    if(this.MNS && typeof (this.MNS as any).validate === 'function') {
      (this.MNS as any).validate();
    }
    if(this.rocketMQ && typeof (this.rocketMQ as any).validate === 'function') {
      (this.rocketMQ as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

