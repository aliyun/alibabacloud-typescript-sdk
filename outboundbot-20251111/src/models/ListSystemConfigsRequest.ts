// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSystemConfigsRequest extends $dara.Model {
  /**
   * @remarks
   * The system configuration name.\\
   * callableTime: the outbound job window.\\
   * calleeDailyAttemptLimit: the maximum number of daily calls to a single callee number.
   * 
   * @example
   * callableTime
   */
  name?: string;
  /**
   * @remarks
   * The configuration type ID.\\
   * If ObjectType is set to INSTANCE, this parameter specifies the instance ID.\\
   * If ObjectType is set to TENANT, this parameter specifies the tenant ID.
   * 
   * @example
   * 4f9a8e2b-6c1d-4a7e-9b3f-2d5c8a1e7b04
   */
  objectId?: string;
  /**
   * @remarks
   * The configuration type.\\
   * INSTANCE: instance-level.\\
   * TENANT: tenant-level.
   * 
   * @example
   * INSTANCE
   */
  objectType?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      objectId: 'ObjectId',
      objectType: 'ObjectType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      objectId: 'string',
      objectType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

