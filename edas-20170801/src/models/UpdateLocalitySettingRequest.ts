// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateLocalitySettingRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * bfa00cfb-9642-4292-bb78-1d7d4c86004c
   */
  appId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * false
   */
  enabled?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  namespaceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
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

