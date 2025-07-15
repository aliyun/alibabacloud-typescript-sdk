// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeMixStreamListResponseBodyMixStreamList extends $dara.Model {
  /**
   * @remarks
   * The name of the application.
   * 
   * @example
   * liveApp****
   */
  appName?: string;
  /**
   * @remarks
   * The main streaming domain.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * The time when the stream mixing task was created. The time follows the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time is displayed in UTC.
   * 
   * @example
   * 2020-09-17T08:39:14Z
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The time when the stream mixing task was modified. The time follows the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time is displayed in UTC.
   * 
   * @example
   * 2020-09-17T08:39:15Z
   */
  gmtModified?: string;
  /**
   * @remarks
   * The number of input streams.
   * 
   * @example
   * 2
   */
  inputStreamNumber?: number;
  /**
   * @remarks
   * The ID of the layout.
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
   * The ID of the stream mixing task. You can specify this parameter in a request to delete the steam mixing task.
   * 
   * @example
   * aaf9a50f-c460-3a9b-f180-38dd8f05****
   */
  mixstreamId?: string;
  /**
   * @remarks
   * The name of the output stream.
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
   * Details about the stream mixing tasks.
   */
  mixStreamList?: DescribeMixStreamListResponseBodyMixStreamList[];
  /**
   * @remarks
   * The ID of the request.
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

