// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeMixStreamListResponseBodyMixStreamList extends $dara.Model {
  /**
   * @remarks
   * The app name.
   * 
   * @example
   * liveApp****
   */
  appName?: string;
  /**
   * @remarks
   * The streaming domain.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * The time when the stream mixing task was created. The time is in the *yyyy-MM-dd*T*HH:mm:ss*Z format and in UTC.
   * 
   * @example
   * 2020-09-17T08:39:14Z
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The time when the stream mixing task was last modified. The time is in the *yyyy-MM-dd*T*HH:mm:ss*Z format and in UTC.
   * 
   * @example
   * 2020-09-17T08:39:15Z
   */
  gmtModified?: string;
  /**
   * @remarks
   * The number of input sources.
   * 
   * @example
   * 2
   */
  inputStreamNumber?: number;
  /**
   * @remarks
   * The layout ID.
   * 
   * @example
   * USERDEFINED
   */
  layoutId?: string;
  /**
   * @remarks
   * The stream mixing template.
   * 
   * @example
   * lp_ld
   */
  mixStreamTemplate?: string;
  /**
   * @remarks
   * The ID of the stream mixing task. You can use this ID to delete the task.
   * 
   * @example
   * aaf9a50f-c460-3a9b-f180-38dd8f05****
   */
  mixstreamId?: string;
  /**
   * @remarks
   * The stream name of the stream mixing task.
   * 
   * @example
   * liveStream****
   */
  streamName?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      domainName: 'DomainName',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      inputStreamNumber: 'InputStreamNumber',
      layoutId: 'LayoutId',
      mixStreamTemplate: 'MixStreamTemplate',
      mixstreamId: 'MixstreamId',
      streamName: 'StreamName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      domainName: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      inputStreamNumber: 'number',
      layoutId: 'string',
      mixStreamTemplate: 'string',
      mixstreamId: 'string',
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

export class DescribeMixStreamListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of stream mixing tasks.
   */
  mixStreamList?: DescribeMixStreamListResponseBodyMixStreamList[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * BC1E78D3-FA8B-4457-DEE2-6093E1232254
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of tasks.
   * 
   * @example
   * 1
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      mixStreamList: 'MixStreamList',
      requestId: 'RequestId',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mixStreamList: { 'type': 'array', 'itemType': DescribeMixStreamListResponseBodyMixStreamList },
      requestId: 'string',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.mixStreamList)) {
      $dara.Model.validateArray(this.mixStreamList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

