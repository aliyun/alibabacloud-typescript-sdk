// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GenerateUploadAuthRequest extends $dara.Model {
  /**
   * @remarks
   * IDaaS EIAM的实例id
   * 
   * This parameter is required.
   * 
   * @example
   * idaas_111ccc11xxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * 文件用途
   * 
   * @example
   * user_import
   */
  purpose?: string;
  /**
   * @remarks
   * 文件类型，目前只支持image,最大1M
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

