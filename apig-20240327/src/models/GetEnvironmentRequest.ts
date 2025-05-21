// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetEnvironmentRequest extends $dara.Model {
  /**
   * @remarks
   * Indicates whether to return online resource info.
   * 
   * @example
   * true
   */
  withStatistics?: boolean;
  /**
   * @remarks
   * Option for vpc info.
   * 
   * @example
   * true
   */
  withVpcInfo?: boolean;
  static names(): { [key: string]: string } {
    return {
      withStatistics: 'withStatistics',
      withVpcInfo: 'withVpcInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      withStatistics: 'boolean',
      withVpcInfo: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

