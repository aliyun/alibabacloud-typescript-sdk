// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLiveStreamRecordIndexFileRequest extends $dara.Model {
  /**
   * @remarks
   * System-defined parameter. Value: **DescribeLiveStreamRecordIndexFile**.
   * 
   * This parameter is required.
   * 
   * @example
   * liveApp****
   */
  appName?: string;
  /**
   * @remarks
   * ## [](#)Usage notes
   * 
   * ApsaraVideo Live stores the configuration information of an M3U8 index file for six months. You can query only index files created in the previous six months. M3U8 index files are stored in Object Storage Service (OSS) buckets. The retention period is determined by the storage configuration of the OSS buckets.
   * 
   * ## [](#qps-)QPS limit
   * 
   * You can call this operation up to 100 times per second per account. Requests that exceed this limit are dropped and you may experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limits](https://help.aliyun.com/document_detail/343507.html).
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
   * The ID of the index file.
   * 
   * >  You can call the [DescribeLiveStreamRecordIndexFiles](https://help.aliyun.com/document_detail/2847890.html) operation to query the ID.
   * 
   * This parameter is required.
   * 
   * @example
   * c4d7f0a4-b506-43f9-8de3-07732c3f****
   */
  recordId?: string;
  securityToken?: string;
  /**
   * @remarks
   * The main domain of the live stream.
   * 
   * This parameter is required.
   * 
   * @example
   * liveStream****
   */
  streamName?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      domainName: 'DomainName',
      ownerId: 'OwnerId',
      recordId: 'RecordId',
      securityToken: 'SecurityToken',
      streamName: 'StreamName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      domainName: 'string',
      ownerId: 'number',
      recordId: 'string',
      securityToken: 'string',
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

