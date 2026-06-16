// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GenerateFileImportTemplateRequest extends $dara.Model {
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
   * The synchronization target type.
   * 
   * This parameter is required.
   * 
   * @example
   * eiam_v2_user_import,
   * application, identity_provider
   */
  targetType?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      targetType: 'TargetType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      targetType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

