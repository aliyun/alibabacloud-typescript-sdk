// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListSoftwaresResponseBodyAdditionalPackagesAdditionalPackageInfosVersionsVersionInfosSupportOs } from "./ListSoftwaresResponseBodyAdditionalPackagesAdditionalPackageInfosVersionsVersionInfosSupportOs";


export class ListSoftwaresResponseBodyAdditionalPackagesAdditionalPackageInfosVersionsVersionInfos extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the version is the latest.
   * 
   * @example
   * false
   */
  latest?: string;
  /**
   * @remarks
   * The information about the supported OSs.
   */
  supportOs?: ListSoftwaresResponseBodyAdditionalPackagesAdditionalPackageInfosVersionsVersionInfosSupportOs;
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
      latest: 'Latest',
      supportOs: 'SupportOs',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      latest: 'string',
      supportOs: ListSoftwaresResponseBodyAdditionalPackagesAdditionalPackageInfosVersionsVersionInfosSupportOs,
      version: 'string',
    };
  }

  validate() {
    if(this.supportOs && typeof (this.supportOs as any).validate === 'function') {
      (this.supportOs as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

