// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLiveStreamsOnlineListRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the application to which the stream belongs. You can view the AppName on the [Stream Management](https://help.aliyun.com/document_detail/197397.html) page.
   * 
   * @example
   * liveApp****
   */
  appName?: string;
  /**
   * @remarks
   * The streaming domain of the streamer.
   * > - When you specify DomainName, make sure that the domain name is a live streaming domain name and that you have the permissions to manage the domain name.
   * 
   * This parameter is required.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * Specifies whether to return only specified fields. Valid values:  
   * 
   * - **yes**: Only the DomainName, AppName, StreamName, and PublishTime fields are returned.  
   * 
   * - **no** (default): All fields are returned.
   * 
   * @example
   * no
   */
  onlyStream?: string;
  ownerId?: number;
  /**
   * @remarks
   * The page number. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values: 1 to 3000. Default value: 2000.
   * 
   * @example
   * 1500
   */
  pageSize?: number;
  /**
   * @remarks
   * Specifies whether to use fuzzy match for the stream name. Valid values:
   * 
   * - **fuzzy** (default): fuzzy match.
   * 
   * - **strict**: exact match.
   * 
   * @example
   * fuzzy
   */
  queryType?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * The stream name. Only a single StreamName can be specified. You can view the StreamName on the [Stream Management](https://help.aliyun.com/document_detail/197397.html) page.
   * 
   * @example
   * liveStream****
   */
  streamName?: string;
  /**
   * @remarks
   * The stream type. Valid values:  
   * 
   * - **all** (default): all streams.
   *   
   * - **raw**: raw streams.
   *   
   * - **trans**: transcoded streams.
   * 
   * @example
   * all
   */
  streamType?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      domainName: 'DomainName',
      onlyStream: 'OnlyStream',
      ownerId: 'OwnerId',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      queryType: 'QueryType',
      regionId: 'RegionId',
      streamName: 'StreamName',
      streamType: 'StreamType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      domainName: 'string',
      onlyStream: 'string',
      ownerId: 'number',
      pageNum: 'number',
      pageSize: 'number',
      queryType: 'string',
      regionId: 'string',
      streamName: 'string',
      streamType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

