// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLiveStreamMergeRequest extends $dara.Model {
  /**
   * @remarks
   * Merged output App name. You can view this on the [Primary/Backup Stream Merge Configuration](https://help.aliyun.com/document_detail/606583.html) page.
   * 
   * @example
   * app
   */
  appName?: string;
  /**
   * @remarks
   * Streaming domain name.
   * 
   * This parameter is required.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  ownerId?: number;
  /**
   * @remarks
   * Streaming protocol. Valid values:
   * 
   * - **rtmp** (default)
   * 
   * - **rtc**
   * 
   * @example
   * rtmp
   */
  protocol?: string;
  /**
   * @remarks
   * Region ID.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * Merged output Stream name. You can view this on the [Primary/Backup Stream Merge Configuration](https://help.aliyun.com/document_detail/606583.html) page.
   * 
   * @example
   * StreamName
   */
  streamName?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      domainName: 'DomainName',
      ownerId: 'OwnerId',
      protocol: 'Protocol',
      regionId: 'RegionId',
      streamName: 'StreamName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      domainName: 'string',
      ownerId: 'number',
      protocol: 'string',
      regionId: 'string',
      streamName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

