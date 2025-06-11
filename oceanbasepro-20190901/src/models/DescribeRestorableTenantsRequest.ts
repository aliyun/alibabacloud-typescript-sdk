// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRestorableTenantsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the OceanBase cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * ob317v4uif****
   */
  instanceId?: string;
  /**
   * @remarks
   * Specifies whether the target cluster is online. **Note** This parameter is used for compatibility with earlier versions and can be left empty. When left empty, it specifies negation for the value of `isRemote`.
   * 
   * @example
   * true
   */
  isOnline?: boolean;
  /**
   * @remarks
   * This parameter is provided for compatibility with earlier versions and can be left empty.
   * 
   * @example
   * true
   */
  isRemote?: boolean;
  /**
   * @remarks
   * The backup method.
   * 
   * @example
   * native_logical
   */
  method?: string;
  /**
   * @remarks
   * The restore method. This parameter is required when `IsRemote` is set to `true`, and is optional otherwise.
   * 
   * @example
   * from_time_point
   */
  restoreMode?: string;
  /**
   * @remarks
   * The type of the restore object.
   * 
   * @example
   * tenant
   */
  restoreObjectType?: string;
  /**
   * @remarks
   * The ID of the backup set.
   * 
   * @example
   * bak-xxxxx
   */
  setId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      isOnline: 'IsOnline',
      isRemote: 'IsRemote',
      method: 'Method',
      restoreMode: 'RestoreMode',
      restoreObjectType: 'RestoreObjectType',
      setId: 'SetId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      isOnline: 'boolean',
      isRemote: 'boolean',
      method: 'string',
      restoreMode: 'string',
      restoreObjectType: 'string',
      setId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

