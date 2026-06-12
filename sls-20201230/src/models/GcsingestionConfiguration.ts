// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GCSIngestionConfigurationSource } from "./GcsingestionConfigurationSource";


export class GCSIngestionConfiguration extends $dara.Model {
  /**
   * @remarks
   * The name of the destination logstore.
   * 
   * This parameter is required.
   * 
   * @example
   * myLogstore
   */
  logstore?: string;
  /**
   * @remarks
   * The data source configuration.
   * 
   * This parameter is required.
   */
  source?: GCSIngestionConfigurationSource;
  static names(): { [key: string]: string } {
    return {
      logstore: 'logstore',
      source: 'source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logstore: 'string',
      source: GCSIngestionConfigurationSource,
    };
  }

  validate() {
    if(this.source && typeof (this.source as any).validate === 'function') {
      (this.source as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

