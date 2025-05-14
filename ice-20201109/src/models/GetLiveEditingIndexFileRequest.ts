// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetLiveEditingIndexFileRequest extends $dara.Model {
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
   * The ID of the live stream editing project.
   * 
   * @example
   * *****cb6307a4edea614d8b3f3c*****
   */
  projectId?: string;
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
      projectId: 'ProjectId',
      streamName: 'StreamName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      domainName: 'string',
      projectId: 'string',
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

