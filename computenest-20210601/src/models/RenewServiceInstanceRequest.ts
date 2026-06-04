// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RenewServiceInstanceRequest extends $dara.Model {
  /**
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @example
   * si-70a3b15bb626435b****
   */
  serviceInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      dryRun: 'DryRun',
      serviceInstanceId: 'ServiceInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dryRun: 'boolean',
      serviceInstanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

