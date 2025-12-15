// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UninstallSoftwaresRequestAdditionalPackages extends $dara.Model {
  /**
   * @remarks
   * The software name.
   * 
   * @example
   * gromacs
   */
  name?: string;
  /**
   * @remarks
   * The software version.
   * 
   * @example
   * 2024.1
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      version: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UninstallSoftwaresRequest extends $dara.Model {
  /**
   * @remarks
   * The information about the software systems that you want to uninstall.
   */
  additionalPackages?: UninstallSoftwaresRequestAdditionalPackages[];
  /**
   * @remarks
   * The cluster ID.
   * 
   * You can call the [ListClusters](https://help.aliyun.com/document_detail/87116.html) operation to query the cluster ID.
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
      additionalPackages: { 'type': 'array', 'itemType': UninstallSoftwaresRequestAdditionalPackages },
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

