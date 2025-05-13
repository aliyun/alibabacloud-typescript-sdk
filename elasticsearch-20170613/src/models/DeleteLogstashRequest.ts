// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteLogstashRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * 5A2CFF0E-5718-45B5-9D4D-70B3FF****
   */
  clientToken?: string;
  /**
   * @remarks
   * The type of the release operation. Valid values:
   * 
   * *   immediate: The cluster is immediately deleted when it is released. After the cluster is deleted, the data stored in the cluster is deleted, and the system removes the cluster from the Logstash cluster list.
   * *   protective: The cluster is released 24 hours later. During the period of 24 hours, you can still find the cluster in the Logstash cluster list, and [restore the cluster](https://help.aliyun.com/document_detail/202205.html) or [immediately release the cluster](https://help.aliyun.com/document_detail/160591.html). After 24 hours elapse, the data stored in the cluster is deleted.
   * 
   * @example
   * protective
   */
  deleteType?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'clientToken',
      deleteType: 'deleteType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      deleteType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

