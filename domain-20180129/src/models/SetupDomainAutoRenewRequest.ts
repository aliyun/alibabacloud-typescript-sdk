// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetupDomainAutoRenewRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * S2019270W570xxxx
   */
  instanceId?: string;
  /**
   * @remarks
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

