// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetResourceByVersionRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * udf_sleep.jar
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1030111021
   */
  projectId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  versionId?: number;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      opTenantId: 'OpTenantId',
      projectId: 'ProjectId',
      versionId: 'VersionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      opTenantId: 'number',
      projectId: 'number',
      versionId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

