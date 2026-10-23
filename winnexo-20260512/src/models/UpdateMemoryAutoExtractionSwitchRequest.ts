// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateMemoryAutoExtractionSwitchRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to synchronously clear the automatically collected memories. This parameter can be used regardless of whether the feature is enabled or disabled.
   * 
   * @example
   * true
   */
  clearExisting?: boolean;
  /**
   * @remarks
   * Specifies whether to enable automatic memory collection.
   * 
   * This parameter is required.
   * 
   * @example
   * false
   */
  enabled?: boolean;
  /**
   * @remarks
   * The collaborative workspace ID. This parameter is required when ownerType is set to group.
   * 
   * @example
   * cg_12345
   */
  groupId?: string;
  /**
   * @remarks
   * The owner type. A value of user indicates personal memories of the authenticated user. A value of group indicates memories of a specified collaborative workspace.
   * 
   * @example
   * group
   */
  ownerType?: string;
  /**
   * @remarks
   * The tenant ID. This is a common parameter. If not specified, the default tenant of the caller is used.
   * 
   * @example
   * 10001
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      clearExisting: 'clearExisting',
      enabled: 'enabled',
      groupId: 'groupId',
      ownerType: 'ownerType',
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clearExisting: 'boolean',
      enabled: 'boolean',
      groupId: 'string',
      ownerType: 'string',
      tenantId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

