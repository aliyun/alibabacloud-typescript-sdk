// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLiveLazyPullStreamConfigResponseBodyLiveLazyPullConfigListLiveLazyPullConfig extends $dara.Model {
  appName?: string;
  domainName?: string;
  pullAppName?: string;
  pullArgs?: string;
  pullDomainName?: string;
  pullProtocol?: string;
  transcodeLazy?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      domainName: 'DomainName',
      pullAppName: 'PullAppName',
      pullArgs: 'PullArgs',
      pullDomainName: 'PullDomainName',
      pullProtocol: 'PullProtocol',
      transcodeLazy: 'TranscodeLazy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      domainName: 'string',
      pullAppName: 'string',
      pullArgs: 'string',
      pullDomainName: 'string',
      pullProtocol: 'string',
      transcodeLazy: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveLazyPullStreamConfigResponseBodyLiveLazyPullConfigList extends $dara.Model {
  liveLazyPullConfig?: DescribeLiveLazyPullStreamConfigResponseBodyLiveLazyPullConfigListLiveLazyPullConfig[];
  static names(): { [key: string]: string } {
    return {
      liveLazyPullConfig: 'LiveLazyPullConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      liveLazyPullConfig: { 'type': 'array', 'itemType': DescribeLiveLazyPullStreamConfigResponseBodyLiveLazyPullConfigListLiveLazyPullConfig },
    };
  }

  validate() {
    if(Array.isArray(this.liveLazyPullConfig)) {
      $dara.Model.validateArray(this.liveLazyPullConfig);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveLazyPullStreamConfigResponseBody extends $dara.Model {
  liveLazyPullConfigList?: DescribeLiveLazyPullStreamConfigResponseBodyLiveLazyPullConfigList;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * A3136B58-5876-4168-83CA-B562781981A0
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      liveLazyPullConfigList: 'LiveLazyPullConfigList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      liveLazyPullConfigList: DescribeLiveLazyPullStreamConfigResponseBodyLiveLazyPullConfigList,
      requestId: 'string',
    };
  }

  validate() {
    if(this.liveLazyPullConfigList && typeof (this.liveLazyPullConfigList as any).validate === 'function') {
      (this.liveLazyPullConfigList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

