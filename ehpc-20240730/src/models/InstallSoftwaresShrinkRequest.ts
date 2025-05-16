// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InstallSoftwaresShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The information about the software systems that you want to install.
   */
  additionalPackagesShrink?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * ehpc-hz-FYUr32****
   */
  clusterId?: string;
  static names(): { [key: string]: string } {
    return {
      additionalPackagesShrink: 'AdditionalPackages',
      clusterId: 'ClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      additionalPackagesShrink: 'string',
      clusterId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

