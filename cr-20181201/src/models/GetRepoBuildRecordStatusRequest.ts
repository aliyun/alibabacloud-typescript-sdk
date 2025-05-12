// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetRepoBuildRecordStatusRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the image building record.
   * 
   * This parameter is required.
   * 
   * @example
   * a78ec6fb-16ea-4649-93b7-f52afba7d****
   */
  buildRecordId?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cri-kmsiwlxxdcva****
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the image repository.
   * 
   * This parameter is required.
   * 
   * @example
   * crr-jnzm47ihjmgc****
   */
  repoId?: string;
  static names(): { [key: string]: string } {
    return {
      buildRecordId: 'BuildRecordId',
      instanceId: 'InstanceId',
      repoId: 'RepoId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      buildRecordId: 'string',
      instanceId: 'string',
      repoId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

