// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListIntegrationPolicyStorageRequirementsRequest extends $dara.Model {
  /**
   * @remarks
   * Addon Release Name
   * 
   * @example
   * release-1234357
   */
  addonName?: string;
  /**
   * @remarks
   * Name of AddonRelease.
   * 
   * @example
   * kafka-17201012937917
   */
  addonReleaseName?: string;
  /**
   * @remarks
   * Storage Type, LogStore/Prometheus/TraceStore/EventStore/EntityStore.
   * 
   * @example
   * LogStore
   */
  storageType?: string;
  static names(): { [key: string]: string } {
    return {
      addonName: 'addonName',
      addonReleaseName: 'addonReleaseName',
      storageType: 'storageType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addonName: 'string',
      addonReleaseName: 'string',
      storageType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

