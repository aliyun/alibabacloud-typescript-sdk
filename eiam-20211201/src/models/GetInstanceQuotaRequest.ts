// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetInstanceQuotaRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The quota type.
   * 
   * This parameter is required.
   * 
   * @example
   * userMaxNumber
   */
  quotaKey?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      quotaKey: 'QuotaKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      quotaKey: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

