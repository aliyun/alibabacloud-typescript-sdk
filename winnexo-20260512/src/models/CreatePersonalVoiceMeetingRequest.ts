// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePersonalVoiceMeetingRequest extends $dara.Model {
  /**
   * @remarks
   * The pipeline description.
   * 
   * @example
   * update-JNQ9csEc6ArPPSXANH7O
   */
  description?: string;
  /**
   * @remarks
   * The directory ID.
   * 
   * @example
   * exampleDirectoryId
   */
  directoryId?: string;
  /**
   * @remarks
   * The Yida attachment URL.
   * 
   * This parameter is required.
   * 
   * @example
   * https://emas-devops-cdn.aliyuncs.com/job/PJ859733644657824768/apk/release/com.czmp.vitanexusoff_release_v331.178.14-signed.apk
   */
  fileUrl?: string;
  /**
   * @remarks
   * The image name.
   * 
   * This parameter is required.
   * 
   * @example
   * p-toolset-2a1461ff-59c1-4baa-9e19-966ec7c00004
   */
  name?: string;
  /**
   * @remarks
   * The name of the digital employee (operating object name, optional).
   * 
   * @example
   * string_value
   */
  operatingObjectName?: string;
  /**
   * @remarks
   * The tenant ID.
   * 
   * @example
   * 474379246158592
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      directoryId: 'directoryId',
      fileUrl: 'fileUrl',
      name: 'name',
      operatingObjectName: 'operatingObjectName',
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      directoryId: 'string',
      fileUrl: 'string',
      name: 'string',
      operatingObjectName: 'string',
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

