// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddEditingProjectMaterialsResponseBodyLiveMaterials extends $dara.Model {
  /**
   * @remarks
   * The application name of the live stream.
   * 
   * @example
   * testrecord
   */
  appName?: string;
  /**
   * @remarks
   * The domain name of the live stream.
   * 
   * @example
   * test.alivecdn.com
   */
  domainName?: string;
  /**
   * @remarks
   * The URL of the live stream.
   * 
   * @example
   * rtmp://test.alivecdn.com/testrecord/teststream
   */
  liveUrl?: string;
  /**
   * @remarks
   * The name of the live stream.
   * 
   * @example
   * teststream
   */
  streamName?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      domainName: 'DomainName',
      liveUrl: 'LiveUrl',
      streamName: 'StreamName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      domainName: 'string',
      liveUrl: 'string',
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

