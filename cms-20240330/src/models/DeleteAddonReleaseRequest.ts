// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteAddonReleaseRequest extends $dara.Model {
  /**
   * @example
   * cs-gpu
   */
  addonName?: string;
  /**
   * @example
   * false
   */
  force?: boolean;
  /**
   * @example
   * test-gpu-integration-name
   */
  releaseName?: string;
  static names(): { [key: string]: string } {
    return {
      addonName: 'addonName',
      force: 'force',
      releaseName: 'releaseName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addonName: 'string',
      force: 'boolean',
      releaseName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

