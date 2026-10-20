// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCveHotfixRequest extends $dara.Model {
  /**
   * @remarks
   * The list of CVE IDs.
   * 
   * This parameter is required.
   */
  cveIds?: string[];
  /**
   * @remarks
   * The list of full kernel versions.
   */
  kernelVersions?: string[];
  static names(): { [key: string]: string } {
    return {
      cveIds: 'cveIds',
      kernelVersions: 'kernelVersions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cveIds: { 'type': 'array', 'itemType': 'string' },
      kernelVersions: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.cveIds)) {
      $dara.Model.validateArray(this.cveIds);
    }
    if(Array.isArray(this.kernelVersions)) {
      $dara.Model.validateArray(this.kernelVersions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

