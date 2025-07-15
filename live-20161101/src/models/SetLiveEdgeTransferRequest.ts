// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetLiveEdgeTransferRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the application to which the live stream belongs. Regular expressions are supported, with a few limits. For more information, see the **Description about the AppName and StreamName parameters** section. For example, a value of **liveApp\\*\\*\\*\\*[1,2,3]** specifies that stream relay is configured for three applications: liveApp\\*\\*\\*\\*1, liveApp\\*\\*\\*\\*2, and liveApp\\*\\*\\*\\*3.****
   * 
   * > 
   * 
   * *   This parameter takes effect for only destination domain names that are specified by the TargetDomainList parameter.
   * 
   * *   You cannot use a caret (^) or a dollar sign ($) in a regular expression to configure the `AppName` parameter. Otherwise, stream relay fails.
   * 
   * @example
   * liveApp****
   */
  appName?: string;
  /**
   * @remarks
   * The ingest domain. Stream relay is configured based on the ingest domain. Only one stream relay configuration can be set for an ingest domain.
   * 
   * This parameter is required.
   * 
   * @example
   * demo.aliyundoc.com
   */
  domainName?: string;
  /**
   * @remarks
   * The HTTPDNS API that is used to obtain the destination URLs. The request must contain the `TargetDomainList` parameter or the `HttpDns` parameter. The two parameters are mutually exclusive.
   * 
   * >  If the `HttpDns` parameter is configured, you cannot configure the `TargetDomainList` parameter, and the `AppName` and `StreamName` parameters do not take effect.
   * 
   * For information about the requirements on the structure of messages that are returned by the HTTPDNS API, see the **Description about the HTTPDNS API** section.
   * 
   * @example
   * http://developer.aliyundoc.com
   */
  httpDns?: string;
  ownerId?: number;
  regionId?: string;
  /**
   * @remarks
   * The name of the ingested stream. Regular expressions are supported, with a few limits. For more information, see the **Description about the AppName and StreamName parameters** section. For example, a value of **liveStream\\*\\*\\*\\*[1,2,3]** specifies that stream relay is configured for three streams: liveStream\\*\\*\\*\\*1, liveStream\\*\\*\\*\\*2, and liveStream\\*\\*\\*\\*3.****
   * 
   * > 
   * 
   * *   This parameter takes effect for only destination domain names that are specified by the TargetDomainList parameter.
   * 
   * *   You cannot use a caret (^) or a dollar sign ($) in a regular expression to configure the `StreamName` parameter. Otherwise, stream relay fails.
   * 
   * @example
   * liveStream****
   */
  streamName?: string;
  /**
   * @remarks
   * The destination domain names to which you want to relay the ingested stream. Separate multiple domain names with commas (,). The request must contain the `TargetDomainList` parameter or the `HttpDns` parameter. The two parameters are mutually exclusive.
   * 
   * > 
   * 
   * *   The `AppName` and `StreamName` parameters take effect only when the `TargetDomainList` parameter is configured.
   * 
   * *   If the `TargetDomainList` parameter is configured, you cannot configure the `HttpDns` parameter.
   * 
   * @example
   * learn.aliyundoc.com,guide.aliyundoc.com
   */
  targetDomainList?: string;
  /**
   * @remarks
   * Specifies whether to pass through stream ingest parameters. Valid values:
   * 
   * *   **yes**: passes through stream ingest parameters.
   * *   **no**: does not pass through stream ingest parameters.
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

