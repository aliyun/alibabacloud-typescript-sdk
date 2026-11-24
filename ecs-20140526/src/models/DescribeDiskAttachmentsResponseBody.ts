// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDiskAttachmentsResponseBodyDiskAttachments extends $dara.Model {
  /**
   * @remarks
   * The time when the disk was successfully attached, in ISO 8601 format (UTC).
   * 
   * @example
   * 2026-10-12T06:08:54Z
   */
  attachedTime?: string;
  /**
   * @remarks
   * The device name on the instance.
   * 
   * @example
   * /dev/xvdb
   */
  device?: string;
  /**
   * @remarks
   * The disk ID.
   * 
   * @example
   * d-bp131n0q38u3a4zi****
   */
  diskId?: string;
  /**
   * @remarks
   * The ID of the instance to which the disk is attached.
   * 
   * @example
   * i-bp18pnlg1ds9rky4****
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      attachedTime: 'AttachedTime',
      device: 'Device',
      diskId: 'DiskId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attachedTime: 'string',
      device: 'string',
      diskId: 'string',
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDiskAttachmentsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of disk attachments.
   */
  diskAttachments?: DescribeDiskAttachmentsResponseBodyDiskAttachments[];
  /**
   * @remarks
   * The maximum number of attachments returned in a single request.
   * 
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token for the next page. An empty value indicates that all attachments have been returned.
   * 
   * @example
   * AAAAAdDWBF2****
   */
  nextToken?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      diskAttachments: 'DiskAttachments',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      diskAttachments: { 'type': 'array', 'itemType': DescribeDiskAttachmentsResponseBodyDiskAttachments },
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.diskAttachments)) {
      $dara.Model.validateArray(this.diskAttachments);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

