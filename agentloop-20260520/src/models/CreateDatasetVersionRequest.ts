// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDatasetVersionRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the version. This parameter is optional. If this parameter is not specified, an empty string is used.
   * 
   * @example
   * Dataset version used for the first evaluation
   */
  description?: string;
  /**
   * @remarks
   * The name of the version to be created, which is used to identify the version within the current dataset. The name cannot be empty after leading and trailing whitespaces are removed. The length of the UTF-8 encoded name cannot exceed 128 bytes, and the name cannot contain forward slashes (/).
   * 
   * This parameter is required.
   * 
   * @example
   * v1
   */
  version?: string;
  /**
   * @remarks
   * The optional client token that is generated and passed by the client. Do not use this token to determine whether the version is created. You can call ListDatasetVersions to query the version.
   * 
   * @example
   * a1b2c3d4-1234-5678-90ab-cdef12345678
   */
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      version: 'version',
      clientToken: 'clientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      version: 'string',
      clientToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

