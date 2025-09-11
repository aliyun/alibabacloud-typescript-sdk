// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { KafkaIngestionConfigurationSource } from "./KafkaIngestionConfigurationSource";


export class KafkaIngestionConfiguration extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * logstore
   */
  logstore?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  source?: KafkaIngestionConfigurationSource;
  static names(): { [key: string]: string } {
    return {
      logstore: 'logstore',
      source: 'source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logstore: 'string',
      source: KafkaIngestionConfigurationSource,
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

