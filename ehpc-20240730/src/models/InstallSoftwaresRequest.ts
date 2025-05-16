// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { InstallSoftwaresRequestAdditionalPackages } from "./InstallSoftwaresRequestAdditionalPackages";


export class InstallSoftwaresRequest extends $dara.Model {
  /**
   * @remarks
   * The information about the software systems that you want to install.
   */
  additionalPackages?: InstallSoftwaresRequestAdditionalPackages[];
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
      additionalPackages: 'AdditionalPackages',
      clusterId: 'ClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      additionalPackages: { 'type': 'array', 'itemType': InstallSoftwaresRequestAdditionalPackages },
      clusterId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.additionalPackages)) {
      $dara.Model.validateArray(this.additionalPackages);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

