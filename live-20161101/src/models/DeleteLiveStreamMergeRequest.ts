// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteLiveStreamMergeRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the application that generates the output stream. You can view the application name on the [Primary/Secondary Stream Mixing](https://help.aliyun.com/document_detail/606583.html) page of the ApsaraVideo Live console.
   * 
   * This parameter is required.
   * 
   * @example
   * app
   */
  appName?: string;
  /**
   * @remarks
   * The streaming domain.
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
   * The name of the output stream. You can view the stream name on the [Primary/Secondary Stream Mixing](https://help.aliyun.com/document_detail/606583.html) page of the ApsaraVideo Live console.
   * 
   * This parameter is required.
   * 
   * @example
   * StreamName
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

