// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateJenkinsImageRegistryNameRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the image repository.
   * 
   * > You can call the [PageImageRegistry](~~PageImageRegistry~~) operation to query the IDs of image repositories.
   * 
   * @example
   * 25090
   */
  registryId?: number;
  /**
   * @remarks
   * The name of the image repository.
   * 
   * @example
   * a0603tk1
   */
  registryName?: string;
  /**
   * @remarks
   * The source IP address of the request.
   * 
   * @example
   * 121.33.XXX.XXX
   */
  sourceIp?: string;
  static names(): { [key: string]: string } {
    return {
      registryId: 'RegistryId',
      registryName: 'RegistryName',
      sourceIp: 'SourceIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      registryId: 'number',
      registryName: 'string',
      sourceIp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

