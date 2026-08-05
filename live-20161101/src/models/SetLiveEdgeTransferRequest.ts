// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetLiveEdgeTransferRequest extends $dara.Model {
  /**
   * @remarks
   * The application name to which the live stream belongs. Regular expressions are supported for configuration with exceptions. For more information, see **AppName and StreamName Parameter Configuration Instructions** below. For example: liveApp****[1,2,3] indicates that the three apps liveApp****1, liveApp****2, and liveApp****3 are allowed for stream relay.
   * 
   * > - This parameter only takes effect for the TargetDomainList in the request parameters.
   * > - When configuring the `AppName` parameter value using regular expressions, the ^ or $ characters cannot be used, otherwise stream relay will fail.
   * 
   * @example
   * liveApp****
   */
  appName?: string;
  /**
   * @remarks
   * The ingest domain name. Live stream relay is configured at the granularity of the ingest DomainName. Each domain can have only one live stream relay configuration.
   * 
   * This parameter is required.
   * 
   * @example
   * demo.aliyundoc.com
   */
  domainName?: string;
  /**
   * @remarks
   * The HTTPDNS interface for obtaining the stream relay target address. The request must contain one of the `TargetDomainList` and `HttpDns` parameters, and the two are mutually exclusive.
   * 
   * > If `HttpDns` is set in the request parameters, the `TargetDomainList` parameter cannot be set, and the `AppName` and `StreamName` restrictions do not take effect.
   * 
   * Live stream relay has requirements for the message structure returned by the HTTPDNS interface. For more information, see **HTTPDNS Instructions** below.
   * 
   * @example
   * http://developer.aliyundoc.com
   */
  httpDns?: string;
  ownerId?: number;
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
   * The stream name. Regular expressions are supported for configuration with exceptions. For more information, see **AppName and StreamName Parameter Configuration Instructions** below. For example: liveStream****[1,2,3] indicates that the three streams liveStream****1, liveStream****2, and liveStream****3 are allowed for stream relay.
   * 
   * > - This parameter only takes effect for the TargetDomainList in the request parameters.
   * > - When configuring the `StreamName` parameter value using regular expressions, the ^ or $ characters cannot be used, otherwise stream relay will fail.
   * 
   * @example
   * liveStream****
   */
  streamName?: string;
  /**
   * @remarks
   * The list of target domains specified by the user for stream relay. Multiple domains are separated by commas (,). The request must contain one of the `TargetDomainList` and `HttpDns` parameters, and the two are mutually exclusive.
   * 
   * > - When `TargetDomainList` is set in the request parameters, the `AppName` and `StreamName` parameters take effect.
   * > - When `TargetDomainList` is set in the request parameters, the `HttpDns` parameter cannot be set.
   * 
   * @example
   * learn.aliyundoc.com,guide.aliyundoc.com
   */
  targetDomainList?: string;
  /**
   * @remarks
   * Specifies whether to pass through ingest parameters. Valid values:
   * - **yes**: Ingest parameters are passed through.
   * - **no** (default): Ingest parameters are not passed through.
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
      ownerId: 'OwnerId',
      regionId: 'RegionId',
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
      ownerId: 'number',
      regionId: 'string',
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

