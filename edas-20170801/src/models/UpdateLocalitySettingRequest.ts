// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateLocalitySettingRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the application. You can call the [ListApplication](https://help.aliyun.com/document_detail/149390.html) operation to obtain this ID.
   * 
   * This parameter is required.
   * 
   * @example
   * bfa00cfb-9642-4292-bb78-1d7d4c86004c
   */
  appId?: string;
  /**
   * @remarks
   * Specifies whether the setting is active:
   * 
   * - true: The setting is active.
   * 
   * - false: The setting is not active.
   * 
   * This parameter is required.
   * 
   * @example
   * false
   */
  enabled?: boolean;
  /**
   * @remarks
   * The ID of the namespace. This ID cannot be changed after the namespace is created. The format is [unk]physical space identifier[unk].
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  namespaceId?: string;
  /**
   * @remarks
   * The ID of the region where the elastic compute unit (ECU) is located.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @remarks
   * The total number of items that satisfy the threshold expression.
   * 
   * @example
   * 15
   */
  threshold?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      enabled: 'Enabled',
      namespaceId: 'NamespaceId',
      region: 'Region',
      threshold: 'Threshold',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      enabled: 'boolean',
      namespaceId: 'string',
      region: 'string',
      threshold: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

