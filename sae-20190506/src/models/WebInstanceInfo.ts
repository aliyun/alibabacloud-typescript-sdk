// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class WebInstanceInfo extends $dara.Model {
  /**
   * @remarks
   * The instance image.
   * 
   * @example
   * registry.cn-hangzhou.aliyuncs.com/sae_test/******:0.0.1
   */
  imageUrl?: string;
  /**
   * @remarks
   * The ID of the application instance.
   * 
   * @example
   * c-66691780-1522405d-3021e1******
   */
  instanceId?: string;
  /**
   * @remarks
   * The instance status.
   * 
   * @example
   * Idle
   */
  status?: string;
  /**
   * @remarks
   * The ID of the application version.
   * 
   * @example
   * 1
   */
  versionId?: string;
  static names(): { [key: string]: string } {
    return {
      imageUrl: 'ImageUrl',
      instanceId: 'InstanceId',
      status: 'Status',
      versionId: 'VersionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageUrl: 'string',
      instanceId: 'string',
      status: 'string',
      versionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

