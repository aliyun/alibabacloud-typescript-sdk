// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetupDomainAutoRenewRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID of the domain name.
   * 
   * This parameter is required.
   * 
   * @example
   * S2019270W570xxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The operation type.
   * 
   * This parameter is required.
   * 
   * @example
   * SET
   */
  operation?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      operation: 'Operation',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      operation: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

