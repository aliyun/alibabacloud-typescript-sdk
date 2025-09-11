// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ESIngestionConfigurationSource } from "./EsingestionConfigurationSource";


export class ESIngestionConfiguration extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  logstore?: string;
  /**
   * @remarks
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

