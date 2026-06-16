// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GenerateUploadAuthRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * idaas_111ccc11xxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The purpose of the file.
   * 
   * @example
   * user_import
   */
  purpose?: string;
  /**
   * @remarks
   * The file type.
   * 
   * @example
   * image
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      purpose: 'Purpose',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      purpose: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

