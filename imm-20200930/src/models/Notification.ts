// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { MNS } from "./Mns";
import { RocketMQ } from "./RocketMq";


export class Notification extends $dara.Model {
  /**
   * @remarks
   * The Object Storage Service (OSS) URI of the object that stores task notifications. Task information is written to the object in the JSON format. In most cases, you can receive notifications only by using [EventBridge](https://help.aliyun.com/document_detail/161886.html), [Simple Message Queue](https://help.aliyun.com/document_detail/27412.html), or [ApsaraMQ for RocketMQ](https://help.aliyun.com/document_detail/29530.html). For tasks that have a large amount of task information, such as archive file inspection tasks and decompression tasks, you can use an OSS object to store detailed task information.
   * 
   * The OSS URI follows the oss://${Bucket}/${Object} format, where `${Bucket}` is the name of the bucket in the same region as the current project and `${Object}` is the path of the object with the extension included.
   * 
   * >  The object is not a messaging method. It serves only as a container for detailed task information. Task status information is sent as a message, whereas the object stores detailed task information.
   * 
   * @example
   * oss://test-bucket/test-object.json
   */
  extendedMessageURI?: string;
  /**
   * @remarks
   * The SMQ notification settings.
   */
  MNS?: MNS;
  /**
   * @remarks
   * The ApsaraMQ for RocketMQ notification settings.
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

