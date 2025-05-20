// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ArchiveFilesConfigResponse extends $dara.Model {
  enabled?: boolean;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      enabled: 'enabled',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enabled: 'boolean',
      version: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

