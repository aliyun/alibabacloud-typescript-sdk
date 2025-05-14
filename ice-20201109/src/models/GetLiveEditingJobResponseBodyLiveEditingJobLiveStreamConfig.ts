// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetLiveEditingJobResponseBodyLiveEditingJobLiveStreamConfig extends $dara.Model {
  /**
   * @remarks
   * The name of the application to which the live stream belongs.
   * 
   * @example
   * app
   */
  appName?: string;
  /**
   * @remarks
   * The domain name of the live stream.
   * 
   * @example
   * domain.com
   */
  domainName?: string;
  /**
   * @remarks
   * The name of the live stream.
   * 
   * @example
   * streamName
   */
  streamName?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      domainName: 'DomainName',
      streamName: 'StreamName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      domainName: 'string',
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

