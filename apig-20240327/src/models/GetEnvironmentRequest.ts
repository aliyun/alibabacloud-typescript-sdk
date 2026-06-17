// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetEnvironmentRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to return online resource information.
   * 
   * @example
   * true
   */
  withStatistics?: boolean;
  /**
   * @remarks
   * Specifies whether to include VPC information.
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

