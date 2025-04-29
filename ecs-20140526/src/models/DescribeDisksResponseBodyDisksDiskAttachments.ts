// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDisksResponseBodyDisksDiskAttachmentsAttachment } from "./DescribeDisksResponseBodyDisksDiskAttachmentsAttachment";


export class DescribeDisksResponseBodyDisksDiskAttachments extends $dara.Model {
  attachment?: DescribeDisksResponseBodyDisksDiskAttachmentsAttachment[];
  static names(): { [key: string]: string } {
    return {
      attachment: 'Attachment',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attachment: { 'type': 'array', 'itemType': DescribeDisksResponseBodyDisksDiskAttachmentsAttachment },
    };
  }

  validate() {
    if(Array.isArray(this.attachment)) {
      $dara.Model.validateArray(this.attachment);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

