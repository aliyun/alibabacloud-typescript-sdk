// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInstancePatchesResponseBodyPatches extends $dara.Model {
  /**
   * @remarks
   * The classification of the patch.
   * 
   * @example
   * “”
   */
  classification?: string;
  /**
   * @remarks
   * The time when the patch was installed.
   * 
   * @example
   * 2021-01-28T07:07:20Z
   */
  installedTime?: string;
  /**
   * @remarks
   * The Id of KBId.
   * 
   * @example
   * apt-utils.amd64
   */
  KBId?: string;
  /**
   * @remarks
   * The level of the severity.
   * 
   * @example
   * important
   */
  severity?: string;
  /**
   * @remarks
   * The status of the installation.
   * 
   * @example
   * Installed
   */
  status?: string;
  /**
   * @remarks
   * The name of the patch.
   * 
   * @example
   * isc-dhcp-common.amd64:4.3.5-3ubuntu7.3
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      classification: 'Classification',
      installedTime: 'InstalledTime',
      KBId: 'KBId',
      severity: 'Severity',
      status: 'Status',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      classification: 'string',
      installedTime: 'string',
      KBId: 'string',
      severity: 'string',
      status: 'string',
      title: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

