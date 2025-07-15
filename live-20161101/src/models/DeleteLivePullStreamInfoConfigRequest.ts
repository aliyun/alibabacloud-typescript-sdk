// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteLivePullStreamInfoConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the application to which the live stream belongs. You can call [DescribeLivePullStreamConfig](https://help.aliyun.com/document_detail/2847818.htmll) operation to query the application name.
   * 
   * This parameter is required.
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
  ownerId?: number;
  regionId?: string;
  /**
   * @remarks
   * The name of the live stream. You can call [DescribeLivePullStreamConfig](https://help.aliyun.com/document_detail/2847818.htmll) operation to query the stream name.
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
      regionId: 'RegionId',
      streamName: 'StreamName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      domainName: 'string',
      ownerId: 'number',
      regionId: 'string',
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

