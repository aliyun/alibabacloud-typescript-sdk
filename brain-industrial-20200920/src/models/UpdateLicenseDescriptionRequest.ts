// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateLicenseDescriptionRequest extends $dara.Model {
  description?: string;
  /**
   * @example
   * brainindustrial_aicsruntime_public_cn-mdu3ps3kw04
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

