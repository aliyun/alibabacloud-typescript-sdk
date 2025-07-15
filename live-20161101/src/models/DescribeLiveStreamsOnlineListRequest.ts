// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLiveStreamsOnlineListRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the application to which the live stream belongs. You can view the application name on the [Stream Management](https://help.aliyun.com/document_detail/197397.html) page of the ApsaraVideo Live console.
   * 
   * @example
   * liveApp****
   */
  appName?: string;
  /**
   * @remarks
   * The main streaming domain.
   * 
   * This parameter is required.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * Specifies whether to return only specific parameters. Valid values:
   * 
   * *   **yes**: returns only the DomainName, AppName, StreamName, and PublishTime parameters.
   * *   **no**: returns all parameters. This is the default value.
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
   * The mode in which stream names are matched. Valid values:
   * 
   * *   **fuzzy** (default): fuzzy match
   * *   **strict**: exact match
   * 
   * @example
   * fuzzy
   */
  queryType?: string;
  regionId?: string;
  /**
   * @remarks
   * The name of the live stream. You can specify only one live stream. You can view the stream name on the [Stream Management](https://help.aliyun.com/document_detail/197397.html) page of the ApsaraVideo Live console.
   * 
   * @example
   * liveStream****
   */
  streamName?: string;
  /**
   * @remarks
   * The type of the streams to query. Valid values:
   * 
   * *   **all** (default): all streams
   * *   **raw**: source streams
   * *   **trans**: transcoded streams
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

