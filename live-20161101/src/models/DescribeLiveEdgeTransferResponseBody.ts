// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLiveEdgeTransferResponseBody extends $dara.Model {
  /**
   * @remarks
   * The name of the application to which the live stream belongs.
   * 
   * @example
   * liveApp****
   */
  appName?: string;
  /**
   * @remarks
   * The ingest domain.
   * 
   * @example
   * demo.aliyundoc.com
   */
  domainName?: string;
  /**
   * @remarks
   * The URL of the HTTPDNS service used to resolve the addresses of the target domains.
   * 
   * @example
   * http://developer.aliyundoc.com/****
   */
  httpDns?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 53FCB985-C67C-467B-B2B3-398430A21E14
   */
  requestId?: string;
  /**
   * @remarks
   * The name of the ingested live stream.
   * 
   * @example
   * liveStream****
   */
  streamName?: string;
  /**
   * @remarks
   * A comma-separated list of the target domains where the stream is forwarded.
   * 
   * @example
   * learn.aliyundoc.com,guide.aliyundoc.com
   */
  targetDomainList?: string;
  /**
   * @remarks
   * Indicates whether the query parameters from the original ingest URL are passed through to the target URL.
   * 
   * - **yes**: The parameters are passed through.
   * 
   * - **no**: The parameters are not passed through.
   * 
   * @example
   * yes
   */
  transferArgs?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      domainName: 'DomainName',
      httpDns: 'HttpDns',
      requestId: 'RequestId',
      streamName: 'StreamName',
      targetDomainList: 'TargetDomainList',
      transferArgs: 'TransferArgs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      domainName: 'string',
      httpDns: 'string',
      requestId: 'string',
      streamName: 'string',
      targetDomainList: 'string',
      transferArgs: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

