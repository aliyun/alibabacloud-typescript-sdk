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
   * The HTTPDNS API that is used to obtain the destination URLs.
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
   * The name of the ingested stream.
   * 
   * @example
   * liveStream****
   */
  streamName?: string;
  /**
   * @remarks
   * The destination domain names to which the ingested stream is relayed. Multiple domain names are separated by commas (,).
   * 
   * @example
   * learn.aliyundoc.com,guide.aliyundoc.com
   */
  targetDomainList?: string;
  /**
   * @remarks
   * Indicates whether stream ingest parameters are passed through. Valid values:
   * 
   * *   **yes**: Stream ingest parameters are passed through.
   * *   **no**: Stream ingest parameters are not passed through.
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

