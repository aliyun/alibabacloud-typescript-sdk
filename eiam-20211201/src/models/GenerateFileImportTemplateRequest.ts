// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GenerateFileImportTemplateRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether field selection mode is enabled.
   */
  fieldSelectionEnabled?: boolean;
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
   * The selected fields.
   */
  selectedFieldNames?: string[];
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
      fieldSelectionEnabled: 'FieldSelectionEnabled',
      instanceId: 'InstanceId',
      selectedFieldNames: 'SelectedFieldNames',
      targetType: 'TargetType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fieldSelectionEnabled: 'boolean',
      instanceId: 'string',
      selectedFieldNames: { 'type': 'array', 'itemType': 'string' },
      targetType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.selectedFieldNames)) {
      $dara.Model.validateArray(this.selectedFieldNames);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

