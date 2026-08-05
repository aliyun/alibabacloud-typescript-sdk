// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetLiveDomainMultiStreamOptimalModeRequest extends $dara.Model {
  /**
   * @remarks
   * The application name.
   * 
   * This parameter is required.
   * 
   * @example
   * testapp
   */
  appName?: string;
  /**
   * @remarks
   * The primary streaming domain.
   * 
   * This parameter is required.
   * 
   * @example
   * example.com
   */
  domain?: string;
  /**
   * @remarks
   * The automatic mode switch. Valid values:
   * - **on**: enabled
   * - **off**: disabled.
   * 
   * This parameter is required.
   * 
   * @example
   * on
   */
  optimalMode?: string;
  ownerId?: number;
  /**
   * @remarks
   * The live stream name.
   * 
   * This parameter is required.
   * 
   * @example
   * teststream
   */
  streamName?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      domain: 'Domain',
      optimalMode: 'OptimalMode',
      ownerId: 'OwnerId',
      streamName: 'StreamName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      domain: 'string',
      optimalMode: 'string',
      ownerId: 'number',
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

