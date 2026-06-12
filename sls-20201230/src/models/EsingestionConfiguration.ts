// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ESIngestionConfigurationSource } from "./EsingestionConfigurationSource";


export class ESIngestionConfiguration extends $dara.Model {
  /**
   * @remarks
   * The Logstore.
   * 
   * This parameter is required.
   * 
   * @example
   * test-logstore
   */
  logstore?: string;
  /**
   * @remarks
   * The source.
   * 
   * This parameter is required.
   */
  source?: ESIngestionConfigurationSource;
  static names(): { [key: string]: string } {
    return {
      logstore: 'logstore',
      source: 'source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logstore: 'string',
      source: ESIngestionConfigurationSource,
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

