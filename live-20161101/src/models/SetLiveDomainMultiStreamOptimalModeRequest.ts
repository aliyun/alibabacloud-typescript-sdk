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
   * The main streaming domain.
   * 
   * This parameter is required.
   * 
   * @example
   * example.com
   */
  domain?: string;
  /**
   * @remarks
   * Specifies whether to enable the auto mode of dual-stream disaster recovery. Valid values:
   * 
   * *   **on**: enables the auto mode.
   * *   **off**: disables the auto mode.
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
   * The name of the live stream.
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

