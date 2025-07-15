// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLiveDelayConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the application to which the live stream belongs. You can specify an asterisk (\\*) as the value to match all applications under the domain name.
   * 
   * This parameter is required.
   * 
   * @example
   * liveApp****
   */
  app?: string;
  /**
   * @remarks
   * The main streaming domain.
   * 
   * This parameter is required.
   * 
   * @example
   * example.com
   */
  domain?: string;
  ownerId?: number;
  regionId?: string;
  /**
   * @remarks
   * The name of the live stream. You can specify an asterisk (\\*) as the value to match all streams in the application.
   * 
   * This parameter is required.
   * 
   * @example
   * liveStream****
   */
  stream?: string;
  static names(): { [key: string]: string } {
    return {
      app: 'App',
      domain: 'Domain',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      stream: 'Stream',
    };
  }

  static types(): { [key: string]: any } {
    return {
      app: 'string',
      domain: 'string',
      ownerId: 'number',
      regionId: 'string',
      stream: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

