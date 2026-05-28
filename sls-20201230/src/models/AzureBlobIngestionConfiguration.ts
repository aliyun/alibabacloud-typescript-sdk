// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AzureBlobIngestionConfigurationSource } from "./AzureBlobIngestionConfigurationSource";


export class AzureBlobIngestionConfiguration extends $dara.Model {
  /**
   * @example
   * myLogstore
   */
  logstore?: string;
  source?: AzureBlobIngestionConfigurationSource;
  static names(): { [key: string]: string } {
    return {
      logstore: 'logstore',
      source: 'source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logstore: 'string',
      source: AzureBlobIngestionConfigurationSource,
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

