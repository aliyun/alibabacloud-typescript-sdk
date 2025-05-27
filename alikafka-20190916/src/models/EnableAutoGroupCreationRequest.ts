// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EnableAutoGroupCreationRequest extends $dara.Model {
  /**
   * @remarks
   * Specify whether to enable the flexible group creation feature. Valid values:
   * 
   * *   **true**: enables the flexible group creation feature.
   * *   **false**: disabled the flexible group creation feature.
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @remarks
   * The instance ID.
   * 
   * You can call the [GetInstanceList](https://help.aliyun.com/document_detail/437663.html) operation to query instances.
   * 
   * This parameter is required.
   * 
   * @example
   * alikafka_post-cn-mp919o4v****
   */
  instanceId?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      enable: 'Enable',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enable: 'boolean',
      instanceId: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

